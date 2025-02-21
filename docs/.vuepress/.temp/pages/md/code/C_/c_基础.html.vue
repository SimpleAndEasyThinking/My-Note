<template><div><h1 id="c-基础" tabindex="-1"><a class="header-anchor" href="#c-基础"><span>c#基础</span></a></h1>
<ul>
<li>C# 语言是适用于 <a href="https://learn.microsoft.com/zh-cn/dotnet/csharp/" target="_blank" rel="noopener noreferrer">.NET</a> 平台（免费的跨平台开源开发环境）的最流行语言。</li>
<li>C# 在生态系统和所有 .NET <a href="https://learn.microsoft.com/zh-cn/dotnet/standard/glossary#workload" target="_blank" rel="noopener noreferrer">工作负载</a>中具有广泛的支持。</li>
<li>基于面向对象的原则，它融合了其他范例中的许多功能，尤其是函数编程。</li>
<li>大多数 .NET 运行时和库都是用 C# 编写的</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre v-pre><code><span class="line"><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Hello</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// This line prints "Hello, World" </span></span>
<span class="line">        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Hello, World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“Hello, World”程序始于引用 <code v-pre>System</code> 命名空间的 <code v-pre>using</code> 指令。由于使用 <code v-pre>using</code> 指令，因此程序可以使用 <code v-pre>Console.WriteLine</code> 作为 <code v-pre>System.Console.WriteLine</code> 的简写，该命名空间是<a href="https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/using-directive#the-global-modifier" target="_blank" rel="noopener noreferrer">隐式</a>包含的。</p>
</div></template>


