<template><div><h1 id="liunx基础" tabindex="-1"><a class="header-anchor" href="#liunx基础"><span>Liunx基础</span></a></h1>
<h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h2>
<p>补全命令：<code v-pre>Tob</code> 按键</p>
<p>帮助手册：命令 --help/-h  （内置命令可行）</p>
<p>分页查看： |more（跟在其他命令后面）</p>
<p>过滤： | grep</p>
<p>强制退出命令：ctrl+c（前端命令）</p>
<p>退出当前用户：ctrl+d</p>
<p>sudo
su是当前用户暂时申请root权限，所以输入的不是root用户密码，而是当前用户的密码。su是申请切换root用户，需要申请root用户密码。</p>
<p><img src="@source/md/linux/image/基础知识/1733470951659.png" alt="1733470951659"></p>
<p>|管道符：将命令的结果输出给另一个命令作为输入命令每组成部分之间必须用空格隔开以回车结束</p>
<blockquote>
<p>linux下不要打空格不要用中文</p>
</blockquote>
<p><img src="@source/md/linux/image/基础知识/1733470913380.png" alt="1733470913380">
&quot;~&quot;也表示为 home 目录 的意思，&quot;.&quot; 则是表示目前所在的目录，&quot;..&quot; 则表示目前目录位置的上一层目录。</p>
<h3 id="centos和ubuntu" tabindex="-1"><a class="header-anchor" href="#centos和ubuntu"><span>CentOS和ubuntu</span></a></h3>
<p><img src="@source/md/linux/image/基础知识/1733470993176.png" alt="1733470993176"></p>
<h2 id="系统文件" tabindex="-1"><a class="header-anchor" href="#系统文件"><span>系统文件</span></a></h2>
<ul>
<li>etc/inittab</li>
<li>修改系统默认运行级别</li>
<li>id:3:initdefault:</li>
</ul>
<h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键"><span>快捷键</span></a></h2>
<p><img src="@source/md/linux/image/基础知识/1733470159239.png" alt="1733470159239"></p>
<h2 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出"><span>输入输出</span></a></h2>
<table>
<thead>
<tr>
<th>设备</th>
<th>设备文件名</th>
<th>文件描述符</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>键盘</td>
<td>/dev/stdin</td>
<td>0</td>
<td>标准输入</td>
</tr>
<tr>
<td>显示器</td>
<td>/dev/sdtout</td>
<td>1</td>
<td>标准输出</td>
</tr>
<tr>
<td>显示器</td>
<td>/dev/sdterr</td>
<td>2</td>
<td>标准错误输出</td>
</tr>
</tbody>
</table>
<h2 id="文件和目录的权限" tabindex="-1"><a class="header-anchor" href="#文件和目录的权限"><span>文件和目录的权限</span></a></h2>
<table>
<thead>
<tr>
<th>代表字符</th>
<th>权限</th>
<th>对文件的含义</th>
<th>对目录的含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>r</td>
<td>读权限</td>
<td>可以查看文件内容</td>
<td>可以列出目录中的内容</td>
</tr>
<tr>
<td>W</td>
<td>写权限</td>
<td>可以修改文件内容</td>
<td>可以在目录中创建、删除文件</td>
</tr>
<tr>
<td>X</td>
<td>执行权限</td>
<td>可以执行文件</td>
<td>可以进入目录</td>
</tr>
</tbody>
</table>
<ul>
<li>r和x在目录中会同时存在</li>
</ul>
<table>
<thead>
<tr>
<th>代表字符</th>
<th>R</th>
<th>W</th>
<th>X</th>
</tr>
</thead>
<tbody>
<tr>
<td>file</td>
<td>cat、more、head、tail、less</td>
<td>vim</td>
<td>script、command</td>
</tr>
<tr>
<td>directory</td>
<td>ls</td>
<td>touch、mkdir、rmdir、rm</td>
<td>cd</td>
</tr>
</tbody>
</table>
<ul>
<li>对文件进行更改是文件的权限而对文件进行创建和删除则需要文件所在目录的权限</li>
<li>缺省创建的文件是没有可执行文件的</li>
<li>目录权限rw-r--r--</li>
<li>文件权限rwxr-xr-x</li>
</ul>
<blockquote>
<p>文件所有权限:文件的默认的所有者和所有者的默认组是创建文件是用户</p>
</blockquote>
<h2 id="文件及目录命令" tabindex="-1"><a class="header-anchor" href="#文件及目录命令"><span>文件及目录命令</span></a></h2>
<h3 id="目录命令" tabindex="-1"><a class="header-anchor" href="#目录命令"><span>目录命令</span></a></h3>
<p><code v-pre>ls 选项[-ald][文件或目录]</code>命令用于显示指定工作目录下之内容（列出目前工作目录所含之文件及子目录)
选项与参数：</p>
<ul>
<li>-a 全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)</li>
<li>-d 仅列出目录本身，而不是列出目录内的文件数据(常用)</li>
<li>-l 长数据串列出，包含文件的属性与权限等等数据；(常用)</li>
</ul>
<p><code v-pre>pwd</code>命令用于显示工作目录。执行pwd指令可立刻得知您目前所在的工作目录的绝对路径名称。
选项与参数：</p>
<ul>
<li>-P ：显示出确实的路径，而非使用连结 (link) 路径。</li>
</ul>
<p><code v-pre>cd [目录]</code>命令用于切换当前工作目录至目标目录。
其中<strong>目标目录</strong> 表示法可为绝对路径或相对路径。若目录名称省略，则变换至使用者的 home 目录 (也就是刚 login 时所在的目录)。</p>
<p><code v-pre>mkdir [-p] [目录名]</code>命令用于建新目录。
选项与参数：</p>
<ul>
<li>-m 配置文件的权限喔！直接配置，不需要看默认权限 (umask) 的脸色</li>
<li>-p 帮助你直接将所需要的目录(包含上一级目录)递归创建起来！</li>
</ul>
<p><code v-pre>rmdir [目录名]</code>命令删除空的目录。
选项与参数：</p>
<ul>
<li>-p ：连同上一级『空的』目录也一起删除</li>
</ul>
<h3 id="文件命令" tabindex="-1"><a class="header-anchor" href="#文件命令"><span>文件命令</span></a></h3>
<p><code v-pre>cp [原目录或文件] [目标目录]</code>命令主要用于复制文件或目录。
选项与参数：</p>
<ul>
<li>-a：相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)</li>
<li>-d：若来源档为连结档的属性(link file)，则复制连结档属性而非文件本身；</li>
<li>-f：为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；</li>
<li>-i：若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)</li>
<li>-l：进行硬式连结(hard link)的连结档创建，而非复制文件本身；</li>
<li>-p：连同文件的属性一起复制过去，而非使用默认属性(备份常用)；</li>
<li>-r：递归持续复制，用于目录的复制行为；(常用)</li>
<li>-s：复制成为符号连结档 (symbolic link)，亦即『捷径』文件；</li>
<li>-u：若 destination 比 source 旧才升级destination</li>
</ul>
<p><code v-pre>rm -rf [文件或目录]</code>命令用于删除一个文件或者目录。
选项与参数：</p>
<ul>
<li>-f 就是 force的意思，忽略不存在的文件，不会出现警告信息；</li>
<li>-i 互动模式，在删除前会询问使用者是否动作</li>
<li>-r 递归删除啊！最常用在目录的删除了！这是非常危险的选项</li>
</ul>
<p><code v-pre>mv [原目录或文件][目标目录]</code>命令用来为文件或目录改名、或将文件或目录移入其它位置。
选项与参数：</p>
<ul>
<li>-f force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；</li>
<li>-i 若目标文件 (destination) 已经存在时，就会询问是否覆盖！</li>
<li>-u 若目标文件已经存在，且 source 比较新，才会升级 update</li>
</ul>
<h3 id="文件权限管理命令" tabindex="-1"><a class="header-anchor" href="#文件权限管理命令"><span>文件权限管理命令</span></a></h3>
<p><code v-pre>chmod  [{ugoa}{+-=}{rwx}] [文件或目录] 或者 [mode=421] [文件或目录]</code>改变文件或目录权限</p>
<ul>
<li>-R 递归修改</li>
</ul>
<p><code v-pre>chown [用户][文件或目录]</code>改变文件或目录的所有者（该命令需要root权限）</p>
<p><code v-pre>chgrp [用户组][文件或目录]</code>改变文件或目录的所属组</p>
<p><code v-pre>umask [-s]</code>显示、设置文件的缺省权限</p>
<ul>
<li>-s 以rwx形式显示新建文件缺省权限</li>
</ul>
<h3 id="文件文本命令" tabindex="-1"><a class="header-anchor" href="#文件文本命令"><span>文件文本命令</span></a></h3>
<p><code v-pre>find [搜索范围][匹配条件]</code>命令用来在指定目录下查找文件。
任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。</p>
<ul>
<li>-name name, -iname name : 文件名称符合 name 的文件。iname 会忽略大小写</li>
<li>-size n : 文件大小 是 n 单位，b 代表 512 位元组的区块，c 表示字元数，k 表示 kilo bytes，w是二个位元组。+n大于 -n小于 n等于</li>
<li>-type c : 文件类型是 c 的文件。f文件 d目录 l链接</li>
<li>-user u：所有者是u的文件</li>
<li>-cmi n (n : 在过去 n 分钟内被修改过属性)</li>
<li>-ami n (n : 在过去 n 分钟内被读取过时间)</li>
<li>-mmin n：在过去n分钟内内容被修改过</li>
<li>-a 两个条件同时满足</li>
<li>-o 两个条件满足任意一个即可</li>
<li>-exec/-ok 命令 {} \；对搜索结果执行操作</li>
<li>-inum：根据i节点查找</li>
</ul>
<p><code v-pre>cat [文件名]</code>命令用于连接文件并打印到标准输出设备上。
查看文件。<code v-pre>tail</code> 从尾到头<code v-pre>head</code> 从头到尾
选项与参数：</p>
<ul>
<li>-A 相当於 -vET 的整合选项，可列出一些特殊字符而不是空白而已；</li>
<li>-b 列出行号，仅针对非空白行做行号显示，空白行不标行号！</li>
<li>-E 将结尾的断行字节 $ 显示出来；</li>
<li>-n 列印出行号，连同空白行也会有行号，与 -b 的选项不同；</li>
<li>-T 将 [tab] 按键以 ^I 显示出来；</li>
<li>-v 列出一些看不出来的特殊字符</li>
</ul>
<p><code v-pre>more</code>命令类似 cat，不过会以一页一页的形式显示，更方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b键就会往回（back）一页显示，而且还有搜寻字串的功能（与 vi 相似），使用中的说明文件，请按 h 。</p>
<p>在 more这个程序的运行过程中，你有几个按键可以按的：</p>
<ul>
<li>空白键(space)：代表向下翻一页；</li>
<li>Enter：代表向下翻『一行』；</li>
<li>/字串：代表在这个显示的内容当中，向下搜寻『字串』这个关键字；</li>
<li>:f：立刻显示出档名以及目前显示的行数；</li>
<li>q：代表立刻离开 more ，不再显示该文件内容。</li>
<li>b 或 [ctrl]-b ：代表往回翻页，不过这动作只对文件有用，对管线无用。</li>
</ul>
<p><code v-pre>less</code>与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less在查看之前不会加载整个文件。</p>
<p>less运行时可以输入的命令有：</p>
<ul>
<li>空白键    ：向下翻动一页；</li>
<li>[pagedown]：向下翻动一页；</li>
<li>[pageup]  ：向上翻动一页；</li>
<li>/字串     ：向下搜寻『字串』的功能；</li>
<li>?字串     ：向上搜寻『字串』的功能；</li>
<li>n：重复前一个搜寻 (与 / 或 ? 有关！)</li>
<li>N：反向的重复前一个搜寻 (与 / 或 ? 有关！)</li>
<li>q 离开 less 这个程序</li>
</ul>
<p><code v-pre>head</code>取出文件前面几行
选项与参数：</p>
<ul>
<li>-n 后面接数字，代表显示几行的意思</li>
</ul>
<p><code v-pre>tail</code>取出文件后面几行
选项与参数：</p>
<ul>
<li>-n 后面接数字，代表显示几行的意思</li>
<li>-f 表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测</li>
</ul>
<p><code v-pre>Touch [文件名]</code>创建空文件</p>
<h2 id="压缩格式" tabindex="-1"><a class="header-anchor" href="#压缩格式"><span>压缩格式</span></a></h2>
<ul>
<li>.gzip 压缩文件</li>
<li>.tar 打包目录</li>
<li>.tar.gz 压缩目录</li>
<li>.zip 压缩文件或文件</li>
<li>.bz2 压缩文件</li>
<li>.tar.bz2 压缩目录</li>
</ul>
<h3 id="压缩文件命令" tabindex="-1"><a class="header-anchor" href="#压缩文件命令"><span>压缩文件命令</span></a></h3>
<p><code v-pre>tar [-zcf][压缩后文件名][目录]</code>打包目录</p>
<ul>
<li>-c打包</li>
<li>-v显示详细信息</li>
<li>-f指定文件名</li>
<li>-z打包同时压缩</li>
<li>-x解包</li>
<li>-j解压bz2格式</li>
</ul>
<p><code v-pre>gzip [文件]</code>压缩文件（只能压缩文件不能压缩目录且不会保留源文件）</p>
<p><code v-pre>gunzip [压缩文件]</code>解压缩.gz的压缩文件</p>
<p><code v-pre>zip [-r][压缩后文件名][文件或目录]</code>压缩文件或目录</p>
<ul>
<li>-r压缩目录</li>
</ul>
<p><code v-pre>unzip[压缩文件]</code>解压缩</p>
<p><code v-pre>bzip2 [-k] [文件]</code>压缩文件</p>
<ul>
<li>-k 产生压缩文件后保留原文件</li>
</ul>
<p><code v-pre>bunzip2 [-k][压缩文件]</code>解压缩</p>
<ul>
<li>-k解压缩后保留原文件</li>
</ul>
<h2 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装"><span>软件安装</span></a></h2>
<h3 id="rpm包命名规则" tabindex="-1"><a class="header-anchor" href="#rpm包命名规则"><span>RPM包命名规则</span></a></h3>
<p>[包名] - [版本号] - [软件发布的次数] . [适合的Linux平台] . [适合软件平台] . [rpm包扩展名]
<code v-pre>httpd-2.2.15-15.e16.centos.1.i686.rpm</code>（包全名）</p>
<ul>
<li>httpd：软件包名              2.2.15：软件版本</li>
<li>15：软件发布的次数　　e16.centos：适合的Linux平台</li>
<li>i686：适合的软件平台　rpm：rpm包扩展名</li>
<li>RPM包依赖性：a -&gt; b -&gt; c -&gt; d   装 a 包先装 b 包，装 b 先装 c 包，装 c 包先装 d 包；依赖性很麻烦。</li>
</ul>
<p>RPM包管理</p>
<p>包全名：  操作的包是没有安装的软件包时，使用包全名。而且要注意路径
包名  ： 操作已经安装的软件包时，使用包名是搜索 /var/lib/rpm 中的数据库</p>
<p>rpm -ivh  包全名
RPM软件包安装</p>
<ul>
<li>-i（install）：安装</li>
<li>-v（verbose）：显示详细信息</li>
<li>-h（hash）：显示进度</li>
<li>-U（upgrade）：升级</li>
<li>-e（erase）：卸载
libdb_cxx-4.7.so库文件依赖，只需要去<a href="http://www.rpmfind.net" target="_blank" rel="noopener noreferrer">Rpmfind mirror</a>搜索对应的安装文件安装即可。</li>
</ul>
<p>RPM包升级<code v-pre>rpm  -Uvh  包全名</code></p>
<p>包卸载<code v-pre>rpm -e 包名</code>（体现全报名和包名区别）</p>
<p>RPM 包查询<code v-pre>rpm  -q 包名</code> （用 rpm 查询）</p>
<ul>
<li>-q（query）：查询</li>
<li>-qa（all）：所有</li>
<li>-qi（information）：查询已安装过软件包的信息</li>
<li>-qip（package）：查询未安装过软件包的信息（需要包全名，用处不多）</li>
<li>-ql（list）：列表</li>
<li>-qlp：查询未安装包信息</li>
<li>-f（file）：反向查询系统文件属于哪个软件包</li>
<li>-qR（requires）：查询软件包的依赖性</li>
<li>-qRp：查询为安装包的信息</li>
</ul>
<p>例如：rpm -qa |grep httpd  查询所有关于httpd的安装包</p>
<p>查询包软件安装位置<code v-pre>rpm -ql  包名</code></p>
<p>查询系统文件属于哪个RPM包<code v-pre>rpm -qf 系统文件名</code></p>
<p>查询软件包的依赖性<code v-pre>rpm -qR  包名</code></p>
<p>RPM包校验<code v-pre>rpm  -V  已安装的文件</code></p>
<p>验证内容中的8个信息的具体内容下：</p>
<ul>
<li>S：文件大小是否改变</li>
<li>M：文件的类型或者文件的权限（rwx）是否被改变</li>
<li>5：文件MD5校验和是否改变（可以看成是文件内容是否改变）</li>
<li>D：设备的中，从代码是都改变</li>
<li>L：文件路径是都被改变</li>
<li>U：文件的属主（所有者）是否改变</li>
<li>G：文件的属组是否改变</li>
<li>T：文件的修改时间是够改变
文件类型：</li>
<li>c（config file）：配置文件</li>
<li>d（documentation）：普通文件</li>
<li>g（ghost file）：“鬼”文件，很少见，就是文件不应该被这个RPM包包含</li>
<li>l（license file）：授权文件</li>
<li>r（read file）：描述文件</li>
</ul>
<p>RPM包中文件提取<code v-pre>rpm2cpio  包全名  |\  cpio -idv. 文件绝对路径</code>（\：代表一行没有输完换行；.把指定的文件提取到当前文件下）</p>
<ul>
<li>rpm2cpio：将rpm包转换为cpio格式的命令</li>
<li>cpio ：是一个标准工具，它用于创建软件档案文件和从档案文件中提取文件</li>
<li>cpio  选项 &lt; [ 文件 | 设备 ]</li>
<li>-i：copy-in模式，。还原</li>
<li>-d：还原时自动化新建目录</li>
<li>-v：显示还原过程</li>
</ul>
<h3 id="yum在线包管理" tabindex="-1"><a class="header-anchor" href="#yum在线包管理"><span>yum在线包管理</span></a></h3>
<p><code v-pre>yum [options] [command] [package ...]</code></p>
<ul>
<li>options：可选，选项包括-h（帮助），-y（当安装过程提示选择全部为&quot;yes&quot;），-q（不显示安装的过程）等等。</li>
<li>command：要进行的操作。</li>
<li>package操作的对象。</li>
</ul>
<p>yum常用命令</p>
<ol>
<li>列出所有可更新的软件清单命令：<code v-pre>yum check-update</code></li>
<li>更新所有软件命令：<code v-pre>yum update</code></li>
<li>仅安装指定的软件命令：<code v-pre>yum install &lt;package_name&gt;</code></li>
<li>仅更新指定的软件命令：<code v-pre>yum update &lt;package_name&gt;</code></li>
<li>列出所有可安裝的软件清单命令：<code v-pre>yum list</code></li>
<li>删除软件包命令：<code v-pre>yum remove &lt;package_name&gt;</code></li>
<li>查找软件包 命令：<code v-pre>yum search &lt;keyword&gt;</code></li>
<li>清除缓存命令:
<ul>
<li><code v-pre>yum clean packages</code>: 清除缓存目录下的软件包</li>
<li><code v-pre>yum clean headers</code>: 清除缓存目录下的 headers</li>
<li><code v-pre>yum clean oldheaders</code>: 清除缓存目录下旧的 headers</li>
<li><code v-pre>yum clean, yum clean all</code> (= <code v-pre>yum clean packages</code>; <code v-pre>yum clean oldheaders</code>) :清除缓存目录下的软件包及旧的headers</li>
</ul>
</li>
</ol>
<h2 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令"><span>帮助命令</span></a></h2>
<p><code v-pre>man [命令或配置文件]</code>获取帮助信息</p>
<p><code v-pre>whatis [命令]</code>获取简单功能信息</p>
<p><code v-pre>apropos [配置文件]</code>获取简单作用信息</p>
<h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h2>
<p><code v-pre>useradd 用户名</code>添加新用户</p>
<p><code v-pre>passwd 用户名</code>给用户添加密码（root更改密码没有限制，普通用户更改不可以过于简单且只能改自己的密码）</p>
<p><code v-pre>who</code>查看登录用户信息
格式：登录用户名。
登录终端，tty本地终端，pts远程终端。时间。</p>
<p><code v-pre>W</code>获取跟详细的登录信息</p>
<h2 id="网络命令" tabindex="-1"><a class="header-anchor" href="#网络命令"><span>网络命令</span></a></h2>
<p><code v-pre>write &lt;用户名&gt;</code>给在线用户发信息，以ctrl+D保存结束</p>
<p><code v-pre>wall [message]</code>发广播信息</p>
<p><code v-pre>ping 地址</code>测试网络连通性</p>
<ul>
<li>-c指定发生次数</li>
</ul>
<p><code v-pre>ifconfig 网卡名称 ip地址</code>查看和设置网卡信息</p>
<p><code v-pre>last</code>列出目前与过去登入系统的用户信息</p>
<p><code v-pre>traceroute</code>显示数据包到主机间的路径</p>
<p><code v-pre>netstat [选项]</code>显示网络相关信息</p>
<ul>
<li>-t：tcp协议</li>
<li>-u：UDP协议</li>
<li>-l：监听</li>
<li>-r：路由</li>
<li>-n：显示IP地址和端口号</li>
<li>-an显示所有信息</li>
</ul>
<p><code v-pre>setup</code>配置网络窗口化配置 Redhat系列专业命令</p>
<p><code v-pre>mount [-t 文件系统]</code> 设备文件名挂载点</p>
<p><code v-pre>umount  设备文件名</code> 取消挂载点</p>
<h2 id="关机重启命令" tabindex="-1"><a class="header-anchor" href="#关机重启命令"><span>关机重启命令</span></a></h2>
<p><code v-pre>shutdown [选项] 时间</code></p>
<ul>
<li>-c：取消</li>
<li>-h：关机</li>
<li>-r：重启</li>
</ul>
<p><code v-pre>runlevel</code>查看运行级别</p>
<p><code v-pre>logout</code>退出登录</p>
<p><code v-pre>ln -s [原文件] [目标文件]</code>生成链接文件</p>
<ul>
<li>-s 创建软链接</li>
</ul>
</div></template>


