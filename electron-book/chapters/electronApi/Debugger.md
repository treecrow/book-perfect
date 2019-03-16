# [Debugger](https://electronjs.org/docs/api/debugger)

> 用于 Chrome 远程调试协议的备用传输。

```js
const debugger = win.webContents.debugger;
```

## api 列表

| api                                                     | more                                                      |
| ------------------------------------------------------- | --------------------------------------------------------- |
| debugger.attach([protocolVersion])                      | 添加调试器到 webContents 。                               |
| debugger.isAttached()                                   | Returns Boolean - 表示调试器是否成功添加到 webContents 。 |
| debugger.detach()                                       | 从 webContents 里分离调试器.                              |
| debugger.sendCommand(method[, commandParams, callback]) | 向调试目标发送给定的命令。                                |

## 事件列表

| event   | more                 |
| ------- | -------------------- |
| detach  | 在调试会话终止时发出 |
| message | 当调试目标问题时发送 |