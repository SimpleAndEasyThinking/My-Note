# 值类型

## 整型数值类型

所有整型默认值为0，每个整型类型都有 MinValue 和 MaxValue 常量属性。

| C#  类型/关键字 | 范围                                                    | 大小                       | .NET 类型      |
| --------------- | ------------------------------------------------------- | -------------------------- | -------------- |
| sbyte           | -128 到 127                                             | 8 位带符号整数             | System.SByte   |
| byte            | 0 到 255                                                | 无符号的 8 位整数          | System.Byte    |
| short           | -32,768 到 32,767                                       | 有符号 16 位整数           | System.Int16   |
| ushort          | 0 到 65,535                                             | 无符号 16 位整数           | System.UInt16  |
| int             | -2,147,483,648 到 2,147,483,647                         | 带符号的 32 位整数         | System.Int32   |
| uint            | 0 到 4,294,967,295                                      | 无符号的 32 位整数         | System.UInt32  |
| long            | -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807 | 64 位带符号整数            | System.Int64   |
| ulong           | 0 到 18,446,744,073,709,551,615                         | 无符号 64 位整数           | System.UInt64  |
| nint            | 取决于（在运行时计算的）平台                            | 带符号的 32 位或 64 位整数 | System.IntPtr  |
| nuint           | 取决于（在运行时计算的）平台                            | 无符号的 32 位或 64 位整数 | System.UIntPtr |

> 在除最后两行之外的所有表行中，最左侧列中的每个 C# 类型关键字都是相应 .NET 类型的别名。 关键字和 .NET 类型名称是可互换的。表的最后两行中的 nint 和 nuint 类型是本机大小的整数.

整型文本：

* 十进制：不使用任何前缀
* 十六进制：使用 0x 或 0X 前缀
* 二进制：使用 0b 或 0B 前缀

若要在运行时获取本机大小的整数大小，可以使用 sizeof(nint)。 但是，必须在不安全的上下文中编译代码。（静态 IntPtr.Size 和 UIntPtr.Size 属性）

## 浮点数值类型

每个浮点类型的默认值都为零，0。 每个浮点类型都有 MinValue 和 MaxValue 常量，

| C# 类型/关键字 | 大致范围                       | 精度              | 大小      | .NET 类型      |
| -------------- | ------------------------------ | ----------------- | --------- | -------------- |
| float          | ±1.5 x 10−45 至 ±3.4 x 1038    | 大约 6-9 位数字   | 4 个字节  | System.Single  |
| double         | ±5.0 × 10−324 到 ±1.7 × 10308  | 大约 15-17 位数字 | 8 个字节  | System.Double  |
| decimal        | ±1.0 x 10-28 至 ±7.9228 x 1028 | 28-29 位          | 16 个字节 | System.Decimal |

当所需的精度由小数点右侧的位数决定时，decimal 类型是合适的。 此类数字通常用于财务应用程序、货币金额（例如 $1.00）、利率（例如 2.625%）等。

十进制数据使用 double 或 float 时，计算可能会出错，但当优化性能比确保准确度更重要时，就需要用 double 代替 decimal。

将整型类型与 float 和 double 类型混合使用功能，存在隐形转换。不能在表达式中将 decimal 类型与 float 和 double 类型混合使用。

浮点文本类型：

* 不带后缀的文本或带有 d 或 D 后缀的文本的类型为 double
* 带有 f 或 F 后缀的文本的类型为 float
* 带有 m 或 M 后缀的文本的类型为 decimal

## bool

bool 类型关键字是 .NET System.Boolean 结构类型的别名，它表示一个布尔值，可为 true 或 false。默认值为 false。

如需支持三值逻辑（例如，在使用支持三值布尔类型的数据库时），请使用可为空 bool? 类型。 对于 bool? 操作数，预定义的 & 和 | 运算符支持三值逻辑。

## char

char 类型关键字是 .NET System.Char 结构类型的别名，它表示 Unicode UTF-16 字符，范围 U+0000 到 U+FFFF 大小16 位。

char 类型的默认值为 \0，即 U+0000。

char文本类型

* 字符文本。
* Unicode 转义序列，它是 \u 后跟字符代码的十六进制表示形式（四个符号）。
* 十六进制转义序列，它是 \x 后跟字符代码的十六进制表示形式。

## enum

类型 是由基础整型数值类型的一组命名常量定义的值类型。枚举成员的关联常数值为类型 int。默认从零开始，并按定义文本顺序递增 1。也可以直接初始化关联常量。

可以显式指定任何其他整数数值类型作为枚举类型的基础类型。 还可以显式指定关联的常数值

```csharp
//修饰词 标识名 整型类型
enum ErrorCode : ushort
{
    //不能定义方法
    None = 0,
    Unknown = 1,
    ConnectionLost = 100,
    OutlierReading = 200
}

Console.WriteLine(ErrorCode.Unknown);  // output: Unknown
```

> 枚举类型 E 的默认值是由表达式 (E)0 生成的值，即使零没有相应的枚举成员也是如此。

System.Enum 类型是所有枚举类型的抽象基类

枚举类型可作为位运算标志，直接使用`|`或者`&`,

## struct

struct 关键词，可封装数据和相关功能的值类型。
override 关键词，重写基类方法

```csharp
//不可变构造类型
public readonly struct Coords
{
    //构造函数
    public Coords(double x, double y)
    {
        X = x;
        Y = y;
    }
    //默认值构造函数，
    public Coords()
    {
        X = 1;
        Y = 2;
    }
    //get 定义值可读，init仅可初始化，属性将变为不可修改
    public double X { get; init; }
    public double Y { get; init; }
    //override: 表示重写基类，$ 符号允许直接在字符串中嵌入变量 {X} 和 {Y}，编译器会自动替换为它们的值。
    public override string ToString() => $"({X}, {Y})";
}
```

> 由于结构类型具有值语义，因此建议定义不可变的结构类型

readonly 修饰符来声明结构类型为不可变。 readonly 结构的所有数据成员都必须是只读的，可使用 readonly 修饰符标记不会修改结构状态的实例成员。

* 任何字段声明都必须具有 readonly 修饰符。
* 任何属性（包括自动实现的属性）都必须是只读的，或者是 init 只读的。 C# 版本 9 开始可用。

with 表达式来生成修改了指定属性和字段的结构类型实例的副本

```Csharp
public static void Main()
{
    var p1 = new Coords(0, 0);
    Console.WriteLine(p1);  // output: (0, 0)

    var p2 = p1 with { X = 3 };
    Console.WriteLine(p2);  // output: (3, 0)

    var p3 = p1 with { X = 1, Y = 4 };
    Console.WriteLine(p3);  // output: (1, 4)
    //默认值表达式忽略了无参数构造函数，并生成了结构类型的默认值
    //默认值的最常见情况是在数组中或内部存储包含变量块的其他集合，大量初始化
    var p4 = default(Coords);
    Console.WriteLine(p4);  // output: (0, 0)
}
```

record 关键词 记录结构类型

> 你可以定义记录结构类型。 记录类型提供用于封装数据的内置功能。 可同时定义 record struct 和 readonly record struct 类型。 记录结构不能是 ref struct。

**内联数组**是固定大小的数组，具有以下特征的 struct：

* 它包含单个字段。
* 结构未指定显式布局。
* 其内存直接内联在结构体（struct）中，而非通过堆分配，高性能

```Csharp
[System.Runtime.CompilerServices.InlineArray(10)] //定义长度为10的数组
public struct CharBufferWithPointer
{
    //内联数组的单个字段的类型有最小的限制。 它不能是指针类型
    private unsafe char* _pointerElement;    // CS9184
    //可以是任何引用类型，也可以是任何值类型，实际存储的字段
    private string _referenceElement;
}
```

> 如果结构类型的所有实例字段都是可访问的，则还可以在不使用 new 运算符的情况下对其进行实例化。 在这种情况下，在首次使用实例之前必须初始化所有实例字段

结构类型的设计限制：

* 结构类型不能从其他类或结构类型继承，也不能作为类的基础类型。 但是，结构类型可以实现接口。
* 不能在结构类型中声明终结器。
* 在 C# 11 之前，结构类型的构造函数必须初始化该类型的所有实例字段。

## ref 构造类型

ref struct 类型的实例是在堆栈上分配的，不能转义到托管堆，特性：

* struct 不能是数组的元素类型。
* ref struct 不能是类或非 ref struct 的字段的声明类型。
* ref struct 不能被装箱为 System.ValueType 或 System.Object。
* ref struct 变量不能在 Lambda 表达式或本地函数中捕获。

* 在 C# 13 之前， ref struct 无法在方法中使用 async 变量。 从 C# 13 开始，ref struct 变量不能在 await 方法中和 async 表达式用于相同的块。 但是，可以在同步方法中使用 ref struct 变量，例如，在返回 Task 或 `Task<TResult>`的方法中。
* 在 C# 13 之前，ref struct 变量不能在迭代器中使用。 从 C# 13 开始，ref struct 类型和 ref 局部变量可以在迭代器中使用，前提是它们不在代码段中具有 yield return 语句。
* 在 C# 13 之前，ref struct 无法实现接口。 从 C# 13 开始，ref 结构可实现接口，但必须遵循 ref 安全性规则。 例如，由于需要装箱转换，因此无法将 ref struct 类型转换为接口类型。
* 在 C# 13 之前，ref struct 不能是类型参数。 从 C# 13 开始，ref struct 可以是类型参数（当该类型参数在其 allows ref struct 子句中指定 where 时）。

| 特性           | ref struct               | 普通 struct                |
| -------------- | ------------------------ | -------------------------- |
| 内存位置       | 只能存在于栈             | 可以存在于栈或堆（如装箱） |
| 作为类的字段   | 禁止                     | 允许                       |
| 泛型类型参数   | 禁止                     | 允许                       |
| 异步方法中使用 | 禁止                     | 允许                       |
| 性能优化       | 避免堆分配，减少 GC 压力 | 可能因装箱导致堆分配       |

和 readonly 配合使用：

* readonly ref：只能在构造函数或 = ref中使用 init 运算符通过 ref 重新赋值此类字段。 可以在字段访问修饰符允许的任何时间点使用 = 运算符分配值。
* ref readonly：在任何时候，都不能使用 = 运算符为此类字段赋值。 但是，可以使用 = ref 运算符通过 ref 重新赋值字段。
* readonly ref readonly：只能在构造函数或 init 访问器中通过 ref 重新赋值此类字段。 在任何时候，都不能为字段赋值。

> 可释放模式，可以定义一次性的 ref struct

实现接口的ref Struct类型，

* 多态不能实现——无法将 ref struct 转换为它实现的接口的实例。
* 实现接口 的 ref struct 必须 实现所有实例接口成员。

## 元组

元组功能提供了简洁的语法来将多个数据元素分组成一个轻型数据结构

```Csharp
//浮点型，整型组成的
(double, int) t1 = (4.5, 3);
//显示指定元组字段名称
(double Sum, int Count) t2 = (4.5, 3);
Console.WriteLine($" {t1.Item1} and {t1.Item2}.");
Console.WriteLine($"{t2.Count} and {t2.Sum}.");
// Output:
// 4.5 and 3.
// 3 and 4.5
var sum = 4.5;
var count = 3;
var t = (sum, count);
//输出同t2

```

* 元组可以使用.NET 提供的方法
* 支持相等运算符 == 和 !=
* 元组类型是值类型
  * 元组赋值和元组相等比较不会考虑名称
* 可以显式指定元组字段名称
  * 元组字段的默认名称为 Item1、Item2、Item3
* 元组投影初始值设定项
  * 候选名称是元组类型的成员名称，例如 Item3、ToString 或 Rest。
  * 候选名称是另一元组的显式或隐式字段名称的重复项。

元组最常见的用法——方法返回类型，可以返回多个值————out参数，使用元组作为返回的out参数

关键词 global 命名类型名称

```Csharp
//该元组类型的别名/同义词
global using BandPass = (int Min, int Max);
// 使用BandPass 名称
BandPass bracket = (40, 100);// {bracket.Min} 40 {bracket.Max} 100
//再次声明元组的别名
using Range = (int Minimum, int Maximum);
//赋值时字段名称不需要进行匹配，只有类型和 arity 需要进行匹配。
Range r = bracket;
```

赋值条件：

* 两个元组类型有相同数量的元素
* 对于每个元组位置，右侧元组元素的类型与左侧相应的元组元素的类型相同或可以隐式转换为左侧相应的元组元素的类型

```CSHARP
var t = ("post office", 3.6);
//使用 var 关键字来声明隐式类型化变量,并让编译器推断其类型
var (destination, distance) = t;
//显式声明每个变量的类型
(string destination, double distance) = t;
//显式声明一些类型，隐式声明其他类型（使用 var）
(var destination, double distance) = t;
//使用现有变量
var destination = string.Empty;
var distance = 0.0;
(destination, distance) = t;
```

元组类型支持 == 和 != 运算符,运算符按照元组元素的顺序将左侧操作数的成员与相应的右侧操作数的成员进行比较

* 两个元组具有相同数量的元素。
  * 例如，如果 t1 和 t2 具有不同数目的元素，t1 != t2 则不会进行编译。
* 对于每个元组位置，可以使用 == 和 != 运算符对左右侧元组操作数中的相应元素进行比较。
  * 例如，(1, (2, 3)) == ((1, 2), 3) 不会进行编译，因为 1 不可与 (1, 2) 比较。
* == 和 != 运算符将以短路方式对元组进行比较。 也就是说，一旦遇见一对不相等的元素或达到元组的末尾，操作将立即停止。 但是，在进行任何比较之前，将对所有元组元素进行计算，

> System.ValueTuple 类型支持的 C# 元组不同于 System.Tuple 类型表示的元组。 主要区别如下：
>
> * System.ValueTuple 类型是值类型。 System.Tuple 类型是引用类型。
> * System.ValueTuple 类型是可变的。 System.Tuple 类型是不可变的。
> * System.ValueTuple 类型的数据成员是字段。 System.Tuple 类型的数据成员是属性。

## 可为空的值类型

T?  拥有其基础值类型 T 的所有值及额外的 null 值

> 需要表示基础值类型的未定义值时，通常使用可为空的值类型。

```CSHARP
//值类型可隐式转换为相应的可为空的值类型
int m2 = 10;
int? m = m2;
//可分配 null 值
bool? flag = null;

// 可空值类型的数组:
int?[] arr = new int?[10];

int? a = 42;
//同时检查null值和类型
a is int valueOfA //True

int? b = 10;
b.HasValue  //True
```

只读属性来检查和获取:

* `Nullable<T>.HasValue` 指示可为空值类型的实例是否有基础类型的值。
* 如果 HasValue 为 true，则 `Nullable<T>.Value` 获取基础类型的值。 如果 HasValue 为 false，则 Value 属性将引发 InvalidOperationException。

可为空值类型的值分配给不可以为 null 的值类型变量, Null 合并操作符`??`执行此操作

```CSHARP
int? a = 28;
int b = a ?? -1; // output: b is 28

int? c = null;
int d = c ?? -1;// output: d is -1

//显性转换
int n2 = (int)c; 
```

> 可为空的值类型的值为 null，则显式强制转换将抛出 InvalidOperationException

### 运算符

```CSHARP
//二元运算符
int? a = 10;
int? b = null;
int? c = 10;
//一个或全部两个操作数为 null，为null
a++;        // a is 11
a = a * c;  // a is 110
a = a + b;  // a is null

//一个或全部两个操作数都为 null，则结果为 false
int? a = 10;
Console.WriteLine($"{a} >= null is {a >= null}");
Console.WriteLine($"{a} < null is {a < null}");
Console.WriteLine($"{a} == null is {a == null}");
// Output:
// 10 >= null is False
// 10 < null is False
// 10 == null is False

int? b = null;
int? c = null;
Console.WriteLine($"null >= null is {b >= c}");
Console.WriteLine($"null == null is {b == c}");
// Output:
// null >= null is False
// null == null is True  
```

> 对于 bool? 类型，预定义的 & 和 | 运算符不遵循此部分中描述的规则：即使其中一个操作数为 null，运算符计算结果也可以不为 NULL。

### 装箱和类型判断

实例 T?装箱时HasValue值：

* 如果 HasValue 返回 false，则生成空引用。
* 如果 HasValue 返回 true，则基础值类型 T 的对应值将装箱，而不对 `Nullable<T>` 的实例进行装箱

```Csharp

int a = 41;
object aBoxed = a;//装箱
int? aNullable = (int?)aBoxed;//取消装箱
object aNullableBoxed = aNullable;//装箱的是基础类型

//实例 `System.Type`  指定类型参数 T 的 `System.Nullable<T> `类型

//运算符typeof,来创建 System.Type 实例
int? a = 17;

Type typeOfA = a.GetType();
Console.WriteLine(typeOfA.FullName);

a = Null; 
//a将装箱到 Object
Type typeOfA = a.GetType();
//GetType方法将会返回System.Int32

//无法使用 is 运算符区分可为空值类型实例的类型与其基础类型实例
a is int
// Output:
// true

int b = 17;
b is int?
// Output:
// true
```

> 此部分中所述的方法不适用于可为空的引用类型的情况
