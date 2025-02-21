import{_ as n,c as a,a as e,o as l}from"./app-DyLo7YyT.js";const i={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="shell编程" tabindex="-1"><a class="header-anchor" href="#shell编程"><span>shell编程</span></a></h1><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制"><span>流程控制</span></a></h2><h3 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句"><span>if语句</span></a></h3><p>1。单分支if条件语句</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">if<span class="token punctuation">[</span>条件判断式<span class="token punctuation">]</span><span class="token punctuation">;</span>then.</span>
<span class="line">    程序</span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line">    或者</span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span>条件判断式<span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">then</span> </span>
<span class="line">    程序</span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line">else语句</span>
<span class="line">   <span class="token keyword">else</span></span>
<span class="line">        条件不成立时，执行的另一个程序</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2。多分支if条件语句</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断式1 <span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">then</span></span>
<span class="line">    当条件判断式1成立时，执行程序1</span>
<span class="line"><span class="token keyword">elif</span> <span class="token punctuation">[</span> 条件判断式2 <span class="token punctuation">]</span></span>
<span class="line">     <span class="token keyword">then</span> </span>
<span class="line">    当条件判断式2成立时，执行程序2</span>
<span class="line"><span class="token punctuation">..</span>.省略更多条件…</span>
<span class="line">    <span class="token keyword">else</span></span>
<span class="line">    当所有条件都不成立时，最后执行此程序</span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="case语句" tabindex="-1"><a class="header-anchor" href="#case语句"><span>case语句</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token keyword">case</span> $变量名 <span class="token keyword">in</span></span>
<span class="line">值1<span class="token punctuation">)</span></span>
<span class="line">    如果变量的值等于值1，则执行程序1</span>
<span class="line">    <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">值2<span class="token punctuation">)</span></span>
<span class="line">    如果变量的值等于值2，则执行程序2</span>
<span class="line">    <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">…省略其他分支…</span>
<span class="line">*<span class="token punctuation">)</span></span>
<span class="line">    如果变量的值都不是以上的值，则执行此程序</span>
<span class="line">    <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">esac</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for语句" tabindex="-1"><a class="header-anchor" href="#for语句"><span>for语句</span></a></h3><p>方法一</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token keyword">for</span> 变量 <span class="token keyword">in</span> 值1 值2 值3 <span class="token punctuation">..</span>.</span>
<span class="line">   <span class="token keyword">do</span></span>
<span class="line">    程序</span>
<span class="line">   <span class="token keyword">done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> 初始值<span class="token punctuation">;</span>循环控制条件<span class="token punctuation">;</span>变量变化 <span class="token punctuation">))</span></span></span>
<span class="line">    <span class="token keyword">do</span></span>
<span class="line">    程序</span>
<span class="line">    <span class="token keyword">done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while语句和until语句" tabindex="-1"><a class="header-anchor" href="#while语句和until语句"><span>while语句和until语句</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token keyword">while</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">do</span></span>
<span class="line">    程序</span>
<span class="line">    <span class="token keyword">done</span></span>
<span class="line">while是条件成立就执行程序，until是条件不成立就执行程序</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跳出循环" tabindex="-1"><a class="header-anchor" href="#跳出循环"><span>跳出循环</span></a></h3><p>break 命和continue</p><h2 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断"><span>条件判断</span></a></h2><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h2><blockquote><p>正则表达式用来在文件中匹配符合条件的字符串，正则是包含匹配。grep、 awk、sed等命令可以支持正则表达式。 通配符用来匹配符合条件的文件名，通配符是完全匹配。ls、 find、 cp这些命令不支持正则表达式，所以只能使用shell自己的通配符来进行匹配了</p></blockquote><h2 id="字符处理" tabindex="-1"><a class="header-anchor" href="#字符处理"><span>字符处理</span></a></h2><h3 id="排序命令sort" tabindex="-1"><a class="header-anchor" href="#排序命令sort"><span>排序命令sort</span></a></h3><p>[root@localhost ~]# sort [选项]文件名 选项: -f 忽略大小写 -n 以数值型进行排序，默认使用字符串型排序 -1 反向排序 -t 指定分隔符，默认是分隔符是制表符 -k n[,m] 按照指定的字段范围排序。从第n字段开始，m字段结束(默认到行尾)</p><h3 id="统计命令wc" tabindex="-1"><a class="header-anchor" href="#统计命令wc"><span>统计命令WC</span></a></h3><p>[root@localhost ~]# wc [选项]文件名 选项: -l 只统计行数 -W 只统计单词数 -m 只统计字符数</p><h3 id="字符截取或处理命令" tabindex="-1"><a class="header-anchor" href="#字符截取或处理命令"><span>字符截取或处理命令</span></a></h3><h4 id="grep命令-查找行" tabindex="-1"><a class="header-anchor" href="#grep命令-查找行"><span>grep命令-查找行</span></a></h4><p>[root@localhost ~]# grep [选项] &quot;搜索内容&quot; 文件名 选项: -i：忽略大小写 -n：输出行号 -V：反向查找 --color= auto：搜索出的关键字用颜色显示</p><h4 id="cut命令-查找列" tabindex="-1"><a class="header-anchor" href="#cut命令-查找列"><span>cut命令-查找列</span></a></h4><p>[root@localhost ~]# cut [选项]文件名 选项: -f列号：提取第几列 -d分隔符：按照指定分隔符分割列 无法使用复杂的分隔符</p><h4 id="printf命令-格式化打印命令" tabindex="-1"><a class="header-anchor" href="#printf命令-格式化打印命令"><span>printf命令-格式化打印命令</span></a></h4><p>printf &#39;输出类型输出格式’ 输出内容 类似c swk命令 <code># awk ‘条件1{动作1}条件2 {动作2}..’文件名</code> 条件(Pattern) : 一般使 用关系表达式作为条件 x&gt; 10 判断变量x是否大于10 x&gt;=10 大于等于 x&lt;=10 小于等于 动作(Action) : 格式化输出 流程控制语句</p><h4 id="sed命令" tabindex="-1"><a class="header-anchor" href="#sed命令"><span>sed命令</span></a></h4><p>sed是一种几乎包括在所有UNIX平台(包括Linux)的轻量级流编辑器。sed主要是用来将数据进行选取、替换、删除、新增的命令。 [root@localhost ~]# sed [选项]“[动作]’文件名 选项: -n 一般sed命令会把所有数据都输出到屏幕,如果加入此选择，则只会把经过sed命令处理的行输出到屏幕。 -e 允许对输入数据应用多条sed命令编辑 -I 用sed的修改结果直接修改读取数据的文件，而不是由屏幕输出 动作: a \\ 追加，在当前行后添加一行或多行。添加多行时，除最后-行外，每行末尾需要用“\\” 代表数据未完结。 c \\ 行替换，用c后面的字符串替换原数据行，替换多行时，除最后- -行外，每行末尾需用“\\”代表数据未完结。 i \\ 插入，在当期行前插入一行或多行。插入多行时，除最后- -行外，每行末尾需要用“\\” 代表数据未完结。. d 删除，删除指定的行。 p 打印，输出指定的行。 s 字串替换，用一个字符串替换另外一个字符串。格式为“行范围s/旧字串/新字串/g”( 和vim中的替换格式类似)。</p>`,35)]))}const d=n(i,[["render",p],["__file","shell编程.html.vue"]]),r=JSON.parse('{"path":"/md/linux/shell%E7%BC%96%E7%A8%8B.html","title":"shell编程","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"流程控制","slug":"流程控制","link":"#流程控制","children":[{"level":3,"title":"if语句","slug":"if语句","link":"#if语句","children":[]},{"level":3,"title":"case语句","slug":"case语句","link":"#case语句","children":[]},{"level":3,"title":"for语句","slug":"for语句","link":"#for语句","children":[]},{"level":3,"title":"while语句和until语句","slug":"while语句和until语句","link":"#while语句和until语句","children":[]},{"level":3,"title":"跳出循环","slug":"跳出循环","link":"#跳出循环","children":[]}]},{"level":2,"title":"条件判断","slug":"条件判断","link":"#条件判断","children":[]},{"level":2,"title":"正则表达式","slug":"正则表达式","link":"#正则表达式","children":[]},{"level":2,"title":"字符处理","slug":"字符处理","link":"#字符处理","children":[{"level":3,"title":"排序命令sort","slug":"排序命令sort","link":"#排序命令sort","children":[]},{"level":3,"title":"统计命令WC","slug":"统计命令wc","link":"#统计命令wc","children":[]},{"level":3,"title":"字符截取或处理命令","slug":"字符截取或处理命令","link":"#字符截取或处理命令","children":[]}]}],"git":{},"filePathRelative":"md/linux/shell编程.md"}');export{d as comp,r as data};
