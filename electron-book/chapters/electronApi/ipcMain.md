# ipcMain

> 从主进程到渲染进程的异步通信

## api 列表

| api                                       | more                                                                                 |
| ----------------------------------------- | ------------------------------------------------------------------------------------ |
| ipcMain.on(channel, listener)             | 监听 channel，当接收到新的消息时 listener 会以 listener(event, args...) 的形式被调用 |
| ipcMain.once(channel, listener)           | 添加一次性的 listener                                                                |
| ipcMain.removeListener(channel, listener) | 从监听器数组中移除监听 channel 的指定 listener                                       |
| ipcMain.removeAllListeners([channel])     | 删除所有监听者，或特指的 channel 的所有监听者.                                       |

## 事件对象

| api               | more                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| event.returnValue | 将此设置为在一个同步消息中返回的值.                                                                                 |
| event.sender      | Returns the webContents that sent the message, you can call event.sender.send to reply to the asynchronous message, |