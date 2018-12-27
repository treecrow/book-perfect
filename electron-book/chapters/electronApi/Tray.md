# [Tray](https://www.electronjs.cn/docs/api/tray)

> 添加图标和上下文菜单到系统通知区

## api 列表

| api                                     | more                                                                                     |
| --------------------------------------- | ---------------------------------------------------------------------------------------- |
| new Tray(image)                         | 创建与image关联的新任务栏图标                                                            |
| tray.destroy()                          | 立即销毁该任务栏图标                                                                     |
| tray.setImage(image)                    | 设置image作为托盘中显示的图标                                                            |
| tray.setPressedImage(image)             | 在 macOS 中，设置image作为托盘图标被按下时显示的图标                                     |
| tray.setToolTip(toolTip)                | 设置鼠标指针在托盘图标上悬停时显示的文本                                                 |
| tray.setTitle(title)                    | 设置显示在状态栏中托盘图标旁边的标题 (支持ANSI色彩)                                      |
| tray.setHighlightMode(mode)             | 设置托盘图标背景 (蓝色) 高亮的时机                                                       |
| tray.setIgnoreDoubleClickEvents(ignore) | Sets the option to ignore double click events                                            |
| tray.getIgnoreDoubleClickEvents()       | Returns Boolean - Whether double click events will be ignored.                           |
| tray.displayBalloon(options)            | 显示一个托盘气球通知.                                                                    |
| tray.popUpContextMenu([menu, position]) | 弹出托盘图标的上下文菜单。如果传入了 menu 参数，将会弹出 menu 而不是托盘图标的上下文菜单 |
| tray.setContextMenu(menu)               | 设置这个图标的内容菜单                                                                   |
| tray.getBounds()                        | 以Object类型返回托盘图标的bounds                                                         |
| tray.isDestroyed()                      | 返回 Boolean -判断托盘图标是否被销毁                                                     |

## 事件列表

| event          | more                                                         |
| -------------- | ------------------------------------------------------------ |
| click          | 当该图标被点击时触发。                                       |
| right-click    | 当该图标被右击时触发                                         |
| double-click   | 当该图标被双击时触发                                         |
| balloon-show   | 当系统托盘图标气泡显示时，触发该事件                         |
| balloon-click  | 当系统托盘气泡被点击时，触发该事件                           |
| balloon-closed | 当系统托盘气泡因为超时被关闭或者用户手动关闭时，触发该事件   |
| drop           | 当有任何拖动项拖到该任务栏图标上时，触发该事件               |
| drop-files     | 当有任何文件被拖到该任务栏图标上时，触发该事件               |
| drop-text      | 当有任何文字被拖到该任务栏图标上时，触发该事件               |
| drag-enter     | 当有任何拖动操作进入（拖动未结束）该任务栏图标时，触发该事件 |
| drag-leave     | 当有任何拖动操作离开该任务栏图标时，触发该事件               |
| drag-end       | 当有任何拖动操作在托盘或其他地方结束时，触发该事件           |
| mouse-enter    | 当鼠标进入该任务栏图标时，触发该事件                         |
| mouse-leave    | 当鼠标离开该任务栏图标时，触发该事件                         |
| mouse-move     | 当鼠标在该任务栏图标上移动时，触发该事件                     |