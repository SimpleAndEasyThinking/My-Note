<template><div><h1 id="服务管理" tabindex="-1"><a class="header-anchor" href="#服务管理"><span>服务管理</span></a></h1>
<h2 id="服务的结构" tabindex="-1"><a class="header-anchor" href="#服务的结构"><span>服务的结构</span></a></h2>
<p><img src="@source/md/linux/images/服务管理/image.png" alt="alt text"></p>
<p>查询已安装的服务
RPM包安装的服务</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">    <span class="token function">chkconfig</span> <span class="token parameter variable">--list</span></span>
<span class="line"><span class="token comment">#查看服务自启动状态，可以看到所有RPM包安装的服务</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>源码包安装的服务
查看服务安装位置，一般是/usr/local/下
RPM安装服务和源码包安装服务的区别就是安装位置的不同
源码包安装在指定位置，一般是/usr/local/
RPM包安装在默认位置中</p>
<h3 id="独立服务" tabindex="-1"><a class="header-anchor" href="#独立服务"><span>独立服务</span></a></h3>
<p>启动</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">/etc/init.d/<span class="token punctuation">[</span>绝对路径<span class="token punctuation">]</span>独立服务名  startistop<span class="token operator">|</span>statuslrestart<span class="token operator">|</span></span>
<span class="line"><span class="token function">service</span>  独立服务名 start<span class="token operator">|</span>stoplrestart<span class="token operator">|</span>status</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>自启动
<code v-pre>chkconfig [--level 运行级别] [独立服务名] [on|off]</code>
修改<code v-pre>/etc/rc.d/rc.local</code>文件
使用ntsysv命令管理自启动[red hat]</p>
<h3 id="基于xinetd服务" tabindex="-1"><a class="header-anchor" href="#基于xinetd服务"><span>基于xinetd服务</span></a></h3>
<p>1、安装xinetd与telnet</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># yum  -y  install xinetd</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># yum -y install telnet -server</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码包管理" tabindex="-1"><a class="header-anchor" href="#源码包管理"><span>源码包管理</span></a></h2>
<p>1、源码包安装服务的启动，
使用绝对路径，调用启动脚本来启动。不同的源码包的启动脚本不同。可以查看源码包的安装说明，查看启动脚本的方法。
<code v-pre>/usr/local/apache2/bin/apachectl startlstop</code></p>
<p>2、源码包服务的自启动
<code v-pre>[root@localhost ~]# vi /etc/rc.d/rc.local</code>
加入
<code v-pre>/usr/local/ apache2/bin/apachectl start</code></p>
<p>3、让源码包服务被服务管理命令识别
让源码包的apache服务能被service命令管理启动
<code v-pre>In -s /usr/local/apache2/bin/apachectl /etc/init.d/apache</code></p>
</div></template>


