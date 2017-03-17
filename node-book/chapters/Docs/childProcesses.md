## childProcesses子进程

### 衍生子进程(概括)
- child_process.spawn(command[, args][, options])---异步地衍生子进程，且不会阻塞 Node.js 的事件循环
- child_process.spawnSync(command[, args][, options])---同步地衍生子进程，并且会阻塞 Node.js 的事件循环，直到衍生的子进程退出或终止
- child_process.exec(command[, options][, callback])--- 衍生一个 shell 并在 shell 上运行一个命令，当完成时会传入 stdout 和 stderr 到一个回调
- child_process.execSync(command[, options])---child_process.exec() 的一个同步版本，它会阻塞 Node.js 的事件循环
- child_process.execFile(file[, args][, options][, callback])---和 child_process.exec() 类似，除了它直接衍生命令，且不用先衍生一个 shell
- child_process.execFileSync(file[, args][, options])---child_process.execFile() 的一个同步版本，它会阻塞 Node.js 的事件循环
- child_process.fork(modulePath[, args][, options])---衍生一个新的 Node.js 进程，并通过建立一个允许父进程和子进程之间相互发送信息的 IPC 通讯通道来调用一个指定的模块

### ChildProcess 类
#### 事件:
  - 'close' 事件
  - 'disconnect' 事件
  - 'error' 事件
  - 'exit' 事件
  - 'message' 事件
#### 方法:
  - child.disconnect()---关闭父进程与子进程之间的 IPC 通道，一旦没有其他的连接使其保持活跃，则允许子进程正常退出
  - child.kill([signal])---child.kill() 方法向子进程发送一个信号。 如果没有给定参数，则进程会发送 'SIGTERM' 信号
    > 当函数被调用 kill 时，已发送到子进程的信号可能没有实际终止该进程
  - child.send(message[, sendHandle[, options]][, callback])---当父进程和子进程之间建立了一个 IPC 通道时，child.send() 方法可用于发送消息到子进程
    > 当子进程是一个 Node.js 实例时，消息可以通过 process.on('message') 事件接收,通过process.send()发送消息回父进程
#### 属性:
  - child.pid---返回子进程的进程标识（PID）
  - child.connected---表明是否仍可以从一个子进程发送和接收消息
  - child.stdio---一个到子进程的管道的稀疏数组，对应着传给 child_process.spawn() 的选项中值被设为 'pipe' 的 stdio
    > 注意，child.stdio[0]、child.stdio[1] 和 child.stdio[2] 分别可用作 child.stdin、 child.stdout 和 child.stderr
  - child.stdin---一个代表子进程的 stdin 的可写流
  - child.stdout---一个代表子进程的 stdout 的可读流
  - child.stderr---一个代表子进程的 stderr 的可读流
