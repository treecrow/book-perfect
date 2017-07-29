# mysql

> mysql采用table和结构化的sql语句来处理数据，在mysql中需要预先定义数据结构schema，并定义table中数据字段的关系

> 在mysql中，相关信息可以保存在不同的表中，通过join的形式来保持彼此关联

## 相关文档

文档                                                                                      | more
--------------------------------------------------------------------------------------- | ------------------------
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

### 使用安装包安装

1. 安装过程中保存弹出框中的密码（它是你mysql root账号的密码）
2. 安装成功->进入系统偏好设置->点击mysql->开启mysql服务
3. 进入"/usr/local/mysql/bin",查看此目录下是否有mysql
4. 在 "~/.bash_profile" 文件中添加 `PATH=/usr/local/mysql/bin:$PATH`
5. 命令行执行 `source ~/.bash_profile`,之后就可以在终端使用mysql系列命令了

## 命令列表

命令                                            | 含义
--------------------------------------------- | -------------------------
mysql --version                               | 显示版本号
mysql -h 主机地址 -u 用户名 －p                       | 登陆
mysql -D 所选择的数据库名 -h 主机名 -u 用户名 -p            | 在登录数据库时指定要操作的数据库
mysql -D 所选择的数据库名 -u 用户名 -p < createtable.sql | 执行 createtable.sql 文件内的语句
mysql -u root －p                              | 登陆
mysqladmin -u用户名 -p旧密码 password 新密码           | 修改密码(测试无效)
brew services start mysql                     | 带着后台服务启动mysql
mysql.server start                            | 启动mysql
mysql.server restart                          | 重新启动mysql
mysqld stop                                   | -

## Mysql 知识点

### 参考的相关文档

文档                                                                           | more
---------------------------------------------------------------------------- | -------
[21 分钟 MySQL 入门教程](http://wiki.jikexueyuan.com/project/mysql-21-minutes/)    | 精简，通俗易懂
[Mysql命令大全](http://www.cnblogs.com/zhangzhu/archive/2013/07/04/3172486.html) | -

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
日期／时间 | -   | date        | 年-月-日（3个字节）,精确到天
-     | -   | time        | 时分秒（3个字节）
-     | -   | datetime    | 年月日时分秒（8个字节）(适合设置创建的值)
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

### 函数

函数                          | more
--------------------------- | --------------
version()                   | 显示MYSQL的版本
`count(*)` / count(字段名)     | 统计表里共有多少行
sum(字段名)                    | 求和
avg(字段名)                    | 平均数
max(字段名)                    | 最大值
min(字段名)                    | 最小值
rand()                      | 随机数
now()                       | 显示当前时间(年月日时分秒)
current_date                | 显示当前时间（年月日）
year(current_date)          | 显示当前年份(年)
month(current_date)         | 显示当前月份(月)
dayofmonth(current_date)    | 显示当月日期(日)
"welecome to my blog!"      | 显示字符串
concat(f_name, " ", l_name) | 串接字符串(...)
inet_aton(ip)               | 将ip转化为数字
inet_ntoa(num)              | 将数字转化为ip
((4 * 4) / 10 ) + 25        | 当计算器用

### where 条件语句

条件语句                      | more
------------------------- | -------------------------
between                   | -
and                       | -
in                        | id in(1,3,5)
or                        | -
is null                   | -
is not null               | -
like                      | like '%s%'(没有regexp强大)
regexp                    | 正则匹配
order by 字段名 [desc / asc] | 排序（desc-降序，asc-升序）
limit a [,b]              | 限定输出个数(从0截取a个／从a截取b个)
group by 字段名              | 分组聚合
having                    | 分组之后不能用 where，用 having 替换
on                        | 左链接后不能用where,用 on 替换

### 语句列表

- database && table基本操作

分类       | 语句
-------- | ---------------------------------------------------------------
database | show databases;
~        | create database 数据库名 [其他选项];
~        | drop database 数据库名;
~        | use 数据库名;
table    | show tables;
~        | desc 表名;
~        | show columns from 表名;
~        | show full columns from 表名;
~        | create table <表名> ( <字段名1> <类型1> [,..<字段名n> <类型n>]);
~        | drop table 表名;
~        | rename table 表名 to 新表名;
~        | alter table 表名 rename 新表名;
修改表字段    | alter table 表名 add 列名 列数据类型 [after 插入位置];
~        | alter table 表名 drop 列名称;
~        | alter table 表名 change 列名称 新列名 新数据类型;
~        | alter table 表名 modify 列名称 新数据类型;
表索引      | show index from 表名
~        | alter table 表名 add index 索引名(对应字段);
~        | alter table 表名 drop index 索引名;
CRUD     | insert into 表名 [(列名1, 列名2, 列名3, ...)] values (值1, 值2, 值3, ...);
~        | insert into 表名 key=value;
~        | delete from 表名称 where 删除条件;
~        | update 表名称 set 列名称=新值 where 更新条件;
~        | select 列名称 from 表名称 where [查询条件];

- 更多table查询用法

分类                          | 语句
--------------------------- | -------------------------------------------------------------------------
多表字段组合（去重）                  | select 字段名 from 表名称1 union select 字段名 from 表名称2;
多表字段组合（不去重）                 | select 字段名 from 表名称1 union all select 字段名 from 表名称2;
分组查询                        | `select 字段名,count(*) from 表名称 group by 字段名;`
分组查询（增加总数行）                 | select 字段名1, sum(字段名2) from 表名称 group by 字段名1 with rollup;
分组查询 （总数行命名）                | `select coalesce(字段名1,'总数'),count(*) from 表名称 group by 字段名1 with rollup;`
普通多表查询(两个表的数据整合起来发给前端)      | select 表名称1.字段名,表名称2.字段名 from 表名称1，表名称2 where [查询条件];
左链接多表查询（右表中没有左表的数据，也完整显示左表） | select 表名称1.字段名,表名称2.字段名 from 表名称1 left join 表名称2 on [查询条件];
多表嵌套查询                      | select 字段名 from 表名称1 where id in (select uid from 表名称2)
其它                          | select id [as] i, name [as] n from user
～                           | select distinct 列名称 from 表名称
～                           | select * from MyClass order by id limit 0,2;

- 其他

语句                                                | 作用
------------------------------------------------- | ----------------------------------------------------------
set names utf8;                                   | 设置mysql客户端连接到数据库时的字符集
set password for 用户名@localhost = password('新密码'); | 修改密码
desc sql语句;                                       | 检测sql语句执行过程（可用于优化表结构）(示例：select 列名称 from 表名称 where id=3\G)
？ sql命令                                           | 查看对应sql命令的用法
show variables;                                   | 展示mysql中的各种变量
\s;                                               | 查看服务器的基本信息
\q; / exit;                                       | 退出
