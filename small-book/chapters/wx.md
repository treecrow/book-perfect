# wx

| 分类         | 功能                                                       | api                                                                                           |
| ------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 上传         | wx.uploadFile(obj)                                         | 将本地资源上传到服务器                                                                        |
| WebSocket    | wx.onSocketError(callback)                                 | 监听WebSocket 错误事件                                                                        |
| ~            | wx.onSocketMessage(callback)                               | 监听WebSocket 接受到服务器的消息事件                                                          |
| ~            | wx.onSocketClose(callback)                                 | 监听WebSocket 连接关闭事件                                                                    |
| ~            | wx.onSocketOpen(callback)                                  | 监听WebSocket 连接打开事件                                                                    |
| ~            | wx.sendSocketMessage(obj)                                  | 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。 |
| ~            | wx.closeSocket(obj)                                        | 关闭 WeSocket 连接                                                                            |
| ~            | wx.connectSocket(obj)                                      | 创建一个 WebSocket 连接                                                                       |
| 发送请求     | wx.request(obj)                                            | 发起 HTTPS 网络请求                                                                           |
| 下载         | wx.downloadFile(obj)                                       | 下载文件资源到本地                                                                            |
| 音频         | wx.setInnerAudioOption(obj)                                | 设置 InnerAudioContext 的播放选项                                                             |
| ~            | wx.getAvailableAudioSources(obj)                           | 获取当前支持的音频输入源                                                                      |
| ~            | wx.createInnerAudioContext()                               | 创建内部 audio 上下文 InnerAudioContext 对象                                                  |
| 录音         | wx.getRecorderManager()                                    | 获取全局唯一的录音管理器 RecorderManager                                                      |
| 背景音频     | wx.getBackgroundAudioManager()                             | 获取全局唯一的背景音频管理器                                                                  |
| 相机         | wx.createCameraContext()                                   | 创建 camera 上下文 CameraContext 对象                                                         |
| 实时视音频   | wx.createLivePlayerContext(string id, Object this)         | 创建 live-player 上下文 LivePlayerContext 对象                                                |
| ~            | wx.createLivePusherContext()                               | 创建 live-pusher 上下文 LivePusherContext 对象                                                |
| 视频         | wx.createVideoContext(string id, Object this)              | 创建 video 上下文 VideoContext 对象                                                           |
| ~            | wx.saveVideoToPhotosAlbum(obj)                             | 保存视频到系统相册                                                                            |
| ~            | wx.chooseVideo(obj)                                        | 拍摄视频或从手机相册中选视频                                                                  |
| 图片         | wx.saveImageToPhotosAlbum(obj)                             | 保存图片到系统相册                                                                            |
| ~            | wx.getImageInfo(obj)                                       | 获取图片信息。网络图片需先配置download域名才能生效                                            |
| ~            | wx.previewImage(obj)                                       | 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作                    |
| ~            | wx.chooseImage(obj)                                        | 从本地相册选择图片或使用相机拍照                                                              |
| 字体         | wx.loadFontFace(obj)                                       | 动态加载网络字体。文件地址需为下载类型。iOS 仅支持 https 格式文件地址                         |
| 文件         | wx.saveFile(obj)                                           | 保存文件到本地                                                                                |
| ~            | wx.openDocument(obj)                                       | 新开页面打开文档                                                                              |
| ~            | wx.getSavedFileList(obj)                                   | 获取该小程序下已保存的本地缓存文件列表                                                        |
| ~            | wx.getSavedFileInfo(obj)                                   | 获取本地文件的文件信息                                                                        |
| ~            | wx.removeSavedFile(obj)                                    | 删除本地缓存文件                                                                              |
| ~            | wx.getFileSystemManager()                                  | 获取全局唯一的文件管理器                                                                      |
| ~            | wx.getFileInfo(obj)                                        | 获取文件信息                                                                                  |
| 数据缓存     | wx.getStorageInfoSync()                                    | wx.getStorageInfo 的同步版本                                                                  |
| ~            | wx.getStorageInfo(obj)                                     | 异步获取当前storage的相关信息                                                                 |
| ~            | wx.clearStorageSync()                                      | wx.clearStorage 的同步版本                                                                    |
| ~            | wx.clearStorage(obj)                                       | 清理本地数据缓存                                                                              |
| ~            | wx.removeStorageSync(string key)                           | wx.removeStorage 的同步版本                                                                   |
| ~            | wx.removeStorage(obj)                                      | 从本地缓存中移除指定 key                                                                      |
| ~            | wx.setStorageSync(string key, Object/string data)          | wx.setStorage 的同步版本                                                                      |
| ~            | wx.setStorage(obj)                                         | 将数据存储在本地缓存中指定的 key 中                                                           |
| ~            | wx.getStorageSync(string key)                              | wx.getStorage 的同步版本                                                                      |
| ~            | wx.getStorage(obj)                                         | 从本地缓存中异步获取指定 key 的内容                                                           |
| 位置         | wx.chooseLocation(obj)                                     | 打开地图选择位置                                                                              |
| ~            | wx.openLocation(obj)                                       | ​使用微信内置地图查看位置                                                                     |
| ~            | wx.getLocation(obj)                                        | 获取当前的地理位置、速度                                                                      |
| 罗盘         | wx.startCompass(obj)                                       | 开始监听罗盘数据                                                                              |
| ~            | wx.stopCompass(obj)                                        | 停止监听罗盘数据                                                                              |
| ~            | wx.onCompassChange(callback)                               | 监听罗盘数据变化事件                                                                          |
| Wi-Fi        | wx.stopWifi(obj)                                           | 关闭 Wi-Fi 模块                                                                               |
| ~            | wx.startWifi(obj)                                          | 初始化 Wi-Fi 模块                                                                             |
| ~            | wx.setWifiList(obj)                                        | 设置 wifiList 中 AP 的相关信                                                                  |
| ~            | wx.onWifiConnected(callback)                               | 监听连接上 Wi-Fi 的事件                                                                       |
| ~            | wx.onGetWifiList(callback)                                 | 监听获取到 Wi-Fi 列表数据事件                                                                 |
| ~            | wx.getWifiList(obj)                                        | 请求获取 Wi-Fi 列表                                                                           |
| ~            | wx.getConnectedWifi(obj)                                   | 获取已连接中的 Wi-Fi 信息                                                                     |
| ~            | wx.connectWifi(obj)                                        | 连接 Wi-Fi                                                                                    |
| NFC          | wx.stopHCE(obj)                                            | 关闭 NFC 模块                                                                                 |
| ~            | wx.startHCE(obj)                                           | 初始化 NFC 模块                                                                               |
| ~            | wx.sendHCEMessage(obj)                                     | 发送 NFC 消息。仅在安卓系统下有效                                                             |
| ~            | wx.onHCEMessage(callback)                                  | 监听NFC 设备的消息回调                                                                        |
| ~            | wx.getHCEState(obj)                                        | 判断当前设备是否支持 HCE 能力                                                                 |
| 低功耗蓝牙   | wx.writeBLECharacteristicValue(obj)                        | 向低功耗蓝牙设备特征值中写入二进制数据                                                        |
| ~            | wx.readBLECharacteristicValue(obj)                         | 读取低功耗蓝牙设备的特征值的二进制数据值                                                      |
| ~            | wx.onBLEConnectionStateChange(callback)                    | 监听低功耗蓝牙连接状态的改变事件                                                              |
| ~            | wx.onBLECharacteristicValueChange(callback)                | 监听低功耗蓝牙设备的特征值变化                                                                |
| ~            | wx.notifyBLECharacteristicValueChange(obj)                 | 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值                                      |
| ~            | wx.getBLEDeviceServices(obj)                               | 获取蓝牙设备所有服务(service)                                                                 |
| ~            | wx.getBLEDeviceCharacteristics(obj)                        | 获取蓝牙设备某个服务中所有特征值(characteristic)                                              |
| ~            | wx.createBLEConnection(obj)                                | 连接低功耗蓝牙设备                                                                            |
| ~            | wx.closeBLEConnection(obj)                                 | 断开与低功耗蓝牙设备的连接                                                                    |
| 蓝牙         | wx.stopBluetoothDevicesDiscovery(obj)                      | 停止搜寻附近的蓝牙外围设备                                                                    |
| ~            | wx.startBluetoothDevicesDiscovery(obj)                     | 开始搜寻附近的蓝牙外围设备                                                                    |
| ~            | wx.openBluetoothAdapter(obj)                               | 初始化蓝牙模块                                                                                |
| ~            | wx.onBluetoothDeviceFound(callback)                        | 监听寻找到新设备的事件                                                                        |
| ~            | wx.onBluetoothAdapterStateChange(callback)                 | 监听蓝牙适配器状态变化事件                                                                    |
| ~            | wx.getConnectedBluetoothDevices(obj)                       | 根据 uuid 获取处于已连接状态的设备                                                            |
| ~            | wx.getBluetoothDevices(obj)                                | 获取在蓝牙模块生效期间所有已发现的蓝牙设备                                                    |
| ~            | wx.getBluetoothAdapterState(obj)                           | 获取本机蓝牙适配器状态                                                                        |
| ~            | wx.closeBluetoothAdapter(obj)                              | 关闭蓝牙模块                                                                                  |
| 性能         | wx.onMemoryWarning(callback)                               | 监听内存不足告警事件                                                                          |
| 加速计       | wx.startAccelerometer(obj)                                 | 开始监听加速度数据                                                                            |
| ~            | wx.stopAccelerometer(obj)                                  | 停止监听加速度数据                                                                            |
| ~            | wx.onAccelerometerChange(callback)                         | 监听加速度数据事件                                                                            |
| 电量         | wx.getBatteryInfo(obj)                                     | 获取设备电量                                                                                  |
| ~            | wx.getBatteryInfoSync()                                    | wx.getBatteryInfo 的同步版本                                                                  |
| 剪贴板       | wx.getClipboardData(obj)                                   | 获取系统剪贴板的内容                                                                          |
| ~            | wx.setClipboardData(obj)                                   | 设置系统剪贴板的内容                                                                          |
| 屏幕         | wx.setScreenBrightness(obj)                                | 设置屏幕亮度                                                                                  |
| ~            | wx.setKeepScreenOn(obj)                                    | 设置是否保持常亮状态                                                                          |
| ~            | wx.onUserCaptureScreen(callback)                           | 监听用户主动截屏事件                                                                          |
| ~            | wx.getScreenBrightness(obj)                                | 获取屏幕亮度                                                                                  |
| 联系人       | wx.addPhoneContact(obj)                                    | 添加手机通讯录联系人                                                                          |
| 陀螺仪       | wx.startGyroscope(obj)                                     | 开始监听陀螺仪数据                                                                            |
| ~            | wx.stopGyroscope(obj)                                      | 停止监听陀螺仪数据                                                                            |
| ~            | wx.onGyroscopeChange(callback)                             | 监听陀螺仪数据变化事件                                                                        |
| iBeacon      | wx.startBeaconDiscovery(obj)                               | 开始搜索附近的 iBeacon 设备                                                                   |
| ~            | wx.stopBeaconDiscovery(obj)                                | 停止搜索附近的 iBeacon 设备                                                                   |
| ~            | wx.getBeacons(obj)                                         | 获取所有已搜索到的 iBeacon 设备                                                               |
| ~            | wx.onBeaconUpdate(callback)                                | 监听 iBeacon 设备更新事件                                                                     |
| ~            | wx.onBeaconServiceChange(callback)                         | 监听 iBeacon 服务的状态变化                                                                   |
| 设备方向     | wx.startDeviceMotionListening(obj)                         | 开始监听设备方向的变化                                                                        |
| ~            | wx.stopDeviceMotionListening(obj)                          | 停止监听设备方向的变化                                                                        |
| ~            | wx.onDeviceMotionChange(callback)                          | 监听设备方向变化事件                                                                          |
| 网络         | wx.getNetworkType(obj)                                     | 获取网络类型                                                                                  |
| ~            | wx.onNetworkStatusChange(callback)                         | 监听网络状态变化事件                                                                          |
| 电话         | wx.makePhoneCall(obj)                                      | 拨打电话                                                                                      |
| 扫码         | wx.scanCode(obj)                                           | 调起客户端扫码界面进行扫码                                                                    |
| 振动         | wx.vibrateShort(obj)                                       | 使手机发生较短时间的振动                                                                      |
| ~            | wx.vibrateLong(obj)                                        | 使手机发生较长时间的振动                                                                      |
| 窗口         | wx.offWindowResize(callback)                               | 取消监听窗口尺寸变化事件                                                                      |
| ~            | wx.onWindowResize(callback)                                | 监听窗口尺寸变化事件                                                                          |
| 导航栏       | wx.setNavigationBarColor(obj)                              | 设置页面导航条颜色                                                                            |
| ~            | wx.hideNavigationBarLoading(obj)                           | 在当前页面隐藏导航条加载动画                                                                  |
| ~            | wx.showNavigationBarLoading(obj)                           | 在当前页面显示导航条加载动画                                                                  |
| ~            | wx.setNavigationBarTitle(obj)                              | 动态设置当前页面的标题                                                                        |
| 置顶         | wx.setTopBarText(obj)                                      | 动态设置置顶栏文字内容                                                                        |
| Tab Bar      | wx.setTabBarItem(obj)                                      | 动态设置 tabBar 某一项的内容                                                                  |
| ~            | wx.setTabBarStyle(obj)                                     | 动态设置 tabBar 的整体样式                                                                    |
| ~            | wx.hideTabBar(obj)                                         | 隐藏 tabBar                                                                                   |
| ~            | wx.showTabBar(obj)                                         | 显示 tabBar                                                                                   |
| ~            | wx.hideTabBarRedDot(obj)                                   | 隐藏 tabBar 某一项的右上角的红点                                                              |
| ~            | wx.showTabBarRedDot(obj)                                   | 显示 tabBar 某一项的右上角的红点                                                              |
| ~            | wx.removeTabBarBadge(obj)                                  | 移除 tabBar 某一项右上角的文本                                                                |
| ~            | wx.setTabBarBadge(obj)                                     | 为 tabBar 某一项的右上角添加文本                                                              |
| 背景         | wx.setBackgroundTextStyle(obj)                             | 动态设置下拉背景字体、loading 图的样式                                                        |
| ~            | wx.setBackgroundColor(obj)                                 | 动态设置窗口的背景色                                                                          |
| 自定义组件   | wx.nextTick(callback)                                      | 延迟一部分操作到下一个时间片再执行                                                            |
| 下拉刷新     | wx.stopPullDownRefresh(obj)                                | 停止当前页面下拉刷新。                                                                        |
| ~            | wx.startPullDownRefresh(obj)                               | 开始下拉刷新                                                                                  |
| 滚动         | wx.pageScrollTo(obj)                                       | 将页面滚动到目标位置                                                                          |
| 交互         | wx.showActionSheet(obj)                                    | ​显示操作菜单                                                                                 |
| ~            | wx.hideLoading(obj)                                        | 隐藏 loading 提示框                                                                           |
| ~            | wx.showLoading(obj)                                        | 显示 loading 提示框                                                                           |
| ~            | wx.hideToast(obj)                                          | 隐藏消息提示框                                                                                |
| ~            | wx.showToast(obj)                                          | 显示消息提示框                                                                                |
| ~            | wx.showModal(obj)                                          | 显示模态对话框                                                                                |
| 菜单         | wx.getMenuButtonBoundingClientRect()                       | 获取菜单按钮的布局置信息                                                                      |
| 动画         | wx.createAnimation(obj)                                    | 创建一个动画实例 animation                                                                    |
| 授权         | wx.authorize(obj)                                          | 提前向用户发起授权请求                                                                        |
| 支付         | wx.faceVerifyForPay(obj)                                   | 支付各个安全场景验证人脸                                                                      |
| ~            | wx.requestPayment(obj)                                     | 发起微信支付                                                                                  |
| 小程序跳转   | wx.navigateToMiniProgram(obj)                              | 打开另一个小程序                                                                              |
| ~            | wx.navigateBackMiniProgram(obj)                            | 返回到上一个小程序                                                                            |
| 生物认证     | wx.startSoterAuthentication(obj)                           | 开始 SOTER 生物认证                                                                           |
| ~            | wx.checkIsSupportSoterAuthentication(obj)                  | 获取本机支持的 SOTER 生物认证方式                                                             |
| ~            | wx.checkIsSoterEnrolledInDevice(obj)                       | 获取设备内是否录入如指纹等生物信息的接口                                                      |
| 设置         | wx.openSetting(obj)                                        | 调起客户端小程序设置界面，返回用户设置的操作结果                                              |
| ~            | wx.getSetting(obj)                                         | 获取用户的当前设置                                                                            |
| 数据分析     | wx.reportAnalytics(string eventName, Object data)          | 自定义分析数据上报接口                                                                        |
| ~            | getAnalysisWeeklyVisitTrend                                | 获取用户访问小程序数据周趋势                                                                  |
| ~            | getAnalysisDailySummary                                    | 获取用户访问小程序数据概况                                                                    |
| ~            | getAnalysisDailyVisitTrend                                 | 获取用户访问小程序数据日趋势                                                                  |
| ~            | getAnalysisMonthlyRetain                                   | 获取用户访问小程序周留存                                                                      |
| ~            | getAnalysisDailyRetain                                     | 获取用户访问小程序日留存                                                                      |
| ~            | getAnalysisUserPortrait                                    | 获取小程序新增或活跃用户的画像分布数据                                                        |
| ~            | getAnalysisVisitDistribution                               | 获取用户小程序访问分布数据                                                                    |
| ~            | getAnalysisVisitPage                                       | 访问页面                                                                                      |
| ~            | getAnalysisWeeklyRetain                                    | 获取用户访问小程序周留存                                                                      |
| ~            | getAnalysisMonthlyVisitTrend                               | 获取用户访问小程序数据月趋势                                                                  |
| 微信运动     | wx.getWeRunData(obj)                                       | 获取用户过去三十天微信运动步数                                                                |
| 用户信息     | wx.getUserInfo(obj)                                        | 获取用户信息                                                                                  |
| 发票         | wx.chooseInvoiceTitle(obj)                                 | 选择用户的发票抬头                                                                            |
| ~            | wx.chooseInvoice(obj)                                      | 选择用户已有的发票                                                                            |
| 卡券         | wx.openCard(obj)                                           | 查看微信卡包中的卡券                                                                          |
| ~            | wx.addCard(obj)                                            | 批量添加卡券                                                                                  |
| 当前账号信息 | wx.getAccountInfoSync()                                    | 获取当前账号信息                                                                              |
| 收货地址     | wx.chooseAddress(obj)                                      | 获取用户收货地址                                                                              |
| 登录         | wx.checkSession(obj)                                       | 检查登录态是否过期。                                                                          |
| ~            | wx.login(obj)                                              | 调用接口获取登录凭证（code）                                                                  |
| ~            | code2Session                                               | 登录凭证校验                                                                                  |
| 统一服务消息 | sendUniformMessage                                         | 下发小程序和公众号统一的服务消息                                                              |
| 接口调用凭证 | getAccessToken                                             | 获取小程序 access_token                                                                       |
| 客服消息     | customerTyping                                             | 下发客服当前输入状态给用户                                                                    |
| ~            | getTempMedia                                               | 获取客服消息内的临时素材                                                                      |
| ~            | sendCustomerMessage                                        | 发送客服消息给用户                                                                            |
| ~            | uploadTempMedia                                            | 把媒体文件上传到微信服务器                                                                    |
| 附近的小程序 | addNearbyPoi                                               | 添加地点                                                                                      |
| ~            | deleteNearbyPoi                                            | 删除地点                                                                                      |
| ~            | getNearbyPoiList                                           | 查看地点列表                                                                                  |
| ~            | setNearbyPoiShowStatus                                     | 展示/取消展示附近小程序                                                                       |
| 插件管理     | applyPlugin                                                | 向插件开发者发起使用插件的申请                                                                |
| ~            | getPluginDevApplyList                                      | 获取当前所有插件使用方（供插件开发者调用）                                                    |
| ~            | getPluginList                                              | 查询已添加的插件                                                                              |
| ~            | setDevPluginApplyStatus                                    | 修改插件使用申请的状态（供插件开发者调用）                                                    |
| ~            | unbindPlugin                                               | 删除已添加的插件                                                                              |
| 二维码       | createWXAQRCode                                            | 获取小程序二维码，适用于需要的码数量较少的业务场景                                            |
| ~            | getWXACode                                                 | 获取小程序码，适用于需要的码数量较少的业务场景                                                |
| ~            | getWXACodeUnlimit                                          | 获取小程序码，适用于需要的码数量极多的业务场景。                                              |
| 内容安全     | imgSecCheck                                                | 校验一张图片是否含有违法违规内容                                                              |
| ~            | msgSecCheck                                                | 检查一段文本是否含有违法违规内容                                                              |
| 模板消息     | addTemplate                                                | 组合模板并添加至帐号下的个人模板库                                                            |
| ~            | deleteTemplate                                             | 删除帐号下的某个模板                                                                          |
| ~            | getTemplateLibraryById                                     | 获取模板库某个模板标题下关键词库                                                              |
| ~            | getTemplateLibraryList                                     | 获取小程序模板库标题列表                                                                      |
| ~            | getTemplateList                                            | 获取帐号下已存在的模板列表                                                                    |
| ~            | sendTemplateMessage                                        | 发送模板消息                                                                                  |
| 更新         | wx.getUpdateManager()                                      | 获取全局唯一的版本更新管理器                                                                  |
| Worker       | wx.createWorker(string scriptPath)                         | 创建一个 Worker 线程。                                                                        |
| 数据上报     | wx.reportMonitor(string name, number value)                | 自定义业务数据监控上报接口                                                                    |
| 基础         | wx.canIUse(string schema)                                  | 判断小程序的API，回调，参数，组件等是否在当前版本可用                                         |
| 定时器       | setTimeout(callback, number delay, any rest)               | 设定一个定时器                                                                                |
| ~            | clearTimeout(number timeoutID)                             | 取消由 setTimeout 设置的定时器                                                                |
| ~            | setInterval(callback, number delay, any rest)              | 设定一个定时器                                                                                |
| ~            | clearInterval(number intervalID)                           | 取消由 setInterval 设置的定时器                                                               |
| 地图         | wx.createMapContext(string mapId, Object this)             | 创建 map 上下文 MapContext 对象。                                                             |
| WXML         | wx.createIntersectionObserver(Object this, Object options) | 创建并返回一个 IntersectionObserver 对象实例                                                  |
| ~            | wx.createSelectorQuery()                                   | 返回一个 SelectorQuery 对象实例                                                               |
| 画布         | wx.canvasPutImageData(obj, Object this)                    | 将像素数据绘制到画布                                                                          |
| ~            | wx.canvasToTempFilePath(obj, Object this)                  | 把当前画布指定区域的内容导出生成指定大小的图片                                                |
| ~            | wx.createCanvasContext(string canvasId, Object this)       | 创建 canvas 的绘图上下文 CanvasContext 对象                                                   |
| ~            | wx.canvasGetImageData(obj, Object this)                    | 获取 canvas 区域隐含的像素数据                                                                |
| 系统信息     | wx.getSystemInfo(obj)                                      | 获取系统信息                                                                                  |
| ~            | wx.getSystemInfoSync()                                     | wx.getSystemInfo 的同步版本                                                                   |
| 第三方平台   | wx.getExtConfig(obj)                                       | 获取第三方平台自定义的数据字段                                                                |
| ~            | wx.getExtConfigSync()                                      | wx.getExtConfig 的同步版本                                                                    |
| 转发         | wx.updateShareMenu(obj)                                    | 更新转发属性                                                                                  |
| ~            | wx.showShareMenu(obj)                                      | 显示当前页面的转发按钮                                                                        |
| ~            | wx.hideShareMenu(obj)                                      | 隐藏转发按钮                                                                                  |
| ~            | wx.getShareInfo(obj)                                       | 获取转发详细信息                                                                              |
| 路由         | wx.navigateBack(obj)                                       | 关闭当前页面，返回上一页面或多级页面                                                          |
| ~            | wx.switchTab(obj)                                          | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面                                              |
| ~            | wx.navigateTo(obj)                                         | 保留当前页面，跳转到应用内的某个页面                                                          |
| ~            | wx.reLaunch(obj)                                           | 关闭所有页面，打开到应用内的某个页面                                                          |
| ~            | wx.redirectTo(obj)                                         | 关闭当前页面，跳转到应用内的某个页面                                                          |
| 调试         | wx.getLogManager()                                         | 获取日志管理器对象                                                                            |
| ~            | wx.setEnableDebug(obj)                                     | 设置是否打开调试开关                                                                          |