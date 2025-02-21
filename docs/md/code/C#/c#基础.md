
# c#基础

* C# 语言是适用于 [.NET](https://learn.microsoft.com/zh-cn/dotnet/csharp/) 平台（免费的跨平台开源开发环境）的最流行语言。
* C# 在生态系统和所有 .NET [工作负载](https://learn.microsoft.com/zh-cn/dotnet/standard/glossary#workload)中具有广泛的支持。
* 基于面向对象的原则，它融合了其他范例中的许多功能，尤其是函数编程。
* 大多数 .NET 运行时和库都是用 C# 编写的

```csharp
using System;

class Hello
{
    static void Main()
    {
        // This line prints "Hello, World" 
        Console.WriteLine("Hello, World");
    }
}
```

“Hello, World”程序始于引用 `System` 命名空间的 `using` 指令。由于使用 `using` 指令，因此程序可以使用 `Console.WriteLine` 作为 `System.Console.WriteLine` 的简写，该命名空间是[隐式](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/using-directive#the-global-modifier)包含的。
