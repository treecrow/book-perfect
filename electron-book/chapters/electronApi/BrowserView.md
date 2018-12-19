# BrowserView(类)

> 创建和控制视图

> BrowserView 被用来让 BrowserWindow 嵌入更多的 web 内容。 它就像一个子窗口，除了它的位置是相对于父窗口。 这意味着可以替代webview标签.

## api 列表

| api                            | more                                                             |
| ------------------------------ | ---------------------------------------------------------------- |
| new BrowserView([可选])        | -                                                                |
| BrowserView.getAllViews()      | 返回 BrowserWindow[] - 所有打开的窗口的数组                      |
| BrowserView.fromId(id)         | 返回 BrowserView - 带有id的视图.                                 |
| view.webContents               | 视图的WebContents 对象                                           |
| view.id                        | 视图的唯一ID                                                     |
| view.destroy()                 | 强制关闭视图, 不会为网页发出 unload 和 beforeunload 事件         |
| view.isDestroyed()             | 返回 Boolean -判断窗口是否被销毁                                 |
| view.setAutoResize(options)    | -                                                                |
| view.setBounds(bounds)         | 调整视图的大小，并将它移动到窗口边界                             |
| view.setBackgroundColor(color) | color String - 颜色值格式为 #aarrggbb 或 #argb, 透明度为可选参数 |