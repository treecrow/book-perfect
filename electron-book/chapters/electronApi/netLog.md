# [netLog](https://www.electronjs.cn/docs/api/net-log)

> Logging network events.

## api 列表

| api                            | more                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| netLog.startLogging(path)      | Starts recording network events to path.                                                          |
| netLog.stopLogging([callback]) | Stops recording network events. If not called, net logging will automatically end when app quits. |
| netLog.currentlyLogging        | A Boolean property that indicates whether network logs are recorded.                              |
| netLog.currentlyLoggingPath    | A String property that returns the path to the current log file.                                  |