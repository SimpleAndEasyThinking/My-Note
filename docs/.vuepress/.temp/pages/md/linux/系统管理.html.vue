<template><div><h1 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理"><span>系统管理</span></a></h1>
<h2 id="进程" tabindex="-1"><a class="header-anchor" href="#进程"><span>进程</span></a></h2>
<p>进程不仅仅是一段可执行程序代码，还包含其他资源，比如：打开的文件、挂起的信号、内核内部数据、处理器状态、一个或多个具有内存映射的内存地址空间、执行线程、用来存放全局变量的数据段等。</p>
<p>线程在linux中属于特殊的进程。</p>
<p>进程提供两种虚拟机制,虚拟处理器和虚拟内存
<strong>虚拟处理器</strong>：给予进程一种假象，让进程认为自己独享处理器
<strong>虚拟内存</strong>:让进程在分配和管理内存时觉得自己拥有整个系统的所有内存资源</p>
<p>程序本身不是进程，进程是处于执行期的程序以及相关的资源的总称。 存在两个或多个不同的进程执行同一程序，并且两个或两个以上并存的进程还可以共享许多，如：打开的文件、地址空间等资源</p>
<p>fork()和exec()这两组函数完成进程的创建和执行。</p>
<p>注意：进程的另一个名字是任务(task)。Linux内核通常把进程也叫做任务。</p>
<h2 id="进程创建" tabindex="-1"><a class="header-anchor" href="#进程创建"><span>进程创建</span></a></h2>
<p>Unix的进程创建很特别，主要方式是将步骤分解成2个函数：fork()和exec()
首先，fork()通过拷贝当前进程创建一个子进程。子进程和父进程之间的唯一区别是PID、PPID和某些资源和统计量。
exec()函数负责读取可执行文件并将其载入地址空间开始运行。</p>
<h3 id="写实拷贝" tabindex="-1"><a class="header-anchor" href="#写实拷贝"><span>写实拷贝</span></a></h3>
<h2 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理"><span>进程管理</span></a></h2>
<p>1、进程简介
进程是正在执行的一一个程序或命令，每一个进程都是一个运行的实体，都有自己的地址空间，并占用一定的系统资源。</p>
<p>2、进程管理的作用</p>
<ul>
<li>判断服务器健康状态</li>
<li>查看系统中所有进程</li>
<li>杀死进程</li>
</ul>
<p>3、查看系统中所有进程</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps aux</span></span>
<span class="line"><span class="token comment">#查看系统中所有进程，使用BSD 操作系统格式</span></span>
<span class="line"><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps -le</span></span>
<span class="line"><span class="token comment">#查看系统中所有进程，使用Linux标准命令格式</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>USER:该进程是由哪个用户产生的;</li>
<li>PID:进程的ID号;</li>
<li>%CPU:该进程占用CPU资源的百分比，占用越高，进程越耗费资源;</li>
<li>%MEM:该进程占用物理内存的百分比，占用越高，进程越耗费资源;</li>
<li>VSZ:该进程占用虚拟内存的大小，单位KB;</li>
<li>RSS:该进程占用实际物理内存的大小，单位KB;</li>
<li>TTY:该进程是在哪个终端中运行的。其中tty1-tty7代表本地控制台终端，tty1-tty6是 本地的字符界面终端，tty7是图形终端。pts/0-256代表 虚拟终端。</li>
<li>STAT:进程状态。常见的状态有: R:运行、S:睡眠、T:停止状态、s:包含子进程、+:位于后台</li>
<li>START:该进程的启动时间</li>
<li>TIME:该进程占用CPU的运算时间，注意不是系统时间</li>
<li>COMAND: 产生此进程的命令名</li>
</ul>
<p>4、查看系统健康状态
[root@localhost^ ~]# top [选项]
选项:</p>
<ul>
<li>-d  秒数:     指定top命令每隔几秒更新。默认是3秒在top命令的交互模式当中可以执行的命令:</li>
<li>?或h:        显示交互模式的帮助</li>
<li>P:           以CPU使用率排序，默认就是此项，</li>
<li>M:          以内存的使用率排序</li>
<li>N:           以PID排序</li>
<li>q:               退出top</li>
</ul>
<p><img src="@source/md/linux/images/系统管理/image.png" alt="alt text"></p>
<p>第一段</p>
<ul>
<li>top - 09:44:56[当前系统时间]</li>
<li>16 days[系统已经运行了16天]</li>
<li>1 user[几个用户当前登录]</li>
<li>load average: 9.59, 4.75, 1.92[系统在之前1分钟，5分钟，15分钟的平均负载。一般认为小于1时，负载较小。如果大于1，系统已经超出负荷。]</li>
</ul>
<p>第二段</p>
<ul>
<li>Tasks: 145 total[总进程数]</li>
<li>2 running[正在运行的进程数]</li>
<li>143 sleeping[睡眠的进程数]</li>
<li>0 stopped[停止的进程数]</li>
<li>0 zombie[冻结进程数]</li>
</ul>
<p>第三段</p>
<ul>
<li>Cpu(s): 99.8%us[用户空间占用CPU百分比]</li>
<li>0.1%sy[内核空间占用CPU百分比]</li>
<li>0.0%ni[用户进程空间内改变过优先级的进程占用CPU百分比]</li>
<li>0.2%id[空闲CPU百分比]</li>
<li>0.0%wa[等待输入输出的CPU时间百分比]</li>
<li>0.0%hi[处理硬件中断的CPU时间]</li>
<li>0.0%si[处理软件中断的CPU时间]</li>
<li>0.0%st[st (Steal time) 虚拟时间百分比。就是当有虚拟机时，虚拟CPU等待实阿CPU的时间百分比。]</li>
</ul>
<p>第四段</p>
<ul>
<li>Mem: 4147888k total[物理内存总量]</li>
<li>2493092k used[使用的物理内存总量]</li>
<li>1654796k free[空闲内存总量]</li>
<li>158188k buffers[用作内核缓存的内存量]
第五段</li>
<li>Swap:  5144568k total[交换区总量]</li>
<li>56k used[使用的交换区总量]</li>
<li>5144512k free[空闲交换区总量]</li>
<li>2013180k cached[缓冲的交换区总量]</li>
</ul>
<p>5、kill命令</p>
<p>[root@localhost ~]# kill -l
<code v-pre>#查看可用的进程信号</code></p>
<p>| 信号编号 | 信号名 | 含义                                       |
| -------- | ------ |
| 1        | HUP    | 挂起信号                                   |
| 2        | INT    | 中断信号                                   |
| 3        | QUIT   | 退出信号                                   |
| 9        | KILL   | 杀死信号                                   |
| 11       | SEGV   | 段错误信号                                 |
| 15       | TERM   | 终止信号，k训命令默认发送的信号类型        |
| 18       | CONT   | 继续运行信号，恢复之前接受了STOP信号的进程 |
| 19       | STOP   | 暂停信号                                   |</p>
<h2 id="进程描述符及任务结构" tabindex="-1"><a class="header-anchor" href="#进程描述符及任务结构"><span>进程描述符及任务结构</span></a></h2>
<p>内核把进程的列表存放叫做任务队列(task list) 通常采用双向循环链表。表中每一个节点类型为task_struct描述符。</p>
<p><img src="@source/md/linux/images/linux进程/image.png" alt="alt text"></p>
<h3 id="分配进程描述符" tabindex="-1"><a class="header-anchor" href="#分配进程描述符"><span>分配进程描述符</span></a></h3>
<p>Linux通过slab分配器分配task_struct结构。  可以对象复用和缓存着色(cache coloring)
在2.6内核前，各个进程的task_struct存放在它们内核栈的尾端，主要是方便一些硬件体系只要通过栈指针就你访问到它的位置。
用slab分配器动态生成task_struct，只需在栈顶或栈低创建一个新的结构struct thread_info
每个任务的thread_info结构在它的内核栈的尾端分配，task域存放的是指向该任务的task_struct的指针。</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c" data-title="c"><pre v-pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">thread_info</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">task_struct</span> <span class="token operator">*</span>task <span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">exec_domain</span> <span class="token operator">*</span>exec_domain<span class="token punctuation">;</span></span>
<span class="line">    _u32 flags<span class="token punctuation">;</span></span>
<span class="line">    _u32 status </span>
<span class="line">    _u32 cpu<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> preempt_count <span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">mm_segment_t</span> addr_limit<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">restart_block</span> restart_block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token operator">*</span>sysenter_return<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> uaccesserr<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/md/linux/images/linux进程/image-1.png" alt="alt text"></p>
<h3 id="进程描述符的存放" tabindex="-1"><a class="header-anchor" href="#进程描述符的存放"><span>进程描述符的存放</span></a></h3>
<p>内核通过一个唯一标识值或PID来标识每个进程。PID是一个数，表示为pid_t隐含类型。内核把每个进程的PID存放在它们各自的进程描述符中。
访问任务通常需要获得指向其task_struct的指针，实际上，内核中大部分处理程序的代码都是直接通过task_struct进行。
通过current宏查找到当前正在运行进程描述符的速度非常重要
可以设置一个专门的寄存器来存放当前进程，可以加快访问。但寄存器不足，就只能在内核栈的尾端创建thread_info结构,通过偏移量查找task_struct结构。</p>
<h3 id="进程状态" tabindex="-1"><a class="header-anchor" href="#进程状态"><span>进程状态</span></a></h3>
<p>进程描述符中的state域描述了进程的当前状态
状态分为：</p>
<ol>
<li>运行(正在运行或在运行队列中等待)</li>
<li>中断(休眠中, 受阻, 在等待某个条件的形成或接受到信号)</li>
<li>不可中断(收到信号不唤醒和不可运行, 进程必须等待直到有中断发生)</li>
<li>僵死(进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放)</li>
<li>停止(进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行)</li>
</ol>
<p>ps工具标识进程的5种状态码:
D 不可中断 uninterruptible sleep (usually IO)
R 运行 runnable (on run queue)
S 中断 sleeping
T 停止 traced or stopped
Z 僵死 a defunct (&quot;zombie&quot;) process</p>
<h3 id="设置当前进程状态" tabindex="-1"><a class="header-anchor" href="#设置当前进程状态"><span>设置当前进程状态</span></a></h3>
<p>内核调整某个进程的状态。
set_task_state(task,state);   /将任务task的状态设置为state
该函数会在必要时候设置内存屏障来强制其他处理器作重新排序。(针对有SMP系统)
注意：set_current_state(state)和set_task_state(current,state)含义相等</p>
<h3 id="进程上下文" tabindex="-1"><a class="header-anchor" href="#进程上下文"><span>进程上下文</span></a></h3>
<p>代码从一个可执行文件载入到进程的地址空间执行，一般程序在用户空间执行，当程序发生了系统调用或触发了某个异常，它就陷入了内核空间。此时，称内核“代表进程执行”并处于进程上下文中。</p>
<h3 id="进程家族树" tabindex="-1"><a class="header-anchor" href="#进程家族树"><span>进程家族树</span></a></h3>
<p>Linux系统的进程之间是存在继承关系，所有的进程都是PID为1的init进程的后代。内核系统启动的最后阶段启动init进程。进程会读取系统的初始化脚本并执行其他的相关程序，最终完成系统启动的整个过程。
系统中的每个进程必有一个父进程，也有零个或多个子进程。
task_struct都包含一个指向父进程tast_struct、叫parent的指针，还包含一个称为children的子进程链表。</p>
<p><em>获得其父进程的进程描述符</em> :
<code v-pre>struct task_struct *my_parent = current-&gt;parent;</code>
<em>也可以依次访问子进程</em>：</p>
<div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C" data-title="C"><pre v-pre><code><span class="line">struct task_struct *task;</span>
<span class="line">struct list_head *list;</span>
<span class="line">list_for_each(list,&amp;current-&gt;children){</span>
<span class="line">    task = list_entry(list,struct task_struct,sibling);</span>
<span class="line">    /*task 现在指向当前的某个子进程 */</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>init进程的进程描述符是作为init_task静态分配的</em>:</p>
<div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C" data-title="C"><pre v-pre><code><span class="line">struct task_struct *task;</span>
<span class="line">for(task = current; task !=&amp;init_task; task = task-&gt;parent);</span>
<span class="line">/* task 现在指向init*/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过这种继承体系从系统的任何一个进程出发查找到任意指定的其他进程。
任务队列本来就是一个双向的循环链表。
获取给定程序的下一个进程
<code v-pre>list_entry(task-&gt;tasks.next,struct task_struct,tasks)</code>
获取前一个进程的方法与之相同
<code v-pre>list_entry(task-&gt;tasks.prev,struct task_struct,tasks)</code>
这两个例程分别通过next_task(task)宏和prev_task(task)宏实现。</p>
<p>for_each_process(task)宏提供了依次访问整个任务队列的能力。</p>
<div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C" data-title="C"><pre v-pre><code><span class="line">struct task_struct *task;</span>
<span class="line">for_each_process(task){</span>
<span class="line">    /*打印出每一个任务的名称和PID*/</span>
<span class="line">    printk(&quot;%s[%d]\n&quot;,task-&gt;comm,task-&gt;pid);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>提示：在一个拥有大量进程的系统中通过重复来遍历所有的进程代价很大的，因此如果没有充足理由(或者别无他法)，别这样做</p>
</blockquote>
</div></template>


