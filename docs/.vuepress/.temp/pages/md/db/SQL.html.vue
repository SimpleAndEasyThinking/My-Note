<template><div><h1 id="sql语句" tabindex="-1"><a class="header-anchor" href="#sql语句"><span>sql语句</span></a></h1>
<h2 id="ddl操作-数据库操作" tabindex="-1"><a class="header-anchor" href="#ddl操作-数据库操作"><span>DDL操作 数据库操作</span></a></h2>
<p>查看所有数据库: <code v-pre>SHOW DATABASES</code></p>
<p>切换(选择要操作的)数据库: <code v-pre>USE 数据库名</code></p>
<p>创建数据库: <code v-pre>CREATE DATABASE [IF NOT EXISTS] 数据库名 CHARSET=utf8</code></p>
<p>删除数据库: <code v-pre>DROP DATABASE [IF EXISTS]数据库名</code></p>
<p>修改数据库编码: <code v-pre>ALTER  DATABASE 数据库名 CHARACTER SET utf8</code></p>
<p>对表的操作</p>
<p>创建表:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span></span>
<span class="line"><span class="token keyword">TABLE</span> <span class="token punctuation">[</span>IE <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span>表名<span class="token punctuation">(</span></span>
<span class="line">列名列类型，</span>
<span class="line">列名列类型，</span>
<span class="line">。。。</span>
<span class="line">列名列类型</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前数据库中所有表名称: <code v-pre>SHOW TABLES;</code></p>
<p>查看指定表的创建语句: <code v-pre>SHOW CREATE TABLE表名(了解);</code></p>
<p>查看表结构: <code v-pre>DESC 表名;</code></p>
<p>删除表: <code v-pre>DROP TABLE表名</code>;</p>
<p>修改表:前缀: <code v-pre>ALTER TABLE表名</code></p>
<p>修改之添加列:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">ALTER</span></span>
<span class="line"><span class="token keyword">TABLE</span> 表名</span>
<span class="line"><span class="token keyword">ADD</span> <span class="token punctuation">(</span></span>
<span class="line">列名列类型，</span>
<span class="line">列名列类型，</span>
<span class="line">…</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改之修改列类型(如果被修改的列已存在数据，那么新的类型可能会影响到已存在数据):<code v-pre> ALTER TABLE 表名MODIFY 列名列类;</code></p>
<p>修改之修改列名: <code v-pre>ALTER TABLE表名CHANGE原列名新列名类型;</code></p>
<p>修改之删除列: <code v-pre>ALTER TABLE表名DROP列名;</code></p>
<p>修改表名称: <code v-pre>ALTER TABLE原表名RENAME TO新表名;</code></p>
<h2 id="dml操作-表操作" tabindex="-1"><a class="header-anchor" href="#dml操作-表操作"><span>DML操作 表操作</span></a></h2>
<p>DML救据操作语言，它是对表记录的操作(增、删、改)! )</p>
<p>1.插入数据</p>
<ul>
<li><code v-pre>INTSERT INTO 表名(列名1,列名2, .... ）VALUES(列值1， 列值2，...);</code></li>
</ul>
<blockquote>
<p>在表名后给出要插入的列名，其他没有指定的列等同与插入null值。所以插入记录总是插入一行，不可能是半行。</p>
<p>在VALUES后给出列值，值的顺序和个数必须与前面指定的列对应</p>
</blockquote>
<ul>
<li><code v-pre>INTSERT INTO表名VALUES (列值1,.列值2).</code></li>
</ul>
<blockquote>
<p>没有给出要插入的列，那么表示插入所有列。</p>
<p>值的个数必须是该表列的个数。</p>
<p>值的顺序，必须与表创建时给出的列的顺序相同。</p>
</blockquote>
<p>2.修改数据</p>
<ul>
<li><code v-pre>UPDATE 表名 SET 列名1=列值1, 列名2=列值2, ... [WHERE 条件]</code></li>
<li>条件(条件可选的):</li>
</ul>
<blockquote>
<p>条件必须是一个boolean类型的值或表达式: <code v-pre>UPDATE t_ _person SET gender='男',age=age+1 WHERE sid='1';</code></p>
</blockquote>
<blockquote>
<p>运算符: =、!=、&lt;&gt;、 &gt;、&lt;、&gt;=、&lt;=、BETWEEN...AND...、 IN(...）、 IS NULL、 NOT、 OR、AND</p>
</blockquote>
<p>3.删除数据</p>
<ul>
<li><code v-pre>DELETE FROM 表名[WHERE 条件];</code></li>
<li>TRUNCATE TABLE表名: TRUNCATE是DDL语句，
它是先删除drop该表，再create该表。而且无法回滚</li>
</ul>
<h2 id="dcl操作-用户操作" tabindex="-1"><a class="header-anchor" href="#dcl操作-用户操作"><span>DCL操作 用户操作</span></a></h2>
<p>一个项目创建一个用户！一个项目对应的数据库只有一个！</p>
<p>这个用户只能对这个数据库有权限，其他数据库你就不可以操作。</p>
<p>1.创建用户</p>
<ul>
<li><code v-pre>CREATE USER用户名@IP地址IDENTIFIED BY '密码';</code></li>
</ul>
<blockquote>
<p>用户只能在指定的IP地址上登录</p>
</blockquote>
<ul>
<li><code v-pre>CREATE USER用户名@'%'  IDENTIFIED BY '密码':</code></li>
</ul>
<blockquote>
<p>用户可以在任意IP地址上登录</p>
</blockquote>
<p>2.给用户授权</p>
<ul>
<li><code v-pre>GRANT 权限1, ..,权限n ON数据库.* To 用户名@IP地址</code></li>
</ul>
<blockquote>
<p>权限、用户、数据库给用户分派在指定的数据库上的指定的权限</p>
</blockquote>
<blockquote>
<p>例如: <code v-pre>GRANT CREATE, ALTER, DROP, INSERT , UPDATE, DELETE, SELECT ON mydb1.* TO user1@localhost;</code></p>
</blockquote>
<ul>
<li>给user1用户分派在mydb1数据库上的create. alter. drop. insert.update. delete,select权限</li>
</ul>
<p><code v-pre>GRANT ALL ON数据库. *TO 用户名@IP地址:</code></p>
<blockquote>
<p>给用户分派指定数据库上的所有权限</p>
</blockquote>
<p>3.撤销授权，</p>
<ul>
<li><code v-pre>REVOKE权限1, ..，权限n ON数据库.* FROM 用户名@IP地址:</code></li>
</ul>
<blockquote>
<p>撤消指定用户在指定数据库.上的指定权限</p>
<p>例如:<code v-pre>REVOKE CREATE, ALTER, DROP ON mydb1.* FROM user101oca1host;</code></p>
</blockquote>
<ul>
<li>撒消user1用户在mydb1数据库上的create、Alter、drop权限</li>
</ul>
<p>4.查看权限</p>
<ul>
<li><code v-pre>SHOW GRANTS FOR用户名@IP地址</code></li>
</ul>
<blockquote>
<p>查看指定用户的权限</p>
</blockquote>
<p>5.删除用户</p>
<p><code v-pre>DROP USER用户名@IP地址</code></p>
<h2 id="dql-操作查询操作" tabindex="-1"><a class="header-anchor" href="#dql-操作查询操作"><span>DQL 操作查询操作</span></a></h2>
<h3 id="一、-基本查询" tabindex="-1"><a class="header-anchor" href="#一、-基本查询"><span>一、 基本查询</span></a></h3>
<p>1.字段(列)控制</p>
<p>1)查询所有列</p>
<p>SELECT</p>
<ul>
<li>FROM 表名;</li>
</ul>
<p>如：<code v-pre>SELECT * FROM emp;</code></p>
<p>--&gt;其中“*“表示查询所有列</p>
<p>2)查询指定列</p>
<p>SELECT列1 [, 列2，.... 列N] FROM 表名;</p>
<p>如：<code v-pre>SELECT empno, ename, sal, comm FROM 表名;</code></p>
<p>3)完全重复的记录只一次</p>
<p>当查询结果中的多行记录一模一样时，只显示一行。一般查询所有列时很少会有这种情况，但只查询一列(或几列)时，这总可能就大了!</p>
<p><code v-pre>SELECT DISTINCT * |  列1 [，列2，.... 列N] FROM 表名;</code></p>
<p><code v-pre>SELECT DISTINCT sal FROM emp;</code></p>
<p>--&gt;保查询员工表的工资，如果存在相同的工资只显示一次!</p>
<p>4)列运算</p>
<ul>
<li>数量类型的列可以做加、减、乘、除运算</li>
</ul>
<p><code v-pre>SELECT 列*1.5 FROM emp;</code></p>
<p><code v-pre>SELECT 列+comm FROM emp;</code></p>
<ul>
<li>字符串类型可以做连续运算</li>
</ul>
<p><code v-pre>SELECT CONCAT('S', sa1) FROM emp;</code></p>
<ul>
<li>转换NULL值</li>
</ul>
<p>有时需要把NULL转换成其它值，例如com+1000时， 如果com列存在NULL值，那么NULL+1000还是NULL,而我们这时希望把NULL当前0来运算。</p>
<p><code v-pre>SELECT IFNULL (comm,0)+1000 FROM emp;</code></p>
<p>--&gt; IFNULL (comm, 0):如果comm中存在NULL值，那么当成0来运算。</p>
<ul>
<li>给列起别名</li>
</ul>
<p>你也许已经注意到了，当使用列运算后，查询出的结果集中的列名称很不好看，这时我们需要给列名起个别名，这样在结果集中列名就显示别名了</p>
<p><code v-pre>SELECT IFNULL (cprrm, 0)+1000 AS 奖金 FROM emp;</code></p>
<p>--&gt;其中AS可以省略</p>
<p>2.条件控制</p>
<p>1).条件查询</p>
<p>与前面介绍的UPDATE和DELETE语句一样，SELECI语句也可以使用WHERE子句来控制记录。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token operator">*</span> <span class="token class-name">SELECT</span> empno<span class="token punctuation">,</span> ename<span class="token punctuation">,</span> sal<span class="token punctuation">,</span>comm <span class="token constant">FROM</span> emp <span class="token constant">WHERE</span> sal <span class="token operator">></span> <span class="token number">10000</span> <span class="token constant">AND</span> comm <span class="token class-name">Is</span> <span class="token class-name">NOT</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">*</span> <span class="token class-name">SELECT</span> empno<span class="token punctuation">,</span> ename<span class="token punctuation">,</span>sa1 <span class="token constant">FROM</span> emp <span class="token constant">WHERE</span> sal <span class="token constant">BETWEEN</span> <span class="token number">20000</span> <span class="token class-name">AND</span> <span class="token number">30000</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">*</span> <span class="token class-name">SELECT</span> empno<span class="token punctuation">,</span> ename<span class="token punctuation">,</span>job <span class="token constant">FROM</span> emp <span class="token constant">WHERE</span> job <span class="token constant">IN</span> <span class="token punctuation">(</span><span class="token char">'经理'</span>，<span class="token char">'董事长'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2)模糊查询</p>
<p>当你想查询姓张，并且姓名-共两个字的员工时，这时就可以使用模糊查询</p>
<ul>
<li><code v-pre>SELECT 由FROM emp WHERE ename LIKE '张_';</code></li>
</ul>
<p>--&gt;模糊查询需要使用运算符: LIKE, 其中匹配一个任意字符，注意，只匹配一个字符而不是多个。</p>
<p>--&gt;上面语句查询的是姓张，名字由两个字组成的员工。</p>
<ul>
<li><code v-pre>SELECT * FROM emp WHERE ename LIKE ' ___'; /</code></li>
</ul>
<p>如果我们想查询姓张，名字几个字可以的员工时就要使用“%”了。</p>
<p><code v-pre>SELECT * FROM emp WHERE ename LIKE '张%';</code></p>
<p>--&gt;其中匹配0~N个任意字符，所以上面语句查询的是姓张的所有员工。</p>
<p><code v-pre>SELECT。FROM emp WHERE ename. LIKE ‘%阿%';</code></p>
<p>--&gt;千万不要认为上面语句是在查询姓名中间带有阿字的员工，因为匹配0~个字符，所以姓名以阿开头和结尾的员工也都会查询到。</p>
<p><code v-pre>SELECT. . FROM emp WHERE ename LIKE '%';</code></p>
<p>--&gt;这个条件等同与不存在，但如果姓名为NULL的查询不出来!</p>
<h3 id="二、排序" tabindex="-1"><a class="header-anchor" href="#二、排序"><span>二、排序</span></a></h3>
<p>1)升序</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT * FROM WHERE emp ORDER BY sal ASC;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;按sal排序，升序!</p>
<p>--&gt;其中ASC是可以省略的</p>
<p>2)降序</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT * FROM WHERE emp ORDER BY comm DESC;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;按com排序，降序!</p>
<p>--&gt;其中DESC不能省略</p>
<p>3)使用多列作为排序条件</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT * FROM WHERE emo ORDER BY sal ASC comm DESC:</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="三、聚合函数" tabindex="-1"><a class="header-anchor" href="#三、聚合函数"><span>三、聚合函数</span></a></h3>
<p>聚合函数用来做某列的纵向运算。</p>
<ol>
<li>COUNT</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT COUNT(*) FROM emp;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;计算emp表中所有列都不为NULL的记录的行数</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT COUNT(comm) FROM emp;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;云计算emp表中comm列不为NULL的记录的行数</p>
<ol start="2">
<li>MAX</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT MAX(sa1)  FROM emp;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;查询最高工资</p>
<ol start="3">
<li>MIN</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT MIN(sal)  FROM emp;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;查询最低工资</p>
<ol start="4">
<li>SUM</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT SUM(sal) FROM emp;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;查询工资合</p>
<ol start="5">
<li>AVG</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT AVG(sal)  FROM emp;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;查询平均工资</p>
<h3 id="四、分组查询" tabindex="-1"><a class="header-anchor" href="#四、分组查询"><span>四、分组查询</span></a></h3>
<p>分组查询是把记录使用某一列进行分组，
然后查询组信息。</p>
<p>例如:查看所有部门的记录数。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT deptno, COUNT(*) FROM emp GROUP BY deptno;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;使用deptno分组，查询部门编号和每个部门的记录数</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT job, MAX(SAL)  FROM emp GROUP BY job;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;使用job分组，查询每种工作的最高工资</p>
<p>组条件</p>
<p>以部门分组，查询每组记录数。条件为记录数大于3</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT deptno, COUNT() FROM emp GROUP BY deptno HAVING COUNT() > 3;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="五、limit子句-mysql方言" tabindex="-1"><a class="header-anchor" href="#五、limit子句-mysql方言"><span>五、limit子句(mysql方言)</span></a></h3>
<p>LIMIT用来限定查询结果的起始行，以及总行数。</p>
<p>例如:查询起始行为第5行，一共查询3行记录</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">SELECT * FROM emp LIMIT 4，3;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>--&gt;其中4表示从第5行开始，其中3表示一 共查询3行。即第5、6、7行记录。</p>
<h1 id="约束" tabindex="-1"><a class="header-anchor" href="#约束"><span>约束</span></a></h1>
<h2 id="_1-主键约束-唯一标识" tabindex="-1"><a class="header-anchor" href="#_1-主键约束-唯一标识"><span>1.主键约束(唯一标识)</span></a></h2>
<ul>
<li>非空</li>
<li>唯一</li>
<li>被引用</li>
</ul>
<p>*当表的某-列被指定为主键后，该列就不能为空，不能有重复值出现。</p>
<p>*创建表时指定主键的两种方式:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> stu <span class="token punctuation">(</span>Sid <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>Sname  <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>Age   <span class="token keyword">INT</span><span class="token punctuation">,</span>Gender   <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>指定sid列为主键列，即为sid列添加主键约束</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> stu <span class="token punctuation">(</span>Sid   <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>，Gname  <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>Age  <span class="token keyword">INT</span><span class="token punctuation">,</span>Gender   <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>sid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>指定sid列为主键列，即为sid列添加主键约束</p>
<p>*修改表时指定主键:<code v-pre> ALTER TABLE stu ADD PRIMARY KEY (sid);</code></p>
<p>*删除主键: <code v-pre>ALTER TABLE stu DROP PRIMARY KEY;</code></p>
<h2 id="_2-主键自增长" tabindex="-1"><a class="header-anchor" href="#_2-主键自增长"><span>2.主键自增长</span></a></h2>
<p>*因为主键列的特性是必须唯一、
不能为空，所以我们通常会指定主键类为整型，然后设置其自动增长，这样可以保证在插入数据时主键列的唯一和非空特性。</p>
<p>*创建表时指定主键自增长</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> stu<span class="token punctuation">(</span>   sid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span>    <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>   sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    Age  <span class="token keyword">INT</span><span class="token punctuation">,</span>   gender <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>*修改表时设置主键自增长: <code v-pre>ALTER TABLE stu CHANGE sid sid INT AUTO_INCREMENT;</code></p>
<p>*修改表时删除主键白增长: <code v-pre>ALTER TABLE stu CHANGE sid sid INT;</code></p>
<p>*测试主键自增;</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span><span class="token string">'zhangSan'</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">'male'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu<span class="token punctuation">(</span>sname<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">'zhangSan'</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">'male'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>SQLSERVER 的自增长</p>
<p>列名
数据类型  约束  identity(m,n)</p>
<p>m表示的是初始值，n表示的是每次自动增加的值</p>
<p>如果m和n的值都没有指定，默认为（1,1）</p>
<h2 id="_3-非空约束" tabindex="-1"><a class="header-anchor" href="#_3-非空约束"><span>3.非空约束</span></a></h2>
<p>。因为某些列不能设置为NOLL值，所以可以对列添加非空约束。</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> stu <span class="token punctuation">(</span>sidINT <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>Sname  <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>Age  <span class="token keyword">INT</span><span class="token punctuation">,</span>gender <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>*对aname列设置了非空约束</p>
<p>4.唯一约束</p>
<p>*车库某些列不能设置重复的值，所以可以对列添加唯一 约束。</p>
<p>*例如:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> stu <span class="token punctuation">(</span>sid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> AUTO_ INCREMENT<span class="token punctuation">,</span>Sname  <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>Age <span class="token keyword">INT</span><span class="token punctuation">,</span>gender <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>*对sname列设置了非空约束</p>
<h2 id="_5-概念模型" tabindex="-1"><a class="header-anchor" href="#_5-概念模型"><span>5.概念模型</span></a></h2>
<p>对象模型：可以双向关联，而且引用的是对象，而不是一个主键！</p>
<p>关系模型：只能多方引用一方，而且引用的只是主键，而不是一整行记录。</p>
<p>对象模型：在java中是domin</p>
<p>关系模型：在数据库中表</p>
<p>当我们要完成一个软件系统时，需要把系统中的实体抽取出来,形成概念模型。</p>
<p>例如部门、员工都是系统中的实体。概念模型中的实体最终会成为Java中的类、数据库中表。</p>
<p>实体之间还存在若关系，关系有三种:</p>
<p>*1对多:例如每个员工都从属一一个部门，而一个部门可以有多个员工，其中员工是多方，而部门是一方。</p>
<ul>
<li>1对1:例如老公和老婆就是一对一的关系，一个老公只能有一个老婆，而一个老婆只能有一-个老公。</li>
</ul>
<p>*多对多:老师与学生的关系就是多对多，一个老师可以有多个学生，一个学生可以有多个老师.</p>
<p>概念模型在Java中成为实体类(JavaBean)</p>
<p>类就使用成员变量来完成关系，一般都是双向关联!</p>
<p>多对一双向中关联，即员工关联部门，部门也关联员工</p>
<h2 id="_6-外键约束" tabindex="-1"><a class="header-anchor" href="#_6-外键约束"><span>6.外键约束</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> dept<span class="token punctuation">(</span>deptno <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span>，<span class="token comment">//创建主键，并设置自动增长 Dname VARCHAR(50));</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> dept <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">'研发部'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> dept <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">'人力部'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> dept <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token string">'财务部'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> emp<span class="token punctuation">(</span>empno <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span><span class="token comment">//创建主键，并设置自动增长 Ename VARCHAR(50),dno INT,</span></span>
<span class="line"><span class="token keyword">CONSTRAINT</span> fk_emp_dept <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>dno<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> dept<span class="token punctuation">(</span>detno<span class="token punctuation">)</span><span class="token comment">//将表emp的dno连接到dept的deptno，设置dno为外键。);</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp<span class="token punctuation">(</span>empno<span class="token punctuation">,</span>ename<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>NULLL<span class="token punctuation">,</span><span class="token string">'zhangsan'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp<span class="token punctuation">(</span>empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>dno<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span><span class="token string">'lisi'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp<span class="token punctuation">(</span>empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>dno<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span><span class="token string">'wangWu'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="关系模型" tabindex="-1"><a class="header-anchor" href="#关系模型"><span>关系模型</span></a></h1>
<p>主键上在加外建约束后关系模型变成一对一。</p>
<p>非主键加外建约束时关系模型变成多对一。</p>
<h2 id="_7-数据库一对一关系" tabindex="-1"><a class="header-anchor" href="#_7-数据库一对一关系"><span>7.数据库一对一关系</span></a></h2>
<p>在表中建立一对一关系比较特殊，需要让其中一张表的主键，即是主键又是外键。</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> husband<span class="token punctuation">(</span>hid <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> wife <span class="token punctuation">(</span>wid <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> fk_wife_ wid <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>wid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> husband <span class="token punctuation">(</span>hid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中wife表的wid即是主键，又是相对husband表的外键!</p>
<p>husband.hid是主键，不能重复!</p>
<p>wife.wid是主键，不能重复，又是外键，必须来自husband.hid.</p>
<p>所以如果在wife表中有一条记录的wid为1, 那么wire表中的其他记录的wid就不能再是1了，因为它是主键。</p>
<p>同时在husband. hid中必须存在1这个值，因为wid是外键。这就完成了一对一关系。</p>
<p>从表的主建即是外键！</p>
<h2 id="_8-数据库多对多关系" tabindex="-1"><a class="header-anchor" href="#_8-数据库多对多关系"><span>8.数据库多对多关系</span></a></h2>
<p>在表中建立多对多关系需要使用中间表，即需要三张表，在中间表中使用两个外键，分别引用其他两个表的主键。</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> student<span class="token punctuation">(</span>sid <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> teacher<span class="token punctuation">(</span>tid <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> stu_tea <span class="token punctuation">(</span>sid <span class="token keyword">int</span><span class="token punctuation">,</span>tid <span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> fk_stu_tea_sid <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span><span class="token number">31</span>d<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> student <span class="token punctuation">(</span>sid<span class="token punctuation">)</span></span>
<span class="line">，<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> fk_stu_tea tid <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>t1d<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> teacher <span class="token punctuation">(</span>tid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时在stu_ tea这个中间表中的每条记录都是来说明student和ceacher表的关系</p>
<p>例如:</p>
<p>在stu_ tea表中的记录: sid为1001， tid为2001，
这说明编号为1001的学生有一个编号为2001的老师</p>
<p>sid tid</p>
<p>101201 /<em>编号为101的学生有一个编号为201的老师</em>/</p>
<p>101202 /<em>编号为101的学生有一个编号为202的老师</em>/</p>
<p>101203 /<em>编号为101的学生有一个编号为203的老师</em>/</p>
<p>102201 /<em>编号为102的学生有一个编号为201的老师</em>/</p>
<p>102204 /<em>编号为102的学生有一个编号为204的老师</em>/</p>
<h1 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询"><span>多表查询</span></a></h1>
<p>分类:</p>
<ul>
<li>合并结果集(了解) .</li>
<li>连接查询</li>
<li>子查询</li>
</ul>
<p>合并结果集</p>
<ul>
<li>要求被合并的表中，列的类型和列数相同</li>
<li>UNION, 去除重复行</li>
<li>UNION ALL, 不去除重复行</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> cd <span class="token keyword">UNION</span> <span class="token keyword">ALL</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> ab<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="连接查询" tabindex="-1"><a class="header-anchor" href="#连接查询"><span>连接查询</span></a></h2>
<h3 id="_1-分类" tabindex="-1"><a class="header-anchor" href="#_1-分类"><span>1.分类</span></a></h3>
<ul>
<li>内连接</li>
<li>外连接</li>
<li>左外连接</li>
<li>右外连接</li>
<li>全外连接(MySQL不支持)...</li>
<li>自然连接(属于一种简化方式)</li>
</ul>
<h3 id="_2-内连接" tabindex="-1"><a class="header-anchor" href="#_2-内连接"><span>2.内连接</span></a></h3>
<ul>
<li>方言: <code v-pre>SELECT* FROM 表1别名1,表2别名2 WHERE 别名1.xx=别名2.xx</code></li>
<li>标准: <code v-pre>SELECT * FROM 表1别名1 INNER JOIN 表2别名2 ON 别名1.xx=别名2.xx</code></li>
<li>自然: <code v-pre>SELECT * EROM 表1别名1 NATURAL JOIN 表2 别名2</code></li>
<li>内连接查询出的所有记录都满足条件。</li>
</ul>
<h3 id="_3-外连接" tabindex="-1"><a class="header-anchor" href="#_3-外连接"><span>3.外连接</span></a></h3>
<ul>
<li>左外: <code v-pre>SELECT * FROM表1 别名1 LEFT OUTER JOIN表2别名2 ON别名1.xx=别名2.xx</code>
<ul>
<li>左表记录无论是否满足条件都会查询出来，而右表只有满足条件才能出来。左表中不满足条件的记录，右表部分都为NULL</li>
</ul>
</li>
<li>左外自然: <code v-pre>SELECT * FROM 表1别名1 NATURAL LEFT OUTER JOIN 表2别名2 ON别名1.xx=别名2.xx</code></li>
<li>右外:<code v-pre>SELECT * FROM 表1别名1 RIGHT OUTER JOIN 表2.别名2 ON别名1.xx-别名2.xx</code></li>
<li>右表记录无论是否满足条件都会查询出来，而左表只有满足条件才能出来。右表不满足条件的记录，其左表部分都为NULL</li>
<li>右外自然: <code v-pre>SELECT * FROM 表1别名1 NATURAL RIGHT OUTER JOIN表2别名2 ON别名1.xx=别名2.xx</code></li>
<li>全链接:可以使用UNION来完成全链接</li>
</ul>
<h2 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询"><span>子查询</span></a></h2>
<p>:查询中有查询(查看select关键字的个数! )</p>
<p>1.出现的位置:</p>
<ul>
<li>where后作为条件存在</li>
<li>from后作为表存在(多行多列)</li>
</ul>
<p>2.条件</p>
<ul>
<li>(***)单行单列: <code v-pre>SELECT * FROM 表1别名1 WHERE 列1 [=、 &gt;、 &lt;、&gt;=、 &lt;=、!=] (SELECT 列FROM表2别名2 WHERE条件)</code></li>
<li>(**)多行单列: <code v-pre>SELECT * FROM表1别名1 WHERE列1 [IN, ALL, ANY](SELECT 列FROM表2别名2 WHERE条件)</code></li>
<li>(*)单行多列: <code v-pre>SELECT * FROM 表1别名1 WHERE (列1,列2) IN (SELECT 列1,列2 FROM 表2别名2 WHERE 条件)</code></li>
<li>(***)多行多列: <code v-pre>SELECT * FROM 表1别名1，(SELECT ....)别名2 WHERE条件</code></li>
</ul>
<h1 id="数据库编码" tabindex="-1"><a class="header-anchor" href="#数据库编码"><span>数据库编码</span></a></h1>
<h3 id="_1-查看hysql数据库编码" tabindex="-1"><a class="header-anchor" href="#_1-查看hysql数据库编码"><span>1.查看HySQL数据库编码</span></a></h3>
<p>SHOW VARIABLES LIKE 'char%';</p>
<h3 id="_2-编码解释" tabindex="-1"><a class="header-anchor" href="#_2-编码解释"><span>2.编码解释</span></a></h3>
<p>character_set_ client: MySQL使用该编码来解读客户端发送过来的数据，例如该编码为UTFe，那么如果客户端发送过来的数据不是UTF8，那么就会出现乱码</p>
<p>*.character set results: MySQI会把数据转换成该编码后，再发送给客户端，例如该编码为UTF8，那么如果客户端不使用UTF8来解读，那么就会出现乱码</p>
<p>其它编码只要支持中文即可，也就是说不能使用l atinl</p>
<h3 id="_3-控制台乱码问题" tabindex="-1"><a class="header-anchor" href="#_3-控制台乱码问题"><span>3.控制台乱码问题</span></a></h3>
<p>插入或修改时出现乱码:</p>
<blockquote>
<p>这时因为cmd下默认使用GBK，而character_set__client不是GBK的原因。我们只需让这两个编码相同即可.
因为修改cmd的编码不方便，所以我们去设置character_set__client为GBK即可。</p>
</blockquote>
<p>*查询出的数据为乱码:</p>
<blockquote>
<p>这是因为character get_results不是GBK，而cmd默认使用GBK的原因。我们只需让这两个编码相同即可。
因为修改cmd的编码不方便，所以我们去设置character_set_ results为GBK即可。</p>
</blockquote>
<p>中设置变量的语句:</p>
<blockquote>
<p>set character_set_ client-gbk;
set character_get_ resultg=gbk;</p>
</blockquote>
<p>注意，设置变量只对当前连接有效，当退出窗口后，再次登录myeql，还需要再次设置变量。</p>
<p>为了一劳永逸，可以在my. ini中设置:</p>
<p>设置default-character-set=gbk即可.</p>
<h3 id="_4-指定默认编码" tabindex="-1"><a class="header-anchor" href="#_4-指定默认编码"><span>4.指定默认编码</span></a></h3>
<p>我们在安装MySQL时已经指定了默认编码为uIre,所以我们在创建数据库、创建表时，都无需再次指定编码。</p>
<p>为了一劳永逸，可以在my. ini中设置:</p>
<p>设置character-set-server=utfe即可。</p>
<h1 id="备份数据库" tabindex="-1"><a class="header-anchor" href="#备份数据库"><span>备份数据库</span></a></h1>
<h2 id="_1-数据库导出sql脚本" tabindex="-1"><a class="header-anchor" href="#_1-数据库导出sql脚本"><span>1.数据库导出sQL脚本</span></a></h2>
<blockquote>
<p>mysqldump -u用户名-p密码   数据库名&gt;生成的脚本文件路径
例如:
<code v-pre>mysgldump -uroot -D123 mydb1&gt;C:\mydb1.391_ (与mysq1. exe和mysqld.exe一样，都在bin目录下)</code>
注意，不要打分号，不要登录mysql,直接在cmd下运行，生成的脚本文件中不包含create database语句</p>
</blockquote>
<h2 id="_2-执行sql脚本" tabindex="-1"><a class="header-anchor" href="#_2-执行sql脚本"><span>2.执行SQL脚本</span></a></h2>
<p>第一种方式</p>
<blockquote>
<p>mysq1 -u用户名-p密码  数据库&lt;脚本文件路径
例如:</p>
</blockquote>
<p>*先删除mydb1库，再重新创建mydb1库</p>
<p><code v-pre>mysql -uroot -p123 mydb1&lt;c: \mydb1.9q1</code></p>
<blockquote>
<p>注意，不要打分号，不要登录mysql,直接在cmd下运行</p>
</blockquote>
<p>第二种方式</p>
<blockquote>
<p>登录mysql</p>
</blockquote>
<p>source SQL脚本路径</p>
<blockquote>
<p>例如:</p>
</blockquote>
<p>*先删除mydb1库，再重新创建mydb1库</p>
<p>*切换到mydb1库</p>
<p>*source
c: \mydb1.3q1</p>
</div></template>


