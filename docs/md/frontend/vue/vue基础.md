# vue基础

## 模板语法{{}}

```javascript
<div id="app">
    <h2>{{title}}</h2>
    <p>消息：{{message}}</p>
</div>
<script>
  new Vue({
    el: "#app",
    data: {
        title:"标题",
        message:"模板语法"
    }
  });
</script>
```

v-bind(简写为:) 用于属性绑定

```javascript
<div id="app">
  <!-- 使用 v-bind 动态绑定 src 和 alt -->
  <img v-bind:src="imageSrc" v-bind:alt="imageAlt" />
  
  <!-- v-bind 的简写形式 ":" -->
  <p :title="tooltip">鼠标悬停查看提示</p>
</div>

<script src="url"></script>
<script>
  new Vue({
    el: "#app",
    data: {
      imageSrc: "url",
      imageAlt: "示例图片",
      tooltip: "这是一个动态绑定的提示信息"
    }
  });
</script>
```

## 计算属性computed()

computed 是 Vue 中的计算属性，用于根据已有数据动态计算出新的数据。它的特点是具有 缓存功能，只有当依赖的数据发生变化时，计算属性才会重新计算。

支持 get 和 set，可实现双向绑定

computed()方法期望接收一个getter函数，返回值为一个计算属性ref。

```vue
<script setup>
import { ref } from "vue";
const firstName = ref("张")
const lastName = ref("三")
const fullName = computed(() =>{
    return `${firstName.value}${lastName.value}`
})
</script>
<div>
    <p>{{fullName}}</p>
</div>
```

vue会自动追踪fullName绑定数据，更改firstName和lastName会同步更新

计算属性也可以修改，需要使用setter来创建。默认是只读的

```vue
<script setup>
const fullName = computed(() =>{
    get(){
        return `${firstName.value}${lastName.value}`
    }
    set(value){
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1] || "";
    }
})


</script>
<div>
    <p>{{fullName}}</p>
</div>
```

与方法的区别

* 计算属性：具有缓存功能，依赖的数据未变化时，返回缓存的结果。
* 方法：每次调用都会重新执行。

## watch监听

watch侦听器
在 Vue 中，侦听器（watch）用于监听数据的变化并执行特定的逻辑。它适合处理一些复杂的副作用逻辑，比如异步操作或在数据变化时执行额外的逻辑。

默认情况下，watch 只能监听数据的第一层。如果需要监听对象或数组的深层变化，需要设置 deep: true。

默认情况下，watch 只有在数据变化时才会触发。如果需要在组件初始化时立即执行，可以设置 immediate: tru

```vue
<script setup>
watch(fullName,(newValue,oldValue) =>{
    console.log(`${oldValue}变为了${newValue}`)
},
{ deep: true }//深度监听
)
//监听多个
watch([firstName, lastName], ([newFirstName, newLastName], [oldFirstName, oldLastName]) => {
  console.log(`姓从 "${oldFirstName}" 变为 "${newFirstName}"`);
  console.log(`名从 "${oldLastName}" 变为 "${newLastName}"`);
});
</script>
```

在 setup() 或 `<script setup>` 中用同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止

用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏

```javascript
const unwatch = watchEffect(() => {})//或watch 

// 当该侦听器不再需要时，调用监听器返回的函数
unwatch()
```

## 方法调用

### v-on

v-on 是 Vue 中的一个指令，用于监听 DOM 事件并执行指定的方法或表达式

v-on:事件名="方法名"，v-on 可以简写为 @

* 事件名：要监听的 DOM 事件名称（如 click、input、submit 等）。
* 方法名：在组件中定义的要执行的方法。

```vue
<script setup>
import { ref } from "vue";
const count = ref(0)
const handleClick = () =>{
    count.value++
}
</script>
<template>
    <p>{{count}}</p>
    <button @click.stop="handleClick">点击+1</button>
</template>
```

事件还可以使用修饰符处理事件行为

1. .stop 阻止事件冒泡
2. .preven 阻止默认行为
3. .capture 使用事件捕获模式
4. .self 只在事件发生在当前元素时触发
5. .once 事件只触发一次

还有键盘使用的 @keyup

* .enter：回车键
* .tab：Tab 键
* .delete：删除键
* .esc：Esc 键
* .space：空格键
* .up：方向键上
* .down：方向键下
* .left：方向键左
* .right：方向键右

### v-model

v-model 是 Vue 中的一个指令，用于在表单控件（如输入框、复选框、单选框、下拉框等）和数据之间创建双向绑定。它可以让数据和视图保持同步。

```vue
<template>
  <div>
    <input v-model="message" placeholder="请输入内容" />
    <p>你输入的内容是：{{ message }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const message=ref("")
</script>
```

v-model 绑定到 message 数据。当用户在输入框中输入内容时，message 的值会自动更新。同时，message 的值变化也会反映到输入框中。

使用的表单控件

* 文本输入框 input type="text"
* 多行文本框 textarea
* 复选框 input type="checkbox"
* 单选按钮 input type="radio"
* 下拉框 select

在自定义组件中，可以通过 v-model 实现父组件和子组件之间的双向绑定

## 条件渲染v-if/v-else

v-if 是 Vue 中的一个指令，用于根据条件动态地渲染或销毁 DOM 元素

v-if 后面跟一个表达式，当表达式为 true 时，渲染对应的元素；为 false 时，不渲染该元素。v-else 用于定义 v-if 条件为 false 时的渲染内容。

```javascript
<div>
    <p v-if="age < 18">未成年</p>
    <p v-else-if="age < 60">成年</p>
    <p v-else>老年</p>
</div>
```

v-else-if 用于为 v-if 添加多个条件分支。

## 列表渲染v-for

v-for 是 Vue 中的一个指令，用于基于一个数组或对象来渲染一组元素或组件

v-for 使用的俩种模式，遍历数组的索引，遍历对象

```javascript
<div>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{index + 1}}.{{item}}
        </li>
        <li v-for="(value, key, index) in object" :key="key">
            {{key}}.{{value}}
        </li>
    </ul>
</div>
```

1. key 的重要性：
    * key 是唯一标识，用于高效更新 DOM。
    * 如果不设置 key，Vue 会使用默认的方式更新 DOM，可能导致性能问题。
2. 避免直接修改数组：
    * 使用 Vue 提供的数组方法（如 push、splice）来修改数据，以确保视图更新。
3. v-for 和 v-if 不建议同时使用：
    * 如果需要条件渲染，建议将条件逻辑放在外层。

## 总结

组件基础(.vue)-由`<template>/<script>/<style>`构成
{{}}文本插值动态显示数据，v-bind属性绑定，v-if条件渲染处理逻辑，v-for列表遍历渲染。
v-on事件绑定处理互动，ref()响应式数据，v-model双向数据绑定
computered()缓存式计算属性，watch()监听数据变化新旧数据处理
