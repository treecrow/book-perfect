# [ipcRenderer](https://www.electronjs.cn/docs/api/ipc-renderer)

> 从渲染器进程到主进程的异步通信

## api 列表

| api                                                                 | more                                                                                                           |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ipcRenderer.on(channel, listener)                                   | 监听 channel, 当新消息到达，将通过 listener(event, args...) 调用 listener。                                    |
| ipcRenderer.once(channel, listener)                                 | 为事件添加一个一次性用的listener 函数.这个 listener 只有在下次的消息到达 channel 时被请求调用，之后就被删除了. |
| ipcRenderer.removeListener(channel, listener)                       | 为特定的 channel 从监听队列中删除特定的 listener 监听者.                                                       |
| ipcRenderer.removeAllListeners(channel)                             | 移除所有的监听器，当指定 channel 时只移除与其相关的所有监听器。                                                |
| ipcRenderer.send(channel[, arg1][, arg2][, ...])                    | 通过 channel 发送异步消息到主进程，可以携带任意参数                                                            |
| ipcRenderer.sendSync(channel[, arg1][, arg2][, ...])                | 通过 channel 发送同步消息到主进程，可以携带任意参数                                                            |
| ipcRenderer.sendTo(webContentsId, channel, [, arg1][, arg2][, ...]) | Sends a message to a window with webContentsId via channel                                                     |
| ipcRenderer.sendToHost(channel[, arg1][, arg2][, ...])              | 就像 ipcRenderer.send，不同的是消息会被发送到 host 页面上的 <webview> 元素，而不是主进程。                     |