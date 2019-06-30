# https

> HTTPS 是基于 TLS/SSL 的 HTTP 协议。在 Node.js 中，作为一个单独的模块实现。

## api list

- https

| api                                              | more                                              |
| ------------------------------------------------ | ------------------------------------------------- |
| https.createServer([options][, requestlistener]) | 返回一个新的 HTTPS 网络服务器对象                 |
| https.get(options[, callback])                   | 类似 http.get()，但是用于 HTTPS                   |
| https.get(url[, options][, callback])            | ^                                                 |
| https.globalAgent                                | https.Agent 的全局实例，用于所有 HTTPS 客户端请求 |
| https.request(options[, callback])               | 向一个安全的服务器发起一个请求                    |
| https.request(url[, options][, callback])        | ^                                                 |

- https.Agent 类

> HTTPS 的一个类似于 http.Agent 的代理对象

- https.Server 类

> 与 http.Server 类似

| class | api                                    | more |
| ----- | -------------------------------------- | ---- |
| api   | server.close([callback])               | -    |
| ^     | server.listen()                        | -    |
| ^     | server.maxHeadersCount                 | -    |
| ^     | server.headersTimeout                  | -    |
| ^     | server.setTimeout([msecs][, callback]) | -    |
| ^     | server.timeout                         | -    |
| ^     | server.keepAliveTimeout                | -    |
