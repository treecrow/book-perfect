# wx

| 分类         | 功能                                                                                          | api                                                        |
| ------------ | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 上传         | 将本地资源上传到服务器                                                                        | wx.uploadFile(Object object)                               |
| WebSocket    | 监听WebSocket 错误事件                                                                        | wx.onSocketError(function callback)                        |
| ~            | 监听WebSocket 接受到服务器的消息事件                                                          | wx.onSocketMessage(function callback)                      |
| ~            | 监听WebSocket 连接关闭事件                                                                    | wx.onSocketClose(function callback)                        |
| ~            | 监听WebSocket 连接打开事件                                                                    | wx.onSocketOpen(function callback)                         |
| ~            | 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。 | wx.sendSocketMessage(Object object)                        |
| ~            | 关闭 WeSocket 连接                                                                            | wx.closeSocket(Object object)                              |
| ~            | 创建一个 WebSocket 连接                                                                       | wx.connectSocket(Object object)                            |
| 发送请求     | 发起 HTTPS 网络请求                                                                           | wx.request(Object object)                                  |
| 下载         | 下载文件资源到本地                                                                            | wx.downloadFile(Object object)                             |
| 音频         | 设置 InnerAudioContext 的播放选项                                                             | wx.setInnerAudioOption(Object object)                      |
| ~            | 获取当前支持的音频输入源                                                                      | wx.getAvailableAudioSources(Object object)                 |
| ~            | 创建内部 audio 上下文 InnerAudioContext 对象                                                  | wx.createInnerAudioContext()                               |
| 录音         | 获取全局唯一的录音管理器 RecorderManager                                                      | wx.getRecorderManager()                                    |
| 背景音频     | 获取全局唯一的背景音频管理器                                                                  | wx.getBackgroundAudioManager()                             |
| 相机         | 创建 camera 上下文 CameraContext 对象                                                         | wx.createCameraContext()                                   |
| 实时视音频   | 创建 live-player 上下文 LivePlayerContext 对象                                                | wx.createLivePlayerContext(string id, Object this)         |
| ~            | 创建 live-pusher 上下文 LivePusherContext 对象                                                | wx.createLivePusherContext()                               |
| 视频         | 创建 video 上下文 VideoContext 对象                                                           | wx.createVideoContext(string id, Object this)              |
| ~            | 保存视频到系统相册                                                                            | wx.saveVideoToPhotosAlbum(Object object)                   |
| ~            | 拍摄视频或从手机相册中选视频                                                                  | wx.chooseVideo(Object object)                              |
| 图片         | 保存图片到系统相册                                                                            | wx.saveImageToPhotosAlbum(Object object)                   |
| ~            | 获取图片信息。网络图片需先配置download域名才能生效                                            | wx.getImageInfo(Object object)                             |
| ~            | 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作                    | wx.previewImage(Object object)                             |
| ~            | 从本地相册选择图片或使用相机拍照                                                              | wx.chooseImage(Object object)                              |
| 字体         | 动态加载网络字体。文件地址需为下载类型。iOS 仅支持 https 格式文件地址                         | wx.loadFontFace(Object object)                             |
| 文件         | 保存文件到本地                                                                                | wx.saveFile(Object object)                                 |
| ~            | 新开页面打开文档                                                                              | wx.openDocument(Object object)                             |
| ~            | 获取该小程序下已保存的本地缓存文件列表                                                        | wx.getSavedFileList(Object object)                         |
| ~            | 获取本地文件的文件信息                                                                        | wx.getSavedFileInfo(Object object)                         |
| ~            | 删除本地缓存文件                                                                              | wx.removeSavedFile(Object object)                          |
| ~            | 获取全局唯一的文件管理器                                                                      | wx.getFileSystemManager()                                  |
| ~            | 获取文件信息                                                                                  | wx.getFileInfo(Object object)                              |
| 数据缓存     | wx.getStorageInfo 的同步版本                                                                  | wx.getStorageInfoSync()                                    |
| ~            | 异步获取当前storage的相关信息                                                                 | wx.getStorageInfo(Object object)                           |
| ~            | wx.clearStorage 的同步版本                                                                    | wx.clearStorageSync()                                      |
| ~            | 清理本地数据缓存                                                                              | wx.clearStorage(Object object)                             |
| ~            | wx.removeStorage 的同步版本                                                                   | wx.removeStorageSync(string key)                           |
| ~            | 从本地缓存中移除指定 key                                                                      | wx.removeStorage(Object object)                            |
| ~            | wx.setStorage 的同步版本                                                                      | wx.setStorageSync(string key, Object/string data)          |
| ~            | 将数据存储在本地缓存中指定的 key 中                                                           | wx.setStorage(Object object)                               |
| ~            | wx.getStorage 的同步版本                                                                      | wx.getStorageSync(string key)                              |
| ~            | 从本地缓存中异步获取指定 key 的内容                                                           | wx.getStorage(Object object)                               |
| 位置         | 打开地图选择位置                                                                              | wx.chooseLocation(Object object)                           |
| ~            | ​使用微信内置地图查看位置                                                                     | wx.openLocation(Object object)                             |
| ~            | 获取当前的地理位置、速度                                                                      | wx.getLocation(Object object)                              |
| 罗盘         | 开始监听罗盘数据                                                                              | wx.startCompass(Object object)                             |
| ~            | 停止监听罗盘数据                                                                              | wx.stopCompass(Object object)                              |
| ~            | 监听罗盘数据变化事件                                                                          | wx.onCompassChange(function callback)                      |
| Wi-Fi        | 关闭 Wi-Fi 模块                                                                               | wx.stopWifi(Object object)                                 |
| ~            | 初始化 Wi-Fi 模块                                                                             | wx.startWifi(Object object)                                |
| ~            | 设置 wifiList 中 AP 的相关信                                                                  | wx.setWifiList(Object object)                              |
| ~            | 监听连接上 Wi-Fi 的事件                                                                       | wx.onWifiConnected(function callback)                      |
| ~            | 监听获取到 Wi-Fi 列表数据事件                                                                 | wx.onGetWifiList(function callback)                        |
| ~            | 请求获取 Wi-Fi 列表                                                                           | wx.getWifiList(Object object)                              |
| ~            | 获取已连接中的 Wi-Fi 信息                                                                     | wx.getConnectedWifi(Object object)                         |
| ~            | 连接 Wi-Fi                                                                                    | wx.connectWifi(Object object)                              |
| NFC          | 关闭 NFC 模块                                                                                 | wx.stopHCE(Object object)                                  |
| ~            | 初始化 NFC 模块                                                                               | wx.startHCE(Object object)                                 |
| ~            | 发送 NFC 消息。仅在安卓系统下有效                                                             | wx.sendHCEMessage(Object object)                           |
| ~            | 监听NFC 设备的消息回调                                                                        | wx.onHCEMessage(function callback)                         |
| ~            | 判断当前设备是否支持 HCE 能力                                                                 | wx.getHCEState(Object object)                              |
| 低功耗蓝牙   | 向低功耗蓝牙设备特征值中写入二进制数据                                                        | wx.writeBLECharacteristicValue(Object object)              |
| ~            | 读取低功耗蓝牙设备的特征值的二进制数据值                                                      | wx.readBLECharacteristicValue(Object object)               |
| ~            | 监听低功耗蓝牙连接状态的改变事件                                                              | wx.onBLEConnectionStateChange(function callback)           |
| ~            | 监听低功耗蓝牙设备的特征值变化                                                                | wx.onBLECharacteristicValueChange(function callback)       |
| ~            | 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值                                      | wx.notifyBLECharacteristicValueChange(Object object)       |
| ~            | 获取蓝牙设备所有服务(service)                                                                 | wx.getBLEDeviceServices(Object object)                     |
| ~            | 获取蓝牙设备某个服务中所有特征值(characteristic)                                              | wx.getBLEDeviceCharacteristics(Object object)              |
| ~            | 连接低功耗蓝牙设备                                                                            | wx.createBLEConnection(Object object)                      |
| ~            | 断开与低功耗蓝牙设备的连接                                                                    | wx.closeBLEConnection(Object object)                       |
| 蓝牙         | 停止搜寻附近的蓝牙外围设备                                                                    | wx.stopBluetoothDevicesDiscovery(Object object)            |
| ~            | 开始搜寻附近的蓝牙外围设备                                                                    | wx.startBluetoothDevicesDiscovery(Object object)           |
| ~            | 初始化蓝牙模块                                                                                | wx.openBluetoothAdapter(Object object)                     |
| ~            | 监听寻找到新设备的事件                                                                        | wx.onBluetoothDeviceFound(function callback)               |
| ~            | 监听蓝牙适配器状态变化事件                                                                    | wx.onBluetoothAdapterStateChange(function callback)        |
| ~            | 根据 uuid 获取处于已连接状态的设备                                                            | wx.getConnectedBluetoothDevices(Object object)             |
| ~            | 获取在蓝牙模块生效期间所有已发现的蓝牙设备                                                    | wx.getBluetoothDevices(Object object)                      |
| ~            | 获取本机蓝牙适配器状态                                                                        | wx.getBluetoothAdapterState(Object object)                 |
| ~            | 关闭蓝牙模块                                                                                  | wx.closeBluetoothAdapter(Object object)                    |
| 性能         | 监听内存不足告警事件                                                                          | wx.onMemoryWarning(function callback)                      |
| 加速计       | 开始监听加速度数据                                                                            | wx.startAccelerometer(Object object)                       |
| ~            | 停止监听加速度数据                                                                            | wx.stopAccelerometer(Object object)                        |
| ~            | 监听加速度数据事件                                                                            | wx.onAccelerometerChange(function callback)                |
| 电量         | 获取设备电量                                                                                  | wx.getBatteryInfo(Object object)                           |
| ~            | wx.getBatteryInfo 的同步版本                                                                  | wx.getBatteryInfoSync()                                    |
| 剪贴板       | 获取系统剪贴板的内容                                                                          | wx.getClipboardData(Object object)                         |
| ~            | 设置系统剪贴板的内容                                                                          | wx.setClipboardData(Object object)                         |
| 屏幕         | 设置屏幕亮度                                                                                  | wx.setScreenBrightness(Object object)                      |
| ~            | 设置是否保持常亮状态                                                                          | wx.setKeepScreenOn(Object object)                          |
| ~            | 监听用户主动截屏事件                                                                          | wx.onUserCaptureScreen(function callback)                  |
| ~            | 获取屏幕亮度                                                                                  | wx.getScreenBrightness(Object object)                      |
| 联系人       | 添加手机通讯录联系人                                                                          | wx.addPhoneContact(Object object)                          |
| 陀螺仪       | 开始监听陀螺仪数据                                                                            | wx.startGyroscope(Object object)                           |
| ~            | 停止监听陀螺仪数据                                                                            | wx.stopGyroscope(Object object)                            |
| ~            | 监听陀螺仪数据变化事件                                                                        | wx.onGyroscopeChange(function callback)                    |
| iBeacon      | 开始搜索附近的 iBeacon 设备                                                                   | wx.startBeaconDiscovery(Object object)                     |
| ~            | 停止搜索附近的 iBeacon 设备                                                                   | wx.stopBeaconDiscovery(Object object)                      |
| ~            | 获取所有已搜索到的 iBeacon 设备                                                               | wx.getBeacons(Object object)                               |
| ~            | 监听 iBeacon 设备更新事件                                                                     | wx.onBeaconUpdate(function callback)                       |
| ~            | 监听 iBeacon 服务的状态变化                                                                   | wx.onBeaconServiceChange(function callback)                |
| 设备方向     | 开始监听设备方向的变化                                                                        | wx.startDeviceMotionListening(Object object)               |
| ~            | 停止监听设备方向的变化                                                                        | wx.stopDeviceMotionListening(Object object)                |
| ~            | 监听设备方向变化事件                                                                          | wx.onDeviceMotionChange(function callback)                 |
| 网络         | 获取网络类型                                                                                  | wx.getNetworkType(Object object)                           |
| ~            | 监听网络状态变化事件                                                                          | wx.onNetworkStatusChange(function callback)                |
| 电话         | 拨打电话                                                                                      | wx.makePhoneCall(Object object)                            |
| 扫码         | 调起客户端扫码界面进行扫码                                                                    | wx.scanCode(Object object)                                 |
| 振动         | 使手机发生较短时间的振动                                                                      | wx.vibrateShort(Object object)                             |
| ~            | 使手机发生较长时间的振动                                                                      | wx.vibrateLong(Object object)                              |
| 窗口         | 取消监听窗口尺寸变化事件                                                                      | wx.offWindowResize(function callback)                      |
| ~            | 监听窗口尺寸变化事件                                                                          | wx.onWindowResize(function callback)                       |
| 导航栏       | 设置页面导航条颜色                                                                            | wx.setNavigationBarColor(Object object)                    |
| ~            | 在当前页面隐藏导航条加载动画                                                                  | wx.hideNavigationBarLoading(Object object)                 |
| ~            | 在当前页面显示导航条加载动画                                                                  | wx.showNavigationBarLoading(Object object)                 |
| ~            | 动态设置当前页面的标题                                                                        | wx.setNavigationBarTitle(Object object)                    |
| 置顶         | 动态设置置顶栏文字内容                                                                        | wx.setTopBarText(Object object)                            |
| Tab Bar      | 动态设置 tabBar 某一项的内容                                                                  | wx.setTabBarItem(Object object)                            |
| ~            | 动态设置 tabBar 的整体样式                                                                    | wx.setTabBarStyle(Object object)                           |
| ~            | 隐藏 tabBar                                                                                   | wx.hideTabBar(Object object)                               |
| ~            | 显示 tabBar                                                                                   | wx.showTabBar(Object object)                               |
| ~            | 隐藏 tabBar 某一项的右上角的红点                                                              | wx.hideTabBarRedDot(Object object)                         |
| ~            | 显示 tabBar 某一项的右上角的红点                                                              | wx.showTabBarRedDot(Object object)                         |
| ~            | 移除 tabBar 某一项右上角的文本                                                                | wx.removeTabBarBadge(Object object)                        |
| ~            | 为 tabBar 某一项的右上角添加文本                                                              | wx.setTabBarBadge(Object object)                           |
| 背景         | 动态设置下拉背景字体、loading 图的样式                                                        | wx.setBackgroundTextStyle(Object object)                   |
| ~            | 动态设置窗口的背景色                                                                          | wx.setBackgroundColor(Object object)                       |
| 自定义组件   | 延迟一部分操作到下一个时间片再执行                                                            | wx.nextTick(function callback)                             |
| 下拉刷新     | 停止当前页面下拉刷新。                                                                        | wx.stopPullDownRefresh(Object object)                      |
| ~            | 开始下拉刷新                                                                                  | wx.startPullDownRefresh(Object object)                     |
| 滚动         | 将页面滚动到目标位置                                                                          | wx.pageScrollTo(Object object)                             |
| 交互         | ​显示操作菜单                                                                                 | wx.showActionSheet(Object object)                          |
| ~            | 隐藏 loading 提示框                                                                           | wx.hideLoading(Object object)                              |
| ~            | 显示 loading 提示框                                                                           | wx.showLoading(Object object)                              |
| ~            | 隐藏消息提示框                                                                                | wx.hideToast(Object object)                                |
| ~            | 显示消息提示框                                                                                | wx.showToast(Object object)                                |
| ~            | 显示模态对话框                                                                                | wx.showModal(Object object)                                |
| 菜单         | 获取菜单按钮的布局置信息                                                                      | wx.getMenuButtonBoundingClientRect()                       |
| 动画         | 创建一个动画实例 animation                                                                    | wx.createAnimation(Object object)                          |
| 授权         | 提前向用户发起授权请求                                                                        | wx.authorize(Object object)                                |
| 支付         | 支付各个安全场景验证人脸                                                                      | wx.faceVerifyForPay(Object object)                         |
| ~            | 发起微信支付                                                                                  | wx.requestPayment(Object object)                           |
| 小程序跳转   | 打开另一个小程序                                                                              | wx.navigateToMiniProgram(Object object)                    |
| ~            | 返回到上一个小程序                                                                            | wx.navigateBackMiniProgram(Object object)                  |
| 生物认证     | 开始 SOTER 生物认证                                                                           | wx.startSoterAuthentication(Object object)                 |
| ~            | 获取本机支持的 SOTER 生物认证方式                                                             | wx.checkIsSupportSoterAuthentication(Object object)        |
| ~            | 获取设备内是否录入如指纹等生物信息的接口                                                      | wx.checkIsSoterEnrolledInDevice(Object object)             |
| 设置         | 调起客户端小程序设置界面，返回用户设置的操作结果                                              | wx.openSetting(Object object)                              |
| ~            | 获取用户的当前设置                                                                            | wx.getSetting(Object object)                               |
| 数据分析     | 自定义分析数据上报接口                                                                        | wx.reportAnalytics(string eventName, Object data)          |
| ~            | 获取用户访问小程序数据周趋势                                                                  | getAnalysisWeeklyVisitTrend                                |
| ~            | 获取用户访问小程序数据概况                                                                    | getAnalysisDailySummary                                    |
| ~            | 获取用户访问小程序数据日趋势                                                                  | getAnalysisDailyVisitTrend                                 |
| ~            | 获取用户访问小程序周留存                                                                      | getAnalysisMonthlyRetain                                   |
| ~            | 获取用户访问小程序日留存                                                                      | getAnalysisDailyRetain                                     |
| ~            | 获取小程序新增或活跃用户的画像分布数据                                                        | getAnalysisUserPortrait                                    |
| ~            | 获取用户小程序访问分布数据                                                                    | getAnalysisVisitDistribution                               |
| ~            | 访问页面                                                                                      | getAnalysisVisitPage                                       |
| ~            | 获取用户访问小程序周留存                                                                      | getAnalysisWeeklyRetain                                    |
| ~            | 获取用户访问小程序数据月趋势                                                                  | getAnalysisMonthlyVisitTrend                               |
| 微信运动     | 获取用户过去三十天微信运动步数                                                                | wx.getWeRunData(Object object)                             |
| 用户信息     | 获取用户信息                                                                                  | wx.getUserInfo(Object object)                              |
| 发票         | 选择用户的发票抬头                                                                            | wx.chooseInvoiceTitle(Object object)                       |
| ~            | 选择用户已有的发票                                                                            | wx.chooseInvoice(Object object)                            |
| 卡券         | 查看微信卡包中的卡券                                                                          | wx.openCard(Object object)                                 |
| ~            | 批量添加卡券                                                                                  | wx.addCard(Object object)                                  |
| 当前账号信息 | 获取当前账号信息                                                                              | wx.getAccountInfoSync()                                    |
| 收货地址     | 获取用户收货地址                                                                              | wx.chooseAddress(Object object)                            |
| 登录         | 检查登录态是否过期。                                                                          | wx.checkSession(Object object)                             |
| ~            | 调用接口获取登录凭证（code）                                                                  | wx.login(Object object)                                    |
| 统一服务消息 | 下发小程序和公众号统一的服务消息                                                              | sendUniformMessage                                         |
| 接口调用凭证 | 获取小程序 access_token                                                                       | getAccessToken                                             |
| 客服消息     | 下发客服当前输入状态给用户                                                                    | customerTyping                                             |
| ~            | 获取客服消息内的临时素材                                                                      | getTempMedia                                               |
| ~            | 发送客服消息给用户                                                                            | sendCustomerMessage                                        |
| ~            | 把媒体文件上传到微信服务器                                                                    | uploadTempMedia                                            |
| 附近的小程序 | 添加地点                                                                                      | addNearbyPoi                                               |
| ~            | 删除地点                                                                                      | deleteNearbyPoi                                            |
| ~            | 查看地点列表                                                                                  | getNearbyPoiList                                           |
| ~            | 展示/取消展示附近小程序                                                                       | setNearbyPoiShowStatus                                     |
| 插件管理     | 向插件开发者发起使用插件的申请                                                                | applyPlugin                                                |
| ~            | 获取当前所有插件使用方（供插件开发者调用）                                                    | getPluginDevApplyList                                      |
| ~            | 查询已添加的插件                                                                              | getPluginList                                              |
| ~            | 修改插件使用申请的状态（供插件开发者调用）                                                    | setDevPluginApplyStatus                                    |
| ~            | 删除已添加的插件                                                                              | unbindPlugin                                               |
| 二维码       | 获取小程序二维码，适用于需要的码数量较少的业务场景                                            | createWXAQRCode                                            |
| ~            | 获取小程序码，适用于需要的码数量较少的业务场景                                                | getWXACode                                                 |
| ~            | 获取小程序码，适用于需要的码数量极多的业务场景。                                              | getWXACodeUnlimit                                          |
| 内容安全     | 校验一张图片是否含有违法违规内容                                                              | imgSecCheck                                                |
| ~            | 检查一段文本是否含有违法违规内容                                                              | msgSecCheck                                                |
| 模板消息     | 组合模板并添加至帐号下的个人模板库                                                            | addTemplate                                                |
| ~            | 删除帐号下的某个模板                                                                          | deleteTemplate                                             |
| ~            | 获取模板库某个模板标题下关键词库                                                              | getTemplateLibraryById                                     |
| ~            | 获取小程序模板库标题列表                                                                      | getTemplateLibraryList                                     |
| ~            | 获取帐号下已存在的模板列表                                                                    | getTemplateList                                            |
| ~            | 发送模板消息                                                                                  | sendTemplateMessage                                        |
| 更新         | 获取全局唯一的版本更新管理器                                                                  | wx.getUpdateManager()                                      |
| Worker       | 创建一个 Worker 线程。                                                                        | wx.createWorker(string scriptPath)                         |
| 数据上报     | 自定义业务数据监控上报接口                                                                    | wx.reportMonitor(string name, number value)                |
| 基础         | 判断小程序的API，回调，参数，组件等是否在当前版本可用                                         | wx.canIUse(string schema)                                  |
| 定时器       | 设定一个定时器                                                                                | setTimeout(function callback, number delay, any rest)      |
| ~            | 取消由 setTimeout 设置的定时器                                                                | clearTimeout(number timeoutID)                             |
| ~            | 设定一个定时器                                                                                | setInterval(function callback, number delay, any rest)     |
| ~            | 取消由 setInterval 设置的定时器                                                               | clearInterval(number intervalID)                           |
| 地图         | 创建 map 上下文 MapContext 对象。                                                             | wx.createMapContext(string mapId, Object this)             |
| WXML         | 创建并返回一个 IntersectionObserver 对象实例                                                  | wx.createIntersectionObserver(Object this, Object options) |
| ~            | 返回一个 SelectorQuery 对象实例                                                               | wx.createSelectorQuery()                                   |
| 画布         | 将像素数据绘制到画布                                                                          | wx.canvasPutImageData(Object object, Object this)          |
| ~            | 把当前画布指定区域的内容导出生成指定大小的图片                                                | wx.canvasToTempFilePath(Object object, Object this)        |
| ~            | 创建 canvas 的绘图上下文 CanvasContext 对象                                                   | wx.createCanvasContext(string canvasId, Object this)       |
| ~            | 获取 canvas 区域隐含的像素数据                                                                | wx.canvasGetImageData(Object object, Object this)          |
| 系统信息     | 获取系统信息                                                                                  | wx.getSystemInfo(Object object)                            |
| ~            | wx.getSystemInfo 的同步版本                                                                   | wx.getSystemInfoSync()                                     |
| 第三方平台   | 获取第三方平台自定义的数据字段                                                                | wx.getExtConfig(Object object)                             |
| ~            | wx.getExtConfig 的同步版本                                                                    | wx.getExtConfigSync()                                      |
| 转发         | 更新转发属性                                                                                  | wx.updateShareMenu(Object object)                          |
| ~            | 显示当前页面的转发按钮                                                                        | wx.showShareMenu(Object object)                            |
| ~            | 隐藏转发按钮                                                                                  | wx.hideShareMenu(Object object)                            |
| ~            | 获取转发详细信息                                                                              | wx.getShareInfo(Object object)                             |
| 路由         | 关闭当前页面，返回上一页面或多级页面                                                          | wx.navigateBack(Object object)                             |
| ~            | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面                                              | wx.switchTab(Object object)                                |
| ~            | 保留当前页面，跳转到应用内的某个页面                                                          | wx.navigateTo(Object object)                               |
| ~            | 关闭所有页面，打开到应用内的某个页面                                                          | wx.reLaunch(Object object)                                 |
| ~            | 关闭当前页面，跳转到应用内的某个页面                                                          | wx.redirectTo(Object object)                               |
| 调试         | 获取日志管理器对象                                                                            | wx.getLogManager()                                         |
| ~            | 设置是否打开调试开关                                                                          | wx.setEnableDebug(Object object)                           |