# [autoUpdater](https://www.electronjs.cn/docs/api/auto-updater)

> 使应用程序能够自动更新

## api 列表

| api                           | more                                     |
| ----------------------------- | ---------------------------------------- |
| autoupdater.setfeedurl(选项)  | 设置检查更新的 url，并且初始化自动更新   |
| autoupdater.getfeedurl()      | 返回 String - 获取当前更新的 Feed 链接   |
| autoupdater.checkforupdates() | 向服务端查询现在是否有可用的更新         |
| autoupdater.quitandinstall()  | 在下载完成后，重启当前的应用并且安装更新 |

## 事件列表

| event                  | more |
| ---------------------- | ---- |
| error                  | -    |
| checking-for-update    | -    |
| update-available       | -    |
| update-not-available   | -    |
| update-downloaded      | -    |
| before-quit-for-update | -    |