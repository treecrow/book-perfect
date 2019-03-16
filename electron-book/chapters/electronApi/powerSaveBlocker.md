# [powerSaveBlocker](https://electronjs.org/docs/api/power-save-blocker)

> 阻止系统进入低功耗 (休眠) 模式

## api 列表

| api                            | more                                            |
| ------------------------------ | ----------------------------------------------- |
| powerSaveBlocker.start(type)   | Returns Integer-指派给此电源拦截器的 id.        |
| powerSaveBlocker.stop(id)      | 停止指定的省电拦截器                            |
| powerSaveBlocker.isStarted(id) | Returns Boolean指定的powerSaveBlocker是否已启动 |