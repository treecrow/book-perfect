# [http](http://nodejs.cn/api/http.html)

> HTTP

## api list

- http

| api                                      | more                                                                          |
| ---------------------------------------- | ----------------------------------------------------------------------------- |
| http.METHODS                             | 解析器支持的 HTTP 方法列表。                                                  |
| http.STATUS_CODES                        | 所有标准 HTTP 响应状态码的集合，以及每个状态码的简短描述                      |
| http.createServer([requestListener])     | 返回新建的 http.Server 实例。                                                 |
| http.get(options[, callback])            | 这个方法与 http.request() 的唯一区别是它将方法设置为 GET 并自动调用 req.end() |
| http.get(url[, options][, callback])     | ^                                                                             |
| http.globalAgent                         | Agent 的全局实例，作为所有 HTTP 客户端请求的默认值。                          |
| http.maxHeaderSize                       | 只读属性，指定 HTTP 消息头的最大允许大小（以字节为单位）                      |
| http.request(options[, callback])        | Node.js 为每台服务器维护多个连接来进行 HTTP 请求。 该函数允许显式地发出请求   |
| http.request(url[, options][, callback]) | ^                                                                             |

- http.Agent 类

> Agent 负责管理 HTTP 客户端的连接持久性和重用

| class | api                                         | more                                                                                            |
| ----- | ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 构造  | new http.Agent([options])                   | 创建 http.Agent 实例                                                                            |
| api   | agent.createConnection(options[, callback]) | 生成用于 HTTP 请求的套接字或流。                                                                |
| ^     | agent.keepSocketAlive(socket)               | 当 socket 与请求分离并且可以由 Agent 保留时调用                                                 |
| ^     | agent.reuseSocket(socket, request)          | 由于 keep-alive 选项而在持久化后将 socket 附加到 request 时调用                                 |
| ^     | agent.destroy()                             | 销毁代理当前使用的所有套接字。                                                                  |
| ^     | agent.freeSockets                           | 一个对象，其中包含当启用 keepAlive 时代理正在等待使用的套接字数组。                             |
| ^     | agent.getName(options)                      | 获取请求选项集合的唯一名称，以确定连接是否可以再利用                                            |
| ^     | agent.maxFreeSockets                        | 默认设为 256。 对于支持 HTTP KeepAlive 的 Agent，它设置了在空闲状态下可打开的 socket 的最大数量 |
| ^     | agent.maxSockets                            | 默认设为无穷大。 决定每个来源中代理可打开多少个并发的 socket                                    |
| ^     | agent.requests                              | 一个对象，包含尚未分配给套接字的请求队列。                                                      |
| ^     | agent.sockets                               | 一个对象，包含当前代理正在使用的套接字数组。                                                    |

- http.ClientRequest 类

> 此对象由 http.request() 内部创建并返回。 它表示正在进行的请求，且其请求头已进入队列。

| class | api                                                  | more                                                                                        |
| ----- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| api   | request.abort()                                      | 标记请求为终止。                                                                            |
| ^     | request.aborted                                      | 如果请求已被终止，则该属性的值为请求被终止的时间                                            |
| ^     | request.connection                                   | -                                                                                           |
| ^     | request.end([data][, encoding][, callback])          | 完成发送请求                                                                                |
| ^     | request.finished                                     | 如果调用了 request.end()，则 request.finished 属性将为 true                                 |
| ^     | request.flushHeaders()                               | 刷新请求头                                                                                  |
| ^     | request.getHeader(name)                              | 读取请求中的一个请求头                                                                      |
| ^     | request.maxHeadersCount                              | 限制最大响应头数                                                                            |
| ^     | request.removeHeader(name)                           | 移除已定义到请求头对象中的请求头。                                                          |
| ^     | request.setHeader(name, value)                       | 为请求头对象设置单个请求头的值                                                              |
| ^     | request.setNoDelay([noDelay])                        | 一旦将套接字分配给此请求并且连接了套接字，就会调用 socket.setNoDelay()。                    |
| ^     | request.setSocketKeepAlive([enable][, initialdelay]) | 一旦将套接字分配给此请求并连接了套接字，就会调用 socket.setKeepAlive()。                    |
| ^     | request.setTimeout(timeout[, callback])              | 一旦将套接字分配给此请求并且连接了套接字，就会调用 socket.setTimeout()。                    |
| ^     | request.socket                                       | 指向底层套接字                                                                              |
| ^     | request.write(chunk[, encoding][, callback])         | 发送一个请求主体的数据块                                                                    |
| event | abort                                                | 当请求已被客户端中止时触发。                                                                |
| ^     | connect                                              | 每当服务器响应一个带有 CONNECT 方法的请求时触发                                             |
| ^     | continue                                             | 当服务器发送了一个 100 Continue 的 HTTP 响应时触发，通常因为该请求包含 Expect: 100-continue |
| ^     | information                                          | 服务器发送 1xx 响应时触发（不包括 101 Upgrade）                                             |
| ^     | response                                             | 当请求的响应被接收时触发。                                                                  |
| ^     | socket                                               | 当 socket 被分配给请求后触发                                                                |
| ^     | timeout                                              | 当底层套接字因不活动而超时时触发                                                            |
| ^     | upgrade                                              | 每次服务器响应升级请求时发出                                                                |

- http.Server 类

> 此类继承自 net.Server

| class | api                                | more                                                                                            |
| ----- | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| api   | server.close([callback])           | 停止服务端接收新的连接                                                                          |
| ^     | server.listen()                    | 启动 HTTP 服务器监听连接                                                                        |
| ^     | server.listening                   | <boolean> 表明服务器是否正在监听连接                                                            |
| ^     | server.maxHeadersCount             | 限制最大传入请求头数。 如果设置为 0，则不会应用任何限制                                         |
| ^     | server.headersTimeout              | 限制解析器等待接收完整 HTTP 请求头的时间                                                        |
| ^     | server.setTimeout(msecs, callback) | 设置套接字的超时值，并在服务器对象上触发 'timeout' 事件，如果发生超时，则将套接字作为参数传入。 |
| ^     | server.timeout                     | 认定套接字超时的不活动毫秒数。                                                                  |
| ^     | server.keepAliveTimeout            | 服务器在完成写入最后一个响应之后，在销毁套接字之前需要等待其他传入数据的非活动毫秒数            |
| event | checkContinue                      | 每当接收到一个带有 HTTP Expect: 100-continue 的请求时触发                                       |
| ^     | checkExpectation                   | 每当接收到一个带有 HTTP Expect 请求头的请求时触发，其中值不是 100-continue                      |
| ^     | clientError                        | 如果客户端连接触发 'error' 事件，则会在此处转发                                                 |
| ^     | close                              | 当服务器关闭时触发                                                                              |
| ^     | connect                            | 每次客户端请求 HTTP CONNECT 方法时触发                                                          |
| ^     | connection                         | 当一个新的 TCP 流被建立时触发                                                                   |
| ^     | request                            | 每次接收到一个请求时触发                                                                        |
| ^     | upgrade                            | 每当一个客户端请求一个 HTTP 升级时触发                                                          |

- http.ServerResponse 类

> 此对象由 HTTP 服务器在内部创建，而不是由用户创建。 它作为第二个参数传给 'request' 事件。

| class | api                                                        | more                                                                                                          |
| ----- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| api   | response.addTrailers(headers)                              | 此方法将 HTTP 尾部响应头（一种在消息末尾的响应头）添加到响应中。                                              |
| ^     | response.connection                                        | -                                                                                                             |
| ^     | response.end([data][, encoding][, callback])               | 此方法向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成。                            |
| ^     | response.finished                                          | 布尔值，表明响应是否已完成                                                                                    |
| ^     | response.getHeader(name)                                   | 读出已排队但未发送到客户端的响应头                                                                            |
| ^     | response.getHeaderNames()                                  | 返回一个数组，其中包含当前传出的响应头的唯一名称                                                              |
| ^     | response.getHeaders()                                      | 返回当前传出的响应头的浅拷贝                                                                                  |
| ^     | response.hasHeader(name)                                   | 如果当前在传出的响应头中设置了由 name 标识的响应头，则返回 true                                               |
| ^     | response.headersSent                                       | 布尔值（只读）。 如果已发送响应头，则为 true，否则为 false                                                    |
| ^     | response.removeHeader(name)                                | 移除排队等待中的隐式发送的响应头。                                                                            |
| ^     | response.sendDate                                          | 如果为 true，则 Date 响应头将自动生成并在响应中发送（如果响应头中尚不存在）                                   |
| ^     | response.setHeader(name, value)                            | 为隐式响应头设置单个响应头的值                                                                                |
| ^     | response.setTimeout(msecs, callback)                       | 将套接字的超时值设置为 msecs                                                                                  |
| ^     | response.socket                                            | 指向底层的套接字                                                                                              |
| ^     | response.statusCode                                        | 当使用隐式的响应头时（没有显式地调用 response.writeHead()），此属性控制在刷新响应头时将发送到客户端的状态码。 |
| ^     | response.statusMessage                                     | 当使用隐式的响应头时（没有显式地调用 response.writeHead()），此属性控制在刷新响应头时将发送到客户端的状态消息 |
| ^     | response.write(chunk[, encoding][, callback])              | 发送一块响应主体                                                                                              |
| ^     | response.writeContinue()                                   | 向客户端发送 HTTP/1.1 100 Continue 消息，表示应发送请求主体                                                   |
| ^     | response.writeHead(statusCode[, statusMessage][, headers]) | 向请求发送响应头                                                                                              |
| ^     | response.writeProcessing()                                 | 向客户端发送 HTTP/1.1 102 处理消息，表明可以发送请求主体                                                      |
| event | close                                                      | 表明在调用 response.end() 或能够刷新之前终止了底层连接。                                                      |
| ^     | finish                                                     | 响应发送后触发                                                                                                |

- http.IncomingMessage 类

> IncomingMessage 对象由 http.Server 或 http.ClientRequest 创建，并分别作为第一个参数传给 'request' 和 'response' 事件

| class | api                                 | more                                                                      |
| ----- | ----------------------------------- | ------------------------------------------------------------------------- |
| api   | message.aborted                     | 如果请求已中止，则 message.aborted 属性为 true。                          |
| ^     | message.complete                    | 如果已收到并成功解析完整的 HTTP 消息，则 message.complete 属性将为 true。 |
| ^     | message.destroy([error])            | 在接收 IncomingMessage 的套接字上调用 destroy()                           |
| ^     | message.headers                     | 请求或响应的消息头对象。                                                  |
| ^     | message.httpVersion                 | 在服务器请求的情况下，表示客户端发送的 HTTP 版本                          |
| ^     | message.method                      | 请求方法是一个字符串                                                      |
| ^     | message.rawHeaders                  | 原始请求头/响应头的列表，与接收到的完全一致。                             |
| ^     | message.rawTrailers                 | 原始的请求/响应的尾部消息头的键和值，与接收到的完全一致。                 |
| ^     | message.setTimeout(msecs, callback) | 调用 message.connection.setTimeout(msecs, callback)。                     |
| ^     | message.socket                      | 与连接关联的 net.Socket 对象。                                            |
| ^     | message.statusCode                  | 3 位 HTTP 响应状态码                                                      |
| ^     | message.statusMessage               | HTTP 响应状态消息（原因短语）                                             |
| ^     | message.trailers                    | 请求/响应的尾部消息头对象                                                 |
| ^     | message.url                         | 请求的 URL 字符串                                                         |
| event | aborted                             | 当请求中止时触发                                                          |
| ^     | close                               | 表明底层连接已关闭                                                        |
