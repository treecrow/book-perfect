# [WebRequest](https://www.electronjs.cn/docs/api/web-request)

> 在一个请求生命周期的不同阶段，截取和修改其内容。

> 使用 Session 的 WebRequest 属性访问 WebRequest 类的实例

## api 列表

| api                                                | more                                                                                                                                   |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| webRequest.onBeforeRequest([filter, ]listener)     | 当请求即将发生时，调用listener(details, callback)。                                                                                    |
| webRequest.onBeforeSendHeaders([filter, ]listener) | 一旦请求头可用，在发送 HTTP 请求之前，listener 将以 listener(details, callback) 的形式被调用                                           |
| webRequest.onSendHeaders([filter, ]listener)       | 在请求发送到服务器之前，listener将以listener(details)的形式被调用，在该侦听器被出发前，上一个对 onBeforeSendHeaders 响应的修改是可见的 |
| webRequest.onHeadersReceived([filter, ]listener)   | 当HTTP请求接收到报头后，会通过调用 listener(details, callback)方法来触发listener                                                       |
| webRequest.onResponseStarted([filter, ]listener)   | 当收到响应体的第一个字节时， 将以 listener(details) 的形式来调用 listener                                                              |
| webRequest.onBeforeRedirect([filter, ]listener)    | 当服务器的初始重定向即将发生时，将以 listener(details)的方式调用listener                                                               |
| webRequest.onCompleted([filter, ]listener)         | 当请求完成时，将以 listener(details)的方式调用listener                                                                                 |
| webRequest.onErrorOccurred([filter, ]listener)     | 当发生错误时，将以 listener(details)的方式调用listener                                                                                 |