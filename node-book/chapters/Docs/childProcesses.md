# childProcesses

## 衍生子进程方法列表

异步／同步 | 方法                                                          | more
----- | ----------------------------------------------------------- | ------------------------------------------------------------------
异步    | child_process.spawn(command[, args][, options])             | 异步地衍生子进程，且不会阻塞 Node.js 事件循环
-     | child_process.fork(modulePath[, args][, options])           | 衍生一个新的 Node.js 进程，并通过建立一个 IPC 通讯通道来调用一个指定的模块，该通道允许父进程与子进程之间相互发送信息。
-     | child_process.exec(command[, options][, callback])          | 衍生一个 shell 并在 shell 上运行命令，当完成时会传入 stdout 和 stderr 到回调函数。
-     | child_process.execFile(file[, args][, options][, callback]) | 类似 child_process.exec()，但直接衍生命令，且无需先衍生一个 shell。
同步    | child_process.spawnSync(command[, args][, options])         | 以同步的方式提供同样的功能，但会阻塞事件循环，直到衍生的子进程退出或终止
-     | child_process.execSync(command[, options])                  | child_process.exec() 的同步方法，会阻塞 Node.js 事件循环。
-     | child_process.execFileSync(file[, args][, options])         | child_process.execFile() 的同步方法，会阻塞 Node.js 事件循环

- command

> `<string>` 要运行的命令，用空格分隔参数

- modulePath

> `<string>` 要在子进程中运行的模块

- args

> `<Array>` 字符串参数列表

- options

字段         | 类型               | more
---------- | ---------------- | ------------------------------------------------------------
cwd        | string           | 子进程的当前工作目录
env        | object           | 环境变量键值对
encoding   | string           | 默认: 'utf8'
execPath   | string           | 用来创建子进程的执行路径
execArgv   | array            | 要传给执行路径的字符串参数列表
silent     | boolean          | 如果为 true，则子进程中的 stdin、 stdout 和 stderr 会被导流到父进程中，否则它们会继承自父进程
stdio      | array / string   | 当提供了该选项，则它会覆盖 silent
argv0      | string           | 显式地设置要发给子进程的 argv[0] 的值。 如果未指定，则设为 command
detached   | boolean          | 准备将子进程独立于父进程运行
shell      | string           | 用于执行命令的 shell
timeout    | number           | （默认: 0）
maxBuffer  | number           | stdout 或 stderr 允许的最大字节数。 默认为 200*1024。 如果超过限制，则子进程会被终止
killSignal | string / integer | （默认: 'SIGTERM'）
uid        | number           | 设置该进程的用户标识
gid        | number           | 设置该进程的组标识

- callback

参数     | more
------ | ----
error  | -
stdout | -
stderr | -

## ChildProcess 类

### 事件列表

事件         | more
---------- | ----
close      | -
disconnect | -
error      | -
exit       | -
message    | -

### 方法列表

方法                                                       | more
-------------------------------------------------------- | -------------------------------------------------------
child.disconnect()                                       | 关闭父进程与子进程之间的 IPC 通道，一旦没有其他的连接使其保持活跃，则允许子进程正常退出
child.kill([signal])                                     | child.kill() 方法向子进程发送一个信号。 如果没有给定参数，则进程会发送 'SIGTERM' 信号
child.send(message[, sendHandle[, options]][, callback]) | 当父进程和子进程之间建立了一个 IPC 通道时，child.send() 方法可用于发送消息到子进程

### 属性列表

属性              | more
--------------- | ------------------------------------------------------------------
child.pid       | 返回子进程的进程标识（PID）
child.connected | 表明是否仍可以从一个子进程发送和接收消息
child.stdio     | 一个到子进程的管道的稀疏数组，对应着传给 child_process.spawn() 的选项中值被设为 'pipe' 的 stdio
child.stdin     | 一个代表子进程的 stdin 的可写流
child.stdout    | 一个代表子进程的 stdout 的可读流
child.stderr    | 一个代表子进程的 stderr 的可读流
