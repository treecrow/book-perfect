# [nativeImage](https://electronjs.org/docs/api/native-image)

## api 列表

| api                                                     | more                                                            |
| ------------------------------------------------------- | --------------------------------------------------------------- |
| nativeImage.createEmpty()                               | 创建一个空的 NativeImage 实例                                   |
| nativeImage.createFromPath(path)                        | 从位于 path 的文件创建新的 NativeImage 实例。                   |
| nativeImage.createFromBuffer(buffer[, options])         | 返回 NativeImage 从 buffer 创建新的 NativeImage 实例            |
| nativeImage.createFromDataURL(dataURL)                  | 从 dataURL 创建新的 NativeImage 实例                            |
| nativeImage.createFromNamedImage(imageName[, hslShift]) | 从映射到给定图像名称的 NSImage 创建一个 NativeImage 实例        |
| image.toPNG([options])                                  | 返回 Buffer-一个包含图像 PNG 编码数据的 Buffer                  |
| image.toBitmap([options])                               | 返回 Buffer-一个包含图像的原始位图像素数据副本的 Buffer 。      |
| image.getBitmap([options])                              | 返回 Buffer-一个包含图像原始位图像素数据的 Buffer               |
| image.getNativeHandle()                                 | 返回 Buffer-一个 Buffer , 它将 C 指针存储在图像的基础本机句柄上 |
| image.isEmpty()                                         | 返回 Boolean-图像是否为空。                                     |
| image.getSize()                                         | Returns Size                                                    |
| image.setTemplateImage(option)                          | 将图像标记为模板图像。                                          |
| image.isTemplateImage()                                 | 返回 Boolean-图像是否为模板图像。                               |
| image.crop(rect)                                        | 返回 NativeImage-裁剪的图像                                     |
| image.resize(options)                                   | 返回 NativeImage-裁剪的图像                                     |
| image.getAspectRatio()                                  | 返回 Float - 图像的长宽比.                                      |
| image.addRepresentation(options)                        | 添加特定比例的图像表示                                          |
