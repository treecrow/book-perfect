# electron

| key             | api                                          |
| --------------- | -------------------------------------------- |
| remote.dialog   | dialog.showMessageBox(options,callback)      |
| ~               | dialog.showOpenDialog(options,callback)      |
| ~               | dialog.showErrorBox()                        |
| BrowserWindow   | -                                            |
| ~               | BrowserWindow.getAllWindows()                |
| ~               | BrowserWindow.fromWebContents()              |
| ~               | BrowserWindow.getFocusedWindow()             |
| ~               | BrowserWindow.fromId()                       |
| Menu            | -                                            |
| ~               | Menu.getApplicationMenu()                    |
| ~               | Menu.buildFromTemplate(template)             |
| ~               | Menu.setApplicationMenu(menu)                |
| ~               | menu.append()                                |
| ~               | menu.popup()                                 |
| MenuItem        | -                                            |
| app             | -                                            |
| ~               | app.emit('activate')                         |
| ~               | app.getName()                                |
| ~               | app.getAppPath()                             |
| ~               | app.getVersion()                             |
| ~               | app.on(event,callback)                       | ready、browser-window-created、window-all-closed、will-quit |
| ~               | app.setAsDefaultProtocolClient()             |
| shell           | shell.openExternal(url)                      |
| ~               | shell.showItemInFolder()                     |
| autoUpdater     | autoUpdater.checkForUpdates()                |
| ~               | autoUpdater.quitAndInstall()                 |
| ipcMain         | -                                            |
| ~               | ipc.on(event,callback)                       | show-context-menu、                                         |
| ipcRenderer     | -                                            |
| ~               | ipc.send(msg)                                |
| ~               | ipc.on(event)                                | selected-directory、                                        |
| globalShortcut  | globalShortcut.register(shortKey,callBack)   |
| ~               | globalShortcut.unregisterAll()               |
| Tray            | -                                            |
| screen          | screen.getPrimaryDisplay().size              |
| ~               | screen.getPrimaryDisplay().workAreaSize      |
| ~               | screen.getPrimaryDisplay().workArea          |
| clipboard       | clipboard.writeText()                        |
| ~               | clipboard.readText()                         |
| desktopCapturer | desktopCapturer.getSources(options,callback) |

## win

```js
const win  = new electron.remote.BrowserWindow();
```

| api                                          | more                                                      |
| -------------------------------------------- | --------------------------------------------------------- |
| win.webContents.on(evenr,callback)           | crashed、context-menu、did-finish-load                    |
| win.webContents.printToPDF(options,callback) | -                                                         |
| win.on(event,callback)                       | close、resize、move、focus、blur、unresponsive,responsive |
| win.loadURL()                                | -                                                         |
| win.show()                                   | -                                                         |
| win.reload()                                 | -                                                         |
| win.close()                                  | -                                                         |
| win.id                                       | 当前窗口序号，主窗口为1                                   |
| win.setFullScreen()                          | -                                                         |
| win.isFullScreen()                           | -                                                         |
| win.toggleDevTools()                         | -                                                         |