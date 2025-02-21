
# sql语句

## DDL操作 数据库操作

查看所有数据库: `SHOW DATABASES`

切换(选择要操作的)数据库: `USE 数据库名`

创建数据库: `CREATE DATABASE [IF NOT EXISTS] 数据库名 CHARSET=utf8`

删除数据库: `DROP DATABASE [IF EXISTS]数据库名`

修改数据库编码: `ALTER  DATABASE 数据库名 CHARACTER SET utf8`

对表的操作

创建表:

```sql
CREATE
TABLE [IE NOT EXISTS]表名(
列名列类型，
列名列类型，
。。。
列名列类型
);
```

查看当前数据库中所有表名称: `SHOW TABLES;`

查看指定表的创建语句: `SHOW CREATE TABLE表名(了解);`

查看表结构: `DESC 表名;`

删除表: `DROP TABLE表名`;

修改表:前缀: `ALTER TABLE表名`

修改之添加列:

```sql
ALTER
TABLE 表名
ADD (
列名列类型，
列名列类型，
…
);
```

修改之修改列类型(如果被修改的列已存在数据，那么新的类型可能会影响到已存在数据):` ALTER TABLE 表名MODIFY 列名列类;`

修改之修改列名: `ALTER TABLE表名CHANGE原列名新列名类型;`

修改之删除列: `ALTER TABLE表名DROP列名;`

修改表名称: `ALTER TABLE原表名RENAME TO新表名;`

## DML操作 表操作

DML救据操作语言，它是对表记录的操作(增、删、改)! )

1.插入数据

* `INTSERT INTO 表名(列名1,列名2, .... ）VALUES(列值1， 列值2，...);`

> 在表名后给出要插入的列名，其他没有指定的列等同与插入null值。所以插入记录总是插入一行，不可能是半行。
>
> 在VALUES后给出列值，值的顺序和个数必须与前面指定的列对应

* `INTSERT INTO表名VALUES (列值1,.列值2).`

> 没有给出要插入的列，那么表示插入所有列。
>
> 值的个数必须是该表列的个数。
>
> 值的顺序，必须与表创建时给出的列的顺序相同。

2.修改数据

* `UPDATE 表名 SET 列名1=列值1, 列名2=列值2, ... [WHERE 条件]`
* 条件(条件可选的):

> 条件必须是一个boolean类型的值或表达式: `UPDATE t_ _person SET gender='男',age=age+1 WHERE sid='1';`

> 运算符: =、!=、<>、 >、<、>=、<=、BETWEEN...AND...、 IN(...）、 IS NULL、 NOT、 OR、AND

3.删除数据

* `DELETE FROM 表名[WHERE 条件];`
* TRUNCATE TABLE表名: TRUNCATE是DDL语句，
  它是先删除drop该表，再create该表。而且无法回滚

## DCL操作 用户操作

一个项目创建一个用户！一个项目对应的数据库只有一个！

这个用户只能对这个数据库有权限，其他数据库你就不可以操作。

1.创建用户

* `CREATE USER用户名@IP地址IDENTIFIED BY '密码';`

> 用户只能在指定的IP地址上登录

* `CREATE USER用户名@'%'  IDENTIFIED BY '密码':`

> 用户可以在任意IP地址上登录

2.给用户授权

* `GRANT 权限1, ..,权限n ON数据库.* To 用户名@IP地址`

> 权限、用户、数据库给用户分派在指定的数据库上的指定的权限

> 例如: `GRANT CREATE, ALTER, DROP, INSERT , UPDATE, DELETE, SELECT ON mydb1.* TO user1@localhost;`

* 给user1用户分派在mydb1数据库上的create. alter. drop. insert.update. delete,select权限

`GRANT ALL ON数据库. *TO 用户名@IP地址:`

> 给用户分派指定数据库上的所有权限

3.撤销授权，

* `REVOKE权限1, ..，权限n ON数据库.* FROM 用户名@IP地址:`

> 撤消指定用户在指定数据库.上的指定权限
>
> 例如:`REVOKE CREATE, ALTER, DROP ON mydb1.* FROM user101oca1host;`

* 撒消user1用户在mydb1数据库上的create、Alter、drop权限

4.查看权限

* `SHOW GRANTS FOR用户名@IP地址`

> 查看指定用户的权限

5.删除用户

`DROP USER用户名@IP地址`

## DQL 操作查询操作

### 一、 基本查询

1.字段(列)控制

1)查询所有列

SELECT

* FROM 表名;

如：`SELECT * FROM emp;`

-->其中“*“表示查询所有列

2)查询指定列

SELECT列1 [, 列2，.... 列N] FROM 表名;

如：`SELECT empno, ename, sal, comm FROM 表名;`

3)完全重复的记录只一次

当查询结果中的多行记录一模一样时，只显示一行。一般查询所有列时很少会有这种情况，但只查询一列(或几列)时，这总可能就大了!

`SELECT DISTINCT * |  列1 [，列2，.... 列N] FROM 表名;`

`SELECT DISTINCT sal FROM emp;`

-->保查询员工表的工资，如果存在相同的工资只显示一次!

4)列运算

* 数量类型的列可以做加、减、乘、除运算

`SELECT 列*1.5 FROM emp;`

`SELECT 列+comm FROM emp;`

* 字符串类型可以做连续运算

`SELECT CONCAT('S', sa1) FROM emp;`

* 转换NULL值

有时需要把NULL转换成其它值，例如com+1000时， 如果com列存在NULL值，那么NULL+1000还是NULL,而我们这时希望把NULL当前0来运算。

`SELECT IFNULL (comm,0)+1000 FROM emp;`

--> IFNULL (comm, 0):如果comm中存在NULL值，那么当成0来运算。

* 给列起别名

你也许已经注意到了，当使用列运算后，查询出的结果集中的列名称很不好看，这时我们需要给列名起个别名，这样在结果集中列名就显示别名了

`SELECT IFNULL (cprrm, 0)+1000 AS 奖金 FROM emp;`

-->其中AS可以省略

2.条件控制

1).条件查询

与前面介绍的UPDATE和DELETE语句一样，SELECI语句也可以使用WHERE子句来控制记录。

```java
* SELECT empno, ename, sal,comm FROM emp WHERE sal > 10000 AND comm Is NOT NULL;
* SELECT empno, ename,sa1 FROM emp WHERE sal BETWEEN 20000 AND 30000;
* SELECT empno, ename,job FROM emp WHERE job IN ('经理'，'董事长');
```

2)模糊查询

当你想查询姓张，并且姓名-共两个字的员工时，这时就可以使用模糊查询

* `SELECT 由FROM emp WHERE ename LIKE '张_';`

-->模糊查询需要使用运算符: LIKE, 其中匹配一个任意字符，注意，只匹配一个字符而不是多个。

-->上面语句查询的是姓张，名字由两个字组成的员工。

* `SELECT * FROM emp WHERE ename LIKE ' ___'; /`

如果我们想查询姓张，名字几个字可以的员工时就要使用“%”了。

`SELECT * FROM emp WHERE ename LIKE '张%';`

-->其中匹配0~N个任意字符，所以上面语句查询的是姓张的所有员工。

`SELECT。FROM emp WHERE ename. LIKE ‘%阿%';`

-->千万不要认为上面语句是在查询姓名中间带有阿字的员工，因为匹配0~个字符，所以姓名以阿开头和结尾的员工也都会查询到。

`SELECT. . FROM emp WHERE ename LIKE '%';`

-->这个条件等同与不存在，但如果姓名为NULL的查询不出来!

### 二、排序

1)升序

```
SELECT * FROM WHERE emp ORDER BY sal ASC;
```

-->按sal排序，升序!

-->其中ASC是可以省略的

2)降序

```
SELECT * FROM WHERE emp ORDER BY comm DESC;
```

-->按com排序，降序!

-->其中DESC不能省略

3)使用多列作为排序条件

```
SELECT * FROM WHERE emo ORDER BY sal ASC comm DESC:
```

### 三、聚合函数

聚合函数用来做某列的纵向运算。

1) COUNT

```
SELECT COUNT(*) FROM emp;
```

-->计算emp表中所有列都不为NULL的记录的行数

```
SELECT COUNT(comm) FROM emp;
```

-->云计算emp表中comm列不为NULL的记录的行数

2) MAX

```
SELECT MAX(sa1)  FROM emp;
```

-->查询最高工资

3) MIN

```
SELECT MIN(sal)  FROM emp;
```

-->查询最低工资

4) SUM

```
SELECT SUM(sal) FROM emp;
```

-->查询工资合

5) AVG

```
SELECT AVG(sal)  FROM emp;
```

-->查询平均工资

### 四、分组查询

分组查询是把记录使用某一列进行分组，
然后查询组信息。

例如:查看所有部门的记录数。

```
SELECT deptno, COUNT(*) FROM emp GROUP BY deptno;
```

-->使用deptno分组，查询部门编号和每个部门的记录数

```
SELECT job, MAX(SAL)  FROM emp GROUP BY job;
```

-->使用job分组，查询每种工作的最高工资

组条件

以部门分组，查询每组记录数。条件为记录数大于3

```
SELECT deptno, COUNT() FROM emp GROUP BY deptno HAVING COUNT() > 3;
```

### 五、limit子句(mysql方言)

LIMIT用来限定查询结果的起始行，以及总行数。

例如:查询起始行为第5行，一共查询3行记录

```
SELECT * FROM emp LIMIT 4，3;
```

-->其中4表示从第5行开始，其中3表示一 共查询3行。即第5、6、7行记录。

# 约束

## 1.主键约束(唯一标识)

* 非空
* 唯一
* 被引用

*当表的某-列被指定为主键后，该列就不能为空，不能有重复值出现。

*创建表时指定主键的两种方式:

```sql
CREATE TABLE stu (Sid CHAR(6) PRIMARY KEY,Sname  VARCHAR(20),Age   INT,Gender   VARCHAR(10));
```

指定sid列为主键列，即为sid列添加主键约束

```sql
CREATE TABLE stu (Sid   CHAR(6)，Gname  VARCHAR(20),Age  INT,Gender   VARCHAR(10),PRIMARY KEY(sid));
```

指定sid列为主键列，即为sid列添加主键约束

*修改表时指定主键:` ALTER TABLE stu ADD PRIMARY KEY (sid);`

*删除主键: `ALTER TABLE stu DROP PRIMARY KEY;`

## 2.主键自增长

*因为主键列的特性是必须唯一、
不能为空，所以我们通常会指定主键类为整型，然后设置其自动增长，这样可以保证在插入数据时主键列的唯一和非空特性。

*创建表时指定主键自增长

```sql
CREATE TABLE stu(   sid INT PRIMARY KEY    AUTO_INCREMENT,   sname VARCHAR(20),    Age  INT,   gender VARCHAR(10));
```

*修改表时设置主键自增长: `ALTER TABLE stu CHANGE sid sid INT AUTO_INCREMENT;`

*修改表时删除主键白增长: `ALTER TABLE stu CHANGE sid sid INT;`

*测试主键自增;

```sql
INSERT INTO stu VALUES (NULL,'zhangSan',23, 'male');
INSERT INTO stu(sname, age, gender) VALUES('zhangSan',23, 'male');
```

SQLSERVER 的自增长

列名
数据类型  约束  identity(m,n)

m表示的是初始值，n表示的是每次自动增加的值

如果m和n的值都没有指定，默认为（1,1）

## 3.非空约束

。因为某些列不能设置为NOLL值，所以可以对列添加非空约束。

```sql
CREATE TABLE stu (sidINT PRIMARY KEY AUTO_INCREMENT,Sname  VARCHAR(20) NOT NULL,Age  INT,gender VARCHAR (10));
```

*对aname列设置了非空约束

4.唯一约束

*车库某些列不能设置重复的值，所以可以对列添加唯一 约束。

*例如:

```sql
CREATE TABLE stu (sid INT PRIMARY KEY AUTO_ INCREMENT,Sname  VARCHAR(20) NOT NULL UNIQUE,Age INT,gender VARCHAR (10));
```

*对sname列设置了非空约束

## 5.概念模型

对象模型：可以双向关联，而且引用的是对象，而不是一个主键！

关系模型：只能多方引用一方，而且引用的只是主键，而不是一整行记录。

对象模型：在java中是domin

关系模型：在数据库中表

当我们要完成一个软件系统时，需要把系统中的实体抽取出来,形成概念模型。

例如部门、员工都是系统中的实体。概念模型中的实体最终会成为Java中的类、数据库中表。

实体之间还存在若关系，关系有三种:

*1对多:例如每个员工都从属一一个部门，而一个部门可以有多个员工，其中员工是多方，而部门是一方。

* 1对1:例如老公和老婆就是一对一的关系，一个老公只能有一个老婆，而一个老婆只能有一-个老公。

*多对多:老师与学生的关系就是多对多，一个老师可以有多个学生，一个学生可以有多个老师.

概念模型在Java中成为实体类(JavaBean)

类就使用成员变量来完成关系，一般都是双向关联!

多对一双向中关联，即员工关联部门，部门也关联员工

## 6.外键约束

```sql
CREATE TABLE dept(deptno INT PRIMARY KEY AUTO_INCREMENT，//创建主键，并设置自动增长 Dname VARCHAR(50));
INSERT INTO dept VALUES(10,'研发部');
INSERT INTO dept VALUES(20,'人力部');
INSERT INTO dept VALUES(30,'财务部');

CREATE TABLE emp(empno INT PRIMARY KEY AUTO_INCREMENT,//创建主键，并设置自动增长 Ename VARCHAR(50),dno INT,
CONSTRAINT fk_emp_dept FOREIGN KEY(dno) REFERENCES dept(detno)//将表emp的dno连接到dept的deptno，设置dno为外键。);
INSERT INTO emp(empno,ename) VALUES(NULLL,'zhangsan');
INSERT INTO emp(empno,ename,dno) VALUES(NULL,'lisi',10);
INSERT INTO emp(empno,ename,dno) VALUES(NULL,'wangWu',10);
```

# 关系模型

主键上在加外建约束后关系模型变成一对一。

非主键加外建约束时关系模型变成多对一。

## 7.数据库一对一关系

在表中建立一对一关系比较特殊，需要让其中一张表的主键，即是主键又是外键。

```sql
create table husband(hid int PRIMARY KEY,...);
create table wife (wid int PRIMARY KEY,...ADD CONSTRAINT fk_wife_ wid FOREIGN KEY (wid) REFERENCES husband (hid));
```

其中wife表的wid即是主键，又是相对husband表的外键!

husband.hid是主键，不能重复!

wife.wid是主键，不能重复，又是外键，必须来自husband.hid.

所以如果在wife表中有一条记录的wid为1, 那么wire表中的其他记录的wid就不能再是1了，因为它是主键。

同时在husband. hid中必须存在1这个值，因为wid是外键。这就完成了一对一关系。

从表的主建即是外键！

## 8.数据库多对多关系

在表中建立多对多关系需要使用中间表，即需要三张表，在中间表中使用两个外键，分别引用其他两个表的主键。

```sql
create table student(sid int PRIMARY KEY,…);
create table teacher(tid int PRIMARY KEY,…);
create table stu_tea (sid int,tid int,ADD CONSTRAINT fk_stu_tea_sid FOREIGN KEY(31d) REFERENCES student (sid)
，ADD CONSTRAINT fk_stu_tea tid FOREIGN KEY(t1d) REFERENCES teacher (tid));
```

这时在stu_ tea这个中间表中的每条记录都是来说明student和ceacher表的关系

例如:

在stu_ tea表中的记录: sid为1001， tid为2001，
这说明编号为1001的学生有一个编号为2001的老师

sid tid

101201 /*编号为101的学生有一个编号为201的老师*/

101202 /*编号为101的学生有一个编号为202的老师*/

101203 /*编号为101的学生有一个编号为203的老师*/

102201 /*编号为102的学生有一个编号为201的老师*/

102204 /*编号为102的学生有一个编号为204的老师*/

# 多表查询

分类:

* 合并结果集(了解) .
* 连接查询
* 子查询

合并结果集

* 要求被合并的表中，列的类型和列数相同
* UNION, 去除重复行
* UNION ALL, 不去除重复行

```sql
SELECT * FROM cd UNION ALL SELECT * FROM ab;
```

## 连接查询

### 1.分类

* 内连接
* 外连接
* 左外连接
* 右外连接
* 全外连接(MySQL不支持)...
* 自然连接(属于一种简化方式)

### 2.内连接

* 方言: `SELECT* FROM 表1别名1,表2别名2 WHERE 别名1.xx=别名2.xx`
* 标准: `SELECT * FROM 表1别名1 INNER JOIN 表2别名2 ON 别名1.xx=别名2.xx`
* 自然: `SELECT * EROM 表1别名1 NATURAL JOIN 表2 别名2`
* 内连接查询出的所有记录都满足条件。

### 3.外连接

* 左外: `SELECT * FROM表1 别名1 LEFT OUTER JOIN表2别名2 ON别名1.xx=别名2.xx`
  * 左表记录无论是否满足条件都会查询出来，而右表只有满足条件才能出来。左表中不满足条件的记录，右表部分都为NULL
* 左外自然: `SELECT * FROM 表1别名1 NATURAL LEFT OUTER JOIN 表2别名2 ON别名1.xx=别名2.xx`
* 右外:`SELECT * FROM 表1别名1 RIGHT OUTER JOIN 表2.别名2 ON别名1.xx-别名2.xx`
* 右表记录无论是否满足条件都会查询出来，而左表只有满足条件才能出来。右表不满足条件的记录，其左表部分都为NULL
* 右外自然: `SELECT * FROM 表1别名1 NATURAL RIGHT OUTER JOIN表2别名2 ON别名1.xx=别名2.xx`
* 全链接:可以使用UNION来完成全链接

## 子查询

:查询中有查询(查看select关键字的个数! )

1.出现的位置:

* where后作为条件存在
* from后作为表存在(多行多列)

2.条件

* (***)单行单列: `SELECT * FROM 表1别名1 WHERE 列1 [=、 >、 <、>=、 <=、!=] (SELECT 列FROM表2别名2 WHERE条件)`
* (**)多行单列: `SELECT * FROM表1别名1 WHERE列1 [IN, ALL, ANY](SELECT 列FROM表2别名2 WHERE条件)`
* (*)单行多列: `SELECT * FROM 表1别名1 WHERE (列1,列2) IN (SELECT 列1,列2 FROM 表2别名2 WHERE 条件)`
* (***)多行多列: `SELECT * FROM 表1别名1，(SELECT ....)别名2 WHERE条件`

# 数据库编码

### 1.查看HySQL数据库编码

SHOW VARIABLES LIKE 'char%';

### 2.编码解释

character_set_ client: MySQL使用该编码来解读客户端发送过来的数据，例如该编码为UTFe，那么如果客户端发送过来的数据不是UTF8，那么就会出现乱码

*.character set results: MySQI会把数据转换成该编码后，再发送给客户端，例如该编码为UTF8，那么如果客户端不使用UTF8来解读，那么就会出现乱码

其它编码只要支持中文即可，也就是说不能使用l atinl

### 3.控制台乱码问题

插入或修改时出现乱码:

> 这时因为cmd下默认使用GBK，而character_set__client不是GBK的原因。我们只需让这两个编码相同即可.
> 因为修改cmd的编码不方便，所以我们去设置character_set__client为GBK即可。

*查询出的数据为乱码:

> 这是因为character get_results不是GBK，而cmd默认使用GBK的原因。我们只需让这两个编码相同即可。
> 因为修改cmd的编码不方便，所以我们去设置character_set_ results为GBK即可。

中设置变量的语句:

> set character_set_ client-gbk;
> set character_get_ resultg=gbk;

注意，设置变量只对当前连接有效，当退出窗口后，再次登录myeql，还需要再次设置变量。

为了一劳永逸，可以在my. ini中设置:

设置default-character-set=gbk即可.

### 4.指定默认编码

我们在安装MySQL时已经指定了默认编码为uIre,所以我们在创建数据库、创建表时，都无需再次指定编码。

为了一劳永逸，可以在my. ini中设置:

设置character-set-server=utfe即可。

# 备份数据库

## 1.数据库导出sQL脚本

> mysqldump -u用户名-p密码   数据库名>生成的脚本文件路径
> 例如:
> `mysgldump -uroot -D123 mydb1>C:\mydb1.391_ (与mysq1. exe和mysqld.exe一样，都在bin目录下)`
> 注意，不要打分号，不要登录mysql,直接在cmd下运行，生成的脚本文件中不包含create database语句

## 2.执行SQL脚本

第一种方式

> mysq1 -u用户名-p密码  数据库<脚本文件路径
> 例如:

*先删除mydb1库，再重新创建mydb1库

`mysql -uroot -p123 mydb1<c: \mydb1.9q1`

> 注意，不要打分号，不要登录mysql,直接在cmd下运行

第二种方式

> 登录mysql

source SQL脚本路径

> 例如:

*先删除mydb1库，再重新创建mydb1库

*切换到mydb1库

*source
c: \mydb1.3q1
