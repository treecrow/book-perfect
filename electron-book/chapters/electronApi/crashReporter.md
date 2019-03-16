# [crashReporter](https://electronjs.org/docs/api/crash-reporter)

> 将崩溃日志提交给远程服务器

## api 列表

| api                                             | more                                                               |
| ----------------------------------------------- | ------------------------------------------------------------------ |
| crashReporter.start(options)                    | 你需要调用任何其他的crashReporter API，您必须调用此方法            |
| crashReporter.getLastCrashReport()              | 返回上次崩溃报告的日期和ID                                         |
| crashReporter.getUploadedReports()              | 返回所有上传的崩溃报告                                             |
| crashReporter.getUploadToServer()               | 返回 Boolean - 是否已将报告提交到服务器                            |
| crashReporter.setUploadToServer(uploadToServer) | 通常, 是否提交是由用户对系统进行偏好设置而决定的                   |
| crashReporter.addExtraParameter(key, value)     | 设置一个在发送崩溃报告时将额外包含的参数                           |
| crashReporter.removeExtraParameter(key)         | 从当前设定的参数中移除一个额外的参数, 以便它不会与崩溃报告一起发送 |
| crashReporter.getParameters()                   | 查看传递给崩溃报告的所有当前参数                                   |