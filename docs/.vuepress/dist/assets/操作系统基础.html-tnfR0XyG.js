import{_ as l,c as s,a as n,o as e}from"./app-DyLo7YyT.js";const i="/assets/image-CGQdr4fx.png",a="/assets/image-1-B-W2IuqL.png",r="/assets/image-2-DBEi5mBs.png",p={};function o(c,t){return e(),s("div",null,t[0]||(t[0]=[n('<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h1><h2 id="进程" tabindex="-1"><a class="header-anchor" href="#进程"><span>进程</span></a></h2><p>进程是程序的一次动态是执行 进程是程序在一次数据集合上运行的过程，它是系统进行资源分配和调度的一个独立单位。它分为程序、进程控制块（PCB）和数据块。</p><p>进程和程序的区别：</p><ul><li>进程是程序的一次动态的执行，没有程序就没有进程。</li><li>程序是完成某个特定功能的一系列程序语句的集合，只要不是破坏它就永远都存在。</li><li>程序是静态的，进程是动态的。</li><li>进程由程序创建而产生，完成任务后因而消亡；</li><li>进程是系统进行资源分配和调度的独立单位，程序不是</li></ul><p>死锁：</p><ul><li>进程管理是操作系统的核心，但如果设计不当，就会出现死锁的问题。如果第一进程在等待一件不可能发生的事则进程死锁了。如果一个或多个进程产生死锁，就会造成系统死锁。</li><li>互斥条件</li><li>循环请求</li><li>不可中断</li><li>请求和保存条件</li></ul><p>银行家算法： 分配原则</p><ul><li>当一个进程对资源的最大需求量不超过系统中的资源数时可以接纳该进程。</li><li>进程可以分期请求资源，但请求的总数不能超过最大需求量</li><li>当系统现有资源不能满足进程尚需重要资源数时，对进程的请求可以推迟分配，但总能使进程在有限的时间里得到资源。</li></ul><h2 id="存储管理" tabindex="-1"><a class="header-anchor" href="#存储管理"><span>存储管理</span></a></h2><p>页式存储：将程序与内存均划分为同样大小的块，以页为单位将程序调入内存。 <img src="'+i+'" alt="alt text"></p><p>逻辑地址=页号+页内地址 物理地址=页帧号+页内地址 优点：利用率，碎片小，分配及管理简单。 缺点：增加了系统开销；可能产生抖动现象</p><p>段式存储：按用户作业中的自然段来划分逻辑空间，然后调入内存，段的长度可以不一样 <img src="'+a+'" alt="alt text"> 优点：多道程序共享，各段程序修改互不影响 缺点：内存利用率低，内存碎片浪费大</p><p>段页式存储：段式和页式的综合体，先分段，再分页。1个程序有若干个段，每个段中可以有若干个页，每页大小相同，但每段的大小不一样 <img src="'+r+'" alt="alt text"> 优点：空间浪费小，存储共享容易，存储保护容易，能动态连接。 缺点：由于管理软件的增加，复杂性和开销也随之增加，需要的硬件以及占用的内容也有所增加，使得执行速度大大下降</p><p><strong>最优算法（OPT）</strong>：淘汰不用的或最远的将来才用的页。 <strong>随机算法（RAND）</strong>：随机淘汰。 <strong>先进先出算法</strong>：可能产生抖动，（FIFO）选择最早调入的页。 <strong>最近最少使用算法</strong>：不会抖动。（LRU）选择离当前时刻最近的一段时间内使用最少的页 <strong>时间局部性</strong>：刚被访问的内容，立即又被访问 <strong>空间局部性</strong>：刚被访问的内容，临近的空间很快被访问</p><p>存取时间=寻道时间+等待时间， <strong>寻道时间</strong>：是指磁头移动到磁道的所需时间 <strong>等待时间</strong>：为等待读写的扇区转到磁头下方所用时间</p><p>先来先到服务（FCFS） 最短寻道时间优先SSTF 扫描算法SCAM（电梯算法） 循环扫描算法CSCAN（单向电梯算法） 作业管理： 文件管理： 直接索引：直接存放内容 一级间接索引：</p><h2 id="设备管理" tabindex="-1"><a class="header-anchor" href="#设备管理"><span>设备管理</span></a></h2><p><strong>程序控制（查询）方式</strong>：分为无条件和程序查询方式两种，方法简单，硬件开销小，但I/O能力不高，严重影响cpu的利用率。 <strong>程序中断方式</strong>：与程序控制方式相比，中断方式因为CPU无需等待而提高了传输请求的响应速度。与cpu并行，等待cpu的一个指令的最后一个总线周期结束后响应，指令周期结束。 <strong>DMA方式</strong>：DMA方式是为了在主存和外设之间实现高速，批量数据交换和设置的，DMA方式比程序控制方式与中断方式都高效，cpu响应需要在总线周期结束 通道方式 I/O处理机</p>',19)]))}const h=l(p,[["render",o],["__file","操作系统基础.html.vue"]]),d=JSON.parse('{"path":"/md/computer/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%9F%BA%E7%A1%80.html","title":"基础","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"进程","slug":"进程","link":"#进程","children":[]},{"level":2,"title":"存储管理","slug":"存储管理","link":"#存储管理","children":[]},{"level":2,"title":"设备管理","slug":"设备管理","link":"#设备管理","children":[]}],"git":{},"filePathRelative":"md/computer/操作系统基础.md"}');export{h as comp,d as data};
