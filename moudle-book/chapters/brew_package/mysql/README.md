# [mysql](https://www.mysql.com/)

## 相关文档

| web                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [菜鸟教程](https://www.runoob.com/mysql/mysql-tutorial.html)                                                                                     |
| [记录使用 Homebrew 安装 Mysql 全过程](https://blog.csdn.net/lkxlaz/article/details/54580735)                                                     |
| [Mysql 命令大全](https://www.cnblogs.com/zhangzhu/archive/2013/07/04/3172486.html)                                                               |
| [旧文档](https://github.com/treecrow/docsify-books/blob/d375bb3ace3a30229af24383b101bd5b46cc55d9/node-book/chapters/%E6%9D%82%E9%A1%B9/mysql.md) |

## 个人整理文档

| class      | 工具                                                                   | 描述                                           |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| 命令行工具 | [mysql_secure_installation](./命令行工具/mysql_secure_installation.md) | 安全安装（用于生产环境设置）                   |
| ^          | [mysqladmin](./命令行工具/mysqladmin.md)                               | 运维和管理工具                                 |
| ^          | [mysqld](./命令行工具/mysqld.md)                                       | 服务执行工具                                   |
| ^          | [mysql.server 命令行工具/](./mysql_server.md)                          | -                                              |
| ^          | [mysql](./命令行工具/mysql.md)                                         | 客户端工具,打开并执行 sql 语句的命令           |
| ^          | [mysqldump](./命令行工具/mysqldump.md)                                 | mysql 用于转存储数据库的实用程序               |
| ^          | [mysqlimport](./命令行工具/mysqlimport.md)                             | 提供了 LOAD DATA INFILEQL 语句的一个命令行接口 |
| orther     | [where](./where.md)                                                    | -                                              |
| ^          | [事务](./事务.md)                                                      | -                                              |
| ^          | [函数](./函数.md)                                                      | -                                              |
| ^          | [字段属性修饰](./字段属性修饰.md)                                      | -                                              |
| ^          | [数据类型](./数据类型.md)                                              | -                                              |
| ^          | [运算符](./运算符.md)                                                  | -                                              |

## sql 命令

| class          | 命令                                                                                          | more                                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| database       | show databases;                                                                               | 显示数据库                                                                                                              |
| ^              | create database <数据库名>;                                                                   | 创建数据库                                                                                                              |
| ^              | drop database <数据库名>;                                                                     | 删除数据库                                                                                                              |
| ^              | use <数据库名>;                                                                               | 选择数据库                                                                                                              |
| table          | show tables;                                                                                  | 现实当前数据库的所有数据表                                                                                              |
| ^              | desc <表名>                                                                                   | 查看表信息                                                                                                              |
| ^              | create table <表名> (column_name column_type);                                                | 创建数据表                                                                                                              |
| ^              | show create table <表名>                                                                      | 获取创建数据表(CREATE TABLE) 语句，该语句包含了原数据表的结构，索引等                                                   |
| ^              | drop table <表名> ;                                                                           | 删除数据表                                                                                                              |
| ^              | alter table <表名> <ENGINE = MYISAM>                                                          | 修改数据表类型                                                                                                          |
| ^              | alter table <表名> rename to <新表名>                                                         | 修改数据表名称                                                                                                          |
| ^              | rename table <表名> to <新表名>                                                               | 表名重命名                                                                                                              |
| 表字段         | show columns from <表名>;                                                                     | 查看数据表字段                                                                                                          |
| ^              | show full columns from <表名>;                                                                | 查看数据表字段                                                                                                          |
| ^              | alter table <表名> add <字段名>                                                               | 添加表字段                                                                                                              |
| ^              | alter table <表名> add <字段名> first                                                         | 添加表字段,并设置数据表字段的位置为第一列                                                                               |
| ^              | alter table <表名> add <字段名> after <字段名 0>                                              | 添加表字段,并设置数据表字段的位置在字段名 0 后面                                                                        |
| ^              | alter table <表名> drop <字段名>                                                              | 删除表字段                                                                                                              |
| ^              | alter table <表名> modify <字段名> <字段类型>                                                 | 修改表字段类型                                                                                                          |
| ^              | alter table <表名> modify <字段名> bigint not null default 100                                | ^                                                                                                                       |
| ^              | alter table <表名> change <字段名> <新字段名> <字段类型>                                      | 修改表字段名称和类型                                                                                                    |
| ^              | alter table <表名> alter <字段名> set default xxx                                             | 修改字段默认值                                                                                                          |
| ^              | alter table <表名> alter <字段名> drop default                                                | 删除字段默认值                                                                                                          |
| 序列           | select LAST_INSERT_ID()                                                                       | 来获取最后的插入表中的自增列的值                                                                                        |
| ^              | alter table <表名> auto_increment=100                                                         | 设置序列的开始值                                                                                                        |
| 索引           | show index from <表名>                                                                        | -                                                                                                                       |
| ^              | create index <索引名> on <表名> (对应字段(length))                                            | 创建索引                                                                                                                |
| ^              | create unique index <索引名> on <表名>(对应字段(length))                                      | 创建唯一索引                                                                                                            |
| ^              | alter table <表名> add index <索引名>(对应字段)                                               | 添加普通索引，索引值可出现多次                                                                                          |
| ^              | alter table <表名> add unique <索引名>(对应字段(length))                                      | 创建索引的值必须是唯一的（除了 NULL 外，NULL 可能会出现多次）。                                                         |
| ^              | alter table <表名> add primary key (对应字段(length))                                         | 添加一个主键，这意味着索引值必须是唯一的，且不能为 NULL                                                                 |
| ^              | alter table <表名> add fulltext <索引名>(对应字段(length))                                    | 该语句指定了索引为 FULLTEXT ，用于全文索引                                                                              |
| ^              | alter table <表名> drop index <索引名>                                                        | 删除索引                                                                                                                |
| ^              | alter table <表名> drop primary key                                                           | 删除主键                                                                                                                |
| ^              | drop index <索引名> on <表名>                                                                 | ^                                                                                                                       |
| CUD            | insert into <表名> ( field1, field2,...fieldN ) values ( value1, value2,...valueN )           | 插入数据                                                                                                                |
| ^              | replace into <表名> ( field1, field2,...fieldN ) values ( value1, value2,...valueN )          | 替换数据？                                                                                                              |
| ^              | insert ignore into <表名> ( field1, field2,...fieldN ) values ( value1, value2,...valueN )    | 插入数据( INSERT IGNORE 会忽略数据库中已经存在的数据，如果数据库没有数据，就插入新的数据，如果有数据的话就跳过这条数据) |
| ^              | insert into <表名> ( field1, field2,...fieldN ) select field1, field2,...fieldN from <表名 2> | 拷贝数据表 2 数据到数据表中                                                                                             |
| ^              | delete from <表名> [where Clause]                                                             | 删除数据                                                                                                                |
| ^              | update <表名> set field1=new-value1, field2=new-value2 [where Clause]                         | 修改数据                                                                                                                |
| 查询           | select field1,field2 from <表名> [where Clause][limit n][ offset M]                           | 查询数据                                                                                                                |
| ^              | `select * from <表名>`                                                                        | ^                                                                                                                       |
| 查询-排序      | `select * from <表名> order by 列名称`                                                        | 排序查询                                                                                                                |
| ^              | `select * from <表名> order by 列名称 desc`                                                   | 排序查询(反向排序)                                                                                                      |
| 查询-分组      | `select field,count(*) as count from <表名> group by field`                                   | 分组                                                                                                                    |
| ^              | select field,sum(orther_field) as orther_field_count from <表名> group by field with rollup   | 分组-综合计算                                                                                                           |
| 查询-null      | `select * from <表名> where fail is null`                                                     | null 值判断                                                                                                             |
| ^              | `select * from <表名> where fail is not null`                                                 | -                                                                                                                       |
| 查询-正则      | select name from <表名> where country REGEXP '^C'                                             | -                                                                                                                       |
| 查询-重复      | -                                                                                             | -                                                                                                                       |
| ^              | select distinct name from <表名>                                                              | 读取不重复的数据可以在 SELECT 语句中使用 DISTINCT 关键字来过滤重复数据                                                  |
| 多表查询-union | select 列名称 from <表名> union select 列名称 from <表名 2>                                   | UNION 查询                                                                                                              |
| ^              | select 列名称 from <表名> union all select 列名称 from <表名 2>                               | ^                                                                                                                       |
| 多表查询-join  | select a.field, a.field1, b.field1 from <表名 1> a right join <表名 2> b on a.field = b.field | 右连接                                                                                                                  |
| ^              | select a.field, a.field1, b.field1 from <表名 1> a left join <表名 2> b on a.field = b.field  | 左连接                                                                                                                  |
| ^              | select a.field, a.field1, b.field1 from <表名 1> a inner join <表名 2> b on a.field = b.field | 内连接                                                                                                                  |
| 临时表         | `crete table tmp select * from ortherTable`                                                   | 基于另一个表创建临时表                                                                                                  |
| ^              | alter table tmp rename to <新表名>                                                            | 修改临时表表名                                                                                                          |
| 事务           | begin                                                                                         | 开始一个事务                                                                                                            |
| ^              | rollback                                                                                      | 事务回滚                                                                                                                |
| ^              | commit                                                                                        | 事务确认                                                                                                                |
| 导出数据       | `select * from <表名> into outfile <文件路径>`                                                | 导出数据到文件                                                                                                          |
| ^              | fields terminated by <字符串>                                                                 | 字段分割字符串                                                                                                          |
| ^              | optionally enclosed by <字符串>                                                               | 字段包裹字符串                                                                                                          |
| ^              | lines terminated by <字符串>                                                                  | 行分割字符串                                                                                                            |
| 导入数据       | load data local infile <文件路径> into table <数据表名>                                       | 将文件中的数据插入到指定数据表中                                                                                        |
| ^              | mysql -u root -p <数据库名> < <文件路径>                                                      | 将备份的数据库导入到 MySQL 服务器                                                                                       |
| ^              | mysql -u root -p < <文件路径>                                                                 | 将备份的数据库导入到 MySQL 服务器                                                                                       |
| orther         | source <sql 文件路径>                                                                         | 执行 sql 文件语句？                                                                                                     |
| ^              | select version()                                                                              | 服务器版本信息                                                                                                          |
| ^              | select database()                                                                             | 当前数据库名 (或者返回空)                                                                                               |
| ^              | select user()                                                                                 | 当前用户名                                                                                                              |
| ^              | show status                                                                                   | 服务器状态                                                                                                              |
| ^              | show variables                                                                                | 服务器配置变量                                                                                                          |
| ^              | \p                                                                                            | 打印输入                                                                                                                |
| ^              | \c                                                                                            | 取消输入                                                                                                                |
| ^              | \s                                                                                            | 查看服务器的基本信息                                                                                                    |
| ^              | \q / exit                                                                                     | 退出                                                                                                                    |
| ^              | ？ sql 命令                                                                                   | 查看对应 sql 命令的用法                                                                                                 |
| ^              | set names utf8;                                                                               | 设置 mysql 客户端连接到数据库时的字符集                                                                                 |
| ^              | set password for 用户名@localhost = password('新密码');                                       | 修改密码                                                                                                                |
| ^              | desc <sql 语句>                                                                               | 检测 sql 语句执行过程（可用于优化表结构）(示例：select 列名称 from 表名称 where id=3\G)                                 |
