# downloaditem

> 控制来自于远程资源的文件下载

> 在 Electron 中，DownloadItem 是一个代表下载项目的 EventEmitter。 它用于 will-download 事件以及 Session 类，并且允许用户控制下载项目

## api 列表

| api     | more                               |
| ------- | ---------------------------------- |
| updated | 当下载正在执行但还没完成的时候发出 |
| done    | 当下载文件已经到本地时发出         |

## 事件列表

| event                                | more                                                                                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| downloadItem.setSavePath(path)       | 该API仅能在will-download 方法的回调中使用。 如果用户没有通过API设置保存路径，Electron将使用默认方式来确定保存路径（通常会提示保存对话框）。 |
| downloadItem.getSavePath()           | 返回 String - 下载项目的保存路径。这将是通过downloadItem.setSavePath(path)设置的路径，或从显示的保存对话框中选择的路径。                    |
| downloadItem.pause()                 | 暂停下载。                                                                                                                                  |
| downloadItem.isPaused()              | 返回Boolean - 下载是否暂停。                                                                                                                |
| downloadItem.resume()                | 恢复已暂停的下载。                                                                                                                          |
| downloadItem.canResume()             | 返回Boolean - 下载是否可以恢复。                                                                                                            |
| downloadItem.cancel()                | 取消下载操作。                                                                                                                              |
| downloadItem.getURL()                | 返回String - 从中​​下载项目的源URL。                                                                                                        |
| downloadItem.getMimeType()           | 返回String - MIME类型的文件。                                                                                                               |
| downloadItem.hasUserGesture()        | 返回Boolean - 下载是否具有用户手势。                                                                                                        |
| downloadItem.getFilename()           | 返回String - 下载项目的文件名。                                                                                                             |
| downloadItem.getTotalBytes()         | 返回Integer - 下载项目的总大小（以字节为单位）。                                                                                            |
| downloadItem.getReceivedBytes()      | 返回Integer - 下载项目的接收字节。                                                                                                          |
| downloadItem.getContentDisposition() | 返回String - 响应头中的Content-Disposition字段。                                                                                            |
| downloadItem.getState()              | 返回 String - 表示当前状态                                                                                                                  |
| downloadItem.getURLChain()           | 返回String [] - 包含任何重定向的项目的完整url链。                                                                                           |
| downloadItem.getLastModifiedTime()   | 返回String - Last-Modified的值。                                                                                                            |
| downloadItem.getETag()               | 返回String - ETag的值。                                                                                                                     |
| downloadItem.getStartTime()          | 返回Double - 自下载开始时的UNIX纪元以来的秒数。                                                                                             |
