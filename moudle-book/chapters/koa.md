# [koa](https://koajs.com/)

-   [中文文档](http://koajs.cn/)

## app

| class | key               | more                                                       |
| ----- | ----------------- | ---------------------------------------------------------- |
| 事件  | error             | -                                                          |
| 方法  | app.listen()      | 创建并返回 HTTP 服务器，将给定的参数传递给 Server#listen() |
| ^     | app.callback()    | 返回适用于 http.createServer() 方法的回调函数来处理请求    |
| ^     | app.use(function) | 将给定的中间件方法添加到此应用程序                         |
| 属性  | env               | 默认是 NODE_ENV 或 "development"                           |
| ^     | proxy             | 当真正的代理头字段将被信任时                               |
| ^     | subdomainOffset   | 对于要忽略的 .subdomains 偏移[2]                           |
| ^     | keys              | 设置签名的 Cookie 密钥                                     |
| ^     | context           | 从其创建 ctx 的原型                                        |

## ctx

| class | api                                              | more                                                                                                                                               |
| ----- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 方法  | ctx.cookies.get(name, [options])                 | 通过 options 获取 cookie name:                                                                                                                     |
| ^     | ctx.cookies.set(name, value, [options])          | 通过 options 设置 cookie name 的 value :                                                                                                           |
| ^     | ctx.throw([status], [msg], [properties])         | 抛出错误                                                                                                                                           |
| ^     | ctx.assert(value, [status], [msg], [properties]) | 当 !value 时，Helper 方法抛出类似于 .throw() 的错误。这与 node 的 assert() 方法类似.                                                               |
| 属性  | req                                              | Node 的 request 对象.                                                                                                                              |
| ^     | res                                              | Node 的 response 对象.                                                                                                                             |
| ^     | request                                          | koa 的 Request 对象.                                                                                                                               |
| ^     | response                                         | koa 的 Response 对象.                                                                                                                              |
| ^     | state                                            | 推荐的命名空间，用于通过中间件传递信息和你的前端视图。                                                                                             |
| ^     | app                                              | 应用程序实例引用                                                                                                                                   |
| ^     | respond                                          | 为了绕过 Koa 的内置 response 处理，你可以显式设置 ctx.respond = false;。 如果您想要写入原始的 res 对象而不是让 Koa 处理你的 response，请使用此参数 |

### Request 别名

| class       | api（是否可设置）                   | 别名                   | more                                                                                                                                                                         |
| ----------- | ----------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 方法        | request.is(types...)                | ctx.is()               | 检查传入请求是否包含 Content-Type 头字段， 并且包含任意的 mime type                                                                                                          |
| ^           | request.accepts(types)              | ctx.accepts()          | 检查给定的 type(s) 是否可以接受，如果 true，返回最佳匹配，否则为 false                                                                                                       |
| ^           | request.acceptsEncodings(encodings) | ctx.acceptsEncodings() | 检查 encodings 是否可以接受，返回最佳匹配为 true，否则为 false                                                                                                               |
| ^           | request.acceptsCharsets(charsets)   | ctx.acceptsCharsets()  | 检查 charsets 是否可以接受，在 true 时返回最佳匹配，否则为 false。                                                                                                           |
| ^           | request.acceptsLanguages(langs)     | ctx.acceptsLanguages() | 检查 langs 是否可以接受，如果为 true，返回最佳匹配，否则为 false。                                                                                                           |
| ^           | request.get(field)                  | ctx.get()              | 返回请求标头。                                                                                                                                                               |
| 属性-header | request.header（✅）                | ctx.header             | 请求标头对象。                                                                                                                                                               |
| ^           | request.headers（✅）               | ctx.headers            | ^                                                                                                                                                                            |
| ^           | request.method（✅）                | ctx.method             | 请求方法                                                                                                                                                                     |
| ^           | request.length                      | -                      | 返回以数字返回请求的 Content-Length，或 undefined。                                                                                                                          |
| ^           | request.type                        | -                      | 获取请求 Content-Type 不含参数 "charset"。                                                                                                                                   |
| 属性-url    | request.originalUrl                 | ctx.originalUrl        | 获取请求原始 URL。                                                                                                                                                           |
| ^           | request.url(✅)                     | ctx.url                | 请求 URL.                                                                                                                                                                    |
| ^           | request.href                        | ctx.href               | 获取完整的请求 URL，包括 protocol，host 和 url。                                                                                                                             |
| ^           | request.origin                      | ctx.origin             | 获取 URL 的来源，包括 protocol 和 host。                                                                                                                                     |
| ^           | request.path（✅）                  | ctx.path               | 请求路径名。                                                                                                                                                                 |
| ^           | request.query(✅)                   | ctx.query              | 获取解析的查询字符串, 当没有查询字符串时，返回一个空对象。请注意，此 getter 不 支持嵌套解析。                                                                                |
| ^           | request.querystring（✅）           | ctx.querystring        | 原始查询字符串                                                                                                                                                               |
| ^           | request.search（✅）                | -                      | 原始查询字符串。                                                                                                                                                             |
| ^           | request.host                        | ctx.host               | 获取当前主机（hostname:port）。当 app.proxy 是 true 时支持 X-Forwarded-Host，否则使用 Host。                                                                                 |
| ^           | request.hostname                    | ctx.hostname           | 存在时获取主机名。当 app.proxy 是 true 时支持 X-Forwarded-Host，否则使用 Host。                                                                                              |
| ^           | request.URL                         | -                      | 获取 WHATWG 解析的 URL 对象。                                                                                                                                                |
| ^           | request.protocol                    | ctx.protocol           | 返回请求协议，“https” 或 “http”。当 app.proxy 是 true 时支持 X-Forwarded-Proto。                                                                                             |
| ^           | request.subdomains                  | ctx.subdomains         | 将子域返回为数组。                                                                                                                                                           |
| 属性-ip     | request.ip                          | ctx.ip                 | 请求远程地址。 当 app.proxy 是 true 时支持 X-Forwarded-Proto。                                                                                                               |
| ^           | request.ips                         | ctx.ips                | 当 X-Forwarded-For 存在并且 app.proxy 被启用时，这些 ips 的数组被返回，从上游 - >下游排序。 禁用时返回一个空数组。                                                           |
| 属性-orther | request.charset                     | -                      | 在存在时获取请求字符集，或者 undefined：                                                                                                                                     |
| ^           | request.fresh                       | ctx.fresh              | 检查请求缓存是否“新鲜”，也就是内容没有改变。此方法用于 If-None-Match / ETag, 和 If-Modified-Since 和 Last-Modified 之间的缓存协商。 在设置一个或多个这些响应头后应该引用它。 |
| ^           | request.stale                       | ctx.stale              | 相反与 request.fresh.                                                                                                                                                        |
| ^           | request.secure                      | ctx.secure             | 通过 ctx.protocol == "https" 来检查请求是否通过 TLS 发出。                                                                                                                   |
| ^           | request.idempotent                  | -                      | 检查请求是否是幂等的。                                                                                                                                                       |
| ^           | request.socket                      | ctx.socket             | 返回请求套接字。                                                                                                                                                             |

### Response 别名

| class | api                             | 别名             | more                                                                                                |
| ----- | ------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| 方法  | response.get(field)             |                  | 不区分大小写获取响应标头字段值 field。                                                              |
| ^     | response.set(field, value)      |                  | 设置响应标头 field 到 value:                                                                        |
| ^     | response.append(field, value)   | ctx.append()     | 用值 val 附加额外的标头 field。                                                                     |
| ^     | response.set(fields)            | ctx.set()        | 用一个对象设置多个响应标头 fields:                                                                  |
| ^     | response.remove(field)          | ctx.remove()     | 删除标头 field。                                                                                    |
| ^     | response.is(types...)           |                  | 非常类似 ctx.request.is(). 检查响应类型是否是所提供的类型之一。这对于创建操纵响应的中间件特别有用。 |
| ^     | response.redirect(url, [alt])   | ctx.redirect()   | 执行 [302] 重定向到 url.                                                                            |
| ^     | response.attachment([filename]) | ctx.attachment() | 将 Content-Disposition 设置为 “附件” 以指示客户端提示下载。(可选)指定下载的 filename。              |
| ^     | response.vary(field)            |                  | 在 field 上变化。                                                                                   |
| 属性  | response.header                 |                  | 响应标头对象。                                                                                      |
| ^     | response.headers                |                  | ^                                                                                                   |
| ^     | response.socket                 |                  | 请求套接字。                                                                                        |
| ^     | response.status（✅）           | ctx.status       | 响应状态。默认情况下，response.status 设置为 404 而不是像 node 的 res.statusCode 那样默认为 200。   |
| ^     | response.message（✅）          | ctx.message      | 响应的状态消息. 默认情况下, response.message 与 response.status 关联.                               |
| ^     | response.length（✅）           | ctx.length       | 响应的 Content-Length，或者从 ctx.body 推导出来，或者 undefined                                     |
| ^     | response.body（✅）             | ctx.body         | 响应主体。                                                                                          |
| ^     | response.type（✅）             | ctx.type         | 响应 Content-Type 不含参数 "charset"。                                                              |
| ^     | response.headerSent             | ctx.headerSent   | 检查是否已经发送了一个响应头。 用于查看客户端是否可能会收到错误通知。                               |
| ^     | response.lastModified（✅）     | ctx.lastModified | Last-Modified 标头返回为 Date, 如果存在。                                                           |
| ^     | response.etag=                  | ctx.etag         | 设置包含 " 包裹的 ETag 响应， 请注意，没有相应的 response.etag getter。                             |
| ^     | response.flushHeaders()         |                  | 刷新任何设置的标头，并开始主体。                                                                    |
