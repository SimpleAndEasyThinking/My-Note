<template><div><h1 id="函数、存储过程和视图" tabindex="-1"><a class="header-anchor" href="#函数、存储过程和视图"><span>函数、存储过程和视图</span></a></h1>
<p>函数和存储过程的区别</p>
<p>函数也就是具有特定功能的代码块，而存储过程是指具有特定功能的Sal语句集合，函数有限制只能返回一个标量，而存储过程可以返回多个。并且函数是可以嵌入在SQL中使用的，可以在SELECT等SQL语句中调用，而存储过程不行。</p>
<h2 id="自定义函数" tabindex="-1"><a class="header-anchor" href="#自定义函数"><span>自定义函数</span></a></h2>
<p>1，当二进制日志启用后，这个变量就会启用。它控制是否可以信任存储函数创建者，不会创建写入二进制日志引起不安全事件的存储函数</p>
<p>2，使用delimiter;</p>
<p>delimiter修改结束符定义，将函数作为整体进行说明</p>
<div class="language-pgsql line-numbers-mode" data-highlighter="prismjs" data-ext="pgsql" data-title="pgsql"><pre v-pre><code><span class="line">create function 函数名称（获取值） returns 类型 begin 内容体 end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>优点</p>
<p>1.运行速度:对于很简单的sal;存储过程没有什么优势。对于复杂的业务逻辑，因为在存储过程创建的时候，数据库已经对其进行了一次解析和优化。存储过程一旦执行，在内存中就会保留一份这个存储过程，这样下次再执行同样的存储过程时，可以从内存中直接调用，所以执行速度会比普通sgl快。</p>
<p>2.减少网络传输:存储过程直接就在数据库服务器上跑，所有的数据访问都在数据库服务器内部进行，不需要传输数据到其它服务器，所以会减少一定的网络传输。但是在存储过程中没有多次数据交互，那么实际上网络传输量和直接sgl是一样的。而且我们的应用服务器通常与数据库是在同一内网，大数据的访问的瓶颈会是硬盘的速度，而不是网速。</p>
<p>3.可维护性:的存储过程有些时候比程序更容易维护，这是因为可以实时更新DB端的存储过程。有些bug，直接改存储过程里的业务逻辑，就搞定了。</p>
<p>4.增强安全性:提高代码安全，防止SQL注入。这一点sal,语句也可以做到。</p>
<p>5.可扩展性:应用程序和数据库操作分开，独立进行，而不是相互在一起。方便以后的扩展和DBA维护优化</p>
<p>缺点</p>
<p>1.SQL本身是一种结构化查询语言,但不是面向对象的的，本质上还是过程化的语言，面对复杂的业务逻辑，过程化的处理会很吃力。同时SQL擅长的是数据查询而非业务逻辑的处理,如果把业务逻辑全放在存储过程里面，违背了这一原则。</p>
<p>2.如果需要对输入存储过程的参数进行更改，或者要更改由其返回的数据,则您仍需要更新程序集中的代码以添加参数、更新调用，等等,这时候估计会比较繁琐了。</p>
<p>3.开发调试复杂，由于IDE的问题，存储过程的开发调试要比一般程序困难。</p>
<p>4.没办法应用缓存。虽然有全局临时表之类的方法可以做缓存，但同样加重了数据库的负担。如果缓存并发严重,经常要加锁，那效率实在堪忧。</p>
<p>5.不支持群集，数据库服务器无法水平扩展,或者数据库的切割(水平或垂直切割)。数据库切割之后，存储过程并不清楚数据存储在哪个数据库中</p>
<h2 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程"><span>存储过程</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">PROC</span><span class="token punctuation">[</span>EDURE<span class="token punctuation">]</span> <span class="token operator">&lt;</span>存储过程名称<span class="token operator">></span>     <span class="token comment">-- 定义存储过程名称</span></span>
<span class="line"><span class="token punctuation">[</span> @参数名称 参数类型<span class="token punctuation">]</span>                 <span class="token comment">-- 定义传值参数及类型</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">=</span><span class="token keyword">default</span><span class="token punctuation">]</span><span class="token punctuation">[</span>OUTPUT<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>n1<span class="token punctuation">]</span>           <span class="token comment">-- 定义参数的属性：默认值，返回值</span></span>
<span class="line"><span class="token keyword">AS</span></span>
<span class="line"><span class="token keyword">SQL</span> 语句<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>n2<span class="token punctuation">]</span>                     <span class="token comment">--执行的操作</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看过程</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">EXEC</span> <span class="token punctuation">[</span>UTE<span class="token punctuation">]</span> {存储过程名称}                                    <span class="token comment">-- 查看存储过程名</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span>@参数名称<span class="token operator">=</span><span class="token punctuation">]</span><span class="token keyword">value</span> <span class="token operator">|</span> <span class="token variable">@variable</span> <span class="token punctuation">[</span>OUTPUT<span class="token punctuation">]</span><span class="token operator">|</span><span class="token punctuation">[</span><span class="token keyword">DEFAULT</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>n1<span class="token punctuation">]</span>}  <span class="token comment">--参数名称</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改过程</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">PROC</span> proc_student_ByIDAndName_Output</span>
<span class="line"><span class="token variable">@Name</span> nvarchar<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> OUTPUT</span>
<span class="line"><span class="token keyword">as</span></span>
<span class="line">	<span class="token keyword">select</span> <span class="token variable">@Name</span><span class="token operator">=</span>sname <span class="token keyword">from</span> student</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除过程</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">DROP</span> <span class="token keyword">PROC</span><span class="token punctuation">[</span>EDUTE<span class="token punctuation">]</span> <span class="token operator">&lt;</span>存储过程名称<span class="token operator">></span>  <span class="token comment">--删除存储过程名</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>n<span class="token punctuation">]</span>}                        <span class="token comment">--参数名称</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>存储过程命名规则
存储过程命名规则：
pro_[小写表名][操作参数][操作关键字]</p>
<p>以 ‘pro_’ 为前缀
小写的表名
操作参数：举例，通过ID查询student，则为ByID
操作关键字：
如果存储过程返回一条记录那么后缀是：Select
如果存储过程插入数据那么后缀是：Insert
如果存储过程更新数据那么后缀是：Update
如果存储过程有插入和更新那么后缀是：Save
如果存储过程删除数据那么后缀是：Delete
如果存储过程更新表中的数据 (ie. drop and create) 那么后缀是：Create
如果存储过程返回输出参数或0，那么后缀是：Output</p>
<h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图"><span>视图</span></a></h2>
<h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h2>
<p>自定义异常</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">DECLARE</span> senditien nema CONDITION <span class="token keyword">FOR</span> sondition <span class="token keyword">value</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>senditienem:是自己起的名字，最好见名知意。</p>
<p>sonditien xelue:可以是SQLSThTE [VALUE] salat点xalue也可以是oaxsa xalue</p>
<p>saetat sxalue是长度为5的字符串错误代码。</p>
<p>axa axxs xalue.是数值类型的错误代码。</p>
<p>实例: DECLARE NO _TABLE CONDITION F0R 1146:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">DECLARE</span> handles <span class="token keyword">type</span> <span class="token keyword">HANDLER</span> <span class="token keyword">FOR</span> senditien <span class="token keyword">value</span> sp statement</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>hendles.
suae:有三个取值4</p>
<p>CONTINUE:遇到错误不进行处理，跳过错误继续执行之后的代码。</p>
<p>EXIT:遇到错误时马上退出，不再执行之后的操作。出</p>
<p>UND0:遇到错误后撤回之前已经执行的操作，WySQL 暂不支持该操作。。</p>
<p>senditienxelus:错误名称:有以下取值”</p>
<p>senditien neme:定义异常时取的名字。</p>
<p>mysqlvelue:数值类型的错误代码</p>
<p>SQLARNING:对所有01开头的SQLSTAtE代码的速记</p>
<p>NOT FOUND: 对所有01开头的sqLstate代码的速记</p>
<p>SQLEXCEPTION:除SQLTARNING和NOT FOUND之外的SQLSTATE代码的速记。出</p>
<p>satetememt:异常之后的处理。</p>
<p>实例:出</p>
<p>DECLARE EXIT HANDLER
FOR NO_ TABLE:</p>
</div></template>


