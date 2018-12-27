# [dialog](https://www.electronjs.cn/docs/api/dialog)

> 显示用于打开和保存文件、警报等的本机系统对话框

## api 列表

| api                                                                   | more                                                                                                                                                         |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| dialog.showOpenDialog([browserWindow, ]options[, callback])           | 返回 String[] 用户选择的文件路径数组，如果用户定义了callback ，则返回undefined                                                                               |
| dialog.showSaveDialog([browserWindow, ]options[, callback])           | 返回 String[] 用户选择的文件路径数组，如果用户定义了callback ，则返回undefined                                                                               |
| dialog.showMessageBox([browserWindow, ]options[, callback])           | 返回 Integer, 即被点击按钮的索引, 如果提供回调方法, 它返回 undefined                                                                                         |
| dialog.showErrorBox(title, content)                                   | 显示一个显示错误消息的模态对话框                                                                                                                             |
| dialog.showCertificateTrustDialog([browserWindow, ]options, callback) | 在macOS中, 将弹出一个用于展示消息与证书信息并向用户提供信任/导入证书的选项的模态对话框。 如果提供 browserWindow 参数, 则该对话框将附加到父窗口, 使其成模态框 |