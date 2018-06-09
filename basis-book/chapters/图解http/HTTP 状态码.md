# HTTP 状态码

## 状态码列表

| 分类 | 状态码                         | 含义                                                                 |
| ---- | ------------------------------ | -------------------------------------------------------------------- |
| 1xx  | Informational(信息状态码)      | 接受的请求正在处理                                                   |
| ～   | 100                            | -                                                                    |
| ～   | 101                            | -                                                                    |
| ～   | 102                            | -                                                                    |
| 2xx  | Success(成功状态码)            | 请求正常处理完毕                                                     |
| ～   | 200                            | 客户端请求成功                                                       |
| ～   | 201                            | -                                                                    |
| ～   | 202                            | -                                                                    |
| ～   | 203                            | -                                                                    |
| ～   | 204                            | 请求成功，但返回但响应报文中不含实体但主体部分                       |
| ～   | 205                            | -                                                                    |
| ～   | 206                            | -                                                                    |
| ～   | 207                            | -                                                                    |
| ～   | 208                            | -                                                                    |
| ～   | 226                            | -                                                                    |
| 3xx  | Redirection(重新定向状态码)    | 需要完成附加操作以完成请求                                           |
| ～   | 300                            | -                                                                    |
| ～   | 301                            | 永久性重定向                                                         |
| ～   | 302                            | 临时性重定向                                                         |
| ～   | 303                            | 请求的资源存在着另一个URI，应使用GET方法定向获取请求资源             |
| ～   | 304                            | 客户端发送附带条件的请求，服务器允许请求访问资源，但未满足条件的情况 |
| ～   | 305                            | -                                                                    |
| ～   | 306                            | -                                                                    |
| ～   | 307                            | 临时性重定向                                                         |
| ～   | 308                            | -                                                                    |
| 4xx  | Client Error(客户端错误状态码) | 服务器无法处理请求                                                   |
| ～   | 400                            | 请求报文中存在语法错误                                               |
| ～   | 401                            | 请求（没有／未经过）授权                                             |
| ～   | 402                            | PaymentRequired                                                      |
| ～   | 403                            | 对请求资源的访问被服务器拒绝                                         |
| ～   | 404                            | 服务器上无法找到请求的资源                                           |
| ～   | 405                            | MethodNotAllowed                                                     |
| ～   | 406                            | NotAcceptable                                                        |
| ～   | 407                            | ProxyAuthenticationRequired                                          |
| ～   | 408                            | RequestTimeout                                                       |
| ～   | 409                            | Conflict                                                             |
| ～   | 410                            | Gone                                                                 |
| ～   | 411                            | LengthRequired                                                       |
| ～   | 412                            | PreconditionFailed                                                   |
| ～   | 413                            | PayloadTooLarge                                                      |
| ～   | 414                            | URITooLong                                                           |
| ～   | 415                            | UnsupportedMediaType                                                 |
| ～   | 416                            | RangeNotSatisfiable                                                  |
| ～   | 417                            | ExpectationFailed                                                    |
| ～   | 418                            | ImATeapot                                                            |
| ～   | 421                            | MisdirectedRequest                                                   |
| ～   | 422                            | UnprocessableEntity                                                  |
| ～   | 423                            | Locked                                                               |
| ～   | 424                            | FailedDependency                                                     |
| ～   | 425                            | UnorderedCollection                                                  |
| ～   | 426                            | UpgradeRequired                                                      |
| ～   | 428                            | PreconditionRequired                                                 |
| ～   | 429                            | Too Many Requests                                                    |
| ～   | 431                            | RequestHeaderFieldsTooLarge                                          |
| ～   | 451                            | UnavailableForLegalReasons                                           |
| 5xx  | Server Error(服务器错误状态码) | 服务器处理请求出错                                                   |
| ～   | 500                            | 服务端本身发生错误                                                   |
| ～   | 501                            | NotImplemented                                                       |
| ～   | 502                            | BadGateway                                                           |
| ～   | 503                            | 服务器暂时处于超负载或正在进行停机维护，现在无法处理请求             |
| ～   | 504                            | GatewayTimeout                                                       |
| ～   | 505                            | HTTPVersionNotSupported                                              |
| ～   | 506                            | VariantAlsoNegotiates                                                |
| ～   | 507                            | InsufficientStorage                                                  |
| ～   | 508                            | LoopDetected                                                         |
| ～   | 509                            | BandwidthLimitExceeded                                               |
| ～   | 510                            | NotExtended                                                          |
| ～   | 511                            | NetworkAuthenticationRequired                                        |
