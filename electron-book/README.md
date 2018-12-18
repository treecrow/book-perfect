# electron

> electron 知识点归纳整理

## 相关文档

| 文档                                                                                 | more                                                                                  |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [Electron gitbook](https://wizardforcel.gitbooks.io/electron-doc/content/index.html) | -                                                                                     |
| [electron 中文网](https://electron.org.cn/)                                          | -                                                                                     |
| [Electron 文档](https://www.electronjs.cn/docs)                                      | -                                                                                     |
| Electron API Demos app                                                               | 交互式展示 Electron 的大多数重要的 API                                                |
| [demo](https://electron.org.cn/demo.html)                                            | -                                                                                     |
| [electron-forge](https://github.com/electron-userland/electron-forge)                | A complete tool for creating, publishing, and installing modern Electron applications |

| key             | api                                          | more                 |
| --------------- | -------------------------------------------- | -------------------- |
| globalShortcut  | globalShortcut.register(shortKey,callBack)   | 注册快捷键           |
| ~               | globalShortcut.unregisterAll()               |
| remote.dialog   | dialog.showMessageBox(options,callback)      |
| ~               | dialog.showOpenDialog(options,callback)      |
| ~               | dialog.showErrorBox()                        |
| Menu            | -                                            |
| ~               | Menu.getApplicationMenu()                    |
| ~               | Menu.buildFromTemplate(template)             |
| ~               | Menu.setApplicationMenu(menu)                |
| ~               | menu.append()                                |
| ~               | menu.popup()                                 |
| MenuItem        | -                                            |
| shell           | shell.openExternal(url)                      |
| ~               | shell.showItemInFolder()                     |
| autoUpdater     | autoUpdater.checkForUpdates()                |
| ~               | autoUpdater.quitAndInstall()                 |
| ipcMain         | -                                            |
| ~               | ipc.on(event,callback)                       | show-context-menu、  |
| ipcRenderer     | -                                            |
| ~               | ipc.send(msg)                                |
| ~               | ipc.on(event)                                | selected-directory、 |
| Tray            | -                                            |
| screen          | screen.getPrimaryDisplay().size              |
| ~               | screen.getPrimaryDisplay().workAreaSize      |
| ~               | screen.getPrimaryDisplay().workArea          |
| clipboard       | clipboard.writeText()                        |
| ~               | clipboard.readText()                         |
| desktopCapturer | desktopCapturer.getSources(options,callback) |