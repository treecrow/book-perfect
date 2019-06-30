# child_process

> 子进程

## api list

- child_process

| api                                                         | more                                                                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------ |
| child_process.spawn(command[, args][, options])             | 启动一个子进程来执行命令                                                       |
| child_process.spawnSync(command[, args][, options])         | ^                                                                              |
| child_process.exec(command[, options][, callback])          | 启动一个子进程来执行命令, 带回调参数获知子进程的情况, 可指定进程运行的超时时间 |
| child_process.execSync(command[, options])                  | ^                                                                              |
| child_process.execFile(file[, args][, options][, callback]) | 启动一个子进程来执行一个可执行文件, 可指定进程运行的超时时间                   |
| child_process.execFileSync(file[, args][, options])         | ^                                                                              |
| child_process.fork(modulePath[, args][, options])           | 与 spawn()类似, 不同在于它创建的 node 子进程只需指定要执行的 js 文件模块即可   |

- ChildProcess 类

| 分类  | 方法                                                          | more                                                                                                                       |
| ----- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| api   | subprocess.disconnect()                                       | 关闭父进程与子进程之间的 IPC 通道，一旦没有其他的连接使其保持活跃，则允许子进程正常退出                                    |
| ~     | subprocess.kill([signal])                                     | child.kill() 方法向子进程发送一个信号。 如果没有给定参数，则进程会发送 'SIGTERM' 信号                                      |
| ~     | subprocess.ref()                                              | 调用 subprocess.unref() 之后再调用 subprocess.ref() 会还原已被移除的子进程引用计数，强迫父进程在退出自身之前等待子进程退出 |
| ~     | subprocess.unref()                                            | 默认情况下，父进程会等待已解绑的子进程退出。 如果无需父进程等待，可使用 subprocess.unref() 退出 subprocess                 |
| ~     | subprocess.send(message[, sendHandle[, options]][, callback]) | 当父进程和子进程之间建立了一个 IPC 通道时，child.send() 方法可用于发送消息到子进程                                         |
| ~     | subprocess.channel                                            | A pipe representing the IPC channel to the child process                                                                   |
| ~     | subprocess.connected                                          | 表明是否仍可以从一个子进程发送和接收消息                                                                                   |
| ~     | subprocess.killed                                             | 表明子进程是否已成功接收到 subprocess.kill() 的信号                                                                        |
| ~     | subprocess.pid                                                | 返回子进程的进程标识（PID）                                                                                                |
| ~     | subprocess.stderr                                             | 一个代表子进程的 stderr 的可读流                                                                                           |
| ~     | subprocess.stdin                                              | 一个代表子进程的 stdin 的可写流                                                                                            |
| ~     | subprocess.stdio                                              | 一个到子进程的管道的稀疏数组，对应着传给 child_process.spawn() 的选项中值被设为 'pipe' 的 stdio                            |
| ~     | subprocess.stdout                                             | 一个代表子进程的 stdout 的可读流                                                                                           |
| event | close                                                         | 当子进程的 stdio 流被关闭时会触发 'close' 事件                                                                             |
| ~     | disconnect                                                    | 在父进程中调用 child.disconnect() 或在子进程中调用 process.disconnect() 后会触发 'disconnect' 事件                         |
| ~     | error                                                         | 进程无法被衍生 / 进程无法被杀死 / 向子进程发送信息失败                                                                     |
| ~     | exit                                                          | 子进程结束后会触发 'exit' 事件。 如果进程退出了，则 code 是进程的最终退出码，否则为 null                                   |
| ~     | message                                                       | 当一个子进程使用 process.send() 发送消息时会触发 'message' 事件                                                            |
