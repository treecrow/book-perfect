# [http2](http://nodejs.cn/api/http2.html)

> http2 模块提供了 HTTP/2 协议的实现

## api list

- http2

> ...

| api                                                   | more |
| ----------------------------------------------------- | ---- |
| http2.createServer(options[, onRequestHandler])       | -    |
| http2.createSecureServer(options[, onRequestHandler]) | -    |
| http2.connect(authority[, options][, listener])       | -    |
| http2.constants                                       | -    |
| http2.getDefaultSettings()                            | -    |
| http2.getPackedSettings(settings)                     | -    |
| http2.getUnpackedSettings(buf)                        | -    |

- Http2Session 类

> ...

| class | api                                                       | more |
| ----- | --------------------------------------------------------- | ---- |
| api   | http2session.alpnProtocol                                 | -    |
| ^     | http2session.close([callback])                            | -    |
| ^     | http2session.closed                                       | -    |
| ^     | http2session.connecting                                   | -    |
| ^     | http2session.destroy([error][, code])                     | -    |
| ^     | http2session.destroyed                                    | -    |
| ^     | http2session.encrypted                                    | -    |
| ^     | http2session.goaway([code[, lastStreamID[, opaqueData]]]) | -    |
| ^     | http2session.localSettings                                | -    |
| ^     | http2session.originSet                                    | -    |
| ^     | http2session.pendingSettingsAck                           | -    |
| ^     | http2session.ping([payload, ]callback)                    | -    |
| ^     | http2session.ref()                                        | -    |
| ^     | http2session.remoteSettings                               | -    |
| ^     | http2session.setTimeout(msecs, callback)                  | -    |
| ^     | http2session.socket                                       | -    |
| ^     | http2session.state                                        | -    |
| ^     | http2session.settings(settings)                           | -    |
| ^     | http2session.type                                         | -    |
| ^     | http2session.unref()                                      | -    |
| event | close                                                     | -    |
| ^     | connect                                                   | -    |
| ^     | error                                                     | -    |
| ^     | frameError                                                | -    |
| ^     | goaway                                                    | -    |
| ^     | localSettings                                             | -    |
| ^     | ping                                                      | -    |
| ^     | remoteSettings                                            | -    |
| ^     | stream                                                    | -    |
| ^     | timeout                                                   | -    |

- ServerHttp2Session 类

> ...

| class | api                                            | more |
| ----- | ---------------------------------------------- | ---- |
| api   | serverhttp2session.altsvc(alt, originOrStream) | -    |
| ^     | serverhttp2session.origin(...origins)          | -    |

- ClientHttp2Session 类

> ...

| class | api                                            | more |
| ----- | ---------------------------------------------- | ---- |
| api   | clienthttp2session.request(headers[, options]) | -    |
| event | altsvc                                         | -    |
| ^     | origin                                         | -    |

- Http2Stream 类

> ...

| class | api                                     | more |
| ----- | --------------------------------------- | ---- |
| api   | http2stream.aborted                     | -    |
| ^     | http2stream.bufferSize                  | -    |
| ^     | http2stream.close(code[, callback])     | -    |
| ^     | http2stream.closed                      | -    |
| ^     | http2stream.destroyed                   | -    |
| ^     | http2stream.endAfterHeaders             | -    |
| ^     | http2stream.pending                     | -    |
| ^     | http2stream.priority(options)           | -    |
| ^     | http2stream.rstCode                     | -    |
| ^     | http2stream.sentHeaders                 | -    |
| ^     | http2stream.sentInfoHeaders             | -    |
| ^     | http2stream.sentTrailers                | -    |
| ^     | http2stream.session                     | -    |
| ^     | http2stream.setTimeout(msecs, callback) | -    |
| ^     | http2stream.state                       | -    |
| ^     | http2stream.sendTrailers(headers)       | -    |
| event | aborted                                 | -    |
| ^     | close                                   | -    |
| ^     | error                                   | -    |
| ^     | frameError                              | -    |
| ^     | timeout                                 | -    |
| ^     | trailers                                | -    |
| ^     | wantTrailers                            | -    |

- ClientHttp2Stream 类

> ...

| class | api      | more |
| ----- | -------- | ---- |
| event | continue | -    |
| ^     | headers  | -    |
| ^     | push     | -    |
| ^     | response | -    |

- ServerHttp2Stream 类

> ...

| class | api                                                     | more |
| ----- | ------------------------------------------------------- | ---- |
| api   | http2stream.additionalHeaders(headers)                  | -    |
| ^     | http2stream.headersSent                                 | -    |
| ^     | http2stream.pushAllowed                                 | -    |
| ^     | http2stream.pushStream(headers[, options], callback)    | -    |
| ^     | http2stream.respond([headers[, options]])               | -    |
| ^     | http2stream.respondWithFD(fd[, headers[, options]])     | -    |
| ^     | http2stream.respondWithFile(path[, headers[, options]]) | -    |

- Http2Server 类

> ...

| class | api                                    | more |
| ----- | -------------------------------------- | ---- |
| api   | server.close([callback])               | -    |
| ^     | server.setTimeout([msecs][, callback]) | -    |
| event | checkContinue                          | -    |
| ^     | request                                | -    |
| ^     | session                                | -    |
| ^     | sessionError                           | -    |
| ^     | stream                                 | -    |
| ^     | timeout                                | -    |

- Http2SecureServer 类

> ...

| class | api                                    | more |
| ----- | -------------------------------------- | ---- |
| api   | server.close([callback])               | -    |
| ^     | server.setTimeout([msecs][, callback]) | -    |
| event | checkContinue                          | -    |
| ^     | request                                | -    |
| ^     | session                                | -    |
| ^     | sessionError                           | -    |
| ^     | stream                                 | -    |
| ^     | timeout                                | -    |
| ^     | unknownProtocol                        | -    |
