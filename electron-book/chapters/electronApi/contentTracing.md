# [contentTracing](https://electronjs.org/docs/api/content-tracing)

> 从Chromium的内容模块收集跟踪数据，以查找性能瓶颈和缓慢的操作

## api 列表

| api                                                    | more                                                                               |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| contentTracing.getCategories(callback)                 | 获取一个类别组的集合。随着能访问的新的代码路径不一样，获取的类别组对象也会不一样。 |
| contentTracing.startRecording(options, callback)       | 在所有进程上开始记录                                                               |
| contentTracing.stopRecording(resultFilePath, callback) | 停止所有进程记录。                                                                 |
| contentTracing.startMonitoring(options, callback)      | 开始记录所有进程。                                                                 |
| contentTracing.startMonitoring(options, callback)      | 停止对所有进程的监视。                                                             |
| contentTracing.startMonitoring(options, callback)      | 获取当前监控的跟踪数据                                                             |
| contentTracing.startMonitoring(options, callback)      | 获取跟踪缓冲区进程的最大使用率，以百分比表示完整状态。                             |