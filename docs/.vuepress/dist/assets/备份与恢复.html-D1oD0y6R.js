import{_ as t,c as a,a as n,o as e}from"./app-DyLo7YyT.js";const d="/assets/image-Dj5XZGL-.png",l={};function i(r,s){return e(),a("div",null,s[0]||(s[0]=[n('<h1 id="备份与恢复" tabindex="-1"><a class="header-anchor" href="#备份与恢复"><span>备份与恢复</span></a></h1><h2 id="备份" tabindex="-1"><a class="header-anchor" href="#备份"><span>备份</span></a></h2><h3 id="备份的数据" tabindex="-1"><a class="header-anchor" href="#备份的数据"><span>备份的数据</span></a></h3><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td>/root</td><td>超级用户家目录</td></tr><tr><td>/home</td><td>普通用户的家目录</td></tr><tr><td>/var/spool/mail</td><td>系统邮件目录</td></tr><tr><td>/etc</td><td>配置文件目录</td></tr><tr><td>/boot</td><td>系统启动相关目录</td></tr><tr><td>/var/log</td><td>系统日志发(用于事故调查)</td></tr><tr><td>/var/spool/cron/</td><td>存储每个用户的定时任务文件</td></tr><tr><td>/var/spool/at/</td><td>保存定时任务的文件夹</td></tr><tr><td>/var/lib/</td><td>程序执行过程中使用到的一些数据文件、在该目录下各个软件有各自的目录</td></tr></tbody></table><h3 id="备份的种类" tabindex="-1"><a class="header-anchor" href="#备份的种类"><span>备份的种类</span></a></h3><h4 id="完整备份之累积备份" tabindex="-1"><a class="header-anchor" href="#完整备份之累积备份"><span>完整备份之累积备份</span></a></h4><p>相当重要的服务主机，需要在最短的时间内复原系统。 累积备份的原则:日积月累的数据会导致完全备份困难，就有了<strong>累积备份</strong>和<strong>差异备份</strong>。 <img src="'+d+`" alt="alt text"></p><p>累积备份使用的备份软件</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 1\\. 用 dd 来将 /dev/sda 备份到完全一模一样的 /dev/sdb 硬盘上：</span></span>
<span class="line"><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/sda of=/dev/sdb</span></span>
<span class="line"><span class="token comment"># 由于 dd 是读取扇区，所以 /dev/sdb 这颗磁盘可以不必格式化！非常的方便！</span></span>
<span class="line"><span class="token comment"># 只是你会等非常非常久！因为 dd 的速度比较慢！</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2\\. 使用 cpio 来备份与还原整个系统，假设储存媒体为 SATA 磁带机：</span></span>
<span class="line"><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># find / -print &amp;#124; cpio -covB &amp;gt; /dev/st0  &amp;lt;==备份到磁带机</span></span>
<span class="line"><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cpio -iduv &amp;lt; /dev/st0                  &amp;lt;==还原</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const c=t(l,[["render",i],["__file","备份与恢复.html.vue"]]),o=JSON.parse('{"path":"/md/linux/%E5%A4%87%E4%BB%BD%E4%B8%8E%E6%81%A2%E5%A4%8D.html","title":"备份与恢复","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"备份","slug":"备份","link":"#备份","children":[{"level":3,"title":"备份的数据","slug":"备份的数据","link":"#备份的数据","children":[]},{"level":3,"title":"备份的种类","slug":"备份的种类","link":"#备份的种类","children":[]}]}],"git":{},"filePathRelative":"md/linux/备份与恢复.md"}');export{c as comp,o as data};
