# [systemPreferences](https://www.electronjs.cn/docs/api/system-preferences)

> 获取system preferences.

## api 列表

| api                                                               | more                                                                                                             |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| systemPreferences.isDarkMode()                                    | 返回Boolean，表示系统是否处于Dark模式                                                                            |
| systemPreferences.isSwipeTrackingFromScrollEventsEnabled()        | 返回值 Boolean - 是否在页面设置之间进行滑动。                                                                    |
| systemPreferences.postNotification(event, userInfo)               | 发送 event 作为macOS的原生通知                                                                                   |
| systemPreferences.postLocalNotification(event, userInfo)          | 发送 event 作为macOS的原生通知                                                                                   |
| systemPreferences.postWorkspaceNotification(event, userInfo)      | 发送 event 作为macOS的原生通知                                                                                   |
| systemPreferences.subscribeNotification(event, callback)          | 订阅macOS的原生通知，当通信的 event</ 0>发生时，将调用 <code>callback(event, userInfo)                           |
| systemPreferences.subscribeLocalNotification(event, callback)     | Returns Number - The ID of this subscription                                                                     |
| systemPreferences.subscribeWorkspaceNotification(event, callback) | Same as subscribeNotification, but uses NSWorkspace.sharedWorkspace.notificationCenter                           |
| systemPreferences.unsubscribeNotification(id)                     | 使用 id 删除订阅。                                                                                               |
| systemPreferences.unsubscribeLocalNotification(id)                | 与unsubscribeNotification相同，但将订户从NSNotificationCenter中删除                                              |
| systemPreferences.unsubscribeWorkspaceNotification(id)            | Same as unsubscribeNotification, but removes the subscriber from NSWorkspace.sharedWorkspace.notificationCenter. |
| systemPreferences.registerDefaults(defaults)                      | 在应用的NSUserDefaults配置项中添加其它默认设置。                                                                 |
| systemPreferences.getUserDefault(key, type)                       | 返回 any - NSUserDefaults 中 key 的值.                                                                           |
| systemPreferences.setUserDefault(key, type, value)                | 设置 NSUserDefaults 中 key 的值.                                                                                 |
| systemPreferences.removeUserDefault(key)                          | 删除 NSUserDefaults 中的 key                                                                                     |
| systemPreferences.isAeroGlassEnabled()                            | 返回 Boolean - true 如果启用了 DWM composition (Aero Glass), 否则为 false                                        |
| systemPreferences.getAccentColor()                                | 返回 String - 用户当前系统偏好颜色，RGBA 十六进制形式.                                                           |
| systemPreferences.getColor(color)                                 | 返回 String -系统颜色设置为RGB十六进制格式 (#ABCDEF).                                                            |
| systemPreferences.isInvertedColorScheme()                         | 返回 Boolean - true 如果反转颜色方案（如高对比度主题）处于活动状态，否则为false                                  |

## 事件列表

| event                         | more |
| ----------------------------- | ---- |
| accent-color-changed          | -    |
| color-changed                 | -    |
| inverted-color-scheme-changed | -    |