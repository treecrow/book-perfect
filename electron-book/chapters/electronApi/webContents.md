# webContents

> 渲染以及控制 web 页面


## api 列表

| api                                                           | more                                                                                                                                                                               |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| webContents.getAllWebContents()                               | 返回 WebContents[] - 所有 WebContents 实例的数组                                                                                                                                   |
| webContents.getFocusedWebContents()                           | Returns WebContents - 此 app 中焦点的 web 内容，否则返回 null                                                                                                                      |
| webContents.fromId(id)                                        | Returns WebContents - 给定 id 的 WebContents 实例                                                                                                                                  |
| contents.loadURL(url[, options])                              | Loads the url in the window.                                                                                                                                                       |
| contents.loadFile(filePath)                                   | Loads the given file in the window, filePath should be a path to an HTML file relative to the root of your application                                                             |
| contents.downloadURL(url)                                     | Initiates a download of the resource at url without navigating                                                                                                                     |
| contents.getURL()                                             | Returns String - 当前页面的URL.                                                                                                                                                    |
| contents.getTitle()                                           | 返回 String - 当前页面的标题                                                                                                                                                       |
| contents.isDestroyed()                                        | 返回 Boolean -判断页面是否被销毁                                                                                                                                                   |
| contents.focus()                                              | 页面聚焦                                                                                                                                                                           |
| contents.isFocused()                                          | 返回 Boolean - 判断页面是否聚焦                                                                                                                                                    |
| contents.isLoading()                                          | 返回 Boolean - 判断页面是否正在加载资源                                                                                                                                            |
| contents.isLoadingMainFrame()                                 | Returns Boolean - Whether the main frame (and not just iframes or frames within it) is still loading.                                                                              |
| contents.isWaitingForResponse()                               | Returns Boolean - Whether the web page is waiting for a first-response from the main resource of the page.                                                                         |
| contents.stop()                                               | Stops any pending navigation.                                                                                                                                                      |
| contents.reload()                                             | 刷新当前页面                                                                                                                                                                       |
| contents.reloadIgnoringCache()                                | 忽略缓存强制刷新页面                                                                                                                                                               |
| contents.canGoBack()                                          | 返回Boolean，是否可以返回到上一个页面                                                                                                                                              |
| contents.canGoForward()                                       | 返回Boolean ，是否可以进入下一个页面                                                                                                                                               |
| contents.canGoToOffset(offset)                                | Returns Boolean - Whether the web page can go to offset                                                                                                                            |
| contents.clearHistory()                                       | Clears the navigation history.                                                                                                                                                     |
| contents.goBack()                                             | 使浏览器回退到上一个页面。                                                                                                                                                         |
| contents.goForward()                                          | 使浏览器前进到下一个页面。                                                                                                                                                         |
| contents.goToIndex(index)                                     | Navigates browser to the specified absolute web page index.                                                                                                                        |
| contents.goToOffset(offset)                                   | 定位到相对于“当前入口”的指定的偏移。                                                                                                                                             |
| contents.isCrashed()                                          | Returns Boolean - Whether the renderer process has crashed.                                                                                                                        |
| contents.setUserAgent(userAgent)                              | 重写该页面的user agent                                                                                                                                                             |
| contents.getUserAgent()                                       | 返回 String - 当前页面的user agent.                                                                                                                                                |
| contents.insertCSS(css)                                       | 为当前页面注入样式                                                                                                                                                                 |
| contents.executeJavaScript(code[, userGesture, callback])     | Returns Promise - A promise that resolves with the result of the executed code or is rejected if the result of the code is a rejected promise                                      |
| contents.setIgnoreMenuShortcuts(ignore)                       | Ignore application menu shortcuts while this web contents is focused.                                                                                                              |
| contents.setAudioMuted(muted)                                 | 使当前页面音频静音                                                                                                                                                                 |
| contents.isAudioMuted()                                       | 返回 Boolean -判断页面是否被静音                                                                                                                                                   |
| contents.setZoomFactor(factor)                                | 更改缩放比例。缩放比例是缩放百分比除以 100，如 300% = 3.0。                                                                                                                        |
| contents.getZoomFactor(callback)                              | Sends a request to get current zoom factor, the callback will be called with callback(zoomFactor)                                                                                  |
| contents.setZoomLevel(level)                                  | 更改缩放等级                                                                                                                                                                       |
| contents.getZoomLevel(callback)                               | Sends a request to get current zoom level, the callback will be called with callback(zoomLevel)                                                                                    |
| contents.setVisualZoomLevelLimits(minimumLevel, maximumLevel) | 设置最大和最小缩放级别。                                                                                                                                                           |
| contents.setLayoutZoomLevelLimits(minimumLevel, maximumLevel) | Sets the maximum and minimum layout-based (i.e. non-visual) zoom level.                                                                                                            |
| contents.undo()                                               | 在页面中执行undo编辑命令。                                                                                                                                                         |
| contents.redo()                                               | 在页面中执行redo编辑命令。                                                                                                                                                         |
| contents.cut()                                                | 在页面中执行cut编辑命令。                                                                                                                                                          |
| contents.copy()                                               | 在页面中执行copy编辑命令。                                                                                                                                                         |
| contents.copyImageAt(x, y)                                    | Copy the image at the given position to the clipboard.                                                                                                                             |
| contents.paste()                                              | 在页面中执行paste编辑命令。                                                                                                                                                        |
| contents.pasteAndMatchStyle()                                 | 在页面中执行pasteAndMatchStyle编辑命令。                                                                                                                                           |
| contents.delete()                                             | 在页面中执行delete编辑命令。                                                                                                                                                       |
| contents.selectAll()                                          | 在页面中执行selectAll编辑命令。                                                                                                                                                    |
| contents.unselect()                                           | 在页面中执行unselect编辑命令。                                                                                                                                                     |
| contents.replace(text)                                        | 在页面中执行replace编辑命令。                                                                                                                                                      |
| contents.replaceMisspelling(text)                             | 在页面中执行replaceMisspelling编辑命令。                                                                                                                                           |
| contents.insertText(text)                                     | 插入text 到焦点元素                                                                                                                                                                |
| contents.findInPage(text[, options])                          | Returns Integer - The request id used for the request.                                                                                                                             |
| contents.stopFindInPage(action)                               | Stops any findInPage request for the webContents with the provided action                                                                                                          |
| contents.capturePage([rect, ]callback)                        | Captures a snapshot of the page within rect                                                                                                                                        |
| contents.hasServiceWorker(callback)                           | Checks if any ServiceWorker is registered and returns a boolean as response to callback                                                                                            |
| contents.unregisterServiceWorker(callback)                    | Unregisters any ServiceWorker if present and returns a boolean as response to callback when the JS promise is fulfilled or false when the JS promise is rejected                   |
| contents.getPrinters()                                        | 获取系统打印机列表                                                                                                                                                                 |
| contents.print([options], [callback])                         | Prints window's web page                                                                                                                                                           |
| contents.printToPDF(options, callback)                        | Prints window's web page as PDF with Chromium's preview printing custom settings.                                                                                                  |
| contents.addWorkSpace(path)                                   | Adds the specified path to DevTools workspace                                                                                                                                      |
| contents.removeWorkSpace(path)                                | Removes the specified path from DevTools workspace.                                                                                                                                |
| contents.setDevToolsWebContents(devToolsWebContents)          | Uses the devToolsWebContents as the target WebContents to show devtools.                                                                                                           |
| contents.openDevTools([options])                              | Opens the devtools                                                                                                                                                                 |
| contents.closeDevTools()                                      | 关闭开发者工具。                                                                                                                                                                   |
| contents.isDevToolsOpened()                                   | 返回Boolean - 开发者工具是否处于开启状态。                                                                                                                                         |
| contents.isDevToolsFocused()                                  | 返回Boolean - 开发者工具是否处于当前执行状态。                                                                                                                                     |
| contents.toggleDevTools()                                     | 切换开发工具                                                                                                                                                                       |
| contents.inspectElement(x, y)                                 | 开始检查位于(x, y) 的元素。                                                                                                                                                        |
| contents.inspectServiceWorker()                               | Opens the developer tools for the service worker context.                                                                                                                          |
| contents.send(channel[, arg1][, arg2][, ...])                 | 通过channel向渲染器进程发送异步消息，可以发送任意参数                                                                                                                              |
| contents.enableDeviceEmulation(parameters)                    | 允许设备模拟给定参数                                                                                                                                                               |
| contents.disableDeviceEmulation()                             | 禁止webContents.enableDeviceEmulation允许的模拟设备                                                                                                                                |
| contents.sendInputEvent(event)                                | Sends an input event to the page.                                                                                                                                                  |
| contents.beginFrameSubscription([onlyDirty ,]callback)        | Begin subscribing for presentation events and captured frames, the callback will be called with callback(image, dirtyRect) when there is a presentation event.                     |
| contents.endFrameSubscription()                               | End subscribing for frame presentation events.                                                                                                                                     |
| contents.startDrag(item)                                      | Sets the item as dragging item for current drag-drop operation, file is the absolute path of the file to be dragged, and icon is the image showing under the cursor when dragging. |
| contents.savePage(fullPath, saveType, callback)               | Returns Boolean - true if the process of saving page has been initiated successfully.                                                                                              |
| contents.showDefinitionForSelection()                         | Shows pop-up dictionary that searches the selected word on the page.                                                                                                               |
| contents.isOffscreen()                                        | Returns Boolean - Indicates whether offscreen rendering is enabled.                                                                                                                |
| contents.startPainting()                                      | If offscreen rendering is enabled and not painting, start painting.                                                                                                                |
| contents.stopPainting()                                       | If offscreen rendering is enabled and painting, stop painting.                                                                                                                     |
| content.on(event,callback)                                    | 监听事件                                                                                                                                                                           |
| contents.isPainting()                                         | Returns Boolean - If offscreen rendering is enabled returns whether it is currently painting.                                                                                      |
| contents.setFrameRate(fps)                                    | If offscreen rendering is enabled sets the frame rate to the specified number. Only values between 1 and 60 are accepted.                                                          |
| contents.getFrameRate()                                       | Returns Integer - If offscreen rendering is enabled returns the current frame rate.                                                                                                |
| contents.invalidate()                                         | Schedules a full repaint of the window this web contents is in.                                                                                                                    |
| contents.getWebRTCIPHandlingPolicy()                          | Returns String - Returns the WebRTC IP Handling Policy.                                                                                                                            |
| contents.setWebRTCIPHandlingPolicy(policy)                    | Setting the WebRTC IP handling policy allows you to control which IPs are exposed via WebRTC.                                                                                      |
| contents.getOSProcessId()                                     | Returns Integer - The operating system pid of the associated renderer process.                                                                                                     |
| contents.getProcessId()                                       | Returns Integer - The chromium internal pid of the associated renderer.                                                                                                            |
| contents.id                                                   | Integer类型，代表WebContents的唯一标识（unique ID）。                                                                                                                              |
| contents.session                                              | A Session used by this webContents.                                                                                                                                                |
| contents.hostWebContents                                      | A WebContents instance that might own this WebContents.                                                                                                                            |
| contents.devToolsWebContents                                  | A WebContents of DevTools for this WebContents.                                                                                                                                    |
| contents.debugger                                             | WebContents的 Debugger实例。                                                                                                                                                       |

## 事件列表

| event                     | more                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------- |
| did-finish-load           | 导航完成时触发，即选项卡的旋转器将停止旋转，并指派onload事件后                         |
| did-fail-load             | 这个事件类似于 did-finish-load, 不过是在加载失败或取消后触发，例如调用了 window.stop() |
| did-frame-finish-load     | 当框架完成导航（navigation）时触发                                                     |
| did-start-loading         | 当tab中的旋转指针（spinner）开始旋转时，就会触发该事件                                 |
| did-stop-loading          | 当tab中的旋转指针（spinner）结束旋转时，就会触发该事件                                 |
| dom-ready                 | 一个框架中的文本加载完成后触发该事件                                                   |
| page-favicon-updated      | 当页面获取到favicon的连接时，触发该事件                                                |
| new-window                | 当页面请求打开地址为 url 的新窗口时触发                                                |
| will-navigate             | Emitted when a user or the page wants to start navigation.                             |
| did-start-navigation      | Emitted when any frame (including main) starts navigating                              |
| did-navigate              | Emitted when a main frame navigation is done                                           |
| did-frame-navigate        | Emitted when any frame navigation is done.                                             |
| did-navigate-in-page      | Emitted when an in-page navigation happened in any frame                               |
| will-prevent-unload       | Emitted when a beforeunload event handler is attempting to cancel a page unload.       |
| crashed                   | 当渲染进程崩溃或被结束时触发                                                           |
| unresponsive              | 网页变得未响应时触发                                                                   |
| responsive                | 未响应的页面变成响应时触发                                                             |
| plugin-crashed            | 当有插件进程崩溃时触发                                                                 |
| destroyed                 | 当webContents被销毁时，触发该事件                                                      |
| before-input-event        | Emitted before dispatching the keydown and keyup events in the page                    |
| devtools-opened           | 当开发者工具被打开时，触发该事件                                                       |
| devtools-closed           | 当开发者工具被关闭时，触发该事件                                                       |
| devtools-focused          | 当开发者工具被选中/打开时，触发该事件                                                  |
| certificate-error         | 使用方式与app的certificate-error的事件相同                                             |
| select-client-certificate | 当一个客户证书被请求的时候发出                                                         |
| login                     | 当 webContents 要进行基本身份验证时触发                                                |
| found-in-page             | 如果调用[webContents.findInPage]有返回时，会触发这一事件                               |
| media-started-playing     | 多媒体开始播放时，触发该事件                                                           |
| media-paused              | 当媒体文件暂停或播放完成的时候触发                                                     |
| did-change-theme-color    | Emitted when a page's theme color changes.                                             |
| update-target-url         | 当鼠标滑到，或者键盘切换到a连接时，触发该事件                                          |
| cursor-changed            | 当鼠标指针改变的时候触发                                                               |
| context-menu              | Emitted when there is a new context menu that needs to be handled                      |
| select-bluetooth-device   | Emitted when bluetooth device needs to be selected on call to navigator                |
| paint                     | Emitted when a new frame is generated                                                  |
| devtools-reload-page      | 当在开发者工具中命令webContents重新加载时，触发该事件                                  |
| will-attach-webview       | Emitted when a <webview>'s web contents is being attached to this web contents.        |
| did-attach-webview        | 当<webview>被挂载到页面内容中时，触发该事件                                            |
| console-message           | Emitted when the associated window logs a console message                              |