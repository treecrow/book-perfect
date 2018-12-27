# [globalShortcut](https://www.electronjs.cn/docs/api/global-shortcut)

> 当应用程序没有键盘焦点时监听全局键盘事件

## api 列表

| api                                            | more                                                      |
| ---------------------------------------------- | --------------------------------------------------------- |
| globalShortcut.register(accelerator, callback) | 注册 accelerator 的全局快捷键                             |
| globalShortcut.isRegistered(accelerator)       | Returns Boolean - 表示 accelerator 全局快捷键是否注册成功 |
| globalShortcut.unregister(accelerator)         | 注销 accelerator 的全局快捷键。                           |
| globalShortcut.unregisterAll()                 | 注销所有的全局快捷键（清空该应用程序的全局快捷键）        |