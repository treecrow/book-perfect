# IncomingMessage

> 处理 HTTP/HTTPS 请求的响应。

## api 列表

| api                       | more                                   |
| ------------------------- | -------------------------------------- |
| response.statusCode       | 一个指示 HTTP 响应状态代码的 Integer。 |
| response.statusMessage    | 表示HTTP状态消息的string。             |
| response.headers          | 表示响应HTTP头的 Object                |
| response.httpVersion      | 表示HTTP协议版本号的 String            |
| response.httpVersionMajor | 表示HTTP协议主要版本号的 整数          |
| response.httpVersionMinor | 表示http协议次要版本号的整数           |

## 事件列表

| event   | more                                             |
| ------- | ------------------------------------------------ |
| data    | data事件是将响应数据转换为应用程序代码的常用方法 |
| end     | 指示响应正文已结束。                             |
| aborted | 正在进行的 HTTP 事务被取消后触发。               |
| error   | 当流响应数据事件遇到错误时发出。                 |