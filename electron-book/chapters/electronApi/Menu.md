# [Menu](https://electronjs.org/docs/api/menu)

> 创建原生应用菜单和上下文菜单。

## api 列表

| api                                     | more                                                                          |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| new Menu()                              | 创建新菜单。                                                                  |
| Menu.setApplicationMenu(menu)           | 当在MacOS、Windows、Linux中使用menu设置程序菜单时，会设置在各个程序窗体的顶层 |
| Menu.getApplicationMenu()               | 返回 Menu/null - 如果有设置, 则返回应用程序菜单， 如果没设置，则返回 null     |
| Menu.sendActionToFirstResponder(action) | 将 action 发送到应用程序的第一个响应方                                        |
| Menu.buildFromTemplate(template)        | -                                                                             |
| menu.popup(options)                     | 将此菜单作为 browserWindow 中的上下文菜单弹出。                               |
| menu.closePopup([browserWindow])        | 关闭  browserWindow  中的上下文菜单                                           |
| menu.append(menuItem)                   | 将  menuItem  追加到菜单。                                                    |
| menu.getMenuItemById(id)                | 返回具有指定id项的MenuItem                                                    |
| menu.insert(pos, menuItem)              | 将  menuItem  插入菜单的  pos  位置。                                         |
| menu.items                              | 包含菜单项的  MenuItem []  数组                                               |

## 事件列表

| event           | more                                                             |
| --------------- | ---------------------------------------------------------------- |
| menu-will-show  | 调用menu.popup()事件时触发该事件                                 |
| menu-will-close | 手动关闭弹出，或使用 menu.closePopup()方法关闭弹出时，触发该事件 |