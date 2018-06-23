# koa

## 文档教程

- [koa GitHub 生态](https://github.com/koajs)
- [官方文档](http://koajs.com/)
- [Koa 框架---阮一峰](http://javascript.ruanyifeng.com/nodejs/koa.html#toc5)

## koa 依赖的模块系统

来源              | 模块                                                                      | more
--------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------
Node            | assert                                                                  | -
-               | events                                                                  | -
-               | stream                                                                  | -
-               | http                                                                    | -
-               | url                                                                     | -
-               | net                                                                     | -
-               | querystring                                                             | -
-               | path                                                                    | -
koa             | [koa-compose](https://github.com/koajs/compose)                         | 组合多个中间件为一个中间件（把多个中间件组合并结构为一个promise函数，这是这个框架的精髓之处）
-               | [koa-convert](https://github.com/koajs/convert)                         | 转化koa1的中间件（generator-based）为koa2的中间件（promise-based）
-               | [koa-is-json](https://github.com/koajs/is-json)                         | Check if a body is JSON
jshttp          | [accepts](https://github.com/jshttp/accepts)                            | Higher-level content negotiation
-               | [content-disposition](https://github.com/jshttp/content-disposition)    | 创建和解析 HTTP Content-Disposition header（文件下载对话框）
-               | [content-type](https://github.com/jshttp/content-type)                  | 创建和解析 HTTP Content-Type header
-               | [fresh](https://github.com/jshttp/fresh)                                | 检测请求的内容在服务器端有没有变化，没有变化返回true,这时可以向客户端返回304
-               | [http-assert](https://github.com/jshttp/http-assert)                    | assert with status codes
-               | [http-errors](https://github.com/jshttp/http-errors)                    | Create HTTP Errors
-               | [mime-types](https://github.com/jshttp/mime-types)                      | 终极 javascript content-type 工具
-               | [on-finished](https://github.com/jshttp/on-finished)                    | request停止后执行一个回调
-               | [statuses](https://github.com/jshttp/statuses)                          | HTTP status utility
-               | [type-is](https://github.com/jshttp/type-is)                            | 判断 the content-type of a request
-               | [vary](https://github.com/jshttp/vary)                                  | Manipulate the HTTP Vary header
pillarjs        | [cookies](https://github.com/pillarjs/cookies)                          | Signed and unsigned cookies based on Keygrip
-               | [parseurl](https://github.com/pillarjs/parseurl)                        | parse a url with memoization(直接根据req解析响应的url)
stream-utils    | [destroy](https://github.com/stream-utils/destroy)                      | 尽可能的销毁一个stream
-               | [error-inject](https://github.com/stream-utils/error-inject)            | inject an error listener into a stream
其他              | [escape-html](https://github.com/component/escape-html)                 | Escape string for use in HTML
koa 中间件（源码没有依赖） | [koa-bodyparser](https://github.com/koajs/bodyparser)                   | 配置ctx.body解析中间件
-               | [koa-views](https://github.com/queckezz/koa-views)                      | 配置项目模板和views路径
-               | [koa-static](https://github.com/koajs/static)                           | 配置静态资源路径
-               | [koa-logger](https://github.com/koajs/logger)                           | 开发过程中的日志记录
-               | [koa-mysql-session](https://github.com/tb01923/koa-mysql-session)       | this is an adpatation of the logic from the connect mysql-session-store to koa-generic-session
-               | [koa-session-minimal](https://github.com/longztian/koa-session-minimal) | Minimal implementation of session middleware for Koa 2
-               | [koa-router](https://github.com/alexmingoia/koa-router)                 | Router middleware for koa.
-               | [koa-jsonp](https://github.com/kilianc/koa-jsonp)                       | Koajs JSONP streaming friendly middleware with GET/POST support

--------------------------------------------------------------------------------

# 个人阅读源码整理

## koa 继承自 events

> 可以自定义事件等等

## app(koa的实例，由new koa()生成)

### 属性列表

来源    | 属性                  | 默认值                                  | more
----- | ------------------- | ------------------------------------ | ---------------------------------------------
预设的属性 | app.silent          | false                                | 设置为true会取消默认的错误处理程序的执行
-     | app.keys=           | -                                    | 用于设置签名cookie密钥
自身    | app.proxy           | false                                | when true proxy header fields will be trusted
-     | app.subdomainOffset | 2                                    | 设置忽略子域的级别
-     | app.middleware      | []                                   | 中间件容器
-     | app.env             | process.env.NODE_ENV ／ 'development' | 当前的环境（开发／测试...）
-     | app.context         | -                                    | ctx的原型(不能直接调用，否则会报错),可以用来为应用添加全局的属性和方法
-     | app.request         | -                                    | 直接打印'undefined'
-     | app.response        | -                                    | 直接打印'undefined'

### 方法列表

方法                  | more
------------------- | --------------------------------------------------------------------------------------------
app.createContext() | 初始化一个新的context（这里的request、response等新创建的对象没有返回，有什么用？）
app.onerror()       | app 的 error 事件上默认的错误处理程序(忽略 404 == err.status 和 err.expose 为true到情况)，其他错误会打印出来,这里的错误不能返回给客户端
app.callback()      | 返回一个适合http.createServer()的回调函数
app.use(function)   | 添加中间件函数到app.middleware中（如果中间件函数是 generator函数，会自动转化）
app.listen()        | http.createServer(app.callback()).listen(...) 简化封装

### 事件列表

事件    | more
----- | ------------------------
error | 有默认的事件处理程序 app.onerror()

## Context、Request、Response的关系

具柄               | 代表
---------------- | --------
context.app      | app
context.req      | req
context.res      | res
-                | -
request.app      | app
request.req      | req
request.res      | res
request.ctx      | context
request.response | response
-                | -
response.app     | app
response.req     | req
response.res     | res
response.ctx     | context
response.request | request

## Context

### 属性列表

来源              | 属性               | more
--------------- | ---------------- | ------------------------------------------------------------------------------------------------------
预设的属性           | ctx.respond      | 默认调用respond(ctx)方法，此方法为返回客户端内容前的最后一步。设置为false可以绕过koa内置的response处理方法，通过最后一步app.use()声明自己的respond(ctx)方法
来自 request 的属性  | ctx.header       | req.headers
-               | ctx.headers      | ～
-               | ctx.ips          | req.headers.X-Forwarded-For（只有在app.proxy为true的时候有返回值）
-               | ctx.ip           | Request remote address. Supports X-Forwarded-For when app.proxy is true.(源码中没有)
-               | ctx.method       | req.method
-               | ctx.method=      | ～
-               | ctx.idempotent   | 检测请求方法是否超出了['GET', 'HEAD', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'],如果超出了，返回true
-               | ctx.secure       | 检测是否使用的https协议，如果是返回true
-               | ctx.fresh        | 判断请求的内容是否需要更新，不需要更新返回 true（当请求的 method 为 GET、HEAD，或者状态码不在指定区间的时候，此方法无效）
-               | ctx.stale        | !request.fresh
-               | ctx.socket       | req.socket
-               | ctx.url          | req.url
-               | ctx.href         | 获取完整的请求 url
-               | ctx.querystring  | 通过解析 req.url 获取请求的 query 部分（不包含'?'）
-               | ctx.querystring= | 修改 request.url 中的 search 部分
-               | ctx.query        | Get parsed query-string
-               | ctx.query=       | Set query-string to the given object. Note that this setter does not support nested objects
-               | ctx.search       | 获取请求的 search 部分（包含'?'）
-               | ctx.path         | 通过解析 req.url 获取请求的 pathname 部分
-               | ctx.path=        | 修改 request.url 中的 pathname 部分
-               | ctx.protocol     | 返回协议头，https／http／req.headers.X-Forwarded-Proto
-               | ctx.host         | 获取 host 字段？通过 req.headers.X-Forwarded-Host(app.proxy 为 true时) / req.headers.host 获取
-               | ctx.hostname     | 通过 request.host 或者 request.URL 获取 hostname
-               | ctx.origin       | ${this.protocol}://${this.host}
-               | ctx.URL          | 组合 request.protocol、request.host、request.originalUrl 为 WHATWG URL（ 这里同时将结果赋给了 request.memoizedURL 属性）
-               | ctx.subdomains   | 从级别最低的子域数起，获取app.subdomainOffset个子域
来自 response 的属性 | ctx.status       | res.statusCode
-               | ctx.status=      | 设置 res.statusCode，同时兼顾 res.statusMessage 和 response.body
-               | ctx.message      | res.statusMessage / 由response.status生成的message
-               | ctx.message=     | ~
-               | ctx.body         | `response._body`
-               | ctx.body=        | ~
-               | ctx.length       | res.getHeaders()['content-length']
-               | ctx.length=      | res.setHeader('Content-Length', n)
-               | ctx.type         | res.getHeaders()['Content-Type']
-               | ctx.type=        | res.setHeader('Content-Type', getType(type))
-               | ctx.lastModified | res.getHeaders()['Last-Modified']
-               | ctx.etag=        | res.getHeaders()['ETag']
-               | ctx.headerSent=  | res.headersSent,检查消息是否已经发送
-               | ctx.writable     | 验证 request 是否可写
后来添加            | -                | -
-               | ctx.app          | 应用实例
-               | ctx.req          | Node's request object
-               | ctx.res          | Node's response object
-               | ctx.request      | A koa Request object
-               | ctx.response     | A koa Response object
-               | ctx.originalUrl  | `context.originalUrl = request.originalUrl = req.url` : /api/users/getUser
-               | ctx.cookies      | cookies对象（由[cookies](https://github.com/pillarjs/cookies)模块生成，包含相应的方法）
-               | ctx.accept       | Accepts object from req(可以通过这个对象方便的获取一些req的信息)
-               | ctx.state        | 建议利用这个 namespace 通过中间件向客户端传递信息

### 方法列表

来源              | 方法                                               | more
--------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------
自身              | ctx.assert(value, [status], [msg], [properties]) | 在中间件之中断言，失败的话抛出状态码错误
-               | ctx.throw([status], [msg], [properties])         | 抛出错误，默认500(如果没有指明error.status)
-               | ctx.onerror(err)                                 | 请求内部 error 事件错误处理程序
来自 request 的方法  | ctx.acceptsLanguages()                           | Check if langs are acceptable, returning the best match when true, otherwise false
-               | ctx.acceptsEncodings()                           | Check if encodings are acceptable, returning the best match when true, otherwise false.
-               | ctx.acceptsCharsets()                            | Check if charsets are acceptable, returning the best match when true, otherwise false
-               | ctx.accepts()                                    | Check if the given type(s) is acceptable, returning the best match when true, otherwise false
-               | ctx.get()                                        | 返回 req.headers[field]
-               | ctx.is()                                         | 检测 req.headers.content-type是否属于types中的一个，如果属于，返回对应的内容，否则返回false
来自 response 的方法 | ctx.attachment()                                 | 利用[content-disposition](https://github.com/jshttp/content-disposition)模块，将某个文件绑定到'Content-Disposition'上
-               | ctx.redirect()                                   | Perform a [302] redirect to url
-               | ctx.remove(field)                                | res.removeHeader(field)
-               | ctx.vary(field)                                  | vary(res, field),向header添加字段？
-               | ctx.set(field, val)                              | res.setHeader(field, val)
-               | ctx.append(field, val)                           | 在 resgetHeaders()['field']上面添加 val
-               | ctx.flushHeaders()                               | res.flushHeaders()(刷新请求头)

## Request

### url处理图

```
┌────────────────────────────────────────────────────────┐
│                           href                         │
├────────────────────────────┬───────────────────────────┤
│          origin            │     url / originalurl     │
├──────────┬─────────────────┼──────────┬────────────────┤
│ protocol │      host       │   path   │     search     │
├──────────├──────────┬──────┼──────────┼─┬──────────────┤
│          │ hostname │ port │          │?│ querystring  │
│          ├──────────┼──────┤          ├─┼──────────────┤
│          │          │      │          │ │              │
"  http:   │ host.com : 8080   /p/a/t/h  ?  query=string │
│          │          │      │          │ │              │
└──────────┴──────────┴──────┴──────────┴─┴──────────────┘
```

### 属性列表

属性                   | more
-------------------- | -----------------------------------------------------------------------------------------------------
request.header       | req.headers
request.header= val  | ～
request.headers      | ～
request.headers=val  | ～
request.url          | req.url
request.url=         | ～
request.origin       | `${this.protocol}://${this.host}`
request.href         | 返回HTTP请求的完整路径，包括协议、端口和url
request.method       | req.method
request.method=      | ～
request.path         | HTTP请求的路径
request.path=        | ~
request.query        | 返回一个对象，包含了HTTP请求的查询字符串。如果没有查询字符串，则返回一个空对象
request.query=       | Set query-string to the given object. Note that this setter does not support nested objects
request.querystring  | HTTP请求的查询字符串，不含问号
request.querystring= | ~
request.search       | HTTP请求的查询字符串，含问号
request.search=      | ~
request.host         | 获取 host 字段(HTTP请求的主机（含端口号)),通过 req.headers.X-Forwarded-Host(app.proxy 为 true时) / req.headers.host 获取
request.hostname     | 获取HTTP的主机名（不含端口号)
request.URL          | 组合 request.protocol、request.host、request.originalUrl 为 WHATWG URL（ 这里同时将结果赋给了 request.memoizedURL 属性）
request.fresh        | 返回一个布尔值，表示缓存是否代表了最新内容。通常与If-None-Match、ETag、If-Modified-Since、Last-Modified等缓存头，配合使用
request.stale        | `!request.fresh`
request.idempotent   | 检测请求方法是否超出了`['GET', 'HEAD', 'PUT', 'DELETE', 'OPTIONS', 'TRACE']`,如果超出了，返回true
request.socket       | req.socket
request.charset      | 获取HTTP请求的字符集（通过 Content-Type charset）
request.length       | req.headers.Content-Length
request.protocol     | HTTP请求的协议，https或者http
request.secure       | 返回一个布尔值，表示当前协议是否为https
request.ips          | req.headers.X-Forwarded-For（只有在app.proxy为true的时候有返回值）
request.subdomains   | 返回一个数组，表示HTTP请求的子域名。该属性必须与app.subdomainOffset属性搭配使用
request.type         | HTTP请求的Content-Type属性
-                    | -
request.originalUrl  | Get request original URL(源码中没有) `context.originalUrl = request.originalUrl = req.url`
request.ip           | 返回发出HTTP请求的IP地址

### 方法列表

方法                                  | more
----------------------------------- | ----------------------------------------------------------------------------------------------------
request.accepts(types)              | 检查HTTP请求的Accept属性是否可接受，如果可接受，则返回指定的媒体类型，否则返回false（from [accepts](https://github.com/jshttp/accepts)）
request.acceptsEncodings(encodings) | 根据HTTP请求的Accept-Encoding字段，返回最佳匹配，如果没有合适的匹配，则返回false
request.acceptsCharsets(charsets)   | 根据HTTP请求的Accept-Charset字段，返回最佳匹配，如果没有合适的匹配，则返回false
request.acceptsLanguages(...args)   | 根据HTTP请求的Accept-Language字段，返回最佳匹配，如果没有合适的匹配，则返回false
request.is(types)                   | 检测 req.headers.content-type是否属于types中的一个，如果属于，返回对应的内容，否则返回false
request.get(field)                  | 返回 req.headers[field]

## Response

属性                     | more
---------------------- | -------------------------------------------------------------
response.socket        | req.socket
response.header        | res.getHeaders()
response.headers       | ~
response.status        | res.statusCode（返回HTTP回应的状态码。默认情况下，该属性没有值）
response.status=       | 设置 res.statusCode，同时兼顾 res.statusMessage 和 response.body
response.message       | res.statusMessage / 由response.status生成的message（HTTP回应的状态信息）
response.message=      | 设置 res.statusMessage
response.body          | `response._body`（HTTP回应的信息体：字符串／二进制Buffer／Stream／JSON对象／null）
response.body=         | Set response body to one of the following:
response.length        | res.getHeaders()['content-length']
response.length=       | res.setHeader('Content-Length', n)
response.headerSent    | res.headersSent（返回一个布尔值，检查是否HTTP回应已经发出）
response.lastModified  | res.getHeaders()['Last-Modified']
response.lastModified= | res.setHeader('Last-Modified', val)
response.etag          | res.getHeaders()['ETag']
response.etag=         | res.setHeader('ETag', val)
response.type          | res.getHeaders()['Content-Type'] (不包括"charset"参数的部分)
response.type=         | res.setHeader('Content-Type', getType(type))
response.writable      | 验证 request 是否可写

方法                            | more
----------------------------- | ------------------------------------------------------------------------------------------------------------------
response.vary(field)          | vary(res, field)，将参数添加到HTTP回应的Vary字段
response.redirect(url, [alt]) | 执行302跳转到指定网址
response.attachment(filename) | 利用[content-disposition](https://github.com/jshttp/content-disposition)模块，将某个文件绑定到'Content-Disposition'上,提示浏览器下载该文件
response.is(types...)         | 检测 res.getHeaders()['content-type']是否属于types中的一个，如果属于，返回对应的内容，否则返回false
response.get(field)           | 返回 res.getHeaders()[field] (区分大小写)
response.set(field, val)      | res.setHeader(field, val)
response.set(fields)          | res.setHeader(field, val)
response.append(field, val)   | 在 resgetHeaders()['field']上面添加 val
response.remove(field)        | res.removeHeader(field)
response.inspect()            | -
response.toJSON()             | -
response.flushHeaders()       | res.flushHeaders()(刷新请求头)
