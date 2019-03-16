# [shell](https://electronjs.org/docs/api/shell)

> 使用默认应用程序管理文件和 url。

## api 列表

| api                                                         | more                                           |
| ----------------------------------------------------------- | ---------------------------------------------- |
| shell.showItemInFolder(fullPath)                            | 返回 Boolean - 文件是否成功显示                |
| shell.openItem(fullPath)                                    | 以桌面的默认方式打开给定的文件                 |
| shell.openExternal(url[, options, callback])                | 以桌面的默认方式打开给定的外部协议URL          |
| shell.moveItemToTrash(fullPath)                             | 将给定的文件移动到垃圾箱，并返回操作的布尔状态 |
| shell.beep()                                                | 播放哔哔的声音.                                |
| shell.writeShortcutLink(shortcutPath[, operation], options) | 在shortcutPath位置创建或更新一个快捷连接       |
| shell.readShortcutLink(shortcutPath)                        | 解析shortcutPath中的快捷链接                   |