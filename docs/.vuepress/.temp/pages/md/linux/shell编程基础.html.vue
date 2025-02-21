<template><div><h1 id="shell基础" tabindex="-1"><a class="header-anchor" href="#shell基础"><span>shell基础</span></a></h1>
<h2 id="shell脚本的执行方式" tabindex="-1"><a class="header-anchor" href="#shell脚本的执行方式"><span>shell脚本的执行方式</span></a></h2>
<p>1、echo输出命令
[root@localhost ~]# echo [选项] [输出内容]
选项:
-e：支持反斜线控制的字符转换</p>
<p>2、第一个脚本</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span>root@localhost sh<span class="token punctuation">]</span><span class="token comment"># vi hello.sh</span></span>
<span class="line"><span class="token comment">#!/bin/Bash</span></span>
<span class="line"><span class="token comment">#The first program</span></span>
<span class="line"><span class="token comment">#Author: shenchao ( E-mail: shenchao@lampbrother.net)</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"Mr. Shen Chao is the most honest man in LampBrother"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、脚本执行
赋予执行权限，直接运行
chmod 755 hello.sh
./hello.sh
通过Bash调用执行脚本
bash hello.sh</p>
<p>win的回车是^M，linux中是$
可用dos2unix(dos to unix)可解决</p>
<h2 id="bash的变量" tabindex="-1"><a class="header-anchor" href="#bash的变量"><span>Bash的变量</span></a></h2>
<p>Bash 是一种 Shell 程序,Bash 是sh的扩充</p>
<h3 id="变量分类" tabindex="-1"><a class="header-anchor" href="#变量分类"><span>变量分类</span></a></h3>
<ol>
<li>用户自定义变量</li>
<li>环境变量:这种变量中主要保存的是和系统操作环境相关的数据。</li>
<li>位置参数变量:这种变量主要是用来向脚本当中传递参数或数据的，变量名不能自定义，变量作用是固定的。</li>
<li>预定义变量:是Bash中已经定义好的变量，变量名不能自定义，变量作用也是固定的。</li>
</ol>
<h3 id="自定义变量" tabindex="-1"><a class="header-anchor" href="#自定义变量"><span>自定义变量</span></a></h3>
<ol>
<li>变量名称可以由字母、数字和下划线组成， 但是不能以数字开头。如果变量名是“2name”则是错误的。</li>
<li>在Bash中，变量的默认类型都是字符串型，如果要进行数值运算，则必修指定变量类型为数值型。</li>
<li>变量用等号连接值，等号左右两侧不能有空格。</li>
<li>变量的值如果有空格，需要使用单引号或双引号包括。</li>
<li>在变量的值中，可以使用“\”转义符。</li>
<li>如果需要增加变量的值，那么可以进行变量值的叠加。不过变量需要用双引号包含“$变量名”或用${变量名}包含。
• 变量调用
[root@localhost ~]# echo $name
• 变量查看
[root@localhost ~]# set
• 变量删除
[root@localhost ~]# unset name</li>
</ol>
<h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h3>
<p>用户自定义变量只在当前的ShellI中生效,而环境变量会在当前Shell和这个Shell的所有子Shell当中生效。如果把环境变量写入相应的配置文件，那么这个环境变量就会在所有的Shell中生效。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">export</span>  变量名<span class="token operator">=</span>变量值。</span>
<span class="line"><span class="token comment">#申明变量</span></span>
<span class="line"></span>
<span class="line"><span class="token function">env</span></span>
<span class="line"><span class="token comment">#查询变量</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">unset</span>  变量名</span>
<span class="line"><span class="token comment">#删除变量</span></span>
<span class="line"></span>
<span class="line"><span class="token environment constant">PATH</span>:系统查找命令的路径</span>
<span class="line">    <span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $PATH</span></span>
<span class="line">    /usr/lib/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin</span>
<span class="line">    <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span> <span class="token string">"<span class="token environment constant">$PATH</span>"</span>:/root/sh</span>
<span class="line">    <span class="token comment">#PATH变量叠加</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>PS1:定义系统提示符的变量</p>
<ul>
<li>\d: 显示日期，格式为“星期月日</li>
<li>\h: 显示简写主机名。如默认主机名“localhost”</li>
<li>\t: 显示24小时制时间，格式为“HH:MM:SS”</li>
<li>\T: 显示12小时制时间，格式为“HH:MM:SS&quot;</li>
<li>\A: 显示24小时制时间，格式为“HH:MM”</li>
<li>\u: 显示当前用户名</li>
<li>\w: 显示当前所在目录的完整名称</li>
<li>\W: 显示当前所在目录的最后一个目录</li>
<li>#:执行的第几个命令</li>
<li>$: 提示符。如果是root用户会显示提示符为“#”，如果是普通用户会显示提示符为“$”</li>
</ul>
</blockquote>
<h3 id="位置参数变量" tabindex="-1"><a class="header-anchor" href="#位置参数变量"><span>位置参数变量</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">位置参数变量</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$n</td>
<td>为数字，<code v-pre>$0</code>代表命令本身，<code v-pre>$1-$9</code>代表第一到第九个参数，十以上的参数需要用大括号包含，如${10}.</td>
</tr>
<tr>
<td style="text-align:center">$*</td>
<td>这个变量代表命令行中所有的参数，$*把所有的参数看成一个整体</td>
</tr>
<tr>
<td style="text-align:center">$@</td>
<td>这个变量也代表命令行中所有的参数，不过$@把每个参数区分对待</td>
</tr>
<tr>
<td style="text-align:center">$#</td>
<td>这个变量代表命令行中所有参数的个数</td>
</tr>
</tbody>
</table>
<h3 id="预定义变量" tabindex="-1"><a class="header-anchor" href="#预定义变量"><span>预定义变量</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">预定义变量</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$?</td>
<td>最后一次执行的命令的返回状态。如果这个变量的值为0，证明上一个命令正确执行；如果这个变量的值为非0（具体是哪个数，由命令自己来决定），则证明上一个命令执行不正确了。</td>
</tr>
<tr>
<td style="text-align:center">$$</td>
<td>当前进程的进程号（PID）</td>
</tr>
<tr>
<td style="text-align:center">$!</td>
<td>后台运行的最后一个进程的进程号（PID）</td>
</tr>
</tbody>
</table>
<h2 id="read命令获取输入" tabindex="-1"><a class="header-anchor" href="#read命令获取输入"><span>read命令获取输入</span></a></h2>
<p><code v-pre>[root@localhost ~]# read [选项] [变量名]</code>
选项:
-p：“提示信息”在等待read输入时,输出提示信息
-t：秒数: read命 令会一直等待用户输入, 使用此选项可以指定等待时间
-n：字符数:read命令只接受指定的字符数，就会执行
-S：隐藏输入的数据，适用于机密信息的输入</p>
<h2 id="declare命令声明变量类型" tabindex="-1"><a class="header-anchor" href="#declare命令声明变量类型"><span>declare命令声明变量类型</span></a></h2>
<p><code v-pre>[root@localhost ~]# declare [+/-][选项]变量名</code>
选项：
-：给变量设定类型属性.
+：取消变量的类型属性.
-i：将变量声明为整数型( integer)
-X：将变量声明为环境变量
-P：显示指定变量的被声明的类型</p>
<h2 id="数值运行方法" tabindex="-1"><a class="header-anchor" href="#数值运行方法"><span>数值运行方法</span></a></h2>
<p>方法一：使用declare定义变量类型
[root@localhost ~]# aa=11
[root@localhost ~]# bb=22
#给变量aa和bb赋值
[root@localhost ~ ]# declare -i cc=$aa+$bb
方法二：expr或let数值运算工具
[root@localhost ~]# aa=11
[root@localhost ~]# bb=22
#给变量aa和变量bb赋值
[root@localhost ~]# dd=$(expr $aa + $bb)
#dd的值是aa和bb的和。注意“+”号左右两侧必须有空格
方法三：
[root@localhost ~]# aa=11
[root@localhost ~]# bb=22
[root@localhost ~]# ff= $(( $aa+$bb ))
[root@localhost ~]# gg=$[ $aa+$bb]</p>
<h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h2>
<table>
<thead>
<tr>
<th>优先级</th>
<th>运算符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>13</td>
<td>-,+</td>
<td>单目负、单目正</td>
</tr>
<tr>
<td>12</td>
<td>!,~</td>
<td>逻辑非、按位取反或补码</td>
</tr>
<tr>
<td>11</td>
<td>*,/,%</td>
<td>乘、除、取模</td>
</tr>
<tr>
<td>10</td>
<td>+,-</td>
<td>加、减</td>
</tr>
<tr>
<td>9</td>
<td>&lt;&lt;,&gt;&gt;</td>
<td>按位左移、按位右移</td>
</tr>
<tr>
<td>8</td>
<td>&lt;=，&gt;=，&gt;，&lt;</td>
<td>小于或等于、大于或等于、小于、大于</td>
</tr>
<tr>
<td>7</td>
<td>==,!=</td>
<td>等于、不等于</td>
</tr>
<tr>
<td>6</td>
<td>&amp;</td>
<td>按位与</td>
</tr>
<tr>
<td>5</td>
<td>^</td>
<td>按位异或</td>
</tr>
<tr>
<td>4</td>
<td>|</td>
<td>按位或</td>
</tr>
<tr>
<td>3</td>
<td>&amp;&amp;</td>
<td>逻辑与</td>
</tr>
<tr>
<td>2</td>
<td>||</td>
<td>逻辑或</td>
</tr>
<tr>
<td>1</td>
<td>'=,+=,-=,*=,/=,%=,&amp;=,^=, |=,&lt;&lt;=,&gt;='</td>
<td>赋值、运算且赋值</td>
</tr>
</tbody>
</table>
<h2 id="变量测试与置换" tabindex="-1"><a class="header-anchor" href="#变量测试与置换"><span>变量测试与置换</span></a></h2>
<table>
<thead>
<tr>
<th>变量置换方式</th>
<th>变量y没有设置</th>
<th>变量y为空值</th>
<th>变量y设置值</th>
</tr>
</thead>
<tbody>
<tr>
<td>x=${y-新值}</td>
<td>x=新值</td>
<td>x为空</td>
<td>x=$y</td>
</tr>
<tr>
<td>x=${y:-新值}</td>
<td>x=新值</td>
<td>x=新值</td>
<td>x=$y</td>
</tr>
<tr>
<td>x=${y+新值}</td>
<td>x为空</td>
<td>x=新值</td>
<td>x=新值</td>
</tr>
<tr>
<td>x=${y:+新值}</td>
<td>x为空</td>
<td>x为空</td>
<td>x=新值</td>
</tr>
<tr>
<td>x=${y=新值}</td>
<td>x=新值 y=新值</td>
<td>x为空 y值不变</td>
<td>x=$y y值不变</td>
</tr>
<tr>
<td>x=${y:=新值}</td>
<td>x=新值 y=新值</td>
<td>x=新值 y=新值</td>
<td>x=$y y值不变</td>
</tr>
<tr>
<td>x=${y?新值}</td>
<td>新值输出到标准错误 输出(就是屏幕)</td>
<td>x为空</td>
<td>x=$y</td>
</tr>
<tr>
<td>x=${y:?新值}</td>
<td>新值输出到标准错误 输出</td>
<td>新值输出到标准错误 输出</td>
<td>x=$y</td>
</tr>
</tbody>
</table>
<h2 id="bash的基本功能" tabindex="-1"><a class="header-anchor" href="#bash的基本功能"><span>Bash的基本功能</span></a></h2>
<h3 id="历史" tabindex="-1"><a class="header-anchor" href="#历史"><span>历史</span></a></h3>
<p>1、历史命令
<code v-pre>[root@localhost ~]# history [选项] [历史命令保存文件]</code>
选项:
-C：清空历史命令
-W：把缓存中的历史命令写入历史命令保存文件
~/.bash_history</p>
<p>历史命令默认会保存1000条，可以在环境变量配置文件/etc/profile中进行修改</p>
<p>历史命令的调用
使用上、下箭头调用以前的历史命令
使用&quot;!n”重复执行第n条历史命令
使用“!!” 重复执行上一条命令
使用“!字串”重复执行最后一 条以该字串开头的命令</p>
<p>2、命令与文件补全
在Bash中，命令与文件补全是非常方便与常用的功能，我们只要在输入命令或文件时，按“Tab” 键就会自动进行补全</p>
<h3 id="别名" tabindex="-1"><a class="header-anchor" href="#别名"><span>别名</span></a></h3>
<p>1、命令别名</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># alias 别名='原命令'</span></span>
<span class="line"><span class="token comment">#设定命令别名</span></span>
<span class="line"><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># alias</span></span>
<span class="line"><span class="token comment">#查询命令别名</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令执行时顺序
1. 第一顺位执行用绝对路径或相对路径执行的命令。
2. 第二顺位执行别名。
3. 第三顺位执行Bash的内部命令。
4. 第四顺位执行按照$PATH环境变量定义的目录查找顺序找到的第一一个命令。</p>
<p>让别名永久生效
<code v-pre>[root@localhost ~]# vi /root/. bashrc</code></p>
<p>删除别名
<code v-pre>[root@localhost ~]# unalias 别名</code></p>
<h3 id="输出与输入重定向" tabindex="-1"><a class="header-anchor" href="#输出与输入重定向"><span>输出与输入重定向</span></a></h3>
<ol>
<li>输出重定向</li>
</ol>
<table>
<thead>
<tr>
<th>类型</th>
<th>符号</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>标准输出重定向</td>
<td>命令&gt;文件</td>
<td>以覆盖的方式，把命令的正确输出输出到指定的文件或设备当中。</td>
</tr>
<tr>
<td></td>
<td>命令&gt;&gt;文件</td>
<td>以追加的方式，把命令的正确输出输出到指定的文件或设备当中。</td>
</tr>
<tr>
<td>标准错误输出重定向</td>
<td>错误命令2&gt;文件</td>
<td>以覆盖的方式，把命令的错误输出输出到指定的文件或设备当中。</td>
</tr>
<tr>
<td></td>
<td>错误命令2&gt;&gt;文件</td>
<td>以追加的方式，把命令的错误输出输出到指定的文件或设备当中。</td>
</tr>
<tr>
<td>正确输出和错误输出同时保存</td>
<td>命令&gt;文件2&gt;&amp;1</td>
<td>以覆盖的方式，把正确输出和错误输出都保存到同一个文件当中。</td>
</tr>
<tr>
<td></td>
<td>命令&gt;&gt;文件2&gt;&amp;1</td>
<td>以追加的方式，把正确输出和错误输出都保存到同一个文件当中。</td>
</tr>
<tr>
<td></td>
<td>命令&amp;&gt;文件</td>
<td>以覆盖的方式，把正确输出和错误输出都保存到同一个文件当中。</td>
</tr>
<tr>
<td></td>
<td>命令&amp;&gt;&gt;文件</td>
<td>以追加的方式，把正确输出和错误输出都保存到同一个文件当中。</td>
</tr>
<tr>
<td></td>
<td>命令&gt;&gt;文件1 2&gt;&gt;文件2</td>
<td>把正确的输出追加到文件1中，把错误的输出追加到文件2中。</td>
</tr>
</tbody>
</table>
<ol start="2">
<li>输入重定向</li>
</ol>
<table>
<thead>
<tr>
<th>符号</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>command &lt;file</code></td>
<td>将 file 文件中的内容作为 command 的输入。</td>
</tr>
<tr>
<td><code v-pre>command &lt;&lt;END</code></td>
<td>从标准输入（键盘）中读取数据，直到遇见分界符 END 才停止（分界符可以是任意的字符串，用户自己定义）。</td>
</tr>
<tr>
<td><code v-pre>command &lt;file1 &gt;file2</code></td>
<td>将 file1 作为 command 的输入，并将 command 的处理结果输出到 file2。</td>
</tr>
</tbody>
</table>
<h3 id="多命令顺序执行" tabindex="-1"><a class="header-anchor" href="#多命令顺序执行"><span>多命令顺序执行</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">多命令执行符</th>
<th>格式</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">:</td>
<td>命令1:命令2</td>
<td>多个命令顺序执行，命令之间没有任何逻辑联系</td>
</tr>
<tr>
<td style="text-align:center">&amp;&amp;</td>
<td>命令1&amp;&amp;命令2</td>
<td>逻辑与 当命令1正确执行，则命令2才会执行 当命令1执行不正确，则命令2不会执行</td>
</tr>
<tr>
<td style="text-align:center">||</td>
<td>命令1|命令2</td>
<td>逻辑或 当命令1执行不正确，则命令2才会执行当命令1正确执行，则命令2不会执行</td>
</tr>
</tbody>
</table>
<p><code v-pre>[root@localhost ~]# dd if=输入文件of=输出文件bs=字节数count=个数</code>
选项:
if-输入文件     指定源文件或源设备
of=输出文件   指定目标文件或目标设备
bs=字节数      指定一次输入/输出多少字节，即把这些字节看做一个数据块
count=个数     指定输入/输出多少个数据块;
例子:
<code v-pre>[root@localhost ~]# date ; dd if=/dev/zero of=/root/testfile bs= 1k count 100000 ;</code>
date</p>
<h3 id="管道符号" tabindex="-1"><a class="header-anchor" href="#管道符号"><span>管道符号</span></a></h3>
<p>命令格式:
<code v-pre>[root@localhost ~]#命令1 | 命令2</code>
#命令1的正确输出作为命令2的操作对象</p>
<h3 id="颜色显示" tabindex="-1"><a class="header-anchor" href="#颜色显示"><span>颜色显示</span></a></h3>
<p><code v-pre>[root@localhost ~]# grep [选项] &quot;搜索内容&quot;  文件名</code>
选项:
-i：忽略大小写
-n：输出行号
-V：反向查找
--color= auto：搜索出的关键字用颜色显示</p>
<h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符"><span>通配符</span></a></h3>
<table>
<thead>
<tr>
<th>通配符</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>?</td>
<td>匹配一个任意字符</td>
</tr>
<tr>
<td>*</td>
<td>匹配0个或任意多个任意字符，也就是可以匹配任何内容</td>
</tr>
<tr>
<td>[]</td>
<td>匹配中括号中任意一个字符。例如：[abc]代表一定匹配一个字符，或者是a，或者是b，或者是c。</td>
</tr>
<tr>
<td>[-]</td>
<td>匹配中括号中任意一个字符，-代表一个范围。例如：[a—z]代表匹配一个小写字母。</td>
</tr>
<tr>
<td>[^]</td>
<td>逻辑非，表示匹配不是中括号内的一个字符。例如：[^0—9]代表匹配一个不是数字的字符。</td>
</tr>
</tbody>
</table>
<h3 id="bash中其他特殊符号" tabindex="-1"><a class="header-anchor" href="#bash中其他特殊符号"><span>Bash中其他特殊符号</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">符号</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">''</td>
<td>单引号。在单引号中所有的特殊符号，如“$”和“`”（反引号）都没有特殊含义。</td>
</tr>
<tr>
<td style="text-align:center">&quot;&quot;</td>
<td>双引号。在双引号中特殊符号都没有特殊含义，但是“$”、“`”和“\”是例外，拥有“调用变量的值”、“引用命令”和“转义符”的特殊含义。</td>
</tr>
<tr>
<td style="text-align:center">``</td>
<td>反引号。反引号括起来的内容是系统命令，在Bash中会先执行它。和$()作用一样，不过推荐使用$()，因为反引号非常容易看错。</td>
</tr>
<tr>
<td style="text-align:center">$()</td>
<td>和反引号作用一样，用来引用系统命令。</td>
</tr>
<tr>
<td style="text-align:center">#</td>
<td>在Shell脚本中，#开头的行代表注释。</td>
</tr>
<tr>
<td style="text-align:center">$</td>
<td>用于调用变量的值，如需要调用变量name的值时，需要用$name的方式得到变量的值。</td>
</tr>
<tr>
<td style="text-align:center">\</td>
<td>转义符，跟在\之后的特殊符号将失去特殊含义，变为普通字符。如$将输出“$”符号，而不当做是变量引用。</td>
</tr>
</tbody>
</table>
<h2 id="环境变量配置文件" tabindex="-1"><a class="header-anchor" href="#环境变量配置文件"><span>环境变量配置文件</span></a></h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3>
<p>环境变量配置文件中主要是定义对系统的操作环境生效的系统默认环境变量，比如PATH、HISTSIZE、 PS1、 HOSTNAME等默认环境变量。</p>
<h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h3>
<p>/etc/profile
/etc/profile.d/*.sh
~/.bash profile
~/.bashrc
/etc/bashrc</p>
<p><strong>执行顺序</strong>
<img src="@source/md/linux/images/shell编程/image-1.png" alt="alt text"></p>
<p><strong>作用</strong>
<code v-pre>/etc/profile</code>是永久性的环境变量，是全局变量
配置
USER变量:
LOGNAME变量:
MAIL变量:
PATH变量:
HOSTNAME变量:
HISTSIZE变量:
umask:
调用<code v-pre>/etc/prfile.d/*.sh</code>文件</p>
<ul>
<li><code v-pre>/etc/profile.d/*.sh</code>存在大量sh文件并一并读取出来,最主要的是<code v-pre>/etc/profile.d/lang.sh</code>定义系统语言的脚本又调用了<code v-pre>/etc/sysconfig/il8n</code>，该文件是定义了当前系统的语言。</li>
<li><code v-pre>~/.bash_profile</code>只对当前用户生效调用了<code v-pre>~/.bashrc</code>文件。在PATH变量后面加入了<code v-pre>:$HOME/bin</code>这个目录</li>
<li><code v-pre>~/.bashrc</code>同上定义默认别名调用/etc/bashrc</li>
<li><code v-pre>/etc/bashrc</code>PS1变量umask:PATH变量调用<code v-pre>/etc/profile.d/*.sh</code>文件和第一文件差不多但是定义的是没有登录用户和密码的</li>
</ul>
<h3 id="source命令——使配置文件生效" tabindex="-1"><a class="header-anchor" href="#source命令——使配置文件生效"><span>source命令——使配置文件生效</span></a></h3>
<p><code v-pre>[root@localhost ~]# source 配置文件</code>或<code v-pre>[root@localhost ~]# . 配置文件</code>其他配置文件
<code v-pre>~/.bash_logout</code>注销时生效的，作用注销时执行
<code v-pre>~/bash_history</code>历史命令保存文件</p>
<h3 id="shell登录信息" tabindex="-1"><a class="header-anchor" href="#shell登录信息"><span>shell登录信息</span></a></h3>
<p>本地终端欢迎信息：/etc/issue</p>
<table>
<thead>
<tr>
<th style="text-align:center">转义符</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">\d</td>
<td>显示当前系统日期</td>
</tr>
<tr>
<td style="text-align:center">\s</td>
<td>显示操作系统名称</td>
</tr>
<tr>
<td style="text-align:center">\l</td>
<td>显示登录的终端号，这个比较常用。</td>
</tr>
<tr>
<td style="text-align:center">\m</td>
<td>显示硬件体系结构，如i386、i686等</td>
</tr>
<tr>
<td style="text-align:center">\n</td>
<td>显示主机名</td>
</tr>
<tr>
<td style="text-align:center">\o</td>
<td>显示域名</td>
</tr>
<tr>
<td style="text-align:center">\r</td>
<td>显示内核版本</td>
</tr>
<tr>
<td style="text-align:center">\t</td>
<td>显示当前系统时间</td>
</tr>
<tr>
<td style="text-align:center">\u</td>
<td>显示当前登录用户的序列号</td>
</tr>
</tbody>
</table>
<p>远程终端欢迎信息: <code v-pre>/etc/issue.net</code>
- 转义符在<code v-pre>/etc/issue.net</code>文件中不能使用.
- 是否显示此欢迎信息，由ssh的配置文件<code v-pre>/etc/ssh/sshd config</code>决定， 加入“Banner/etc/issue.net&quot;行才能显示( 记得重启SSH服务)
登陆后欢迎信息: <code v-pre>/etc/motd</code>
不管是本地登录，还是远程登录，都可以显示此欢迎信息</p>
</div></template>


