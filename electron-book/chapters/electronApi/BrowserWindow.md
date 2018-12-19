# BrowserWindow(类)

> 创建和控制浏览器窗口

```js
const win = new electron.BrowserWindow(); // 主进程
const win  = new electron.remote.BrowserWindow(); // 渲染进程
```

## api 列表

| api                                              | more                                                                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| BrowserWindow.getallwindows()                    | 返回 BrowserWindow[] - 所有打开的窗口的数组                                                                        |
| BrowserWindow.getfocusedwindow()                 | Returns BrowserWindow / null - The window that is focused in this application, otherwise returns null              |
| BrowserWindow.fromwebcontents(webcontents)       | 返回 BrowserWindow - 拥有给定 webContents 的窗口                                                                   |
| BrowserWindow.frombrowserview(browserview)       | 返回 BrowserWindow / null-拥有给定 browserView 的窗口                                                              |
| BrowserWindow.fromid(id)                         | 返回 BrowserWindow -拥有给定 id 的窗口                                                                             |
| BrowserWindow.addextension(path)                 | 添加位于 path的扩展，并且返回扩展名                                                                                |
| BrowserWindow.removeextension(name)              | 根据名字删除一个 Chrome 的扩展                                                                                     |
| BrowserWindow.getextensions()                    | 返回 Object - 键是扩展名, 每个值都是一个包含 name 和 version 属性的对象.                                           |
| BrowserWindow.adddevtoolsextension(path)         | 添加位于 path的 DevTools 扩展，并且返回扩展名                                                                      |
| BrowserWindow.removedevtoolsextension(name)      | 根据名字删除一个 DevTools 的扩展。                                                                                 |
| BrowserWindow.getdevtoolsextensions()            | 返回 Object - 键是扩展名, 每个值都是一个包含 name 和 version 属性的对象.                                           |
| win.webcontents                                  | 窗口拥有的 WebContents 对象. 所有与网页相关的事件和操作都将通过它完成.                                             |
| win.id                                           | Integer 窗口的唯一ID                                                                                               |
| win.destroy()                                    | 强制关闭窗口, 除了closed之外，close，unload 和 beforeunload 都不会被触发                                           |
| win.close()                                      | 尝试关闭窗口                                                                                                       |
| win.focus()                                      | 聚焦于窗口                                                                                                         |
| win.blur()                                       | 取消窗口的聚焦                                                                                                     |
| win.isfocused()                                  | 返回 Boolean - 判断窗口是否聚焦                                                                                    |
| win.isdestroyed()                                | 返回 Boolean -判断窗口是否被销毁                                                                                   |
| win.show()                                       | 显示并聚焦于窗口                                                                                                   |
| win.showinactive()                               | 显示但不聚焦于窗口                                                                                                 |
| win.hide()                                       | 隐藏窗口                                                                                                           |
| win.isvisible()                                  | 返回 Boolean - 判断窗口是否可见                                                                                    |
| win.ismodal()                                    | 返回 Boolean - 判断是否为模态窗口                                                                                  |
| win.maximize()                                   | 最大化窗口。如果窗口尚未显示, 这也将会显示 (但不会聚焦)                                                            |
| win.unmaximize()                                 | 取消窗口最大化                                                                                                     |
| win.ismaximized()                                | 返回 Boolean - 判断窗口是否最大化                                                                                  |
| win.minimize()                                   | 窗口最小化                                                                                                         |
| win.restore()                                    | 将窗口从最小化状态恢复到以前的状态                                                                                 |
| win.isminimized()                                | 返回 Boolean -判断窗口是否最小化                                                                                   |
| win.setfullscreen(flag)                          | 设置窗口是否应处于全屏模式                                                                                         |
| win.isfullscreen()                               | 返回 Boolean - 窗口当前是否已全屏                                                                                  |
| win.setsimplefullscreen(flag)                    | 进入或离开简单的全屏模式                                                                                           |
| win.issimplefullscreen()                         | 返回 Boolean - 窗口是否为简单全屏模式                                                                              |
| win.setaspectratio(aspectratio[,extrasize])      | 这将使窗口保持长宽比                                                                                               |
| win.previewfile(path[,displayname])              | 使用 Quick Look来预览路径中的文件                                                                                  |
| win.closefilepreview()                           | 关闭当前打开的 Quick Look 面板.                                                                                    |
| win.setbounds(bounds[,animate])                  | 重置窗口，并且移动窗口到指定的位置                                                                                 |
| win.getbounds                                    | 返回 Rectangle                                                                                                     |
| win.setcontentbounds(bounds[,animate])           | 调整窗口的工作区 (如网页) 的大小并将其移动到所提供的边界                                                           |
| win.getcontentbounds()                           | 返回 Rectangle                                                                                                     |
| win.setenabled(enable)                           | 禁用或者启用窗口。                                                                                                 |
| win.setsize(width,height[,animate])              | Resizes the window to width and height                                                                             |
| win.getsize()                                    | 返回 Integer []-包含窗口的宽度和高度                                                                               |
| win.setcontentsize(width,height[,animate])       | 将窗口的工作区 (如网页) 的大小调整为 width 和 height                                                               |
| win.getcontentsize()                             | 返回 Integer []-包含窗口的宽度和高度                                                                               |
| win.setminimumsize(width,height)                 | 设置窗口最小化的 width 和height                                                                                    |
| win.getminimumsize()                             | 返回 Integer []-包含窗口最小化的宽度和高度                                                                         |
| win.setmaximumsize(width,height)                 | 设置窗口最大化的 width 和 height                                                                                   |
| win.getmaximumsize()                             | 返回 Integer []-包含窗口最大化的宽度和高度                                                                         |
| win.setresizable(resizable)                      | 设置用户是否可以手动调整窗口大小                                                                                   |
| win.isresizable()                                | 返回 Boolean - 设置窗口是否可以被用户改变大小                                                                      |
| win.setmovable(movable)                          | 设置窗口是否可由用户移动。在 Linux 上无效                                                                          |
| win.ismovable()                                  | 返回 Boolean - 窗口是否可以被用户拖动                                                                              |
| win.setminimizable(minimizable)                  | 设置窗口是否可以最小化. 在 Linux 上无效                                                                            |
| win.isminimizable()                              | 返回 Boolean -窗口是否可以最小化                                                                                   |
| win.setmaximizable(maximizable)                  | 设置窗口是否可以最大化. 在 Linux 上无效                                                                            |
| win.ismaximizable()                              | 返回 Boolean - 窗口是否可以最大化                                                                                  |
| win.setfullscreenable(fullscreenable)            | 设置点击最大化按钮是否可以全屏或最大化窗口.                                                                        |
| win.isfullscreenable()                           | 返回 Boolean - 是否为全屏状态或窗口最大化                                                                          |
| win.setclosable(closable)                        | 设置窗口是否可以人为关闭。在 Linux 上无效                                                                          |
| win.isclosable()                                 | 返回 Boolean - 窗口是否被用户关闭了                                                                                |
| win.setalwaysontop(flag[,level][,relativelevel]) | 设置窗口是否应始终显示在其他窗口的顶部                                                                             |
| win.isalwaysontop()                              | 返回 Boolean - 当前窗口是否始终在其它窗口之前                                                                      |
| win.movetop()                                    | Moves window to top(z-order) regardless of focus                                                                   |
| win.center()                                     | 将窗口移动到屏幕中央                                                                                               |
| win.setposition(x,y,[,animate])                  | 将窗口移动到 x 和 y                                                                                                |
| win.getposition                                  | 返回 Integer[] - 返回一个包含当前窗口位置的数组                                                                    |
| win.settitle(title)                              | 将原生窗口的标题更改为 title                                                                                       |
| win.gettitle()                                   | 返回 String-原生窗口的标题                                                                                         |
| win.setsheetoffset(offsety[,offsetx])            | 更改macOS上的工作表的附件点                                                                                        |
| win.flashframe(flag)                             | 启动或停止闪烁窗口, 以吸引用户的注意                                                                               |
| win.setskiptaskbar(skip)                         | 使窗口不显示在任务栏中                                                                                             |
| win.setkiosk(flag)                               | 进入或离开 kiosk 模式                                                                                              |
| win.iskiosk()                                    | 返回 Boolean - 判断窗口是否处于kiosk模式                                                                           |
| win.getnativewindowhandle()                      | 返回 Buffer - 窗口的平台特定句柄                                                                                   |
| win.hookwindowmessage(message,callback)          | 挂钩窗口的消息。在 WndProc 中接收消息时调用callback                                                                |
| win.iswindowmessagehooked(message)               | 返回 Boolean - true 或false ，具体取决于是否钩挂了消息                                                             |
| win.unhookwindowmessage(message)                 | 取消窗口信息的钩子                                                                                                 |
| win.unhookallwindow(messages)                    | 取消所有窗口信息的钩子。                                                                                           |
| win.setrepresentedfilename(filename)             | 设置窗口所代表的文件的路径名，并且将这个文件的图标放在窗口标题栏上                                                 |
| win.getrepresentedfilename()                     | 返回 String - 获取窗口当前文件路径                                                                                 |
| win.setdocumentedited(edited)                    | 明确指出窗口文档是否可以编辑, 如果设置为true则将标题栏的图标变成灰色                                               |
| win.isdocumentedited()                           | 返回 Boolean - 判断当前窗口文档是否可编辑                                                                          |
| win.focusonwebview()                             | -                                                                                                                  |
| win.blurwebview()                                | -                                                                                                                  |
| win.capturepage(rect[,callback])                 | 和 webContents.capturePage([rect, ]callback) 相同                                                                  |
| win.loadurl(url[,options])                       | 与 webContents.loadURL(url[, options]) 相同.                                                                       |
| win.loadfile(filepath)                           | 类似于webContents.loadFile，filePath是一个HTML页相对的应用根目录的相对路径                                         |
| win.reload()                                     | 与 webContents.reload 相同                                                                                         |
| win.setmenu(menu)                                | 将 menu 设置为窗口的菜单栏, 如设置为 null 时将移除菜单栏                                                           |
| win.setprogressbar(progress[,options])           | 设置进度栏中的进度值。有效范围是 [0, 1.0]                                                                          |
| win.setoverlayicon(overlay[,description])        | 在当前任务栏图标上设置一个 16 x 16 像素的图标, 通常用于传达某种应用程序状态或被动地通知用户                        |
| win.sethasshadow(hasshadow)                      | 设置窗口是否应该有阴影. 在 Windows 和 Linux 系统无效                                                               |
| win.hasshadow()                                  | 返回 Boolean - 判断窗口是否有阴影                                                                                  |
| win.setopacity(opacity)                          | 设置窗口的不透明度，在Linux系统上无效                                                                              |
| win.getopacity()                                 | 返回 Number - 介于0.0 ( 完全透明) 和1.0 ( 完全不透明) 之间                                                         |
| win.setshape(rects)                              | Setting a window shape determines the area within the window where the system permits drawing and user interaction |
| win.setthumbarbuttons(buttons)                   | 将指定的一组按钮添加到菜单栏的缩图工具栏上                                                                         |
| win.setthumbnailclip(region)                     | 将窗口的区域设置为在任务栏中悬停在窗口上方时显示的缩略图图像                                                       |
| win.setthumbnailtooltip(tooltip)                 | 设置在任务栏中悬停在窗口缩略图上时显示的工具提示                                                                   |
| win.setappdetails(options)                       | 设置窗口任务栏按钮的属性                                                                                           |
| win.showdefinitionforselection()                 | 和 webContents.showDefinitionForSelection() 相同.                                                                  |
| win.seticon(icon)                                | 设置窗口图标                                                                                                       |
| win.setautohidemenubar(hide)                     | 设置窗口的菜单栏是否自动隐藏                                                                                       |
| win.ismenubarautohide()                          | 返回 Boolean - 判断窗口的菜单栏是否自动隐藏                                                                        |
| win.setmenubarvisibility(visible)                | 设置窗口的菜单栏是否可见                                                                                           |
| win.ismenubarvisible()                           | 返回 Boolean - 判断窗口的菜单栏是否可见                                                                            |
| win.setvisibleonallworkspaces(visible)           | 设置窗口是否在所有工作空间上可见                                                                                   |
| win.isvisibleonallworkspaces()                   | 返回 Boolean - 判断窗口是否在所有工作空间上可见                                                                    |
| win.setignoremouseevents(ignore[,options])       | 忽略窗口内的所有鼠标事件                                                                                           |
| win.setcontentprotection(enable)                 | 防止窗口内容被其他应用捕获                                                                                         |
| win.setfocusable(focusable)                      | 设置窗口是否可聚焦                                                                                                 |
| win.setparentwindow(parent)                      | 设置 parent 为当前窗口的父窗口. 为null时表示将当前窗口转为顶级窗口                                                 |
| win.getparentwindow()                            | 返回 BrowserWindow - 父窗口                                                                                        |
| win.getchildwindows()                            | 返回 BrowserWindow[] - 首页的子窗口.                                                                               |
| win.setautohidecursor(autohide)                  | 设置输入时是否隐藏光标                                                                                             |
| win.selectprevioustab()                          | 当启用本地选项卡，并且窗口中有另一个标签时，选择上一个选项卡                                                       |
| win.selectnexttab()                              | 当启用本地选项卡，并且窗口中有另一个标签时，选择下一个选项卡                                                       |
| win.mergeallwindows()                            | 当启用本地选项卡并且存在多个打开窗口时，将所有窗口合并到一个带有多个选项卡的窗口中                                 |
| win.movetabtonewwindow()                         | 如果启用了本机选项卡并且当前窗口中有多个选项卡，则将当前选项卡移动到新窗口中。                                     |
| win.toggletabbar()                               | 如果启用了本机选项卡并且当前窗口中只有一个选项卡，则切换选项卡栏是否可见                                           |
| win.addtabbedwindow(browserwindow)               | 在该窗口中添加一个窗口作为选项卡，位于窗口实例的选项卡之后                                                         |
| win.setvibrancy(type)                            | 在浏览器窗口中添加一个动态效果.                                                                                    |
| win.settouchbar(touchbar)                        | 设置窗口的触摸条布局 设置为 null 或undefined将清除触摸条                                                           |
| win.setbrowserview(browserview)                  | -                                                                                                                  |
| win.getbrowserview()                             | 返回 BrowserView / null - 一个附加的 BrowserView. 如果没有被附加的窗口，则返回 null                                |
| win.on(event,callback)                           | 监听事件                                                                                                           |
| win.once(event,callback)                         | ~                                                                                                                  |

## 事件列表

| event                  | more                                                              |
| ---------------------- | ----------------------------------------------------------------- |
| page-title-updated     | 文档更改标题时触发                                                |
| close                  | 在窗口要关闭的时候触发                                            |
| closed                 | 窗口已经关闭时触发                                                |
| session-end            | 因为强制关机或机器重启或会话注销而导致窗口会话结束时触发          |
| unresponsive           | 网页变得未响应时触发                                              |
| responsive             | 未响应的页面变成响应时触发                                        |
| blur                   | 当窗口失去焦点时触发                                              |
| focus                  | 当窗口获得焦点时触发                                              |
| show                   | 当窗口显示时触发                                                  |
| hide                   | 当窗口隐藏时触发                                                  |
| ready-to-show          | 在加载页面时，渲染进程第一次完成绘制时，会发出 ready-to-show 事件 |
| maximize               | 窗口最大化时触发                                                  |
| unmaximize             | 当窗口从最大化状态退出时触发                                      |
| minimize               | 窗口最小化时触发                                                  |
| restore                | 当窗口从最小化状态恢复时触发                                      |
| resize                 | 调整窗口大小时触发                                                |
| move                   | 窗口移动到新位置时触发                                            |
| moved                  | 当窗口移动到新位置时触发一次                                      |
| enter-full-screen      | 窗口进入全屏状态时触发                                            |
| leave-full-screen      | 窗口离开全屏状态时触发                                            |
| enter-html-full-screen | 窗口进入由HTML API 触发的全屏状态时触发                           |
| leave-html-full-screen | 窗口离开由HTML API触发的全屏状态时触发                            |
| app-command            | 请求一个应用程序命令时触发.                                       |
| scroll-touch-begin     | 滚轮事件阶段开始时触发                                            |
| scroll-touch-end       | 滚轮事件阶段结束时触发                                            |
| scroll-touch-edge      | 滚轮事件阶段到达元素边缘时触发                                    |
| swipe                  | 三指拖移时触发，可选的方向为 up, right, down, left.               |
| sheet-begin            | 窗口打开sheet(工作表) 时触发                                      |
| sheet-end              | 窗口关闭sheet(工作表) 时触发                                      |
| new-window-for-tab     | 当点击了系统的新标签按钮时触发                                    |