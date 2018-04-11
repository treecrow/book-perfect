# process 进程

## 事件列表

| 事件               | more                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| beforeExit         | 当 Node.js 的事件循环数组已经为空，并且没有额外的工作被添加进来，事件'beforeExit'会被触发                                                  |
| disconnect         | 如果 Node.js 进程是由 IPC channel 的方式创建的，当 IPC channel 关闭时，会触发'disconnect'事件                                              |
| exit               | Node.js 进程即将结束                                                                                                                       |
| message            | 如果 Node.js 进程是由 IPC channel 的方式创建的，当子进程收到父进程的的消息时， 会触发'message'事件                                         |
| rejectionHandled   | 如果有 Promise 被 rejected，并且此 Promise 在 Nodje.js 事件循环的下次轮询及之后期间，被绑定了一个错误处理器， 会触发'rejectionHandled'事件 |
| uncaughtException  | 如果 Javascript 未捕获的异常，沿着代码调用路径反向传递回 event loop，会触发'uncaughtException'事件                                         |
| unhandledRejection | 如果在事件循环的一次轮询中，一个 Promise 被 rejected，并且此 Promise 没有绑定错误处理器，'unhandledRejection 事件会被触发                  |
| warning            | 任何时候 Node.js 发出进程告警，都会触发'warning'事件                                                                                       |
| Signal Events      | 当 Node.js 进程接收到一个信号时，会触发信号事件                                                                                            |

## 方法列表

| 方法                                                       | more                                                                                                                                            |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| process.cwd()                                              | 返回 Node.js 进程当前工作的目录                                                                                                                 |
| process.abort()                                            | process.abort()方法会事 Node.js 进程立即结束，并生成一个 core 文件                                                                              |
| process.chdir(directory)                                   | process.chdir()方法变更 Node.js 进程的当前工作目录，如果变更目录失败会抛出异常                                                                  |
| process.cpuUsage([previousValue])                          | 返回包含当前进程的用户 CPU 时间和系统 CPU 时间的对象                                                                                            |
| process.disconnect()                                       | 如果 Node.js 进程是从 IPC 频道派生出来的, process.disconnect()函数会关闭到父进程的 IPC 频道，以允许子进程一旦没有其他链接来保持活跃就优雅地关闭 |
| process.emitWarning(warning[, options])                    | 可用于发出定制的或应用特定的进程警告                                                                                                            |
| process.emitWarning(warning[, type[, code]][, ctor])       | 可用于发出定制的或应用特定的进程警告                                                                                                            |
| process.exit([code])                                       | 以结束状态码 code 指令 Node.js 同步终止进程                                                                                                     |
| process.getegid()                                          | 返回 Node.js 进程的有效数字标记的组身份                                                                                                         |
| process.geteuid()                                          | 返回 Node.js 进程的有效数字标记的用户身份                                                                                                       |
| process.getgid()                                           | 返回 Node.js 进程的数字标记的组身份                                                                                                             |
| process.getgroups()                                        | 返回数组，其中包含了补充的组 ID                                                                                                                 |
| process.getuid()                                           | 返回 Node.js 进程的数字标记的用户身份                                                                                                           |
| process.hrtime([time])                                     | 返回当前时间以[seconds, nanoseconds] tuple Array 表示的高精度解析值， nanoseconds 是当前时间无法使用秒的精度表示的剩余部分                      |
| process.initgroups(user, extra_group)                      | 读取/etc/group 文件，并且初始化组访问列表，该列表包括了用户所在的所有组                                                                         |
| process.kill(pid[, signal])                                | 将 signal 发送给 pid 标识的进程                                                                                                                 |
| process.memoryUsage()                                      | 返回 Node.js 进程的内存使用情况的对象，该对象每个属性值的单位为字节                                                                             |
| process.nextTick(callback[, ...args])                      | callback 添加到"next tick 队列"。 一旦当前事件轮询队列的任务全部完成，在 next tick 队列中的所有 callbacks 会被依次调用                          |
| process.send(message[, sendHandle[, options]][, callback]) | If Node.js is spawned with an IPC channel, the process.send() method can be used to send messages to the parent process                         |
| process.setgroups(groups)                                  | sets the supplementary group IDs for the Node.js process                                                                                        |
| process.setegid(id)                                        | sets the effective group identity of the process                                                                                                |
| process.seteuid(id)                                        | sets the effective user identity of the process                                                                                                 |
| process.setgid(id)                                         | sets the group identity of the process                                                                                                          |
| process.setuid(id)                                         | sets the user identity of the process                                                                                                           |
| process.umask([mask])                                      | sets or returns the Node.js process's file mode creation mask                                                                                   |
| process.uptime()                                           | returns the number of seconds the current Node.js process has been running                                                                      |

## 属性列表

| 属性               | more                                                                                                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| process.arch       | process.arch 属性返回一个标识 Node.js 在其上运行的处理器架构的字符串                                                                                             |
| process.argv       | process.argv 属性返回一个数组，这个数组包含了启动 Node.js 进程时的命令行参数                                                                                     |
| process.argv0      | process.argv0 属性，保存 Node.js 启动时传入的 argv[0]参数值的一份只读副本                                                                                        |
| process.channel    | 如果 Node.js 进程是由 IPC channel 方式创建的，process.channel 属性保存 IPC channel 的引用。 如果 IPC channel 不存在，此属性值为 undefined                        |
| process.config     | process.config 属性返回一个 Javascript 对象。此对象描述了用于编译当前 Node.js 执行程序时涉及的配置项信息                                                         |
| process.connected  | 如果 Node.js 进程是由 IPC channel 方式创建的， 只要 IPC channel 保持连接，process.connected 属性就会返回 true。 process.disconnect()被调用后，此属性会返回 false |
| process.env        | 返回一个包含用户环境信息的对象                                                                                                                                   |
| process.execArgv   | 返回当 Node.js 进程被启动时，Node.js 特定的命令行选项                                                                                                            |
| process.execPath   | 返回启动 Node.js 进程的可执行文件所在的绝对路径                                                                                                                  |
| process.exitCode   | 当进程正常结束，或通过 process.exit()结束但未传递参数时，此数值标识进程结束的状态码                                                                              |
| process.mainModule | 提供了一种获取 require.main 的替代方式                                                                                                                           |
| process.pid        | 返回进程的 PID                                                                                                                                                   |
| process.platform   | 返回字符串，标识 Node.js 进程运行其上的操作系统平台                                                                                                              |
| process.release    | returns an Object containing metadata related to the current release, including URLs for the source tarball and headers-only tarball.                            |
| process.stderr     | returns a stream connected to stderr                                                                                                                             |
| process.stdin      | returns a stream connected to stdin                                                                                                                              |
| process.stdout     | returns a stream connected to stdout                                                                                                                             |
| process.title      | returns the current process title                                                                                                                                |
| process.version    | returns the Node.js version string                                                                                                                               |
| process.versions   | returns an object listing the version strings of Node.js and its dependencies                                                                                    |
