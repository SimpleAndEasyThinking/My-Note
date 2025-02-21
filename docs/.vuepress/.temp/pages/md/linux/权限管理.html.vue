<template><div><h1 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理"><span>权限管理</span></a></h1>
<h2 id="用户文件" tabindex="-1"><a class="header-anchor" href="#用户文件"><span>用户文件</span></a></h2>
<p>如果我创建一个用户后会在home文件下建立一个文件。</p>
<blockquote>
<p>root用户为单独文件</p>
</blockquote>
<ul>
<li>普通用户：/home/用户名/，所有者和所属组都是此用户，权限是700</li>
<li>超级用户：/root/,所有者和所属组都是root用户，权限是550
<ul>
<li>(如果将普通用户改为超级用户该用户的目录不会改变。)</li>
</ul>
</li>
<li>用户的邮箱：/var/spool/mail/用户名/</li>
<li>用户模板目录：/etc/skel/</li>
<li>用户默认值文件：/etc/default/useradd   /etc/login.defs</li>
</ul>
<p>初始组：linux每添加一个用户就会以这个用户名创建一个组。初始组可以改不可以选。</p>
<p>附加组：用户可以加入多个其他的用户组，并拥有这些组的权限，附件组可以有多个</p>
<p>shell就是Linux的命令解释器，在/etc/passwd当中，除了标准shell是/bin/bash之外，还可以写如/sbin/nologin.</p>
<p>把时间戳换算为日期<code v-pre>date -d &quot;1970-01-01 16066 days&quot;</code></p>
<p>把日期换算为时间戳<code v-pre>echo$(($(date --date=&quot;2014/01/06&quot;+%s)/86400+1))</code></p>
<h2 id="用户管理命令" tabindex="-1"><a class="header-anchor" href="#用户管理命令"><span>用户管理命令</span></a></h2>
<p>用户添加命令<code v-pre>useradd [选项] 用户名</code>
选项：</p>
<ul>
<li>-u UID ：手工指定用户的UID号</li>
<li>-d 家目录：手工指定用户的家目录</li>
<li>-c 用户说明：手工指定用户的说明</li>
<li>-g 组名：手工指定用户的初始组</li>
<li>-G组名：指定用户的附加组</li>
<li>-s shell：手工指定用户的登录shell。默认是/bin/bash</li>
</ul>
<p>修改用户密码<code v-pre>passwd [选项] 用户名</code>
选项：</p>
<ul>
<li>-S ：查询用户密码的密码状态。仅root用户可用</li>
<li>-l ：暂时锁定用户。仅root用户可用</li>
<li>-u ：解锁用户。仅root</li>
<li>--stdin ：可以通过管道符输出的数据作为用户的密码。</li>
</ul>
<p>修改用户信息<code v-pre>usermod [选项] 用户名</code>
选项：</p>
<ul>
<li>-u UID</li>
<li>-c 用户说明</li>
<li>-G 组名</li>
<li>-L 锁定</li>
<li>-U 解锁</li>
</ul>
<p>修改用户密码状态<code v-pre>chage [选项] 用户名</code>
选项：</p>
<ul>
<li>-l ：查询密码状态</li>
<li>-d 日期：修改密码最后一次更改日期（shadow3字段）</li>
<li>-m 天数：两次密码修改间隔（4）</li>
<li>-M 天数：密码有效期（5）</li>
<li>-W 天数：密码过期前警告天数（6）</li>
<li>-I 天数：密码过后宽限天数（7）</li>
<li>-E 日期：账号失效时间（8）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">chage <span class="token parameter variable">-d</span> <span class="token number">0</span> 用户名</span>
<span class="line"><span class="token comment">#要求用户下次更改密码</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除用户<code v-pre>userdel [-r] 用户名</code>
选项：</p>
<ul>
<li>-r ：删除用户的同时删除用户家目录
id 用户  查询用户的所有ID</li>
</ul>
<p>用户切换命令<code v-pre>su [选项] 用户名</code>
选项：</p>
<ul>
<li>-：选项只使用“-”代表连带用户的环境变量一起切换</li>
<li>-c  ：仅执行一次命令，而不切换用户身份</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">su</span> <span class="token parameter variable">-root</span> <span class="token parameter variable">-c</span> <span class="token string">"useradd user3"</span></span>
<span class="line"><span class="token comment">#不切换成root，但是执行useradd命令添加userl用户</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户配置文件" tabindex="-1"><a class="header-anchor" href="#用户配置文件"><span>用户配置文件</span></a></h2>
<ol>
<li><strong>用户信息文件/etc/passwd</strong></li>
</ol>
<ul>
<li>第1字段：用户名称</li>
<li>第2字段：密码标志</li>
<li>第3字段：UID（用户ID）
<ul>
<li>0：超级用户</li>
<li>1-499：系统用户（为用户）</li>
<li>500-65535：普通用户，centos7从1000开始</li>
</ul>
</li>
<li>第4字段：GIU（用户初始组ID）</li>
<li>第5字段：用户说明（备注）</li>
<li>第6字段：家目录
<ul>
<li>普通用户：/home/用户名/</li>
<li>超级用户：/root/</li>
</ul>
</li>
<li>第7字段：登录之后的Shell</li>
</ul>
<ol>
<li><strong>影子文件/etc/shadow</strong></li>
</ol>
<p>权限为000</p>
<ul>
<li>第1字段：用户名</li>
<li>第2字段：加密密码
<ul>
<li>加密算法升级为SHA512散列加密算法</li>
<li>如果密码位是“!!”或“*”代表没有密码，不能登录</li>
</ul>
</li>
<li>第3字段：密码最后一次修改日期
<ul>
<li>使用1970年1月1日作为标准时间，每过一天时间戳加1</li>
</ul>
</li>
<li>第4字段：两次密码的修改间隔时间（和第3字段相比）</li>
<li>第5字段：密码有效期（和第3字段相比）</li>
<li>第6字段：密码修改到期前的警告天数（和第5字段相比）</li>
<li>第7字段：密码过期后的宽限天数（和第5字段相比）
<ul>
<li>0：表示密码过期后立即失效</li>
<li>-1：则表示密码永远不会失效（默认）</li>
</ul>
</li>
<li>第8字段：账号失效时间
<ul>
<li>要用时间戳表示</li>
</ul>
</li>
<li>第9字段：保留</li>
</ul>
<ol>
<li><strong>组信息文件/etc/group和组密码文件/etc/gshadow</strong></li>
</ol>
<p>group：</p>
<ul>
<li>第1字段：组名</li>
<li>第2字段：密码标志</li>
<li>第3字段：GIU（同上）</li>
<li>第4字段：组中附加用户（不会显示初始用户）</li>
</ul>
<p>gshadow：</p>
<ul>
<li>第1字段：组名</li>
<li>第2字段：组密码</li>
<li>第3字段：组管理员用户名</li>
<li>第4字段：组中附加用户</li>
</ul>
<h2 id="用户组管理" tabindex="-1"><a class="header-anchor" href="#用户组管理"><span>用户组管理</span></a></h2>
<p>添加用户组<code v-pre>groupadd [选项] 组名</code>
选项：</p>
<ul>
<li>-g GID ：指定组ID</li>
</ul>
<p>修改用户组<code v-pre>groupmod [选项] 组名</code>
选项：</p>
<ul>
<li>-g GID：修改组ID</li>
<li>-n 新组名：修改组名</li>
</ul>
<p>删除用户组<code v-pre>groupdel 组名</code></p>
<p>把用户添加入组或从组中删除<code v-pre>gpasswd 选项组名</code>
选项：</p>
<ul>
<li>-a 用户名：把用户加入组</li>
<li>-d 用户名：把用户从组中删除</li>
</ul>
<h2 id="acl权限" tabindex="-1"><a class="header-anchor" href="#acl权限"><span>ACL权限</span></a></h2>
<p>用于解决身份不足的问题解决</p>
<p>开启acl
<code v-pre>dumpe2fs -h 分区</code></p>
<blockquote>
<p>dumpe2fs命令是查询指定分区详细文件系统信息的命令</p>
</blockquote>
<ul>
<li>-h 仅显示超级中信息，而不显示磁盘快的详细信息</li>
</ul>
<p><code v-pre>mount -o remount,acl /</code></p>
<blockquote>
<p>重新挂载根分区，并挂载加入acl权限（临时）</p>
</blockquote>
<p><code v-pre>vi /etc/fstab</code></p>
<p><code v-pre>UUID=c2………../ ext4 defaults,acl 1 1</code></p>
<blockquote>
<p>加入acl(永久)</p>
</blockquote>
<p><code v-pre>mount -o remount /</code></p>
<blockquote>
<p>重新挂载文件系统或重启动系统，使修改生效</p>
</blockquote>
<h3 id="查看与设定" tabindex="-1"><a class="header-anchor" href="#查看与设定"><span>查看与设定</span></a></h3>
<p>查看ACL命令<code v-pre>getfacle 文件名</code></p>
<p>设定ACL权限的命令<code v-pre>setfacl 选项文件名</code>
选项：</p>
<ul>
<li>-m (u&lt;用户权限&gt;:用户:权限)/(g&lt;组权限&gt;:组名:权限)/(m&lt;最大有效权限&gt;:权限)/(d&lt;默认&gt;:u&lt;用户&gt;:用户名:权限[只允许目录])   设定ACL权限</li>
<li>-x (同上无需指定权限)   删除指定的ACL权限</li>
<li>-b   删除所有的ACL权限</li>
<li>-d   设定默认ACL权限</li>
<li>-k   删除默认ACL权限</li>
<li>-R   递归设定ACL权限 [必须跟着m后面 | 只允许目录]</li>
</ul>
<p>mask是用来指定最大有效权限的。如果我给用户赋予了ACL权限，是需要和mask的权限“相与”才能得到用户的真正权限
设置默认默认ACL权限的作用是如果给父目录设定了默认ACL权限，那么父目录中所有新建的子文件都会继承父目录的ACL权限</p>
<h2 id="文件系统属性chattr权限" tabindex="-1"><a class="header-anchor" href="#文件系统属性chattr权限"><span>文件系统属性chattr权限</span></a></h2>
<p><code v-pre>chattr [+-=][选项] 文件或目录名</code></p>
<p>+：增加权限
-：删除权限
=：等于某权限
选项：</p>
<ul>
<li>i: 如果对文件设置i属性，那么不允许文件进行删除、改名，也不能添加和修改数据;如果对目录设置i属性，那么只能修改目录下文件的数据，但不允许建立和删除文件。(对root生效)</li>
<li>a:如果对文件设置a属性，那么只能在文件中增加数据，但是不能删除也不能修改数据;如果对目录设置a属性，那么只允许在目录中建立和修改文件，但是不允许删除</li>
</ul>
<h2 id="系统命令权限sudo" tabindex="-1"><a class="header-anchor" href="#系统命令权限sudo"><span>系统命令权限sudo</span></a></h2>
<ul>
<li>root把本来只能超级用户执行的命令赋予普通用户执行</li>
<li>sudo的操作对象是系统命令</li>
</ul>
<p><code v-pre>sudo -l</code></p>
<blockquote>
<p>查看可用的sudo命令</p>
</blockquote>
<p>赋予权限</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">#visudo</span></span>
<span class="line"><span class="token comment">#实际修改的是/etc/sudoers文件</span></span>
<span class="line">root     <span class="token assign-left variable">ALL</span><span class="token operator">=</span>（ALL） ALL</span>
<span class="line"><span class="token comment">#用户名  被管理主机的地址=（可使用的身份）  授权命令（绝对路径）</span></span>
<span class="line"><span class="token comment">#%wheel   ALL=(ALL)  ALL</span></span>
<span class="line"><span class="token comment">#%组名   被管理组主机的地址=(可使用的身份)  授权命令（绝对路径）</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件特殊权限" tabindex="-1"><a class="header-anchor" href="#文件特殊权限"><span>文件特殊权限</span></a></h2>
<p>除了 rwx 权限，还会用到 s 权限</p>
<h3 id="setuid" tabindex="-1"><a class="header-anchor" href="#setuid"><span>SetUID</span></a></h3>
<p>SUID 特殊权限仅适用于<strong>可执行文件</strong>，所具有的功能是，只要用户对设有 SUID 的文件有执行权限，那么当用户执行此文件时，会以文件所有者的身份去执行此文件，一旦文件执行结束，身份的切换也随之消失。</p>
<p>功能：</p>
<ul>
<li>只有可以执行的二进制程序(可执行文件)才能设定SUID权限</li>
<li>命令执行者要对该程序拥有x (执行)权限</li>
<li>命令执行者在执行该程序时获得该程序文件属主的身份(在执行程序的过程中临时替代为文件的属主)</li>
<li>SetUID权限只在该程序执行过程中有效，也就是说身份改变只在程序执行过程中有效</li>
</ul>
<p>设定 4代表SUID 2代表SGID 1代表SBIT</p>
<p><code v-pre>chmod 4755 文件名（如果出现大写S为报错）</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">chmod</span> u+s 文件名</span>
<span class="line"></span>
<span class="line"><span class="token function">chmod</span> <span class="token number">755</span> 文件名</span>
<span class="line"></span>
<span class="line"><span class="token function">chmod</span> u-s 文件名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>温馨提示：（不要设置SUID）</p>
</blockquote>
<p>关键目录应严格控制写权限。比如“/”、“/usr”等</p>
<p>用户的密码设置要严格遵守密码三原则</p>
<p>对系统中默认应该具有SetUID权限的文件作一列表，定时检查有没有这之外的文件被设置了SetUID权限</p>
<h3 id="setgid" tabindex="-1"><a class="header-anchor" href="#setgid"><span>SetGID</span></a></h3>
<p>当 s 权限位于所属组的 x 权限位时，就被称为 SetGID，简称 SGID 特殊权限</p>
<p>对文件的作用：</p>
<ul>
<li>只有可执行的二进制程序才能设置SGID权限</li>
<li>命令执行者要对该程序拥有x (执行)权限.</li>
<li>命令执行在执行程序的时候，组身份升级为该程序文件的属组</li>
<li>SetGID权限同样只在该程序执行过程中有效,也就是说组身份改变只在程序执行过程中有效</li>
</ul>
<p>执行locate命令时发生的</p>
<ol>
<li>/usr/bin/locate是可执行二进制程序，可以赋予SGID</li>
<li>执行用户lamp对/usr/bin/locate命令拥有执行权限</li>
<li>执行/usr/bin/locate命令时，组身份会升级为slocate组，slocate组 对/var/lib/mlocate/mlocate.db数据库拥有r权限，所以普通用户可以使用locate命令查询mlocate.db数据库</li>
<li>命令结束，lamp用户的组身份返回为lamp组</li>
</ol>
<p>对目录的作用</p>
<ul>
<li>普通用户必须对此目录拥有r和x权限，才能进入此目录</li>
<li>普通用户在此目录中的有效组会变成此目录的属组</li>
<li>若普通用户对此目录拥有w权限时，新建的文件的默认属组是这个目录的属组</li>
</ul>
<h3 id="sticky-bit" tabindex="-1"><a class="header-anchor" href="#sticky-bit"><span>Sticky BIT</span></a></h3>
<p>粘着位作用</p>
<ul>
<li>粘着位目前只对目录有效</li>
<li>普通用户对该目录拥有w和x权限，即普通用户可以在此目录拥有写入权限</li>
<li>如果没有粘着位，因为普通用户拥有w权限，所以可以删除此目录下所有文件，包括其他用户建立的文件。一但赋予了粘着位，除了root可以删除所有文件，普通用户就算拥有w权限，也只能删除自己建立的文件，但是不能删除其他用户建立的文件</li>
</ul>
</div></template>


