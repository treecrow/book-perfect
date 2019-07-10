# [net](http://nodejs.cn/api/net.html)

> 网络

## api list

- net

| api                                                   | more                                                                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| net.createConnection()                                | 一个用于创建 net.Socket 的工厂函数，立即使用 socket.connect() 初始化链接，然后返回启动连接的 net.Socket |
| net.createConnection(options[, connectListener])      | -                                                                                                       |
| net.createConnection(path[, connectListener])         | 初始化一个 IPC 连接。                                                                                   |
| net.createConnection(port[, host][, connectlistener]) | 初始化一个 TCP 连接                                                                                     |
| net.connect()                                         | net.createConnection() 别名                                                                             |
| net.connect(options[, connectListener])               | ^                                                                                                       |
| net.connect(path[, connectListener])                  | ^                                                                                                       |
| net.connect(port[, host][, connectlistener])          | ^                                                                                                       |
| net.createServer([options][, connectionlistener])     | 创建一个新的 TCP 或 IPC 服务器。                                                                        |
| net.isIP(input)                                       | 测试 input 是否是 IP 地址                                                                               |
| net.isIPv4(input)                                     | 如果 input 是 IPv4 地址则返回 true，否则返回 false。                                                    |
| net.isIPv6(input)                                     | 如果 input 是 IPv6 地址则返回 true，否则返回 false。                                                    |

- net.Server 类

| class | api                                                  | more                                                                                                          |
| ----- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 构造  | new net.Server([options][, connectionlistener])      | 用于创建 TCP 或 IPC server                                                                                    |
| api   | server.listen()                                      | 启动一个服务器来监听连接                                                                                      |
| ^     | server.listen(handle[, backlog][, callback])         | 启动一个服务器，监听已经绑定到端口、UNIX 域套接字或 Windows 命名管道的给定句柄上的连接                        |
| ^     | server.listen(options[, callback])                   | -                                                                                                             |
| ^     | server.listen(path[, backlog][, callback])           | 启动一个 IPC 服务器监听给定 path 的连接                                                                       |
| ^     | server.listen([port[, host[, backlog]]][, callback]) | 启动一个 TCP 服务监听输入的 port 和 host。                                                                    |
| ^     | server.getConnections(callback)                      | 异步获取服务器的当前并发连接数                                                                                |
| ^     | server.maxConnections                                | 设置该属性使得当 server 连接数过多时拒绝连接。                                                                |
| ^     | server.listening                                     | 一个布尔值， 表明 server 是否正在监听连接                                                                     |
| ^     | server.address()                                     | 如果在 IP socket 上监听,则返回绑定的 ip 地址                                                                  |
| ^     | server.unref()                                       | 如果这个 server 在事件系统中是唯一有效的，那么对 server 调用 unref 将允许程序退出                             |
| ^     | server.ref()                                         | 与 unref 相反，在一个已经调用 unref 的 server 中调用 ref，如果 server 是仅存的 server，则程序不会退出（默认） |
| ^     | server.close([callback])                             | 阻止 server 接受新的连接并保持现有的连接                                                                      |
| event | 'connection'                                         | 当一个新的 connection 建立的时候触发. socket 是一个 net.Socket 的实例对象.                                    |
| ^     | 'listening'                                          | 当服务被绑定后调用 server.listen()                                                                            |
| ^     | 'error'                                              | 当错误出现的时候触发.                                                                                         |
| ^     | 'close'                                              | 当 server 关闭的时候触发. 注意,如果有连接存在, 直到所有的连接结束才会触发这个事件                             |

- net.Socket 类

| class | api                                             | more                                                                                                          |
| ----- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 构造  | new net.Socket([options])                       | 创建一个 socket 对象                                                                                          |
| api   | socket.setEncoding([encoding])                  | 设置作为可读流（Readable Stream）的编码                                                                       |
| ^     | socket.setKeepAlive([enable][, initialdelay])   | 启用/禁用长连接功能， 并且在第一个长连接探针被发送到一个空闲的 socket 之前可选则配置初始延迟                  |
| ^     | socket.setNoDelay([noDelay])                    | 禁止 Nagle                                                                                                    |
| ^     | socket.setTimeout(timeout[, callback])          | 当 socket 在 timeout 毫秒不活动之后将其设置为超时状态                                                         |
| ^     | socket.connect()                                | 在给定的套接字上启动一个连接。                                                                                |
| ^     | socket.connect(options[, connectListener])      | 在给定的 socket 上初始化一个连接                                                                              |
| ^     | socket.connect(path[, connectListener])         | 在给定的 socket 上初始化 IPC 。                                                                               |
| ^     | socket.connect(port[, host][, connectlistener]) | 在给定的 socket 上初始化一个 TCP 连接。                                                                       |
| ^     | socket.connecting                               | 如果为 true 则 socket.connect(options[, connectListener]) 被调用但还未结束                                    |
| ^     | socket.pending                                  | This is true if the socket is not connected yet,                                                              |
| ^     | socket.address()                                | 返回操作系统报告的 socket 的地址、地址族和端口                                                                |
| ^     | socket.localAddress                             | 远程客户端连接的本地 IP 地址字符串                                                                            |
| ^     | socket.localPort                                | 用数字表示的本地端口                                                                                          |
| ^     | socket.remoteAddress                            | 用字符串表示的远程 IP 地址                                                                                    |
| ^     | socket.remoteFamily                             | 用字符串表示的远程 IP 协议族                                                                                  |
| ^     | socket.remotePort                               | 用数字表示的远程端口                                                                                          |
| ^     | socket.write(data[, encoding][, callback])      | 在 socket 上发送数据                                                                                          |
| ^     | socket.bytesRead                                | 接收的字节数量。                                                                                              |
| ^     | socket.bytesWritten                             | 发送的字节数量。                                                                                              |
| ^     | socket.bufferSize                               | -                                                                                                             |
| ^     | socket.pause()                                  | 暂停读写数据                                                                                                  |
| ^     | socket.resume()                                 | 恢复读取数据 (在调用 socket.pause() 之后)                                                                     |
| ^     | socket.end([data][, encoding])                  | 半关闭 socket                                                                                                 |
| ^     | socket.unref()                                  | 如果活跃的 socket 是事件系统中仅存的 socket，则调用 unref 将会允许程序退出                                    |
| ^     | socket.ref()                                    | 与 unref 相反，在一个已经调用 unref 的 socket 中调用 ref，如果 socket 是仅存的 socket，则程序不会退出（默认） |
| ^     | socket.destroy([exception])                     | 确保在该 socket 上不再有 I/O 活动                                                                             |
| ^     | socket.destroyed                                | 一个布尔值，用来指示连接是否已经被销毁                                                                        |
| event | lookup                                          | 在找到主机之后创建连接之前触发                                                                                |
| ^     | connect                                         | 当一个 socket 连接成功建立的时候触发该事件                                                                    |
| ^     | ready                                           | Emitted when a socket is ready to be used.                                                                    |
| ^     | data                                            | 当接收到数据的时触发该事件                                                                                    |
| ^     | drain                                           | 当写入缓冲区变为空时触发                                                                                      |
| ^     | error                                           | 当错误发生时触发。'close' 事件也会紧接着该事件被触发。                                                        |
| ^     | timeout                                         | 当 socket 超时的时候触发                                                                                      |
| ^     | end                                             | 当 socket 的另一端发送一个 FIN 包的时候触发，从而结束 socket 的可读端。                                       |
| ^     | close                                           | 一旦 socket 完全关闭就发出该事件                                                                              |
