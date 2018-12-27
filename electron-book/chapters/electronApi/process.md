# [process](https://www.electronjs.cn/docs/api/process)

> 处理对象的扩展

## api 列表

| api                                | more                                                                                            |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| process.crash()                    | 导致当前进程崩溃的主线程。                                                                      |
| process.getCPUUsage()              | 返回 CPUUsage                                                                                   |
| process.getIOCounters()            | 返回 IOCounters                                                                                 |
| process.getHeapStatistics()        | Returns an object with V8 heap statistics.                                                      |
| process.getProcessMemoryInfo()     | 返回一个对象, 它提供有关当前进程的内存使用情况统计信息                                          |
| process.getSystemMemoryInfo()      | 返回一个对象, 它提供有关当前进程的内存使用情况统计信息                                          |
| process.hang()                     | 导致当前进程挂起的主线程                                                                        |
| process.setFdLimit(maxDescriptors) | 将文件描述符的软限制设置为 maxDescriptors 或 OS 硬限制, 其中以当前进程较低的值为准              |
| process.defaultApp                 | Boolean类型， 当作为参数传递给默认应用程序启动应用时，该属性在主进程中为true，否则为undefined。 |
| process.mas                        | Boolean类型，为 Mac App Store 生成, 此属性为 true, 对于其他生成，则为 undefined。               |
| process.noAsar                     | Boolean类型, 用于控制应用程序内的 ASAR 支持。                                                   |
| process.noDeprecation              | Boolean 类型，用于控制弃用警告是否被打印到stderr。                                              |
| process.resourcesPath              | String 类型， 表示资源目录的路径。                                                              |
| process.throwDeprecation           | Boolean类型，用于控制是否将弃用警告当做例外。                                                   |
| process.traceDeprecation           | Boolean类型，用于控制打印到 stderr 的弃用中是否包含其堆栈跟踪。                                 |
| process.traceProcessWarnings       | 一个 Boolean, 用于控制是否将进程的警告打印到包含堆栈跟踪的 stderr中 。                          |
| process.type                       | 一个表示当前进程类型的 String, 可以是 "browser" (即主进程) 或 "renderer"。                      |
| process.versions.chrome            | string，一个表示 Chrome 版本的字符串。                                                          |
| process.versions.electron          | string，一个表示 Electron 版本的字符串。                                                        |
| process.versions.v8                | -                                                                                               |
| process.versions.node              | -                                                                                               |
| process.windowsStore               | Boolean. 如果应用运行于 Windows 商店(appx), 改属性为true, 否则为 undefined.                     |
| process.argv                       | -                                                                                               |
| process.execPath                   | -                                                                                               |
| process.env                        | -                                                                                               |
| process.platform                   | -                                                                                               |

## 事件列表

| event  | more                                                                   |
| ------ | ---------------------------------------------------------------------- |
| loaded | 当Electron加载了它的内部初始化脚本并且是正要开始加载网页或主脚本时触发 |
