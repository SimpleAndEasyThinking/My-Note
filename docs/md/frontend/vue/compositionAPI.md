# compositionAPI

## ref()和reactive()

ref 适合处理基本类型（如 number、string、boolean）
reactive 适合处理复杂数据结构（如对象和数组）

### ref()基本类型和对象

ref 依赖追踪的响应式系统，当组件首次被渲染时会追踪其中的每个ref。其中一个ref被修改时，就会重新渲染。

访问或修改值时需要通过 .value属性，也给予了vue检测ref被访问或修改，对象内部属性不是深层响应式

ref()在模板(template)中使用ref时，不需要附加.value，ref会自动解包

```vue
<script setup>
import { ref } from "vue";

//ref基础属性
const message = ref("");
//ref对象
const obj = ref({
    count: 0,
})
const objText = () =>({
    obj.value.count++
})
</script>
<template>
  <input v-model="message" placeholder="请输入内容" />
  <p>你输入的内容是：{{ message }}</p>
  <p>{{obj.count}}</p>
</template>
```

### reactive()对象响应式

直接访问属性，无需 .value，reactive 会对对象的所有嵌套属性进行深层响应式处理

行为和普通对象一样，但vue能够拦截对响应式对象所有属性的访问和修改来触发更新。

```vue
<script setup>
import { ref,reactive } from "vue";

//reactive对象
const obj = reactive({
    count: 0,
})
</script>
<template>
  <p>{{obj.count}}</p>
</template>
```

### toRefs()解构保持响应性

基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值

```vue
<script setup>
import { ref,reactive,toRefs } from "vue";

//reactive对象
const obj = reactive({
    count: 0,
    message:""
})
//toRefs() -将reactive对象解构为ref
const {count,message} = toRefs(obj)

</script>
<template>
  <p>{{count}}</p>
  <p>{{message}}</p>
</template>
```

## 组合式函数

“组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用有状态逻辑的函数

多个组件中复用这个相同的逻辑,可以把这个逻辑以一个组合式函数的形式提取到外部文件

组合式函数约定用驼峰命名法命名，并以“use”作为开头

```javascript
import { ref, onMounted, onUnmounted } from 'vue'

// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = ref(0)
  const y = ref(0)

  // 组合式函数可以随时更改其状态。
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // 通过返回值暴露所管理的状态
  return { x, y }
}
```

使用mouse组合函数获取鼠标位置

```vue
<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

处理参数 ref 或 getter ，可以使用toValue(maybeRefOrGetter)的方式转换

## 生命周期钩子onMounted()等

Vue 的响应式系统是单向的：数据变化会触发视图更新，但视图更新不会反过来修改数据

| 钩子函数 | 触发时机 | 使用建议 |
| ---- | ---- |
| onBeforeMount | 组件挂载到 DOM 之前调用| |
| onMounted | 组件挂载到 DOM 后调用| 加载数据和设置事件监听等 |
| onBeforeUpdate | 组件更新前调用（数据变化触发）|  |
| onUpdated|组件更新后调用| 常用，记录更新日志 |
| onBeforeUnmount | 组件卸载前调用|  |
| onUnmounted |组件卸载后调用| 常用，钩子中清理副作用（如事件监听、定时器 |

> 生命周期钩子onUpdated 和onMounted中修改响应式数据会导致循环依赖

### 清理副作用

最好的例子

```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

//响应式
const count = ref(0);
//常规变量
let timer;

// 在组件挂载时启动定时器
onMounted(() => {
  //初始化
  timer = setInterval(() => {
    count.value++; // 修改响应式数据，触发视图更新
  }, 1000);
});

// 在组件卸载时清理定时器
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div>
    <p>计数：{{ count }}</p>
  </div>
</template>
```

异步数据加载
