# [browserwindowproxy](https://www.electronjs.cn/docs/api/browser-window-proxy)

> 操纵子浏览器窗口

> 使用 window.open 创建一个新窗口时会返回一个 BrowserWindowProxy对象，并提供一个有限功能的子窗口.

## api 列表

| api                                    | more                                              |
| -------------------------------------- | ------------------------------------------------- |
| win.blur()                             | 将焦点从子窗口中移除.                             |
| win.close()                            | 强制关闭子窗口, 而不调用其卸载事件(unload event)  |
| win.eval(code)                         | Eval子窗口中的代码                                |
| win.focus()                            | 聚焦子窗口(即窗口置顶)                            |
| win.print()                            | 调用子窗口上的打印对话框                          |
| win.postMessage(message, targetOrigin) | 调通过指定位置或用*来代替不明位置，向子窗口发送信 |
| win.closed                             | 在子窗口关闭后设置为 true 的 Boolean              |