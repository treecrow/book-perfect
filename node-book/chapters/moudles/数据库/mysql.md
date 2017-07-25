# mysql

> mysql模块是node操作MySQL的引擎，可以在node.js环境下对MySQL数据库进行建表，增、删、改、查等操作。

## 连接配置

字段                 | more
------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------
host               | 主机地址 （默认：localhost）
port               | 端口号 （默认：3306）
localAddress       | 此IP用于TCP连接（可选）
socketPath         | 连接到unix域路径，当使用 host 和 port 时会被忽略
user               | 用户名
password           | 密码
database           | 数据库名
charset            | 连接字符集（默认：'UTF8_GENERAL_CI'，注意字符集的字母都要大写）
timezone           | 时区（默认：'local'）
connectTimeout     | 连接超时（默认：不限制；单位：毫秒）
stringifyObjects   | 是否序列化对象(默认:false )
insecureAuth       | Allow connecting to MySQL instances that ask for the old (insecure) authentication method. (Default: false)
typeCast           | 是否将列值转化为本地JavaScript类型值 （默认：true）
queryFormat        | 自定义query语句格式化方法
supportBigNumbers  | 数据库支持bigint或decimal类型列时，需要设此option为true （默认：false）
bigNumberStrings   | supportBigNumbers和bigNumberStrings启用 强制bigint或decimal列以JavaScript字符串类型返回（默认：false）
dateStrings        | 强制timestamp,datetime,data类型以字符串类型返回，而不是JavaScript Date类型（默认：false）
debug              | 开启调试（默认：false）
trace              | Generates stack traces on Error to include call site of library entrance ("long stack traces"). Slight performance penalty for most calls. (Default: true)
multipleStatements | 是否许一个query中有多个MySQL语句 （默认：false）
flags              | 用于修改连接标志
ssl                | 使用ssl参数（与crypto.createCredenitals参数格式一至）或一个包含ssl配置文件名称的字符串，目前只捆绑Amazon RDS的配置文件

## api 列表

分组   | api                                                              | more
---- | ---------------------------------------------------------------- | --------------
通用   | mysql.createConnection(config)                                   | -
～    | connection.connect((error)=>{})                                  | -
～    | connection.query(sqlString,(err, results, fields)=>{]})          | -
～    | connection.query(sqlString, values, (err, results, fields)=>{]}) | -
～    | connection.query(options, (err, results, fields)=>{]})           | -
～    | connection.pause(config)                                         | 暂停
～    | connection.stream()                                              | -
～    | connection.pipe()                                                | -
～    | connection.beginTransaction()                                    | -
～    | connection.rollback()                                            | -
～    | connection.commit()                                              | -
～    | connection.ping()                                                | -
～    | connection.end()                                                 | 数据库操作完成后的执行
～    | connection.destroy()                                             | 中止数据库所有操作，断开连接
～    | connection.changeUser(config,(err)=>{})                          | 改变用户
～    | mysql.escape()                                                   | 防止sql语句注入
～    | connection.escape()                                              | 防止sql语句注入
~    | mysql.escapeId(identifier)                                       | -
~    | connection.escapeId(identifier)                                  | -
~    | mysql.format(sql, inserts)                                       | -
连接池  | mysql.createPool(config)                                         | -
～    | pool.query()                                                     | -
～    | pool.getConnection((err, connection)=>{})                        | -
～    | connection.release()                                             | -
～    | pool.end((err)=>{})                                              | 关闭池
～    | pool.escape()                                                    | 防止sql语句注入
~    | pool.escapeId(identifier)                                        | -
多数据库 | mysql.createPoolCluster(config)                                  | -
～    | poolCluster.add()                                                | -
～    | poolCluster.remove(slaveName)                                    | -
～    | poolCluster.getConnection([slaveName],(err, connection)=>{})     | -
～    | poolCluster.of(pattern / selector)                               | 匹配 slave

## api 相关 配置

### connection.query() 配置

字段         | more
---------- | --------------------------------------
sql        | sql语句
values     | -
timeout    | 超时后销毁连接
nestTables | Joins with overlapping column names???

### mysql.createPool() 配置

字段                 | more
------------------ | ----------------------------------------------------------------------------------------------------------
acquireTimeout     | The milliseconds before a timeout occurs during the connection acquisition
waitForConnections | Determines the pool's action when no connections are available and the limit has been reached
connectionLimit    | The maximum number of connections to create at once. (Default: 10)
queueLimit         | The maximum number of connection requests the pool will queue before returning an error from getConnection

### mysql.createPoolCluster() 配置

字段                   | more
-------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------
canRetry             | If true, PoolCluster will attempt to reconnect when connection fails. (Default: true)
removeNodeErrorCount | If connection fails, node's errorCount increases. When errorCount is greater than removeNodeErrorCount, remove a node in the PoolCluster. (Default: 5)
restoreNodeTimeout   | If connection fails, specifies the number of milliseconds before another connection attempt will be made.
defaultSelector      | The default selector. (Default: RR)

### connection.changeUser() 配置

字段       | more
-------- | -----------------------------------------------------------
user     | The name of the new user (defaults to the previous one)
password | The password of the new user (defaults to the previous one)
charset  | The new charset (defaults to the previous one)
database | The new database (defaults to the previous one)

## 事件

### connection 事件

事件    | more
----- | ----
error | -

### pool 事件

事件         | more
---------- | -------------------------------------------------------------------------------------------------------
acquire    | The pool will emit an acquire event when a connection is acquired from the pool
connection | The pool will emit a connection event when a new connection is made within the pool
enqueue    | The pool will emit an enqueue event when a callback has been queued to wait for an available connection
release    | The pool will emit a release event when a connection is released back to the pool

## ? 转化机制

类型               | more
---------------- | ------------------------------------------------------------------------------
Numbers          | 不改变
Booleans         | true / false
Date             | 'YYYY-mm-dd HH:ii:ss' strings
Buffers          | hex strings, e.g. X'0fa5'
Strings          | safely escaped
Arrays           | list, e.g. ['a', 'b'] turns into 'a', 'b'
Nested arrays    | grouped lists， e.g. [['a', 'b'], ['c', 'd']] turns into ('a', 'b'), ('c', 'd')
Objects          | 可枚举属性转化为 key='val'健值对，忽略函数，对象调用toString()方法转换
undefined / null | null
NaN / Infinity   | 无效忽略

## results

字段                   | 含义
-------------------- | ----------------
results.insertId     | 获取插入行的id
results.affectedRows | 获取 插入/修改／删除 行的id
results.changedRows  | 获取修改行的id

## connection

字段                  | 含义
------------------- | ---------
connection.threadId | 获取某个连接的id

## error 对象

字段         | more
---------- | ---------------------------------------------------
code       | MySQL server error ／ Node.js error ／ internal error
fatal      | 错误是否来自mysql操作
sql        | 引起错误的sql语句
sqlMessage | mysql返回的错误描述
