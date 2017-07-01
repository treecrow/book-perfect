# koa

## 文档教程

网站                                                              | 描述
--------------------------------------------------------------- | --
[koa2进阶学习笔记](https://chenshenhai.github.io/koa2-note/)          | -
[最新Node.js框架：Koa 2 实用入门](https://sanwen8.cn/p/1feFr7y.html)     | -
[Koa 2实用入门](https://cnodejs.org/topic/5709959abc564eaf3c6a48c8) | -
[「新手向」koa2从起步到填坑](http://www.jianshu.com/p/6b816c609669)        | -

## 依赖的模块系统

来源           | 模块                                                                       | more
------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------
Node         | assert                                                                   | -
-            | events                                                                   | -
-            | stream                                                                   | -
-            | http                                                                     | -
-            | url                                                                      | -
-            | net                                                                      | -
-            | querystring                                                              | -
-            | path                                                                     | -
koa          | [koa-compose](https://github.com/koajs/compose)                          | 中间件构成工具
-            | [koa-convert](https://github.com/koajs/convert)                          | Convert koa generator-based middleware to promise-based middleware
-            | [koa-is-json](https://github.com/koajs/is-json)                          | check if a koa body should be interpreted as JSON
jshttp       | [accepts](https://github.com/jshttp/accepts)                             | Higher-level content negotiation
-            | [content-disposition](https://github.com/jshttp/content-disposition)     | Create and parse HTTP Content-Disposition header
-            | [content-type](https://github.com/jshttp/content-type)                   | Create and parse HTTP Content-Type header
-            | [fresh](https://github.com/jshttp/fresh)                                 | HTTP request freshness testing
-            | [http-assert](https://github.com/jshttp/http-assert)                     | assert with status codes
-            | [http-errors](https://github.com/jshttp/http-errors)                     | Create HTTP Errors
-            | [mime-types](https://github.com/jshttp/mime-types)                       | The ultimate javascript content-type utility
-            | [on-finished](https://github.com/jshttp/on-finished)                     | request停止后的回调
-            | [only](https://github.com/jshttp/only)                                   | return whitelisted properties of an object
-            | [statuses](https://github.com/jshttp/statuses)                           | HTTP status utility
-            | [type-is](https://github.com/jshttp/type-is)                             | Infer the content-type of a request
-            | [vary](https://github.com/jshttp/vary)                                   | Manipulate the HTTP Vary header
pillarjs     | [cookies](https://github.com/pillarjs/cookies)                           | Signed and unsigned cookies based on Keygrip
-            | [parseurl](https://github.com/pillarjs/parseurl)                         | parse a url with memoization
stream-utils | [destroy](https://github.com/stream-utils/destroy)                       | destroy a stream if possible
-            | [error-inject](https://github.com/stream-utils/error-inject)             | inject an error listener into a stream
其他           | [debug](https://github.com/visionmedia/debug)                            | 调试用的，相当于console
-            | [depd](https://github.com/dougwilson/nodejs-depd)                        | Deprecate all the things
-            | [escape-html](https://github.com/component/escape-html)                  | Escape string for use in HTML
-            | [is-generator-function](https://github.com/ljharb/is-generator-function) | 判断函数是否是generator
-            | [delegates](https://github.com/tj/node-delegates)                        | Nodejs method and accessor delegation utility

## 模块生态

模块                  | 作用
------------------- | -------------------
koa-convert         | 转化koa1的中间件为koa2的中间件
koa-bodyparser      | 配置ctx.body解析中间件
koa-views           | 配置项目模板和views路径
koa-static          | 配置静态资源路径
koa-logger          | 开发过程中的日志记录
koa-mysql-session   | -
koa-session-minimal | -
koa-router          | -
koa-jsonp           | -
mysql               | 连接mysql数据库的客户端
validator           | 验证

## app

### 属性列表

属性                  | more
------------------- | ---------------------------------------------
app.env             | NODE_ENV / "development"
app.proxy           | when true proxy header fields will be trusted
app.subdomainOffset | offset of .subdomains to ignore [2]
app.keys            | 用于设置签名cookie密钥
app.context         | ctx的原型,可以用来为应用添加全局的属性和方法（感觉更像一个可以利用的全局对象）

### 方法列表

方法                | more
----------------- | -------------------------------------
app.listen(...)   | 返回一个新建的 http.Server 实例，并调用示例的listen方法
app.callback()    | 返回一个适合http.createServer()的回调函数
app.use(function) | 给应用添加中间件

### 事件列表

事件    | more
----- | ----
error | -

## Context

### 属性列表

属性             | more
-------------- | -------------------------------------
ctx.req        | Node's request object
ctx.request    | A koa Request object
ctx.res        | Node's response object
ctx.response   | A koa Response object
ctx.state      | 推荐用于传递信息给中间件或者视图
ctx.app        | 应用实例
ctx.originalUr | -
ctx.socket     | -
ctx.respond    | 设置为false可以绕过koa内置的response处理方法（使用原生？）

### 方法列表

方法                                               | more
------------------------------------------------ | -------------------------------------
ctx.cookies.get(name, [options])                 | Get cookie name with options
ctx.cookies.set(name, value, [options])          | Set cookie name to value with options
ctx.throw([status], [msg], [properties])         | 抛出错误，默认500
ctx.assert(value, [status], [msg], [properties]) | 断言（抛出错误）

## Request

### 属性列表

属性                 | more
------------------ | --------------------------------------------------------------------------------------------------------------------------------
ctx.header         | Request header object
ctx.headers        | Request header object
ctx.method         | Request method
ctx.method=        | 设置请求方法，常用于实现中间件
request.length     | Return request Content-Length as a number when present, or undefined.
ctx.url            | Get request URL.
ctx.url=           | Set request URL, useful for url rewrites
ctx.originalUrl    | Get request original URL
ctx.origin         | Get origin of URL, include protocol and host
ctx.href           | Get full request URL, include protocol, host and url
ctx.path           | Get request pathname
ctx.path=          | Set request pathname and retain query-string when present
ctx.query          | Get parsed query-string, returning an empty object when no query-string is present
ctx.query=         | Set query-string to the given object
ctx.querystring    | Get raw query string void of ?
ctx.querystring=   | Set raw query string
request.search     | Get raw query string with the ?
request.search=    | Set raw query string
ctx.host           | Get host (hostname:port) when present. Supports X-Forwarded-Host when app.proxy is true, otherwise Host is used.
ctx.hostname       | Get hostname when present. Supports X-Forwarded-Host when app.proxy is true, otherwise Host is used
request.type       | Get request Content-Type void of parameters such as "charset"
request.charset    | Get request charset when present, or undefined:
ctx.fresh          | Check if a request cache is "fresh", aka the contents have not changed
ctx.stale          | Inverse of request.fresh
ctx.socket         | Return the request socket
ctx.protocol       | Return request protocol, "https" or "http". Supports X-Forwarded-Proto when app.proxy is true.
ctx.secure         | Shorthand for ctx.protocol == "https" to check if a request was issued via TLS.
ctx.ip             | Request remote address. Supports X-Forwarded-For when app.proxy is true
ctx.ips            | When X-Forwarded-For is present and app.proxy is enabled an array of these ips is returned, ordered from upstream -> downstream.
ctx.subdomains     | Return subdomains as an array.
request.idempotent | Check if the request is idempotent

### 方法列表

方法                     | more
---------------------- | ------------------------------------------------------------------------------------------------------------------
ctx.is()               | Check if the incoming request contains the "Content-Type" header field, and it contains any of the give mime types
ctx.accepts()          | Check if the given type(s) is acceptable, returning the best match when true, otherwise false
ctx.acceptsEncodings() | Check if encodings are acceptable, returning the best match when true, otherwise false
ctx.acceptsCharsets()  | Check if charsets are acceptable, returning the best match when true, otherwise false
ctx.acceptsLanguages() | Check if langs are acceptable, returning the best match when true, otherwise false
ctx.get()              | Return request header

## Response

### 属性列表

属性                | more
----------------- | -----------------------------------------------------------------------------------------------------------------
response.header   | Response header object
response.headers  | Response header object
response.socket   | Request socket
ctx.body          | Get response body
ctx.body=         | Set response body to one of the following
ctx.status        | Get response status. By default, response.status is set to 404 unlike node's res.statusCode which defaults to 200
ctx.status=       | Set response status via numeric code
ctx.message       | Get response status message
ctx.message=      | Set response status message to the given value
ctx.length=       | Set response Content-Length to the given value
ctx.length        | Return response Content-Length as a number when present, or deduce from ctx.body when possible, or undefined
ctx.type=         | Set response Content-Type via mime string or file extension
ctx.type          | Get response Content-Type void of parameters such as "charset"
ctx.headerSent    | Check if a response header has already been sent
ctx.lastModified  | Return the Last-Modified header as a Date, if it exists
ctx.lastModified= | Set the Last-Modified header as an appropriate UTC string.
ctx.etag=         | Set the ETag of a response including the wrapped "s

### 方法列表

方法                              | more
------------------------------- | ----------------------------------------------------------------------------------------------
ctx.redirect()                  | -
ctx.attachment()                | -
response.get(field)             | Get a response header field value with case-insensitive field
response.set(field, value)      | Set response header field to value
response.set(fields)            | Set several response header fields with an object:
ctx.append()                    | Append additional header field with value val
ctx.remove()                    | Remove header field.
response.is(types...)           | Very similar to ctx.request.is(). Check whether the response type is one of the supplied types
response.redirect(url, [alt])   | Perform a [302] redirect to url
response.attachment([filename]) | Set Content-Disposition to "attachment" to signal the client to prompt for download
response.vary(field)            | Vary on field
response.flushHeaders()         | Flush any set headers, and begin the body
