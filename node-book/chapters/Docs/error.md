# error错误

## 错误类型汇总

### Node.js 中运行的应用程序一般会遇到以下四类错误

错误                | more
----------------- | ------------------------------------------------------------------
标准的 JavaScript 错误 | -
系统错误              | 由底层操作系的触发的系统错误，例如试图打开一个不存在的文件、试图向一个已关闭的 socket 发送数据等
自定义错误             | 由应用程序代码触发的用户自定义的错误
断言错误              | 断言错误是错误的一个特殊的类，每当 Node.js 检测到一个不应该发生的异常逻辑时会触发。 这类错误通常由 assert 模块触发

### 标准的 JavaScript 错误列表

错误             | more
-------------- | ----------------------
EvalError      | 当调用 eval() 失败时抛出。
SyntaxError    | 当 JavaScript 语法错误时抛出。
RangeError     | 当一个值不在预期范围内时抛出。
ReferenceError | 当使用未定义的变量时抛出。
TypeError      | 当传入错误类型的参数时抛出。
URIError       | 当一个全局的 URI 处理函数被误用时抛出。

## 错误的冒泡和捕获

方式             | more
-------------- | --------------------------------------------------------------------------------------------------
try / catch 语句 | JavaScript 的 throw 机制的任何使用都会引起异常，异常必须使用 try / catch 处理，否则 Node.js 进程会立即退出
callback 函数    | 大多数的异步方法都接受一个 callback 函数，该函数会接受一个 Error 对象传入作为第一个参数。 如果第一个参数不是 null 而是一个 Error 实例，则说明发生了错误，应该进行处理
'error' 事件     | 当一个异步方法被一个 EventEmitter 对象调用时，错误会被分发到对象的 'error' 事件上

## Error 类

> 一个通用的 JavaScript Error 对象，它不表示错误发生的具体情况.所有由 Node.js 产生的错误，包括所有系统的和 JavaScript 的错误都实例化自或继承自 Error 类

### 新建一个 Error 实例

```javascript
new Error(message)
```

### 方法列表

方法                                                      | more
------------------------------------------------------- | --------------------------------------------------------------------------------
Error.captureStackTrace(targetObject[, constructorOpt]) | 在 targetObject 上创建一个 .stack 属性，当访问时返回一个表示代码中调用 Error.captureStackTrace() 的位置的字符串

### 属性列表

属性                    | more
--------------------- | ---------------------------------------------------------------------------
Error.stackTraceLimit | 指定了堆栈跟踪收集的栈帧数量(默认10)
error.code            | The error.code property is a string label that identifies the kind of error
error.message         | error.message 属性是错误的字符串描述，通过调用 new Error(message) 设置
error.stack           | error.stack 属性是一个字符串，描述代码中 Error 被实例化的位置(堆栈)

## RangeError 类

> Error 的一个子类，表明一个函数的一个给定的参数的值不在可接受的集合或范围内

## ReferenceError 类

> Error 的一个子类，表明试图访问一个未定义的变量

## SyntaxError 类

> Error 的一个子类，表明程序不是有效的 JavaScript 代码

## TypeError 类

> Error 的一个子类，表明提供的参数不是一个被允许的类型

## 系统错误

### 系统错误类

#### 属性列表

属性            | more
------------- | -----------------------------------------------------------------
error.code    | 表示错误码的字符串，总是 E 带上一串大写字母
error.errno   | 是一个数值或字符串，表示libuv 错误处理 中定义的错误码或者error.code
error.syscall | 描述失败的 系统调用
error.path    | a string containing a relevant invalid pathname
error.address | a string describing the address to which the connection failed
error.port    | a number representing the connection's port that is not available

#### 常见的系统错误

错误码                  | more
-------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------
EACCES (拒绝访问)        | 试图以被一个文件的访问权限禁止的方式访问一个文件。
EADDRINUSE (地址已被使用)  | 试图绑定一个服务器（net、http 或 https）到本地地址，但因另一个本地系统的服务器已占用了该地址而导致失败。
ECONNREFUSED (连接被拒绝) | 无法连接，因为目标机器积极拒绝。 这通常是因为试图连接到外部主机上的废弃的服务。
ECONNRESET (连接被重置)   | 一个连接被强行关闭。 这通常是因为连接到远程 socket 超时或重启。 常发生于 http 和 net 模块。
EEXIST (文件已存在)       | 一个操作的目标文件已存在，而要求目标不存在。
EISDIR (是一个目录)       | 一个操作要求一个文件，但给定的路径是一个目录。
EMFILE (系统打开了太多文件)   | 已达到系统文件描述符允许的最大数量，且描述符的请求不能被满足直到至少关闭其中一个。 当一次并行打开多个文件时会发生这个错误，尤其是在进程的文件描述限制数量较低的操作系统（如 macOS）。 要解决这个限制，可在运行 Node.js 进程的同一 shell 中运行 ulimit -n 2048。
ENOENT (无此文件或目录)     | 通常是由 fs 操作引起的，表明指定的路径不存在，即给定的路径找不到文件或目录。
ENOTDIR (不是一个目录)     | 给定的路径虽然存在，但不是一个目录。 通常是由 fs.readdir 引起的。
ENOTEMPTY (目录非空)     | 一个操作的目标是一个非空的目录，而要求的是一个空目录。 通常是由 fs.unlink 引起的。
EPERM (操作不被允许)       | 试图执行一个需要更高权限的操作。
EPIPE (管道损坏)         | 写入一个管道、socket 或 FIFO 时没有进程读取数据。 常见于 net 和 http 层，表明远端要写入的流已被关闭。
ETIMEDOUT (操作超时)     | 一个连接或发送的请求失败，因为连接方在一段时间后没有做出合适的响应。 常见于 http 或 net。 往往标志着 socket.end() 没有被正确地调用。

## Node.js Error Codes

Error Code                   | more
---------------------------- | ----
ERR_ARG_NOT_ITERABLE         | -
ERR_INVALID_ARG_TYPE         | -
ERR_INVALID_CALLBACK         | -
ERR_INVALID_FILE_URL_HOST    | -
ERR_INVALID_FILE_URL_PATH    | -
ERR_INVALID_HANDLE_TYPE      | -
ERR_INVALID_OPT_VALUE        | -
ERR_INVALID_SYNC_FORK_INPUT  | -
ERR_INVALID_THIS             | -
ERR_INVALID_TUPLE            | -
ERR_INVALID_URL              | -
ERR_INVALID_URL_SCHEME       | -
ERR_IPC_CHANNEL_CLOSED       | -
ERR_IPC_DISCONNECTED         | -
ERR_IPC_ONE_PIPE             | -
ERR_IPC_SYNC_FORK            | -
ERR_MISSING_ARGS             | -
ERR_SOCKET_ALREADY_BOUND     | -
ERR_SOCKET_BAD_PORT          | -
ERR_SOCKET_BAD_TYPE          | -
ERR_SOCKET_CANNOT_SEND       | -
ERR_SOCKET_DGRAM_NOT_RUNNING | -
ERR_STDERR_CLOSE             | -
ERR_STDOUT_CLOSE             | -
ERR_UNKNOWN_BUILTIN_MODULE   | -
ERR_UNKNOWN_SIGNAL           | -
ERR_UNKNOWN_STDIN_TYPE       | -
ERR_UNKNOWN_STREAM_TYPE      | -
