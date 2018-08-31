# wx

| 分类       | api                                     | more                                                         |
| ---------- | --------------------------------------- | ------------------------------------------------------------ |
| 实时音视频 | wx.createLivePlayerContext(domId, this) | 操作对应的 <live-player/> 组件                               |
| 导航       | wx.navigateTo(OBJECT)                   | 保留当前页面，跳转到应用内的某个页面                         |
| 扫码       | wx.scanCode(OBJECT)                     | 调起客户端扫码界面，扫码成功后返回对应的结果                 |
| 位置       | wx.getLocation(OBJECT)                  | 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用 |