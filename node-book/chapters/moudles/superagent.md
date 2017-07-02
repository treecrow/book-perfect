# superagent

## 相关文档

- [官方文档](http://visionmedia.github.io/superagent/)

## 插件列表

插件                      | more
----------------------- | -------------------------------------------------------------------------
superagent-no-cache     | prevents caching by including Cache-Control header
superagent-prefix       | prefixes absolute URLs (useful in test environment)
superagent-suffix       | suffix URLs with a given path
superagent-mock         | simulate HTTP calls by returning data fixtures based on the requested URL
superagent-mocker       | simulate REST API
superagent-cache        | A global SuperAgent patch with built-in, flexible caching
superagent-cache-plugin | A SuperAgent plugin with built-in, flexible caching
superagent-jsonapify    | A lightweight json-api client addon for superagent
superagent-serializer   | Converts server payload into different cases
superagent-use          | A client addon to apply plugins to all requests.
superagent-httpbackend  | stub out requests using AngularJS' $httpBackend syntax
superagent-throttle     | queues and intelligently throttles requests
superagent-charset      | add charset support for node's SuperAgent

## 方法列表

方法                                | more
--------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------
request.agent()                   | 保存cookies（浏览器端默认支持，node端需要额外指明？）
request.get()                     | -
request.head()                    | -
request.post()                    | -
request.put()                     | -
request.delete()/request.del()    | -
request.patch()                   | -
request.ca()                      | Set the CA certificate(s) to trust
request.cert()                    | Set the client certificate chain(s)
request.key()                     | Set the client private key(s)
request.pfx()                     | Set the client PFX or PKCS12 encoded private key and certificate chain
request.accept()                  | 设置接受数据的格式 （Accept header）
request.type()                    | 设置发送数据的格式（Content-Type）
request.set()                     | Setting header fields
request.query()                   | 形成 query-string
request.send()                    | 发送数据 用于 POST和 PUT 方法
request.serialize()               | If you want to send the payload in a custom format, you can replace the built-in serialization with .serialize() method.
request.retry()                   | automatically retry requests
request.sortQuery()               | By default the query string is not assembled in any particular order. An asciibetically-sorted query string can be enabled with req.sortQuery()
request.buffer()                  | -
request.buffer(true).parse(fn)    | 设置个性化的解析器，用于解析 response.body
request.responseType('blob')      | 指明接受数据的形式（blob／arraybuffer）
request.timeout()                 | Set timeouts to avoid requests waiting forever
request.auth()                    | 用户认证
request.attach()                  | 绑定多个文件
request.field()                   | 绑定多个字段
request.withCredentials()         | enables the ability to send cookies from the origin
request.ok(callback)              | -
request.on('progress',fn)         | 进程跟踪
request.end(function(err, res){}) | decide whether a response is an error or not
request.then(success, failure)    | -
request.abort()                   | 中止请求

## 多种类型的数据

> The Node client supports multipart/form-data via the [node-formidable](https://github.com/felixge/node-formidable) module. When parsing multipart responses, the object res.files is also available to you

## Response属性列表

属性         | more
---------- | ---------------------------------------------------------------------
res.text   | contains the unparsed response body string
res.body   | -
res.header | contains an object of parsed header fields
res.type   | The Content-Type response header is special-cased, providing res.type
res.status | -

## Piping data

> Node 客户端允许与请求之间形成数据流

## 错误处理
