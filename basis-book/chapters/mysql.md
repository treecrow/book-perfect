# mysql

> mysql采用table和结构化的sql语句来处理数据，在mysql中需要预先定义数据结构schema，并定义table中数据字段的关系

> 在mysql中，相关信息可以保存在不同的表中，通过join的形式来保持彼此关联

## 相关文档

文档                                                                                      | more
--------------------------------------------------------------------------------------- | ------------------------
[MySQL 教程](http://wiki.jikexueyuan.com/project/mysql/)                                  | 系统的学习MySQL数据库
[MySQL 教程 - 菜鸟](http://www.runoob.com/mysql/mysql-tutorial.html)                        | -
[MySQL数据库操作 - 网易云课堂](http://study.163.com/course/introduction/706085.htm#/courseDetail) | 比较粗略的学习，章节1: MySQL基础(视频)
[MySQL数据库 - 网易云课堂](http://study.163.com/course/introduction/247003.htm#/courseDetail)   | 比较系统的学习，与php配合(视频)
[bilibili Mysql 视频教程](http://www.bilibili.com/video/av9529688/index_2.html#page=1)      | -
[MAC MYSQL使用问题记录](https://zhuanlan.zhihu.com/p/27488543)                                | -

## 安装

### 参考文档

安装方式       | 文档                                                                                       | more
---------- | ---------------------------------------------------------------------------------------- | ----------
通用         | -                                                                                        | -
-          | [mac安装mysql的两种方法（含配置）](https://zhuanlan.zhihu.com/p/23898598)                            | -
Homebrew方式 | -                                                                                        | -
-          | [记录使用Homebrew安装Mysql全过程](http://blog.csdn.net/lkxlaz/article/details/54580735)           | -
-          | [MySQL安全配置向导mysql_secure_installation详解](http://www.jb51.net/article/47727.htm)          | -
-          | [Mac Pro下卸载安装Mysql](http://blog.csdn.net/sarahhuangzht/article/details/51508112)         | -
安装包方式      | -                                                                                        | -
-          | [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)                         | 数据库官方安装包
-          | [MySQL Workbench on OS X](https://dev.mysql.com/doc/workbench/en/wb-installing-mac.html) | 官方mysql客户端
-          | [Mac OS X 平台上有哪些好用且免费的MySQL客户端工具？](https://www.zhihu.com/question/21792734)              | mysql客户端
-          | [mac安装配置mysql，以及卸载5.7.＊](https://zhuanlan.zhihu.com/p/25809129)                          | -

### 使用Homebrew安装Mysql

```
// 安装
brew install mysql

// 提高mysql库的安全
mysql_secure_installation
```

## Mysql 基本了解

### MySQL 脚本的基本组成

构成  | more
--- | ------------------------------------------------------------------------
标识符 | 用来命名一些对象, 如数据库、表、列、变量等, 以便在脚本中的其他地方引用
关键字 | MySQL 语句是组成MySQL脚本的基本单位, 每条语句能完成特定的操作, 他是由 SQL 标准语句 + MySQL 扩展语句组成
语句  | -
函数  | MySQL 函数用来实现数据库操作的一些高级功能, 这些函数大致分为以下几类: 字符串函数、数学函数、日期时间函数、搜索函数、加密函数、信息函数

### MySQL 中的数据类型

数据类型  | 分类  | 子类型         | more
----- | --- | ----------- | -------------------------------------
数字    | 整数  | tinyint     | 取值范围为 -127到128
-     | -   | smallint    | -
-     | -   | mediumint   | -
-     | -   | [int]       | 取值范围为 -8388608到8388607
-     | -   | bigint      | -
-     | 浮点数 | [float]     | -
-     | -   | double      | -
-     | -   | real        | -
-     | -   | decimal     | -
字符串类型 | 字符串 | [char]()    | 快，浪费空间（255字节）
-     | -   | [varchar]() | 慢，节约空间（255字节）
-     | 文本  | tinytext    | -
-     | -   | [text]      | 65535字节（一个汉字3个字节，一般情况就不需要longtext类型了）
-     | -   | mediumtext  | -
-     | -   | longtext    | 42亿字节
-     | 二进制 | tinyblob    | -
-     | -   | blob        | -
-     | -   | mediumblob  | -
-     | -   | longblob    | -
日期／时间 | -   | date        | 年-月-日（3个字节）
-     | -   | time        | 时分秒（3个字节）
-     | -   | datetime    | 年月日时分秒（8个字节）
-     | -   | timestamp   | 4个字节
-     | -   | year        | 年（1个字节）

### MySQL 中字段属性修饰

修饰             | more
-------------- | -----------------------------
unsigned       | 无符号
zerofill       | 前面补零
primary key    | 主键索引 （eg: primary key (对应字段)）
auto_increment | 自动累加（一般id）
not null       | 值允不许为null
null           | 值允许为null
default        | 默认值
index          | 创建普通索引（eg:index 普通索引名 （对应字段））

### where 条件语句

条件语句                | more
------------------- | -------------------------
between             | -
and                 | -
in                  | id in(1,3,5)
or                  | -
is null             | -
is not null         | -
like                | like '%s%'(没有regexp强大)
regexp              | 正则匹配
order by 字段名 [desc] | 排序（desc 降序）
limit a [,b]        | 限定输出个数(从0截取a个／从a截取b个)
group by 字段名        | 分组聚合
having              | 分组之后不能用 where，用 having 替换

### 函数

函数                          | more
--------------------------- | ----------
concat(f_name, " ", l_name) | 串接字符串(...)
rand()                      | 随机数
`count(*)` / count(字段名)     | 统计表里共有多少行
sum(字段名)                    | 求和
avg(字段名)                    | 平均数
max(字段名)                    | 最大值
min(字段名)                    | 最小值

## mysql 命令 && 语句

### 参考的相关文档

文档                                                                           | more
---------------------------------------------------------------------------- | -------
[21 分钟 MySQL 入门教程](http://wiki.jikexueyuan.com/project/mysql-21-minutes/)    | 精简，通俗易懂
[Mysql命令大全](http://www.cnblogs.com/zhangzhu/archive/2013/07/04/3172486.html) | -

### 命令列表

命令                                            | 含义
--------------------------------------------- | -------------------------
mysql --version                               | 显示版本号
mysql -h 主机地址 -u 用户名 －p                       | 登陆
mysql -D 所选择的数据库名 -h 主机名 -u 用户名 -p            | 在登录数据库时指定要操作的数据库
mysql -D 所选择的数据库名 -u 用户名 -p < createtable.sql | 执行 createtable.sql 文件内的语句
mysql -u root －p                              | 登陆
mysqladmin -u 用户名 -p 旧密码 新密码                  | 修改密码
brew services start mysql                     | 带着后台服务启动mysql
mysql.server start                            | 启动mysql
mysql.server restart                          | 重新启动mysql
mysqld stop                                   | -

### 语句列表

- database

语句                           | 作用
---------------------------- | --------------------------
show databases;              | 显示数据库
create database 数据库名 [其他选项]; | 创建数据库
show create database 数据库名;   | 查看真实的命令（创建数据库时有一些默认的命令隐藏了）
drop database 数据库名;          | 删除整个数据库
use 数据库名;                    | 选择要操作的数据库（操作之前必须选择）

- table

语句                                                              | 作用
--------------------------------------------------------------- | ------------------------------------------
show tables;                                                    | 显示数据库中的表
create table <表名> ( <字段名1> <类型1> [,..<字段名n> <类型n>]);            | 创建数据表(...)
drop table 表名;                                                  | 删除整张表
desc 表名;                                                        | 查看表结构
show index from 表名                                              | 查看表的索引
alter table 表名 rename 新表名;                                      | 重命名表
rename table 表名 to 新表名;                                         | 重命名表
alter table 表名 add 列名 列数据类型 [after 插入位置];                       | 增加字段
alter table 表名 change 列名称 新列名 新数据类型;                            | 修改字段名（必须加类型？）
alter table 表名 modify 列名称 新数据类型;                                | 修改字段
alter table 表名 drop 列名称;                                        | 删除字段
alter table 表名 drop index 索引名;                                  | 删除索引
alter table 表名 add index 索引名(对应字段);                             | 添加索引
insert into 表名 [(列名1, 列名2, 列名3, ...)] values (值1, 值2, 值3, ...); | 向表中插入数据
delete from 表名称 where 删除条件;                                     | 删除表中的数据
update 表名称 set 列名称=新值 where 更新条件;                               | 修改表中数据
select 列名称 from 表名称 where [查询条件];                               | 查询表中的数据
select * from 表名称;                                              | 查找表中所有数据
select 表名称1.字段名,表名称2.字段名 from 表名称1，表名称2 where [查询条件];           | 普通多表查询
select 表名称1.字段名,表名称2.字段名 from 表名称1 left join 表名称2 on [查询条件];    | 左链接多表查询（那个表想显示全就在左边，这种查询方式主要作用就是保证一个表是完全的）
select 字段名 from 表名称1 where id in (select uid from 表名称2)         | 多表嵌套查询（只能获取一个表的数据 && 索引失效，不建议用）
select id [as] i, name [as] n from user                         | 为字段取别名
select distinct 列名称 from 表名称                                    | 查找表中对应字段（不重复）
select * from MyClass order by id limit 0,2;                    | 查询表中的数据(查询前几行数据)

- select

语句                              | 作用
------------------------------- | --------------
select version()                | 显示MYSQL的版本
select now()                    | 显示当前时间
select data()                   | 显示对应的日期（年-月-日）
select year()                   | 显示对应的年份（年）
SELECT YEAR(CURRENT_DATE)       | 显示当前年份
SELECT MONTH(CURRENT_DATE)      | 显示当前月份
SELECT DAYOFMONTH(CURRENT_DATE) | 显示当月日期
SELECT "welecome to my blog!"   | 显示字符串
select ((4 * 4) / 10 ) + 25     | 当计算器用

- 其他

语句              | 作用
--------------- | ----------------------------------------------------------
\s;             | 查看服务器的基本信息
set names utf8; | 设置mysql客户端连接到数据库时的字符集
desc sql语句;     | 检测sql语句执行过程（可用于优化表结构）(示例：select 列名称 from 表名称 where id=3\G)
？ sql命令         | 查看对应sql命令的用法
exit;           | 退出
\q              | 退出

## Node操作数据库流程

流程              | more
--------------- | ---------------------------------------------------------------------------
连接上mysql数据库（服务） | mysql_connect("localhost","root","123")
选择具体的数据库        | mysql_select_db("test")
执行sql语句的函数      | mysql_query()
设置客户端连接字符集      | mysql_query("set names utf8")
insert 操作       | $sql = `insert into t1(username, password) values(${userName},${passWord})`
delete 操作       | -
update 操作       | $sql = `update t1 set username='user2',password='321' where id=8`
select 操作       | $sql = `select * from t1`
获取查看结果(关联数组最合适) | mysql_fetch_assoc($result)
