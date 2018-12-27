# [session](https://www.electronjs.cn/docs/api/session)

> 管理浏览器会话、cookie、缓存、代理设置等

> 可以使用WebContents的session属性或session模块访问现有页的session

> session 模块可用于创建新的 session 对象

## api 列表

| api                                            | more                                                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| session.fromPartition(partition[, options])    | Returns Session - 根据partition字符串产生的session实例                                                                               |
| session.defaultSession                         | 一个Session对象，该应用程序的默认session对象                                                                                         |
| session.fromPartition('persist:name')          | 你可以创建一个 Session对象在session模块中                                                                                            |
| ses.getCacheSize(callback)                     | Callback会被调用，参数是session的当前缓存大小                                                                                        |
| ses.clearCache(callback)                       | 清除session的HTTP缓存。                                                                                                              |
| ses.clearStorageData([options, callback])      | 清除Web storage的数据                                                                                                                |
| ses.flushStorageData()                         | 写入任何未写入DOMStorage数据到磁盘.                                                                                                  |
| ses.setProxy(config, callback)                 | 代理设置                                                                                                                             |
| ses.resolveProxy(url, callback)                | 解析 url 的代理信息                                                                                                                  |
| ses.setDownloadPath(path)                      | 设置下载保存目录。默认情况下, 下载目录将是相应应用程序文件夹下的 Downloads。                                                         |
| ses.enableNetworkEmulation(options)            | 通过指定的配置为 session 模拟网络                                                                                                    |
| ses.disableNetworkEmulation()                  | 禁用所有为 session 模拟的已激活网络。重置为原始网络配置。                                                                            |
| ses.setCertificateVerifyProc(proc)             | 每当一个服务器证书请求验证，proc 将被这样 proc(request, callback) 调用，为 session 设置证书验证过程                                  |
| ses.setPermissionRequestHandler(handler)       | 设置可用于响应 session 的权限请求的处理程序                                                                                          |
| ses.clearHostResolverCache([callback])         | 清除主机解析程序的缓存。                                                                                                             |
| ses.allowNTLMCredentialsForDomains(domains)    | 动态设置是否始终为 HTTP NTLM 发送凭据或协商身份验证                                                                                  |
| ses.setUserAgent(userAgent[, acceptLanguages]) | 覆盖当前会话的 userAgent 和 acceptLanguages                                                                                          |
| ses.getUserAgent()                             | 返回 String - 当前会话的 user agent.                                                                                                 |
| ses.getBlobData(identifier, callback)          | -                                                                                                                                    |
| ses.createInterruptedDownload(options)         | 允许从上一个 Session 恢复 cancelled 或 interrupted 下载                                                                              |
| ses.clearAuthCache(options[, callback])        | 清除会话的 HTTP 身份验证缓存                                                                                                         |
| ses.setPreloads(preloads)                      | Adds scripts that will be executed on ALL web contents that are associated with this session just before normal preload scripts run. |
| ses.getPreloads()                              | 返回 String[] 返回一个数组，这个数组由已经注册过的预加载脚本的路径组成                                                               |
| ses.cookies                                    | 此会话的 cookie 对象。                                                                                                               |
| ses.webRequest                                 | 此会话的 WebRequest 对象。                                                                                                           |
| ses.protocol                                   | 此会话的 协议 对象。                                                                                                                 |

## 事件列表

| event         | more                                                  |
| ------------- | ----------------------------------------------------- |
| will-download | 当 Electron 刚要在webContents中下载`item<0>的时候触发 |