# powerMonitor

> 监视电源状态的改变

## api 列表

| api                                                        | more                                  |
| ---------------------------------------------------------- | ------------------------------------- |
| powerMonitor.querySystemIdleState(idleThreshold, callback) | Calculate the system idle state.      |
| powerMonitor.querySystemIdleTime(callback)                 | Calculate system idle time in seconds |

## 事件列表

| event         | more                                                                                                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| suspend       | 在系统挂起时触发。                                                                                                                                                                       |
| resume        | 在系统恢复时触发。                                                                                                                                                                       |
| on-ac         | 当系统变为交流电源时触发。                                                                                                                                                               |
| on-battery    | 当系统更改为电池电量时触发。                                                                                                                                                             |
| shutdown      | 当系统即将重启或关机时出发 如果事件调用e.preventDefault(), Electron 将会尝试延迟系统关机，以便 app 完全退出。 如果e.preventDefault()被调用，在调用类似 app.quit() 后，app 会很快地退出。 |
| lock-screen   | Emitted when the system is about to lock the screen.                                                                                                                                     |
| unlock-screen | Emitted as soon as the systems screen is unlocked.                                                                                                                                       |