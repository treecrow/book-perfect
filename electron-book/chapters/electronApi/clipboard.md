# [clipboard](https://electronjs.org/docs/api/clipboard)

> 在系统剪贴板上执行复制和粘贴操作

## api 列表

| api                                           | more                                                                                                                            |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| clipboard.readText([type])                    | 返回 String- 剪贴板中的纯文本内容。                                                                                             |
| clipboard.writeText(text[, type])             | 将 text 作为纯文本写入剪贴板。                                                                                                  |
| clipboard.readHTML([type])                    | 返回 String- 剪贴板中的HTML内容。                                                                                               |
| clipboard.writeHTML(markup[, type])           | 将 markup 写入剪贴板。                                                                                                          |
| clipboard.readImage([type])                   | 返回 NativeImage- 剪贴板中的图像内容。                                                                                          |
| clipboard.writeImage(image[, type])           | 将 image 写入剪贴板。                                                                                                           |
| clipboard.readRTF([type])                     | 返回 String- 剪贴板中的RTF内容。                                                                                                |
| clipboard.writeRTF(text[, type])              | 向剪贴板中写入 RTF 格式的 text                                                                                                  |
| clipboard.readBookmark()                      | 返回一个对象, 其中包含表示剪贴板中书签 title 和 url                                                                             |
| clipboard.writeBookmark(title, url[, type])   | 将书签的 title 和 url 写入剪贴板。                                                                                              |
| clipboard.readFindText()                      | 返回 String- 查找粘贴板上的文本。 此方法在从渲染进程调用时使用同步 IPC。 每当激活应用程序时, 都会从查找粘贴板中重新读取缓存值。 |
| clipboard.writeFindText(text)                 | 将 text 作为纯文本写入查找粘贴板。此方法在从渲染进程调用时使用同步 IPC。                                                        |
| clipboard.clear([type])                       | 清除剪贴板内容。                                                                                                                |
| clipboard.availableFormats([type])            | 返回 String []- 剪贴板 type 所支持的格式的数组。                                                                                |
| clipboard.has(format[, type])                 | 返回 Boolean, 剪贴板是否支持指定的 format                                                                                       |
| clipboard.read(format)                        | 返回 String- 从剪贴板中读取 format 类型的内容。                                                                                 |
| clipboard.readBuffer(format)                  | 返回 Buffer- 从剪贴板中读取 format 类型的内容。                                                                                 |
| clipboard.writeBuffer(format, buffer[, type]) | 将 buffer 作为 format 类型写入剪贴板                                                                                            |
| clipboard.write(data[, type])                 | 将 data 写入剪贴板。                                                                                                            |