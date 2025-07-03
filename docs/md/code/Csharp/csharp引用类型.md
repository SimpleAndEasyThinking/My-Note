# 引用类型

关键字用于声明引用类型

* class 类
* interface 接口
* delegate 类型安全的函数指针
* record 记录
* dynamic 动态类
* object 起始类
* string 字符串

| 类型           | 设计目的                                                      | 典型场景                                  |
| -------------- | ------------------------------------------------------------- | ----------------------------------------- |
| 类（Class）    | 定义具有行为和数据的状态模型，支持继承和多态                  | 业务逻辑、复杂对象、需要继承的场景        |
| 结构（Struct） | 轻量级的值类型，通常用于小型、短暂存在的对象                  | 高性能场景（如坐标、颜色、数值包装）      |
| 记录（Record） | 不可变（immutable）的数据模型，强调值相等性（value equality） | 数据传递（DTO）、不可变配置、值语义的模型 |

## 内置引用类型

### 对象类型

主要代表 object 对象，其他内置对象类都是继承object衍生的

### 字符串类型 String

String 类型，其本质上引用类型，指向字符串常量，字符串是不可变的。但是比较运算符==和!=计算的为string对象具体值，+运算符连接字符串。[]运算符可用于只读访问字符串的个别字符

#### 原始字符串

```CSHARP
//原始字符串字面量用至少三个双引号 (""") 括起来
"""
This is a multi-line
    string literal with the second line indented.
"""
// 多行原始字符串字面量支持自带引号的字符串
var message = """
"This is a very important message."
""";
//右引号序列指示字符串字面量的最左侧列
"""
    "This is a very important message."
    """;
//将为 JSON、YAML 或 XML 等数据格式
"""
    {
        "prop": 0
    }
    """;
//@为逐字字符串 不处理转义序列 ，@ 引起来的字符串中包含双引号
@"c:\Docs\Source\a.txt ""Ahoy!"""
```

> 开头结尾引号在同一行时，字符串字面量中不能以引号字符开头，也不能以引号字符结尾

.NET 中的字符串是使用 UTF-16 编码存储的。 UTF-8 是 Web 协议和其他重要库的标准。
UTF-8编码 UTF-8 字面量存储为 `ReadOnlySpan<byte>`对象

> 要将 UTF-8 字符串字面量存储为数组，需使用 `ReadOnlySpan<T>.ToArray()` 将包含字面量的字节复制到可变数组
> UTF-8 字符串字面量不是编译时常量；而是运行时常量。 因此，不能将其用作可选参数的默认值。 UTF-8 字符串字面量不能与字符串内插结合使用。 不能对同一字符串表达式使用 $ 令牌和 u8 后缀。

### 委托类型 delegate

delegate 是一种可用于封装命名方法或匿名方法的引用类型。 类似与C++的函数指针添加了类型安全和可靠。

```csharp
Action<string> stringAction = str => {};
Action<object> objectAction = obj => {};
  
// 委托类型因变体转换而不同时，委托组合或删除将失败，并出现运行时异常
//由于隐式引用转换，objectAction到Action<string>是有效的，但可能在运行时失败。
Action<string> combination = stringAction + objectAction;

// 创建一个新的委托实例，其运行时类型为Action<string>。
Action<string> wrappedObjectAction = new Action<string>(objectAction);

// The two Action<string> delegate instances can now be combined.
Action<string> combination = stringAction + wrappedObjectAction;
```

### 动态类型 dynamic

dynamic 类型表示变量的使用和对其成员的引用绕过编译时类型检查。 改为在运行时解析这些操作。编译器不会对包含类型 dynamic 的表达式的操作进行解析或类型检查。

> 在此过程中，dynamic 类型的变量会编译为 object 类型的变量。 因此，dynamic 类型只在编译时存在，在运行时则不存在。

```csharp
dynamic dyn = 1;
object obj = 1;
//不会报告任何错误
dyn = dyn + 3;
//报告编译器错误
obj = obj + 3;
```

dynamic 类型简化了对 COM API（例如 Office Automation API）、动态 API（例如 IronPython 库）和 HTML 文档对象模型 (DOM) 的访问

## 类 class

引用类型

```CSHARP
//[访问修饰符] - [class] - [标识符名称]
class TestClass
{
    // Methods, properties, fields, events, delegates
    // and nested classes go here.
    //构造函数,常量,Fields,终结器,方法,属性,索引器,运算符,事件,委托,类,接口,结构类型,枚举类型
}
```

| 继承               | 示例                                           |
| ------------------ | ---------------------------------------------- |
| 无                 | class ClassA { }                               |
| Single             | class DerivedClass : BaseClass { }             |
| 无，实现两个接口   | class ImplClass : IFace1, IFace2 { }           |
| 单一，实现一个接口 | class ImplDerivedClass : BaseClass, IFace1 { } |

定义为 class 的类型是引用类型，`MyClass  mc`声明后改mc为null，`=new MyClass()`使用new运算符创建了myclass实例。mc变量获取到new创建变量的引用。

类成员（包括嵌套的类）可以是 public、protected internal、protected、internal、private 或 private protected。 默认情况下成员为 private

> 创建对象时，在该托管堆上为该特定对象分足够的内存。 对象使用的内存由 CLR 的自动内存管理功能（称为垃圾回收）回收。

唯一标识符的 class 关键字可以声明类，class默认修饰符为internal，类上的字段、属性、方法和事件统称为类成员。

internal 修饰符确保了类只能在同一个程序集中访问，程序集指同一个dll程序集或同一个exe程序集

### 创建对象 new

关键词new

类定义对象类型，但不是对象本身。
对象是基于类的具体实体，有时称为类的实例。

> 不建议创建不引用对象的对象引用，因为尝试通过这类引用访问对象会在运行时失败。

### 构造函数和初始化

创建类型的实例时，需要确保其字段和属性已初始化为有用的值。
可通过多种方式初始化值：

* 接受默认值.每个 .NET 类型都有一个默认值。对于数字类型，该值为 0，对于所有引用类型，该值为 null。
* 字段初始化表达式。字段初始化表达式设置初始值`private int _capacity = 10;`
* 构造函数参数。`public Container(int capacity) => _capacity = capacity;`
* 对象初始值设定项

required 修饰符,允许调用方使用对象初始值设定项来设置该属性的初始值

```csharp
public class Person
{
    public required string FirstName { get; set; }
}
```

FirstName属性在对象初始化时，必须设定值。`new Person() { FirstName = "Grace"};`

### 类继承

类完全支持继承，这是面向对象的编程的基本特点。

继承是通过使用派生来完成的，类声明包括基类时，它会继承基类除构造函数外的所有成员。

```csharp
public class Manager : Employee
{
    // Employee父类 fields, properties, methods and events are inherited
    // New Manager fields, properties, methods and events go here...
}
```

C# 中的类只能直接从基类继承。 但是，因为基类本身可能继承自其他类，因此类可能间接继承多个基类。 此外，类可以支持实现一个或多个接口。

关键词为 abstract，声明抽象类，包含抽象方法，抽象方法

抽象类不能实例化。 只能通过可实现抽象方法的派生类来使用该类。 与此相反，密封类不允许其他类继承。

## 接口 interface

实现接口的任何 class、record或struct必须提供接口中定义的成员的实现。

定义静态static成员，可以提供常见功能。

关键词 virtual 虚函数与虚基类

* C#不支持类的多重继承，多重继承就必须使用接口
* 包含实例方法、属性、事件、索引器
* 包含静态构造函数、字段、常量或运算符
* 不能包含实例字段、实例构造函数或终结器
* private 成员必须有默认实现
* 实现类的对应成员必须是公共、非静态，并且具有与接口成员相同的名称和签名
* 基类实现接口，从基类派生的任何类都会继承该实现
* 接口可从一个或多个接口继承

> 当接口声明静态成员时，实现该接口的类型也可能声明具有相同签名的静态成员。 它们是不同的，并且由声明**成员的类型唯一标识**。 在类型中声明的静态成员不会覆盖接口中声明的静态成员

```CSHARP
interface IEquatable<T>
{
    bool Equals(T obj);
}
//实现 IEquatable<T> 接口的任何类或结构都必须包含与该接口指定的签名匹配的 Equals 方法的定义

public class Car : IEquatable<Car>
{
    public string? Make { get; set; }
    public string? Model { get; set; }
    public string? Year { get; set; }

    // Implementation of IEquatable<T> interface
    public bool Equals(Car? car)
    {
        return (this.Make, this.Model, this.Year) ==
            (car?.Make, car?.Model, car?.Year);
    }
}
```

## 记录 record

可使用 record 修饰符定义一个引用类型，用来提供用于封装数据的内置功能。

* record class 语法用作等价符号以标识引用类型
* record struct 则用于定义一种具有类似功能的 值类型

关键词record 修饰符指示编译器合成对主要用于存储数据的类型有用的成员。

记录常用方法：

* 定义一个数据模型，该模型依赖于 值相等。
* 定义对象不可变的类型。

记录类型提供以下功能

* 用于创建具有**不可变属性**的引用类型的简明语法
* 内置行为对于以数据为中心的引用类型非常有用：
  * 值相等性
  * 非破坏性变化的简明语法
* 用于显示的内置格式设置
* 支持继承层次结构

### 属性和字段定义

```csharp
public record Person(string FirstName, string LastName);

public static void Main()
{
    Person person = new("Nancy", "Davolio");
    Console.WriteLine(person);
    // output: Person { FirstName = Nancy, LastName = Davolio }
}
```

为属性定义使用位置语法时，编译器将创建以下内容：

* 记录声明中提供的每个位置参数的公共自动实现属性
  * 对于 record 和 readonly record struct 类型，为 record 属性
  * 对于 record struct 类型，为读写属性
* 主构造函数，它的参数与记录声明上的**位置参数**匹配
* 对于 record struct 类型，则是将每个字段设置为其默认值的无参数构造函数
* 一个 Deconstruct 方法，对记录声明中提供的每个位置参数都有一个 out 参数。 此方法解构了使用位置语法定义的属性；它忽略了使用标准属性语法定义的属性。

### 值相等性

值相等性：类型匹配且所有属性和字段值相等，则记录类型的两个变量相等。
对于引用类型，引用同一对象时，引用相等。并非所有数据模型都能很好地处理值相等性。

* 对于 class 类型，如果两个对象引用内存中的同一对象，则这两个对象相等。
* 对于 struct 类型，如果两个对象是相同的类型并且存储相同的值，则这两个对象相等。
* 对于具有 record 修饰符（record class、record struct 和 readonly record struct）的类型，如果两个对象是相同的类型并且存储相同的值，则这两个对象相等。

```csharp
public record Person(string FirstName, string LastName, string[] PhoneNumbers);

public static void Main()
{
    var phoneNumbers = new string[2];
    Person person1 = new("Nancy", "Davolio", phoneNumbers);
    Person person2 = new("Nancy", "Davolio", phoneNumbers);
    Console.WriteLine(person1 == person2); // output: True

    person1.PhoneNumbers[0] = "555-1234";
    Console.WriteLine(person1 == person2); // output: True

    Console.WriteLine(ReferenceEquals(person1, person2)); // output: False
}
```

### 非破坏性变化

with关键字 创建一个新的记录实例，该实例是现有记录实例的一个副本，修改了指定属性和字段

with 表达式的结果是一个浅的副本，引用属性只复制对实例的引用。 原始记录和副本最终都具有对同一实例的引用

```csharp
public record Person(string FirstName, string LastName)
{
    public string[] PhoneNumbers { get; init; }
}

public static void Main()
{
    Person person1 = new("Nancy", "Davolio") { PhoneNumbers = new string[1] };
    Console.WriteLine(person1);
    // output: Person { FirstName = Nancy, LastName = Davolio, PhoneNumbers = System.String[] }
    
    //使用with创建person1 的副本 更改FirstName PhoneNumbers的引用时相同实例
    Person person2 = person1 with { FirstName = "John" };
    Console.WriteLine(person2);
    // output: Person { FirstName = John, LastName = Davolio, PhoneNumbers = System.String[] }
    Console.WriteLine(person1 == person2); // output: False

    //person2 引用 使用with创建person1 的副本 更改PhoneNumbers字符串的引用 
    person2 = person1 with { PhoneNumbers = new string[1] };
    Console.WriteLine(person2);
    // output: Person { FirstName = Nancy, LastName = Davolio, PhoneNumbers = System.String[] }
    Console.WriteLine(person1 == person2); // output: False

    // person2 引用 使用with创建person1 的副本 无更改
    person2 = person1 with { };
    Console.WriteLine(person1 == person2); // output: True
}
```

### 继承

本部分仅适用于 record class 类型。
一条记录可以从另一条记录继承。 但是，记录不能从类继承，类也不能从记录继承。

派生记录类型中的位置参数

```CSHARP
//抽象记录
public abstract record Person(string FirstName, string LastName);
//继承Person记录
public record Teacher(string FirstName, string LastName, int Grade)
    : Person(FirstName, LastName);
public static void Main()
{
    //多态
    Person teacher = new Teacher("Nancy", "Davolio", 3);
    Console.WriteLine(teacher);
    // output: Teacher { FirstName = Nancy, LastName = Davolio, Grade = 3 }
}
```

继承层次结构中的相等性

个记录变量相等，运行时类型必须相等。 包含变量的类型可能不同。

```CSHARP
//父记录
public abstract record Person(string FirstName, string LastName);
//继承Person
public record Teacher(string FirstName, string LastName, int Grade)
    : Person(FirstName, LastName);
//继承Person
public record Student(string FirstName, string LastName, int Grade)
    : Person(FirstName, LastName);
public static void Main()
{
    Person teacher = new Teacher("Nancy", "Davolio", 3);
    Person student = new Student("Nancy", "Davolio", 3);
    //值相等，类型不等 false
    Console.WriteLine(teacher == student); // output: False
    //类型相等，值相等 true
    Student student2 = new Student("Nancy", "Davolio", 3);
    Console.WriteLine(student2 == student); // output: True
}
```

派生记录中的 with 表达式

```CSHARP
//父记录
public record Point(int X, int Y)
{
    public int Zbase { get; set; }
};
//继承Point
public record NamedPoint(string Name, int X, int Y) : Point(X, Y)
{
    public int Zderived { get; set; }
};

public static void Main()
{
    Point p1 = new NamedPoint("A", 1, 2) { Zbase = 3, Zderived = 4 };

    Point p2 = p1 with { X = 5, Y = 6, Zbase = 7 }; // 无法设置 Name or Zderived
    Console.WriteLine(p2 is NamedPoint);  // output: True
    Console.WriteLine(p2);
    // output: NamedPoint { X = 5, Y = 6, Zbase = 7, Name = A, Zderived = 4 }

    Point p3 = (NamedPoint)p1 with { Name = "B", X = 5, Y = 6, Zbase = 7, Zderived = 8 };
    Console.WriteLine(p3);
    // output: NamedPoint { X = 5, Y = 6, Zbase = 7, Name = B, Zderived = 8 }
}
```

### 泛型约束

record 关键字是 class 或 struct 类型的修饰符。 添加 record 修饰符包括本文前面所述的行为。 **没有任何泛型约束要求类型是记录**。 record class 满足 class 约束。 record struct 满足 struct 约束。
