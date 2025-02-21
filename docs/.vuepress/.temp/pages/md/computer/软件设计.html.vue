<template><div><h1 id="需求的任务" tabindex="-1"><a class="header-anchor" href="#需求的任务"><span>需求的任务</span></a></h1>
<h2 id="需求的过程" tabindex="-1"><a class="header-anchor" href="#需求的过程"><span>需求的过程</span></a></h2>
<ul>
<li>问题识别</li>
<li>分析与综合</li>
<li>编制需求分析文档</li>
<li>需求分析与评审</li>
</ul>
<h2 id="需求的分类" tabindex="-1"><a class="header-anchor" href="#需求的分类"><span>需求的分类</span></a></h2>
<ul>
<li>功能需求</li>
<li>非功能需求</li>
<li>设计约束</li>
</ul>
<h2 id="应用的工具" tabindex="-1"><a class="header-anchor" href="#应用的工具"><span>应用的工具</span></a></h2>
<ul>
<li>数据流图</li>
<li>数据字典</li>
<li>判定表</li>
<li>判定树</li>
</ul>
<h1 id="开发方法" tabindex="-1"><a class="header-anchor" href="#开发方法"><span>开发方法</span></a></h1>
<h2 id="结构化方法" tabindex="-1"><a class="header-anchor" href="#结构化方法"><span>结构化方法</span></a></h2>
<ul>
<li>用户至上</li>
<li>严格区分工作阶段，每阶段有任务和结果</li>
<li>强调系统开发过程的整体性和全局性</li>
<li>系统开发过程工程化，文档资料标准化</li>
<li>自顶而下，逐步分解（求精）</li>
</ul>
<h1 id="原型法" tabindex="-1"><a class="header-anchor" href="#原型法"><span>原型法</span></a></h1>
<h2 id="面向对象方法" tabindex="-1"><a class="header-anchor" href="#面向对象方法"><span>面向对象方法</span></a></h2>
<ul>
<li>更好的复用性</li>
<li>关键在于建立一个全面，合理统一的模型</li>
<li>分析，设计，实现三个阶段，界限不明确</li>
</ul>
<h2 id="面向服务的方法" tabindex="-1"><a class="header-anchor" href="#面向服务的方法"><span>面向服务的方法</span></a></h2>
<hr>
<h1 id="内聚和耦合" tabindex="-1"><a class="header-anchor" href="#内聚和耦合"><span>内聚和耦合</span></a></h1>
<p>偶然内聚：一个模块内的各处理元素之间没有任何联系。
逻辑内聚：模块内执行若干个逻辑上相似的功能，通过参数确认
时间内聚：把需要执行的动作组合在一起形成的
过程内聚：一个模块完成多个任务，但必须按指定过程执行
通讯内聚：模块内的所有处理元素都在同一个数据结构上操作，或各处理使用相同的输入数据或产生相同的输出数据
顺序内聚：模块中的各个处理元素都密切相关于同一功能且必须顺序执行,前一个功能的输出就是下一个功能的元素
功能内聚：所有元素共同作用完成一个功能。</p>
<p>无直接耦合：指两个模块之间没有直接的关系。
数据耦合： 指两个模块有调用关系，传递的是简单的数据值。
标记耦合：模块间传递的数据结构
控制耦合：指一个模块被另一个模块调用并传递控制变量，被调用的模块通过该控制变量的值选择执行模块的某一功能。
外部耦合：模块间通过软件之外的环境联结
公共耦合：通过一个公共数据环境相互作用的模块间的耦合
内容耦合：当一个模块直接使用另一个模块的内部数据，或是通过非正常入口转入另一个模块内部。</p>
<h1 id="软件生产文档" tabindex="-1"><a class="header-anchor" href="#软件生产文档"><span>软件生产文档</span></a></h1>
<blockquote>
<p>IPO图
PDL
PAD
程序流程图
N/S盒图</p>
</blockquote>
<h2 id="开发文档" tabindex="-1"><a class="header-anchor" href="#开发文档"><span>开发文档</span></a></h2>
<ul>
<li>可行性研究和项目任务书</li>
<li>需求规格说明</li>
<li>功能规格说明</li>
<li>设计规格说明（包括程序和数据规格说明）</li>
<li>开发计划</li>
<li>软件集成和测试计划</li>
<li>质量保证计划、标准、进度</li>
<li>安全和测试信息</li>
</ul>
<h2 id="产品文档" tabindex="-1"><a class="header-anchor" href="#产品文档"><span>产品文档</span></a></h2>
<ul>
<li>培训手册</li>
<li>参考手册和用户指南</li>
<li>软件支持手册</li>
<li>产品手册和消息广告</li>
</ul>
<h2 id="管理文档" tabindex="-1"><a class="header-anchor" href="#管理文档"><span>管理文档</span></a></h2>
<ul>
<li>开发过程的每个阶段</li>
<li>软件变更情况的记录</li>
<li>相对于开发的判断</li>
<li>职责定义</li>
</ul>
<h1 id="cmmi-软件能力成熟度模型认证" tabindex="-1"><a class="header-anchor" href="#cmmi-软件能力成熟度模型认证"><span>CMMI(软件能力成熟度模型认证)</span></a></h1>
<p>初始级：混乱，个人决定团队
可管理级：纪律化的过程
已定义级：标准一致的过程 EX文档化
定量管理级：对软件的过程和质量可以管控
优化管理级：不断的持续的优化改进</p>
<h1 id="软件开发模型" tabindex="-1"><a class="header-anchor" href="#软件开发模型"><span>软件开发模型</span></a></h1>
<h2 id="瀑布模型" tabindex="-1"><a class="header-anchor" href="#瀑布模型"><span>瀑布模型</span></a></h2>
<p>定义阶段：软件计划、需求分析
开发阶段：软件设计、程序编码、软件测试
维护阶段：运行维护</p>
<ol>
<li>适合开发需求明确的，没有或很小的变化的</li>
<li>分析设计人员适合的领域</li>
<li>低风险的</li>
</ol>
<h2 id="快速原型模型" tabindex="-1"><a class="header-anchor" href="#快速原型模型"><span>快速原型模型</span></a></h2>
<p>1）对所开发的领域比较熟悉而且有快速的原型开发工具
2）进行产品1移植或升级时，或已有产品原型进行客户化工作时，原型模型是非常适合
3）容易适应需求的变化；开发费用低，开发周期短且对用户更友好</p>
<h2 id="增量模型" tabindex="-1"><a class="header-anchor" href="#增量模型"><span>增量模型</span></a></h2>
<p>1）进行已有产品升级或新版本开发，增量模型是非常适合的；
2）对完成期限严格要求的产品，可以使用增量模型
3）对所开发的领域比较熟悉而且已有原型系统，增量模型也是非常适合的。
4）不用投入大量人力，对整体控制性不强</p>
<h2 id="螺旋模型" tabindex="-1"><a class="header-anchor" href="#螺旋模型"><span>螺旋模型</span></a></h2>
<p>1）适合大型大规模的开发
2）可以进行风险评估
3）过多的迭代次数会增加开发成本，延迟提交时间。</p>
</div></template>


