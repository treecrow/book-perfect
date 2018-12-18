# BrowserWindow(类)

> 创建和控制浏览器窗口

```js
const win = new electron.BrowserWindow(); // 主进程
const win  = new electron.remote.BrowserWindow(); // 渲染进程
```

## api 列表

| api                                              | more                                                                                                  |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| win.webContents.on(evenr,callback)               | crashed、context-menu、did-finish-load                                                                |
| win.webContents.printToPDF(options,callback)     | -                                                                                                     |
| win.on(event,callback)                           | close、resize、move、focus、blur、unresponsive,responsive                                             |
| win.once(event,callback)                         |                                                                                                       |
| win.loadURL()                                    | -                                                                                                     |
| win.show()                                       | -                                                                                                     |
| win.reload()                                     | -                                                                                                     |
| win.close()                                      | -                                                                                                     |
| win.id                                           | 当前窗口序号，主窗口为1                                                                               |
| win.setFullScreen()                              | -                                                                                                     |
| win.isFullScreen()                               | -                                                                                                     |
| win.toggleDevTools()                             | -                                                                                                     |
| -                                                | -                                                                                                     |
| BrowserWindow.getallwindows()                    | 返回 BrowserWindow[] - 所有打开的窗口的数组                                                           |
| BrowserWindow.getfocusedwindow()                 | Returns BrowserWindow / null - The window that is focused in this application, otherwise returns null |
| BrowserWindow.fromwebcontents(webcontents)       | 返回 BrowserWindow - 拥有给定 webContents 的窗口                                                      |
| BrowserWindow.frombrowserview(browserview)       | 返回 BrowserWindow                                                                                    | null-拥有给定 browserView 的窗口 |
| BrowserWindow.fromid(id)                         | 返回 BrowserWindow -拥有给定 id 的窗口                                                                |
| BrowserWindow.addextension(path)                 | 添加位于 path的扩展，并且返回扩展名                                                                   |
| BrowserWindow.removeextension(name)              | 根据名字删除一个 Chrome 的扩展                                                                        |
| BrowserWindow.getextensions()                    | 返回 Object - 键是扩展名, 每个值都是一个包含 name 和 version 属性的对象.                              |
| BrowserWindow.adddevtoolsextension(path)         | 添加位于 path的 DevTools 扩展，并且返回扩展名                                                         |
| BrowserWindow.removedevtoolsextension(name)      | 根据名字删除一个 DevTools 的扩展。                                                                    |
| BrowserWindow.getdevtoolsextensions()            | 返回 Object - 键是扩展名, 每个值都是一个包含 name 和 version 属性的对象.                              |
| win.webcontents                                  | 窗口拥有的 WebContents 对象. 所有与网页相关的事件和操作都将通过它完成.                                |
| win.id                                           | Integer 窗口的唯一ID                                                                                  |
| win.destroy()                                    | 强制关闭窗口, 除了closed之外，close，unload 和 beforeunload 都不会被触发                              |
| win.close()                                      | 尝试关闭窗口                                                                                          |
| win.focus()                                      | 聚焦于窗口                                                                                            |
| win.blur()                                       | 取消窗口的聚焦                                                                                        |
| win.isfocused()                                  | 返回 Boolean - 判断窗口是否聚焦                                                                       |
| win.isdestroyed()                                | 返回 Boolean -判断窗口是否被销毁                                                                      |
| win.show()                                       | 显示并聚焦于窗口                                                                                      |
| win.showinactive()                               | 显示但不聚焦于窗口                                                                                    |
| win.hide()                                       | 隐藏窗口                                                                                              |
| win.isvisible()                                  | 返回 Boolean - 判断窗口是否可见                                                                       |
| win.ismodal()                                    | 返回 Boolean - 判断是否为模态窗口                                                                     |
| win.maximize()                                   | 最大化窗口。如果窗口尚未显示, 这也将会显示 (但不会聚焦)                                               |
| win.unmaximize()                                 | 取消窗口最大化                                                                                        |
| win.ismaximized()                                | 返回 Boolean - 判断窗口是否最大化                                                                     |
| win.minimize()                                   | 窗口最小化                                                                                            |
| win.restore()                                    | 将窗口从最小化状态恢复到以前的状态                                                                    |
| win.isminimized()                                | 返回 Boolean -判断窗口是否最小化                                                                      |
| win.setfullscreen(flag)                          | 设置窗口是否应处于全屏模式                                                                            |
| win.isfullscreen()                               | 返回 Boolean - 窗口当前是否已全屏                                                                     |
| win.setsimplefullscreen(flag)                    | 进入或离开简单的全屏模式                                                                              |
| win.issimplefullscreen()                         | 返回 Boolean - 窗口是否为简单全屏模式                                                                 |
| win.setaspectratio(aspectratio[,extrasize])      | 这将使窗口保持长宽比                                                                                  |
| win.previewfile(path[,displayname])              | 使用 Quick Look来预览路径中的文件                                                                     |
| win.closefilepreview()                           | 关闭当前打开的 Quick Look 面板.                                                                       |
| win.setbounds(bounds[,animate])                  | 重置窗口，并且移动窗口到指定的位置                                                                    |
| win.getbounds                                    | 返回 Rectangle                                                                                        |
| win.setcontentbounds(bounds[,animate])           | 调整窗口的工作区 (如网页) 的大小并将其移动到所提供的边界                                              |
| win.getcontentbounds()                           | 返回 Rectangle                                                                                        |
| win.setenabled(enable)                           | 禁用或者启用窗口。                                                                                    |
| win.setsize(width,height[,animate])              | Resizes the window to width and height                                                                |
| win.getsize()                                    | 返回 Integer []-包含窗口的宽度和高度                                                                  |
| win.setcontentsize(width,height[,animate])       | 将窗口的工作区 (如网页) 的大小调整为 width 和 height                                                  |
| win.getcontentsize()                             | 返回 Integer []-包含窗口的宽度和高度                                                                  |
| win.setminimumsize(width,height)                 | 设置窗口最小化的 width 和height                                                                       |
| win.getminimumsize()                             | 返回 Integer []-包含窗口最小化的宽度和高度                                                            |
| win.setmaximumsize(width,height)                 | 设置窗口最大化的 width 和 height                                                                      |
| win.getmaximumsize()                             | 返回 Integer []-包含窗口最大化的宽度和高度                                                            |
| win.setresizable(resizable)                      | 设置用户是否可以手动调整窗口大小                                                                      |
| win.isresizable()                                | 返回 Boolean - 设置窗口是否可以被用户改变大小                                                         |
| win.setmovable(movable)                          | 设置窗口是否可由用户移动。在 Linux 上无效                                                             |
| win.ismovable()                                  | 返回 Boolean - 窗口是否可以被用户拖动                                                                 |
| win.setminimizable(minimizable)                  | 设置窗口是否可以最小化. 在 Linux 上无效                                                               |
| win.isminimizable()                              | 返回 Boolean -窗口是否可以最小化                                                                      |
| win.setmaximizable(maximizable)                  | 设置窗口是否可以最大化. 在 Linux 上无效                                                               |
| win.ismaximizable()                              | 返回 Boolean - 窗口是否可以最大化                                                                     |
| win.setfullscreenable(fullscreenable)            | 设置点击最大化按钮是否可以全屏或最大化窗口.                                                           |
| win.isfullscreenable()                           | 返回 Boolean - 是否为全屏状态或窗口最大化                                                             |
| win.setclosable(closable)                        | 设置窗口是否可以人为关闭。在 Linux 上无效                                                             |
| win.isclosable()                                 | 返回 Boolean - 窗口是否被用户关闭了                                                                   |
| win.setalwaysontop(flag[,level][,relativelevel]) | 设置窗口是否应始终显示在其他窗口的顶部                                                                |
| win.isalwaysontop                                | -                                                                                                     |
| win.movetop                                      | -                                                                                                     |
| win.center                                       | -                                                                                                     |
| win.setpositionx-y-animate                       | -                                                                                                     |
| win.getposition                                  | -                                                                                                     |
| win.settitletitle                                | -                                                                                                     |
| win.gettitle                                     | -                                                                                                     |
| win.setsheetoffsetoffsety-offsetx                | -                                                                                                     |
| win.flashframeflag                               | -                                                                                                     |
| win.setskiptaskbarskip                           | -                                                                                                     |
| win.setkioskflag                                 | -                                                                                                     |
| win.iskiosk                                      | -                                                                                                     |
| win.getnativewindowhandle                        | -                                                                                                     |
| win.hookwindowmessagemessage-callback            | -                                                                                                     |
| win.iswindowmessagehookedmessage                 | -                                                                                                     |
| win.unhookwindowmessagemessage                   | -                                                                                                     |
| win.unhookallwindowmessages                      | -                                                                                                     |
| win.setrepresentedfilenamefilename               | -                                                                                                     |
| win.getrepresentedfilename                       | -                                                                                                     |
| win.setdocumenteditededited                      | -                                                                                                     |
| win.isdocumentedited                             | -                                                                                                     |
| win.focusonwebview                               | -                                                                                                     |
| win.capturepagerect-callback                     | -                                                                                                     |
| win.loadurlurl-options                           | -                                                                                                     |
| win.loadfilefilepath                             | -                                                                                                     |
| win.reload                                       | -                                                                                                     |
| win.setmenumenu                                  | -                                                                                                     |
| win.setprogressbarprogress-options               | -                                                                                                     |
| win.setoverlayiconoverlay-description            | -                                                                                                     |
| win.sethasshadowhasshadow                        | -                                                                                                     |
| win.hasshadow                                    | -                                                                                                     |
| win.setopacityopacity                            | -                                                                                                     |
| win.getopacity                                   | -                                                                                                     |
| win.setshaperects                                | -                                                                                                     |
| win.setthumbarbuttonsbuttons                     | -                                                                                                     |
| win.setthumbnailclipregion                       | -                                                                                                     |
| win.setthumbnailtooltiptooltip                   | -                                                                                                     |
| win.setappdetailsoptions                         | -                                                                                                     |
| win.showdefinitionforselection                   | -                                                                                                     |
| win.seticonicon                                  | -                                                                                                     |
| win.setautohidemenubarhide                       | -                                                                                                     |
| win.ismenubarautohide                            | -                                                                                                     |
| win.setmenubarvisibilityvisible                  | -                                                                                                     |
| win.ismenubarvisible                             | -                                                                                                     |
| win.setvisibleonallworkspacesvisible             | -                                                                                                     |
| win.isvisibleonallworkspaces                     | -                                                                                                     |
| win.setignoremouseeventsignore                   | -                                                                                                     |
| win.setcontentprotectionenable()                 | -                                                                                                     |
| win.setfocusablefocusable()                      | -                                                                                                     |
| win.setparentwindowparent()                      | -                                                                                                     |
| win.getparentwindow()                            | -                                                                                                     |
| win.getchildwindows()                            | -                                                                                                     |
| win.setautohidecursorautohide()                  | -                                                                                                     |
| win.selectprevioustab()                          | -                                                                                                     |
| win.selectnexttab()                              | -                                                                                                     |
| win.mergeallwindows()                            | -                                                                                                     |
| win.movetabtonewwindow()                         | -                                                                                                     |
| win.toggletabbar()                               | -                                                                                                     |
| win.addtabbedwindowbrowserwindow()               | -                                                                                                     |
| win.setvibrancytype()                            | -                                                                                                     |
| win.settouchbartouchbar()                        | -                                                                                                     |
| win.setbrowserviewbrowserview()                  | -                                                                                                     |
| win.getbrowserview()                             | -                                                                                                     |

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