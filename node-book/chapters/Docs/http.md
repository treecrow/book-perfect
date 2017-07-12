# http

## http.Agent 类

### 创建自己的 http.Agent 对象

```javascript
const http = require('http');
var keepAliveAgent = new http.Agent({ keepAlive: true });
options.agent = keepAliveAgent;
http.request(options, onResponseCallback);
```

### 属性列表

属性                   | more
-------------------- | -----------------------------------------------------------------
agent.freeSockets    | 一个包含当前正在等待被 Agent 使用的 socket 数组的对象（当使用 HTTP 的 KeepAlive 时）。 不要修改
agent.maxFreeSockets | 默认设为 256。 对于支持 HTTP KeepAlive 的 Agent，它设置了在空闲状态下可打开的 socket 的最大数量
agent.maxSockets     | 默认设为无穷大。 决定每个来源中代理可打开多少个并发的 socket
agent.requests       | 一个包含还未被分配到 socket 的请求队列的对象
agent.sockets        | 一个包含当前被 Agent 使用的 socket 数组的对象

### 方法列表

方法                                          | more
------------------------------------------- | -------------------------------------------------------------------------------------------------
agent.createConnection(options[, callback]) | 生产一个用于 HTTP 请求的 socket/stream
agent.keepSocketAlive(socket)               | Called when socket is detached from a request and could be persisted by the Agent
agent.reuseSocket(socket, request)          | Called when socket is attached to request after being persisted because of the keep-alive options
agent.destroy()                             | 销毁当前正被代理使用的任何 socket
agent.getName(options)                      | 获取请求选项集合的唯一名称，以确定连接是否可以再利用

## http.ClientRequest 类

### 属性列表

属性              | more
--------------- | ------------------------
request.aborted | 如果请求已被终止，则该属性的值为请求被终止的时间

### 方法列表

方法                                                   | more
---------------------------------------------------- | -----------------------------------------------
request.abort()                                      | 标记请求为终止。
request.end([data][, encoding][, callback])          | 完成发送请求
request.flushHeaders()                               | 刷新请求头
request.setNoDelay([noDelay])                        | 一旦 socket 被分配给请求且已连接，socket.setNoDelay() 会被调用
request.setSocketKeepAlive([enable][, initialDelay]) | 一旦 socket 被分配给请求且已连接，socket.setKeepAlive() 会被调用
request.setTimeout(timeout[, callback])              | 一旦 socket 被分配给请求且已连接，socket.setTimeout() 会被调用
request.write(chunk[, encoding][, callback])         | 发送主体的一个数据块

### 事件列表

事件            | more
------------- | ------------------------------------------------------------------
'abort' 事件    | 当请求已被客户端中止时触发。
'aborted' 事件  | 当请求已被服务器中止且网络 socket 已关闭时触发
'connect' 事件  | 每当服务器响应一个带有 CONNECT 方法的请求时触发
'continue' 事件 | 当服务器发送了一个 100 Continue 的 HTTP 响应时触发，通常因为该请求包含 Expect: 100-continue
'response' 事件 | 当请求的响应被接收时触发。
'socket' 事件   | 当 socket 被分配给请求后触发
'upgrade' 事件  | 每当服务器响应一个升级请求时触发

## http.Server 类

### 方法列表

方法                                                       | more
-------------------------------------------------------- | --------------------------------------------------------------------------
server.listen(handle[, callback])                        | 使服务器以指定的句柄接受连接
server.listen(path[, callback])                          | 启动一个 UNIX socket 服务器，并在给定的 path 上监听连接
server.listen([port][, hostname][, backlog][, callback]) | 开始在指定的 port 和 hostname 上接受连接
server.setTimeout(msecs, callback)                       | 为 socket 设置超时值。 如果一个超时发生，则 Server 对象上会触发一个 'timeout' 事件，并传入该 socket 作为一个参数
server.close([callback])                                 | 停止服务端接收新的连接

### 属性列表

属性                      | more
----------------------- | --------------------------------------------
server.timeout          | 一个 socket 被认定为已超时的空闲毫秒数
server.listening        | 一个表明服务器是否正在监听连接的布尔值
server.maxHeadersCount  | 限制最大的请求头数量, 默认为 1000。 如果设为 0，则不做任何限制
server.keepAliveTimeout | 服务器完成最后的响应之后需要等待的额外的传入数据的活跃毫秒数, socket 才能被销毁

### 事件列表

事件                    | more
--------------------- | --------------------------------------------------
'checkContinue' 事件    | 每当接收到一个带有 HTTP Expect: 100-continue 的请求时触发
'checkExpectation' 事件 | 每当接收到一个带有 HTTP Expect 请求头的请求时触发，其中值不是 100-continue
'clientError' 事件      | 如果一个客户端触发了一个 'error' 事件，则它会被传递到这里
'close' 事件            | 当服务器关闭时触发
'connect' 事件          | 每当一个客户端请求一个 HTTP CONNECT 方法时触发
'connection' 事件       | 当一个新的 TCP 流被建立时触发
'request' 事件          | 每次接收到一个请求时触发
'upgrade' 事件          | 每当一个客户端请求一个 HTTP 升级时触发

## http.ServerResponse 类

### 属性列表

属性                     | more
---------------------- | --------------------------------------------------------------------
response.finished      | 布尔值，表明响应是否已完成
response.headersSent   | 布尔值（只读）。 如果消息头已被发送则为 true，否则为 false
response.sendDate      | 当为 true 时，如果消息头里还不存在日期消息头，则它会被自动生成并在响应中发送。默认为 true
response.statusCode    | 当使用隐式的消息头时（没有显式地调用 response.writeHead()），在消息头被刷新时该属性会控制将被发送到客户端的状态码
response.statusMessage | 当使用隐式的消息头时（没有显式地调用 response.writeHead()），在消息头被刷新时该属性会控制将被发送到客户端的状态信息

### 方法列表

方法                                                         | more
---------------------------------------------------------- | --------------------------------------------------------------------------------------
response.addTrailers(headers)                              | 该方法会给响应添加 HTTP 追踪请求头（一个在消息尾部的请求头）
response.end([data][, encoding][, callback])               | 该方法告诉服务器所有响应头和主体都已被发送
response.getHeader(name)                                   | 读出已经排队但尚未发送到客户端的消息头
response.getHeaders()                                      | Returns a shallow copy of the current outgoing headers
response.getHeaderNames()                                  | 返回一个包含当前响应唯一名称的 http 头信息名称数组. 名称均为小写
response.hasHeader(name)                                   | Returns true if the header identified by name is currently set in the outgoing headers
response.removeHeader(name)                                | 从隐式发送的队列中移除一个消息头
response.setHeader(name, value)                            | 为隐式消息头集合设置一个的消息头值
response.setTimeout(msecs, callback)                       | 设置 socket 的超时时间为 msecs。 如果提供了回调函数，则它会被作为监听器添加到响应对象的 'timeout' 事件
response.write(chunk[, encoding][, callback])              | 发送一块响应主体
response.writeHead(statusCode[, statusMessage][, headers]) | -
response.writeContinue()                                   | 发送一个 HTTP/1.1 100 Continue 消息到客户端，表明请求主体应该被发送
response.writeHead(statusCode[, statusMessage][, headers]) | 发送一个响应头给请求

### 事件列表

事件          | more
----------- | --------------------------------------
'close' 事件  | 表明在 response.end() 被调用或能够刷新之前，底层连接被终止了
'finish' 事件 | 当响应已被发送时触发

## http.IncomingMessage 类

### 属性列表

属性                    | more
--------------------- | --------------------------------------------------------------------
message.headers       | 请求/响应头的对象
message.httpVersion   | 当服务器请求时，HTTP 版本由客户端发送。 当客户端响应时，HTTP 版本由所连接的服务器发送.可能的值有 '1.1' 或 '1.0'
message.method        | 请求方法是一个字符串
message.rawHeaders    | 接收到的原始请求/响应头列表
message.rawTrailers   | 接收到的原始的请求/响应报尾的键和值
message.statusCode    | 3 位数字的 HTTP 响应状态码。 如 404
message.statusMessage | HTTP 响应状态消息（原因描述）。如 OK 或 Internal Server Error
message.socket        | 与连接有关的 net.Socket 对象
message.trailers      | 请求/响应报尾对象。 只在 'end' 事件时填入。
message.url           | 请求的 URL 字符串。

### 方法列表

方法                                  | more
----------------------------------- | ------------------------------------------------------------
message.destroy([error])            | 调用接收 IncomingMessage 的 socket 的 destroy()
message.setTimeout(msecs, callback) | 调用 message.connection.setTimeout(msecs, callback).返回 message

### 事件列表

事件           | more
------------ | ---------------------------
'aborted' 事件 | 当请求已被客户端中止且网络 socket 已关闭时触发
'close' 事件   | 表明底层连接被关闭

## http

### 属性列表

属性                | more
----------------- | ------------------------------------
http.METHODS      | 返回解析器支持的 HTTP 方法的列表
http.STATUS_CODES | 返回标准的 HTTP 响应状态码的集合，以及各自的简短描述
http.globalAgent  | Agent 的全局实例，作为所有 HTTP 客户端请求的默认 Agent

### 方法列表

方法                                   | more
------------------------------------ | ---------------------------------------------
http.createServer([requestListener]) | 返回一个新建的 http.Server 实例
http.get(options[, callback])        | 因为大多数请求都是 GET 请求且不带请求主体，所以 Node.js 提供了该便捷方法
http.request(options[, callback])    | Node.js 为每台服务器维护多个连接来进行 HTTP 请求。 该函数允许显式地发出请求
