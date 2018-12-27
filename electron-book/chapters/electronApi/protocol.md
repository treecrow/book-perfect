# [protocol](https://www.electronjs.cn/docs/api/protocol)

> 注册自定义协议并拦截基于现有协议的请求


## api 列表

| api                                                             | more                                                                                                                         |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| protocol.registerStandardSchemes(schemes[, options])            | 将一个scheme注册为标准scheme, 将保证相对和绝对资源在使用时能够得到正确的解析                                                 |
| protocol.registerServiceWorkerSchemes(schemes)                  | 将自定义 schemes注册为处理线程服务的标准schemes                                                                              |
| protocol.registerFileProtocol(scheme, handler[, completion])    | 注册一个 scheme 协议, 将该文件作为响应发送 当要使用 scheme 创建 request 时, 将使用 handler(request, callback) 来调用 handler |
| protocol.registerBufferProtocol(scheme, handler[, completion])  | 注册一个 scheme 协议, 将 Buffer作为响应发送                                                                                  |
| protocol.registerStringProtocol(scheme, handler[, completion])  | 注册一个 scheme 协议, 将 String 作为响应发送                                                                                 |
| protocol.registerHttpProtocol(scheme, handler[, completion])    | 注册一个 scheme 协议, 将 HTTP 请求作为响应发送                                                                               |
| protocol.registerStreamProtocol(scheme, handler[, completion])  | 注册一个 scheme 协议, 将 Readable作为响应发送                                                                                |
| protocol.unregisterProtocol(scheme[, completion])               | 取消对自定义scheme的注册                                                                                                     |
| protocol.isProtocolHandled(scheme, callback)                    | callback 会被调用，带有布尔值，表示是否已经有scheme 的处理程序                                                               |
| protocol.interceptFileProtocol(scheme, handler[, completion])   | 终止 scheme 协议, 并将 handler 作为该protocol新的处理方式，即返回一个file                                                    |
| protocol.interceptStringProtocol(scheme, handler[, completion]) | 终止 scheme 协议, 并将 handler 作为该protocol新的处理方式，即返回一个String                                                  |
| protocol.interceptBufferProtocol(scheme, handler[, completion]) | 终止 scheme 协议, 并将 handler 作为该protocol新的处理方式，即返回一个Buffer                                                  |
| protocol.interceptHttpProtocol(scheme, handler[, completion])   | 终止 scheme 协议, 并将 handler 作为该protocol新的处理方式，即返回一个新 HTTP 请求                                            |
| protocol.interceptStreamProtocol(scheme, handler[, completion]) | 它与 registerStreamProtocol方法相同, 不过它是用来替换现有的protocol处理方式                                                  |
| protocol.uninterceptProtocol(scheme[, completion])              | 移除为 scheme 安装的拦截器，并还原其原始处理方式                                                                             |