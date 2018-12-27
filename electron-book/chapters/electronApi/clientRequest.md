# [clientRequest](https://www.electronjs.cn/docs/api/client-request)

> 发起HTTP/HTTPS请求

## api 列表

| api                                          | more                                                                                                                   |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| new ClientRequest(options)                   | -                                                                                                                      |
| request.chunkedEncoding                      | 一个Boolean类型的值，指定请求是否将使用 HTTP 分块传输编码                                                              |
| request.setHeader(name, value)               | 添加一个额外的 HTTP 头                                                                                                 |
| request.getHeader(name)                      | 返回 Object-以前设置的额外标头名称的值。                                                                               |
| request.removeHeader(name)                   | 删除以前设置的额外头名称                                                                                               |
| request.write(chunk[, encoding][, callback]) | callback 实质上是为了保持与 Node.js API 的相似性而引入的虚拟函数                                                       |
| request.end([chunk][, encoding][, callback]) | 发送请求数据的最后一个块。将不允许后续的写入或结束操作。finish 事件将在结束操作后发出。                                |
| request.abort()                              | 取消正在进行的 HTTP 事务                                                                                               |
| request.followRedirect()                     | 当重定向模式为 manual 手动 时, 将继续延迟的重定向请求。                                                                |
| request.getUploadProgress()                  | You can use this method in conjunction with POST requests to get the progress of a file upload or other data transfer. |

## 事件列表

| event    | more                                                                             |
| -------- | -------------------------------------------------------------------------------- |
| response | response 收到的消息 - 表示HTTP响应消息的对象                                     |
| login    | 当身份验证代理请求用户认证时触发                                                 |
| finish   | 在 request 最终的 chunk 数据后写入 request 后触发                                |
| abort    | 当 request请求被中止时发出。如果request 请求已经关闭， abort中止事件将不会被触发 |
| error    | 当 net网络模块没有发出网络请求时会触发                                           |
| close    | 作为HTTP 的 request-response 中的最后一个事件发出                                |
| redirect | 当发出重定，并且模式为 manuals(手动)时触发                                       |
