<template><div><h1 id="java线程简介" tabindex="-1"><a class="header-anchor" href="#java线程简介"><span>java线程简介</span></a></h1>
<ul>
<li>Java编写的程序都运行在在Java虚拟机（JVM）中</li>
<li>每用java命令启动一个java应用程序，就会启动一个JVM进程。在同一个JVM进程中，有且只有一个进程，就是它自己。</li>
<li>在这个JVM环境中，所有程序代码的运行都是以线程来运行的。</li>
<li>JVM找到程序程序的入口点main()，然后运行main()方法，这样就产生了一个线程，这个线程称之为主线程。当main方法结束后，主线程运行完成。JVM进程也随即退出。</li>
<li>所以一个应用程序只对应着一个进程，但是可以包含多个线程，所以Java应用程序不存在多进程</li>
</ul>
<h2 id="java内存模型" tabindex="-1"><a class="header-anchor" href="#java内存模型"><span>java内存模型</span></a></h2>
<p><img src="@source/md/code/java/image/线程/1733568808043.png" alt="1733568808043"></p>
<p>线程通信</p>
<ul>
<li>线程 A 把本地内存 A 中更新过的共享变量刷新到主内存中去。</li>
<li>线程 B 到主内存中去读取线程 A 之前已更新过的共享变量。</li>
</ul>
<p>执行程序时为了提高性能，编译器和处理器常常会对指令做重排序</p>
<p><img src="@source/md/code/java/image/线程/1733568875611.png" alt="1733568875611"></p>
<ul>
<li>编译器优化的重排序。编译器在不改变单线程程序语义的前提下，可以重新安排语句的执行顺序。</li>
<li>指令级并行的重排序。现代处理器采用了指令级并行技术（Instruction-Level Parallelism， ILP）来将多条指令重叠执行。如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。</li>
<li>内存系统的重排序。由于处理器使用缓存和读 / 写缓冲区，这使得加载和存储操作看上去可能是在乱序执行</li>
</ul>
<p>JMM(java内存模型)本质上可以理解为，Java 内存模型规范了 JVM 如何提供按需禁用缓存和编译优化的方法。具体来说，这些方法包括：</p>
<ul>
<li>volatile、synchronized 和 final 三个关键字</li>
<li>Happens-Before 规则</li>
</ul>
<h2 id="线程基础" tabindex="-1"><a class="header-anchor" href="#线程基础"><span>线程基础</span></a></h2>
<p><img src="@source/md/code/java/image/线程/1733578823094.png" alt="1733578823094"></p>
<p><strong>新建(New)</strong>：创建后尚未启动。</p>
<p><strong>可运行(Runnable)</strong>：可能正在运行，也可能正在等待 CPU 时间片。包含了操作系统线程状态中的 Running 和 Ready。</p>
<p><strong>阻塞(Blocking)</strong>：等待获取一个排它锁，如果其线程释放了锁就会结束此状态。</p>
<p><strong>无限期等待(Waiting)</strong>：等待其它线程显式地唤醒，否则不会被分配 CPU 时间片。</p>
<p><strong>限期等待(Timed Waiting)：</strong></p>
<blockquote>
<p>无需等待其它线程显式地唤醒，在一定时间之后会被系统自动唤醒。</p>
<p>调用 Thread.sleep() 方法使线程进入限期等待状态时，常常用“使一个线程睡眠”进行描述。调用 Object.wait() 方法使线程进入限期等待或者无限期等待时，常常用“挂起一个线程”进行描述。睡眠和挂起是用来描述行为，而阻塞和等待用来描述状态。阻塞和等待的区别在于，阻塞是被动的，它是在等待获取一个排它锁。而等待是主动的，通过调用 Thread.sleep() 和 Object.wait() 等方法进入。</p>
</blockquote>
<table>
<thead>
<tr>
<th>进入方法</th>
<th>退出方法</th>
<th>是否为无限期等待</th>
</tr>
</thead>
<tbody>
<tr>
<td>没有设置 Timeout 参数的 Object.wait() 方法</td>
<td>时间结束 / Object.notify() / Object.notifyAll()</td>
<td>是/可控制</td>
</tr>
<tr>
<td>没有设置 Timeout 参数的 Thread.join() 方法</td>
<td>时间结束 / 被调用的线程执行完毕</td>
<td>是/可控制</td>
</tr>
<tr>
<td>LockSupport.park() 方法</td>
<td></td>
<td>是</td>
</tr>
<tr>
<td>Thread.sleep() 方法</td>
<td>时间结束</td>
<td>可控制</td>
</tr>
<tr>
<td>LockSupport.parkNanos() 方法</td>
<td></td>
<td></td>
</tr>
<tr>
<td>LockSupport.parkUntil() 方法</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>死亡(Terminated)</strong>：可以是线程结束任务之后自己结束，或者产生了异常而结束</p>
<h1 id="线程使用方式" tabindex="-1"><a class="header-anchor" href="#线程使用方式"><span>线程使用方式</span></a></h1>
<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2>
<p>有三种使用线程的方法:</p>
<ul>
<li>实现 <strong>Runnable</strong> 接口；需要实现 run() 方法；通过 Thread 调用 start() 方法来启动线程。</li>
<li>实现 <strong>Callable</strong> 接口；与 Runnable 相比，Callable 可以有返回值，返回值通过 FutureTask 进行封装。</li>
<li>继承 <strong>Thread</strong> 类；同样也是需要实现 run() 方法，因为 Thread 类也实现了 Runable 接口。</li>
</ul>
<p>实现 Runnable 和 Callable 接口的类只能当做一个可以在线程中运行的任务，不是真正意义上的线程，因此<strong>最后还需要通过 Thread</strong> 来调用。可以说任务是通过线程驱动从而执行的。</p>
<blockquote>
<p>实现接口会更好一些，因为:</p>
<p>Java 不支持多重继承，因此继承了 Thread 类就无法继承其它类，但是可以实现多个接口</p>
<p>类可能只要求可执行就行，继承整个 Thread 类开销过大。</p>
</blockquote>
<h2 id="基础线程机制" tabindex="-1"><a class="header-anchor" href="#基础线程机制"><span>基础线程机制</span></a></h2>
<h3 id="executor" tabindex="-1"><a class="header-anchor" href="#executor"><span>Executor</span></a></h3>
<p>Executor 管理多个异步任务的执行，而无需程序员显式地管理线程的生命周期。这里的异步是指多个任务的执行互不干扰，不需要进行同步操作</p>
<p>主要有三种 Executor:</p>
<ul>
<li>CachedThreadPool: 一个任务创建一个线程；</li>
<li>FixedThreadPool: 所有任务只能使用固定大小的线程；</li>
<li>SingleThreadExecutor: 相当于大小为 1 的 FixedThreadPool。</li>
</ul>
<h3 id="daemon" tabindex="-1"><a class="header-anchor" href="#daemon"><span>Daemon</span></a></h3>
<p>守护线程是程序运行时在后台提供服务的线程，不属于程序中不可或缺的部分。</p>
<p>当所有非守护线程结束时，程序也就终止，同时会杀死所有守护线程。</p>
<p>main() 属于非守护线程。</p>
<p>使用 setDaemon() 方法将一个线程设置为守护线程。</p>
<h3 id="sleep" tabindex="-1"><a class="header-anchor" href="#sleep"><span>sleep()</span></a></h3>
<p>Thread.sleep(millisec) 方法会<strong>休眠</strong>当前正在执行的线程，millisec 单位为毫秒。</p>
<p>sleep() 可能会抛出 InterruptedException，因为异常不能跨线程传播回 main() 中，因此必须在本地进行处理。线程中抛出的其它异常也同样需要在本地进行处理。</p>
<h3 id="yield" tabindex="-1"><a class="header-anchor" href="#yield"><span>yield()</span></a></h3>
<p>对静态方法 Thread.yield() 的调用声明了当前线程已经完成了生命周期中最重要的部分，可以<strong>切换</strong>给其它线程来执行。该方法只是对线程调度器的一个建议，而且也只是建议具有相同优先级的其它线程可以运行。</p>
<h2 id="线程异常和中断" tabindex="-1"><a class="header-anchor" href="#线程异常和中断"><span>线程异常和中断</span></a></h2>
<h3 id="interruptedexception" tabindex="-1"><a class="header-anchor" href="#interruptedexception"><span>InterruptedException</span></a></h3>
<p>通过调用一个线程的 interrupt() 来中断该线程，如果该线程处于阻塞、限期等待或者无限期等待状态，那么就会抛出 InterruptedException，从而提前结束该线程。但是不能中断 I/O 阻塞和 synchronized 锁阻塞。</p>
<p>对于以下代码，在 main() 中启动一个线程之后再中断它，由于线程中调用了 Thread.sleep() 方法，因此会抛出一个 InterruptedException，从而提前结束线程，不执行之后的语句。</p>
<h3 id="interrupted" tabindex="-1"><a class="header-anchor" href="#interrupted"><span>interrupted()</span></a></h3>
<p>如果一个线程的 run() 方法执行一个无限循环，并且没有执行 sleep() 等会抛出 InterruptedException 的操作，那么调用线程的 interrupt() 方法就无法使线程提前结束。</p>
<p>但是调用 interrupt() 方法会设置线程的中断标记，此时调用 interrupted() 方法会返回 true。因此可以在循环体中使用 interrupted() 方法来判断线程是否处于中断状态，从而提前结束线程。</p>
<h3 id="executor-的中断操作" tabindex="-1"><a class="header-anchor" href="#executor-的中断操作"><span>Executor 的中断操作</span></a></h3>
<p>调用 Executor 的 shutdown() 方法会等待线程都执行完毕之后再关闭，但是如果调用的是 shutdownNow() 方法，则相当于调用每个线程的 interrupt() 方法。</p>
<p>以下使用 Lambda 创建线程，相当于创建了一个匿名内部线程。</p>
<p>如果只想中断 Executor 中的一个线程，可以通过使用 submit() 方法来提交一个线程，它会返回一个 Future&lt;?&gt; 对象，通过调用该对象的 cancel(true) 方法就可以中断线程。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ..</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">future<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线程互斥同步" tabindex="-1"><a class="header-anchor" href="#线程互斥同步"><span>线程互斥同步</span></a></h2>
<p>Java 提供了两种锁机制来控制多个线程对共享资源的互斥访问，第一个是 JVM 实现的 synchronized，而另一个是 JDK 实现的 ReentrantLock。</p>
<h3 id="synchronized" tabindex="-1"><a class="header-anchor" href="#synchronized"><span>synchronized</span></a></h3>
<p>它只作用于同一个对象，如果调用两个对象上的同步代码块，就不会进行同步。</p>
<p>对于以下代码，使用 ExecutorService 执行了两个线程，由于调用的是同一个对象的同步代码块，因此这两个线程会进行同步，当一个线程进入同步语句块时，另一个线程就必须等待。</p>
<h3 id="reentrantlock" tabindex="-1"><a class="header-anchor" href="#reentrantlock"><span>ReentrantLock</span></a></h3>
<p>ReentrantLock 类是 java.util.concurrent(J.U.C)包中的锁。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token class-name">Lock</span> lock <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建锁</span></span>
<span class="line"></span>
<span class="line">lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//上锁</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<p><strong>1. 锁的实现</strong></p>
<p>synchronized 是 JVM 实现的，而 ReentrantLock 是 JDK 实现的。</p>
<p><strong>2. 性能</strong></p>
<p>新版本 Java 对 synchronized 进行了很多优化，例如自旋锁等，synchronized 与 ReentrantLock 大致相同。</p>
<p><strong>3. 等待可中断</strong></p>
<p>当持有锁的线程长期不释放锁的时候，正在等待的线程可以选择放弃等待，改为处理其他事情。</p>
<p>ReentrantLock 可中断，而 synchronized 不行。</p>
<p><strong>4. 公平锁</strong></p>
<p>公平锁是指多个线程在等待同一个锁时，必须按照申请锁的时间顺序来依次获得锁。</p>
<p>synchronized 中的锁是非公平的，ReentrantLock 默认情况下也是非公平的，但是也可以是公平的。</p>
<p><strong>5. 锁绑定多个条件</strong></p>
<p>一个 ReentrantLock 可以同时绑定多个 Condition 对象。</p>
<blockquote>
<p>除非需要使用 ReentrantLock 的高级功能，否则优先使用 synchronized。这是因为 synchronized 是 JVM 实现的一种锁机制，JVM 原生地支持它，而 ReentrantLock 不是所有的 JDK 版本都支持。并且使用 synchronized 不用担心没有释放锁而导致死锁问题，因为 JVM 会确保锁的释放。</p>
</blockquote>
<h2 id="线程之间的协作" tabindex="-1"><a class="header-anchor" href="#线程之间的协作"><span>线程之间的协作</span></a></h2>
<p>当多个线程可以一起工作去解决某个问题时，如果某些部分必须在其它部分之前完成，那么就需要对线程进行协调</p>
<h3 id="join" tabindex="-1"><a class="header-anchor" href="#join"><span>join()</span></a></h3>
<p>在线程中调用另一个线程的 join() 方法，会将当前线程挂起，而不是忙等待，直到目标线程结束。</p>
<p>对于以下代码，虽然 b 线程先启动，但是因为在 b 线程中调用了 a 线程的 join() 方法，b 线程会等待 a 线程结束才继续执行，因此最后能够保证 a 线程的输出先于 b 线程的输出。</p>
<h3 id="wait-notify-notifyall" tabindex="-1"><a class="header-anchor" href="#wait-notify-notifyall"><span>wait() notify() notifyAll()</span></a></h3>
<p>调用 wait() 使得线程等待某个条件满足，线程在等待时会被挂起，当其他线程的运行使得这个条件满足时，其它线程会调用 notify() 或者 notifyAll() 来唤醒挂起的线程。</p>
<p>它们都属于 Object 的一部分，而不属于 Thread。</p>
<p>只能用在同步方法或者同步控制块中使用，否则会在运行时抛出 IllegalMonitorStateExeception。</p>
<p>使用 wait() 挂起期间，线程会释放锁。这是因为，如果没有释放锁，那么其它线程就无法进入对象的同步方法或者同步控制块中，那么就无法执行 notify() 或者 notifyAll() 来唤醒挂起的线程，造成死锁。</p>
<p><strong>wait() 和 sleep() 的区别</strong></p>
<ul>
<li>wait() 是 Object 的方法，而 sleep() 是 Thread 的静态方法；</li>
<li>wait() 会释放锁，sleep() 不会。</li>
</ul>
<h3 id="await-signal-signalall" tabindex="-1"><a class="header-anchor" href="#await-signal-signalall"><span>await() signal() signalAll()</span></a></h3>
<p>java.util.concurrent 类库中提供了 Condition 类来实现线程之间的协调，可以在 Condition 上调用 await() 方法使线程等待，其它线程调用 signal() 或 signalAll() 方法唤醒等待的线程。相比于 wait() 这种等待方式，await() 可以指定等待的条件，因此更加灵活。</p>
<p>使用 Lock 来获取一个 Condition 对象。</p>
<h1 id="java中所有的锁" tabindex="-1"><a class="header-anchor" href="#java中所有的锁"><span>Java中所有的锁</span></a></h1>
<h2 id="乐观锁-vs-悲观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁-vs-悲观锁"><span>乐观锁 VS 悲观锁</span></a></h2>
<p>乐观锁在Java中是通过使用无锁编程来实现，最常采用的是CAS算法，Java原子类中的递增操作就通过CAS自旋实现的。</p>
<p><img src="@source/md/code/java/image/线程/1733585380048.png" alt="1733585380048"></p>
<ul>
<li><strong>悲观锁适合写操作多的场景</strong> ，先加锁可以保证写操作时数据正确。</li>
<li><strong>乐观锁适合读操作多的场景</strong> ，不加锁的特点能够使其读操作的性能大幅提升。</li>
</ul>
<h2 id="自旋锁-vs-适应性自旋锁" tabindex="-1"><a class="header-anchor" href="#自旋锁-vs-适应性自旋锁"><span>自旋锁 VS 适应性自旋锁</span></a></h2>
<p><img src="@source/md/code/java/image/线程/1733624563096.png" alt="1733624563096"></p>
<h2 id="无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁" tabindex="-1"><a class="header-anchor" href="#无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁"><span>无锁 VS 偏向锁 VS 轻量级锁 VS 重量级锁</span></a></h2>
<p>偏向锁通过对比Mark Word解决加锁问题，避免执行CAS操作。</p>
<p>轻量级锁是通过用CAS操作和自旋来解决加锁问题，避免线程阻塞和唤醒而影响性能。</p>
<p>重量级锁是将除了拥有锁的线程以外的线程都阻塞</p>
<p><img src="@source/md/code/java/image/线程/1733625068912.png" alt="1733625068912"></p>
<h2 id="公平锁-vs-非公平锁" tabindex="-1"><a class="header-anchor" href="#公平锁-vs-非公平锁"><span>公平锁 VS 非公平锁</span></a></h2>
<p>公平锁，多个线程按照申请锁的顺序来获取锁，线程直接进入队列中排队，队列中的第一个线程才能获得锁。确保了每个线程都可以执行，但是限制了吞吐率</p>
<p><img src="@source/md/code/java/image/线程/1733625097141.png" alt="1733625097141"></p>
<p>非公平锁是多个线程加锁时直接尝试获取锁，获取不到才会到等待队列的队尾等待。</p>
<p>非公平锁的优点是可以减少唤起线程的开销，整体的吞吐效率高，因为线程有几率不阻塞直接获得锁，CPU不必唤醒所有线程。缺点是处于等待队列中的线程可能会饿死，或者等很久才会获得锁。</p>
<p><img src="@source/md/code/java/image/线程/1733625310486.png" alt="1733625310486"></p>
<h2 id="可重入锁-vs-非可重入锁" tabindex="-1"><a class="header-anchor" href="#可重入锁-vs-非可重入锁"><span>可重入锁 VS 非可重入锁</span></a></h2>
<p>可重入锁又名递归锁，是指在同一个线程在外层方法获取锁的时候，再进入该线程的内层方法会<strong>自动获取锁</strong>（前提锁对象得是<strong>同一个对象</strong>或者class），ReentrantLock和synchronized都是重入锁</p>
<p><img src="@source/md/code/java/image/线程/1733630884488.png" alt="1733630884488"></p>
<p>NonReentrantLock非可重入锁，</p>
<p><img src="@source/md/code/java/image/线程/1733631215252.png" alt="1733631215252"></p>
<p>ReentrantLock和NonReentrantLock都继承父类AQS，其父类AQS中维护了一个同步状态status来计数重入次数，status初始值为0</p>
<p>ReentrantLock代码</p>
<p>可重入锁先尝试获取并更新status值，如果status == 0表示没有其他线程在执行同步代码，则把status置为1，当前线程开始执行。如果status != 0，则判断当前线程是否是获取到这个锁的线程，如果是的话执行status+1，且当前线程可以再次获取锁</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">nonfairTryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> acquires<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">final</span> <span class="token class-name">Thread</span> current <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//获取锁时先判断，如果当前线程就是已经占据锁的线程则status+1，并返回true</span></span>
<span class="line">        <span class="token keyword">int</span> nextc <span class="token operator">=</span> c <span class="token operator">+</span> acquires<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextc <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// overflow</span></span>
<span class="line">	<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Maximum lock count exceeded"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">setState</span><span class="token punctuation">(</span>nextc<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//释放锁时也先判断当前线程是否是已经占有锁的线程，判断status为0释放锁</span></span>
<span class="line"><span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">tryRelease</span><span class="token punctuation">(</span><span class="token keyword">int</span> releases<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> releases<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalMonitorStateException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">boolean</span> free <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        free <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">setState</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> free<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NonReentrantLock，非可重入锁是直接去获取并尝试更新当前status的值，如果status != 0的话会导致其获取锁失败，当前线程阻塞</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">assert</span> arg <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//如果state为0，则尝试获取锁</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryRelease</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">assert</span> arg <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//如果state为0，则尝试获取锁</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalMonitorStateException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">setState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="独享锁-排他锁-vs-共享锁" tabindex="-1"><a class="header-anchor" href="#独享锁-排他锁-vs-共享锁"><span>独享锁(排他锁) VS 共享锁</span></a></h2>
<p><strong>独享锁也叫排他锁</strong> ，是指该锁一次只能被一个线程所持有。如果线程T对数据A加上排它锁后，则其他线程不能再对A加任何类型的锁。获得排它锁的线程即<strong>能读数据又能修改</strong>数据。JDK中的synchronized和JUC中Lock的实现类就是互斥锁。</p>
<p><strong>共享锁</strong>是指该锁可被多个线程所持有。如果线程T对数据A加上共享锁后，则其他线程只能对A再加共享锁，不能加排它锁。获得共享锁的线程<strong>只读数据</strong>，不能修改数据。</p>
<p>通过ReentrantReadWriteLock实现 有两把锁：ReadLock和WriteLock</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"> <span class="token keyword">public</span> <span class="token class-name">ReentrantReadWriteLock</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        sync <span class="token operator">=</span> fair <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">FairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">//初始化锁</span></span>
<span class="line">        readerLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReadLock</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        writerLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WriteLock</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token class-name">ReentrantReadWriteLock<span class="token punctuation">.</span>WriteLock</span> <span class="token function">writeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> writerLock<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token class-name">ReentrantReadWriteLock<span class="token punctuation">.</span>ReadLock</span>  <span class="token function">readLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span> <span class="token keyword">return</span> readerLock<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">读锁   <span class="token class-name">Sync</span>是<span class="token constant">AQS</span>的一个子类</span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ReadLock</span></span>
<span class="line"><span class="token keyword">protected</span> <span class="token class-name">ReadLock</span><span class="token punctuation">(</span><span class="token class-name">ReentrantReadWriteLock</span> lock<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            sync <span class="token operator">=</span> lock<span class="token punctuation">.</span>sync<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">写锁</span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">WriteLock</span> </span>
<span class="line"><span class="token keyword">protected</span> <span class="token class-name">WriteLock</span><span class="token punctuation">(</span><span class="token class-name">ReentrantReadWriteLock</span> lock<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            sync <span class="token operator">=</span> lock<span class="token punctuation">.</span>sync<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读锁是共享锁，写锁是独享锁。读锁的共享锁可保证并发读非常高效，而读写、写读、写写的过程互斥，因为读锁和写锁是分离的。所以ReentrantReadWriteLock的并发性相比一般的互斥锁有了很大提升。</p>
<h1 id="关键字-volatile、synchronized-和-final" tabindex="-1"><a class="header-anchor" href="#关键字-volatile、synchronized-和-final"><span>关键字: volatile、synchronized 和 final</span></a></h1>
<h2 id="synchronized-1" tabindex="-1"><a class="header-anchor" href="#synchronized-1"><span>Synchronized</span></a></h2>
<p>在应用Sychronized关键字时需要把握如下注意点：</p>
<ul>
<li>一把锁只能同时被一个线程获取，没有获得锁的线程只能等待；</li>
<li>每个实例都对应有自己的一把锁(this),不同实例之间互不影响；例外：锁对象是*.class以及synchronized修饰的是static方法的时候，所有对象公用同一把锁</li>
<li>synchronized修饰的方法，无论方法正常执行完毕还是抛出异常，都会释放锁</li>
</ul>
<h3 id="对象锁" tabindex="-1"><a class="header-anchor" href="#对象锁"><span>对象锁</span></a></h3>
<p>包括方法锁(默认锁对象为this,当前实例对象)和同步代码块锁(自己指定锁对象)</p>
<p>代码块形式：手动指定锁定对象，也可是是this,也可以是自定义的锁</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"> <span class="token comment">// 同步代码块形式——锁为this,两个线程使用的锁是一样的,线程1必须要等到线程0释放了该锁后，才能执行</span></span>
<span class="line">        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是线程"</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"结束"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法锁形式：synchronized修饰普通方法，锁对象默认为this</p>
<h3 id="类锁" tabindex="-1"><a class="header-anchor" href="#类锁"><span>类锁</span></a></h3>
<p>指synchronize修饰静态的方法或指定锁对象为Class对象</p>
<p>synchronize修饰静态方法</p>
<h2 id="synchronized原理分析" tabindex="-1"><a class="header-anchor" href="#synchronized原理分析"><span>Synchronized原理分析</span></a></h2>
<h3 id="加锁和释放锁的原理" tabindex="-1"><a class="header-anchor" href="#加锁和释放锁的原理"><span>加锁和释放锁的原理</span></a></h3>
<p>使用javap反编译查看.class文件的信息</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token operator">></span>javap <span class="token parameter variable">-verbose</span> SynchronizedDemo.class</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>会看到文件里的 <code v-pre>monitorenter</code>和 <code v-pre>monitorexit</code>指令，会让对象在执行，使其锁计数器加1或者减1。每一个对象在同一时间只与一个monitor(锁)相关联，而一个monitor在同一时间只能被一个线程获得，在尝试获得与这个对象相关联的Monitor锁的所有权的时候，monitorenter指令会发生如下3中情况之一：</p>
<ul>
<li>monitor计数器为0，意味着目前还没有被获得，那这个线程就会立刻获得然后把锁计数器+1，一旦+1，别的线程再想获取，就需要等待</li>
<li>如果这个monitor已经拿到了这个锁的所有权，又重入了这把锁，那锁计数器就会累加，变成2，并且随着重入的次数，会一直累加</li>
<li>这把锁已经被别的线程获取了，等待锁释放</li>
</ul>
<p><code v-pre>monitorexit指令</code>：释放对于monitor的所有权，释放过程很简单，就是讲monitor的计数器减1，如果减完以后，计数器不是0，则代表刚才是重入进来的，当前线程还继续持有这把锁的所有权，如果计数器变成0，则代表当前线程不再拥有该monitor的所有权，即释放锁。</p>
<p><img src="@source/md/code/java/image/线程/1733654620770.png" alt="1733654620770"></p>
<h3 id="可重入原理-加锁次数计数器" tabindex="-1"><a class="header-anchor" href="#可重入原理-加锁次数计数器"><span>可重入原理：加锁次数计数器</span></a></h3>
<p><strong>可重入</strong> ：（来源于维基百科）若一个程序或子程序可以“在任意时刻被中断然后操作系统调度执行另外一段代码，这段代码又调用了该子程序不会出错”，则称其为可重入（reentrant或re-entrant）的。即当该子程序正在运行时，执行线程可以再次进入并执行它，仍然获得符合设计时预期的结果。与多线程并发执行的线程安全不同，可重入强调对单个线程执行时重新进入同一个子程序仍然是安全的。</p>
<p><a href=""> <strong>可重入锁</strong> </a>：又名递归锁，是指在同一个线程在外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁（前提锁对象得是同一个对象或者class），不会因为之前已经获取过还没释放而阻塞。</p>
</div></template>


