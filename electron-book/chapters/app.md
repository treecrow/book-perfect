# [app](https://www.electronjs.cn/docs/api/app)

> 控制你的应用程序的事件生命周期

## api 列表

| api                                                     | more                                                                                                                                   |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| app.quit()                                              | 尝试关闭所有窗口 将首先发出 before-quit 事件                                                                                           |
| app.exit([exitcode])                                    | 立即退出程序并返回 exitCode                                                                                                            |
| app.relaunch([options])                                 | 从当前实例退出，重启应用                                                                                                               |
| app.isready()                                           | 返回 Boolean 类型 - 如果 Electron 已经完成初始化，则返回 true, 其他情况为 false                                                        |
| app.whenready()                                         | Returns Promise - fulfilled when Electron is initialized                                                                               |
| app.focus()                                             | 在 Linux 系统中, 使第一个可见窗口获取焦点.在 macOS 上, 让该应用成为活动应用程序。在 Windows 上, 使应用的第一个窗口获取焦点             |
| app.hide()                                              | 隐藏所有的应用窗口，不是最小化                                                                                                         |
| app.show()                                              | 显示所有被隐藏的应用窗口                                                                                                               |
| app.getapppath()                                        | 返回 String 类型 - 当前应用程序所在目录                                                                                                |
| app.getpath(name)                                       | 返回 String -与 name 参数相关的特殊文件夹或文件路径                                                                                    |
| app.getfileicon(path[,options],callback)                | 读取文件的关联图标                                                                                                                     |
| app.setpath([name,path])                                | 重写 name 的路径为 path，一个特定的文件夹或者文件                                                                                      |
| app.getversion()                                        | 返回 String-加载的应用程序的版本                                                                                                       |
| app.getName()                                           | 返回 String-当前应用程序的名称, 它是应用程序的 package. json 文件中的名称                                                              |
| app.setname(name)                                       | 设置当前应用程序的名字                                                                                                                 |
| app.getlocale()                                         | 返回 string——当前应用程序的语言环境                                                                                                  |
| app.addrecentdocument(path)                             | 将此 path 添加到最近打开的文件列表中                                                                                                   |
| app.clearrecentdocuments()                              | 清空最近打开的文档列表                                                                                                                 |
| app.setasdefaultprotocolclient(protocol[,path,args])    | 将当前可执行文件设置为协议(也称为URI方案) 的默认处理程序                                                                               |
| app.removeasdefaultprotocolclient(protocol[,path,args]) | 此方法检查当前程序是否为协议（也称为URI scheme）的默认处理程序                                                                         |
| app.isdefaultprotocolclient(protocol[,path,args])       | 此方法检查当前可执行文件是否是协议(也称为URI方案) 的默认处理程序                                                                       |
| app.setusertasks(tasks)                                 | 将 tasks 添加到 Windows 中 JumpList 功能的 Tasks 分类中                                                                                |
| app.getjumplistsettings()                               | -                                                                                                                                      |
| app.setjumplistcategories()                             | 设置或删除应用程序的自定义跳转列表，并返回以下字符串之一                                                                               |
| app.requestsingleinstancelock()                         | 使应用程序成为单个实例应用程序, 而不是允许应用程序的多个实例运行, 这将确保只有一个应用程序的实例正在运行, 其余的实例全部会被终止并退出 |
| app.hassingleinstancelock()                             | This method returns whether or not this instance of your app is currently holding the single instance lock                             |
| app.releasesingleinstancelock()                         | Releases all locks that were created by requestSingleInstanceLock                                                                      |
| app.setuseractivity(type,userinfo[,webpageurl])         | 创建一个 NSUserActivity 并将其设置为当前活动                                                                                           |
| app.getcurrentactivitytype()                            | 返回 String - 正在运行的 activity 的类型                                                                                               |
| app.invalidatecurrentactivity()                         | 使当前的Handoff用户活动无效                                                                                                            |
| app.updatecurrentactivity(type[,userinfo])              | 当其类型与 type 匹配时更新当前活动, 将项目从 用户信息 合并到其当前 用户信息 字典中                                                     |
| app.setappusermodelid(id)                               | 改变当前应用的 Application User Model ID 为 id.                                                                                        |
| app.importcertificate(options,callback)                 | 将 pkcs12 格式的证书导入到平台证书库                                                                                                   |
| app.disablehardwareacceleration()                       | 禁用当前应用程序的硬件加速                                                                                                             |
| app.getappmetrics()                                     | 默认情况下, 如果 GPU 进程频繁崩溃, Chromium 会禁用 3D api (例如 WebGL) 直到每个域重新启动。此函数禁用该行为。                          |
| app.getgpufeaturestatus()                               | 返回 ProcessMetric[]: 包含所有与应用相关的进程的内存和CPU的使用统计的 ProcessMetric 对象的数组                                         |
| app.setbadgecount(count)                                | 设置当前应用程序的计数器标记. 将计数设置为 0 将隐藏该标记                                                                              |
| app.getbadgecount()                                     | Returns Integer - 获取计数器提醒(badge) 中显示的当前值                                                                                 |
| app.isunityrunning()                                    | Returns Boolean - 当前桌面环境是否为 Unity 启动器                                                                                      |
| app.getloginitemsettings([options])                     | -                                                                                                                                      |
| app.setloginitemsettings([settings])                    | 设置应用程序的登录项设置                                                                                                               |
| app.isaccessibilitysupportenabled()                     | Returns Boolean - 如果开启了Chrome的辅助功能, 则返回 true，其他情况返false                                                             |
| app.setAccessibilitySupportEnabled(enabled)             | 手动启用 Chrome 的辅助功能的支持, 允许在应用程序中设置是否开启辅助功能                                                                 |
| app.setaboutpaneloptions(options)                       | 设置 "关于" 面板选项                                                                                                                   |
| app.startaccessingsecurityscopedresource(bookmarkdata)  | 返回 Function - 该函数 必须 在你完成访问安全作用域文件后调用一次                                                                       |
| app.commandlineappendswitch(switch[,value])             | 通过可选的参数 value 给 Chromium 中添加一个命令行开关                                                                                  |
| app.commandlineappendargument(value)                    | 给 Chromium 中直接添加一个命令行参数，该参数的引号和格式必须正确                                                                       |
| app.enablemixedsandbox()                                | 在应用程序上启用混合沙盒模式                                                                                                           |
| app.isinapplicationsfolder()                            | 返回 Boolean- 应用程序当前是否在系统应用程序文件夹运行                                                                                 |
| app.movetoapplicationsfolder()                          | 返回 Boolean-移动是否成功                                                                                                              |
| app.dock.bounce([type])                                 | 当传入的是 critical 时, dock 中的应用将会开始弹跳, 直到这个应用被激活或者这个请求被取消                                                |
| app.dock.cancelbounce([id])                             | 取消这个 id 对应的请求                                                                                                                 |
| app.dock.downloadfinished(filepath)                     | 如果 filePath 位于 Downloads 文件夹中，则弹出下载队列                                                                                  |
| app.dock.setbadge(text)                                 | 设置应用在 dock 中显示的字符串                                                                                                         |
| app.dock.getbadge()                                     | 返回 String - 应用在 dock 中显示的字符串                                                                                               |
| app.dock.hide()                                         | 隐藏 dock 中的图标                                                                                                                     |
| app.dock.show()                                         | 显示 dock 图标                                                                                                                         |
| app.dock.isvisible()                                    | 返回 Boolean-表示 dock 图标当前是否可见                                                                                                |
| app.dock.setmenu(menu)                                  | 设置应用程序的Dock 菜单                                                                                                                |
| app.dock.seticon(image)                                 | 设置image作为应用在 dock 中显示的图标                                                                                                  |
| app.isPackaged                                          | 返回一个Boolean值，如果应用已经打包，返回true ，否则返回false                                                                          |

## 事件列表

| event                         | more                                            |
| ----------------------------- | ----------------------------------------------- |
| will-finish-launching         | 当应用程序完成基础的启动的时候被触发            |
| ready                         | 当 Electron 完成初始化时被触发                  |
| window-all-closed             | 当所有的窗口都被关闭时触发                      |
| before-quit                   | 在应用程序开始关闭窗口之前触发                  |
| will-quit                     | 当所有窗口都已关闭并且应用程序将退出时发出      |
| quit                          | 在应用程序退出时发出                            |
| open-file                     | 当用户想要在应用中打开一个文件时发出            |
| open-url                      | 当用户想要在应用中打开一个 URL 时发出           |
| activate                      | 当应用被激活时发出                              |
| continue-activity             | 当来自不同设备的活动通过 Handoff 想要恢复时触发 |
| will-continue-activity        | 当来自不同设备的活动通过 Handoff 恢复之前触发   |
| continue-activity-error       | 当来自不同设备的活动通过 Handoff 恢复失败时触发 |
| activity-was-continued        | 当来自不同设备的活动通过 Handoff 成功恢复后触发 |
| update-activity-state         | 当 Handoff 即将通过另一个设备恢复时触发         |
| new-window-for-tab            | 当用户单击 macOS 新选项卡按钮时发出             |
| browser-window-blur           | 在 browserWindow 失去焦点时发出                 |
| browser-window-focus          | 在 browserWindow 获得焦点时发出                 |
| browser-window-created        | 在创建新的 browserWindow 时发出                 |
| web-contents-created          | 在创建新的 webContents 时发出                   |
| certificate-error             | 当对 url 的 certificate 证书验证失败的时候发出  |
| select-client-certificate     | 当一个客户证书被请求的时候发出                  |
| login                         | 当 webContents 要进行基本身份验证时触发         |
| gpu-process-crashed           | 当 gpu 进程崩溃或被杀时触发                     |
| accessibility-support-changed | 当 Chrome 的辅助功能状态改变时触发              |
| session-created               | Emitted when Electron has created a new session |
| second-instance               | when a second instance has been executed        |