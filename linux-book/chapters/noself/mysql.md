# mysql

- 安装

```
brew install mysql
```

- 提高mysql库的安全

```
mysql_secure_installation
```

## 命令列表

命令                                  | 含义
----------------------------------- | -------------
mysql --version                     | 显示版本号
brew services start mysql           | 带着后台服务启动mysql
mysql.server start                  | 启动mysql
mysql.server restart                | 重新启动mysql
mysql -h主机地址 -u用户名 －p用户密码           | 登陆
mysqladmin -u用户名 -p旧密码 password 新密码 | 修改密码

## mysql语句

- database

语句                     | 作用
---------------------- | -----
show databases         | 显示数据库
create database <数据库名> | 创建数据库
drop database <数据库名>   | 删除数据库
use <数据库名>             | 连接数据库

- select

语句                                 | 作用
---------------------------------- | ----------
select version()                   | 显示MYSQL的版本
select now()                       | 显示当前时间
SELECT YEAR(CURRENT_DATE)          | 显示当前年份
SELECT MONTH(CURRENT_DATE)         | 显示当前月份
SELECT DAYOFMONTH(CURRENT_DATE)    | 显示当月日期
SELECT "welecome to my blog!"      | 显示字符串
select ((4 * 4) / 10 ) + 25        | 当计算器用
select CONCAT(f_name, " ", l_name) | 串接字符串(...)

- table

语句                                                                | 作用
----------------------------------------------------------------- | ----------------
create table <表名> ( <字段名1> <类型1> [,..<字段名n> <类型n>])               | 创建数据表(...)
drop table <表名>                                                   | 删除数据表
insert into <表名> [( <字段名1>[,..<字段名n > ])] values ( 值1 )[, ( 值n )] | 表插入数据
select <字段1，字段2，...> from < 表名 > where < 表达式 >                    | 查询表中的数据(查询所有行)
select * from MyClass order by id limit 0,2                       | 查询表中的数据(查询前几行数据)
delete from <表名> where <表达式>                                      | 删除表中数据
update 表名 set 字段=新值,... where 条件                                  | 修改表中数据
alter table 表名 add字段 类型 其他                                        | 增加字段
rename table 原表名 to 新表名                                           | 修改表名

- 其他

语句 | 作用
-- | --
\q | 退出

- 备份数据库

> 略

## 相关文档

- [记录使用Homebrew安装Mysql全过程](http://blog.csdn.net/lkxlaz/article/details/54580735)
- [MySQL安全配置向导mysql_secure_installation详解](http://www.jb51.net/article/47727.htm)
- [Mysql命令大全](http://www.cnblogs.com/zhangzhu/archive/2013/07/04/3172486.html)
