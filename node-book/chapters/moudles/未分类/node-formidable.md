# node-formidable

## 特点

- Fast (~500mb/sec), non-buffering multipart parser
- 自动写文件到磁盘
- 低内存占用
- 优雅的错误处理
- 测试覆盖率高

## Formidable.IncomingForm

### 创建新的 incoming form

```javascript
var form = new formidable.IncomingForm()
```

### 属性列表

属性                  | more
------------------- | ---------------------------------------------------------------------------------------
form.encoding       | Sets encoding for incoming form fields
form.uploadDir      | 设置上传文件到存放位置
form.keepExtensions | 上传到文件保存原来到扩展名
form.type           | Either 'multipart' or 'urlencoded' depending on the incoming request.
form.maxFieldsSize  | 限制除了files到所有字段到大小（默认2M）
form.maxFields      | 限制字段的数量（默认1000）
form.hash           | If you want checksums calculated for incoming files, set this to either 'sha1' or 'md5'
form.multiples      | 是否支持上传多个文件
form.bytesReceived  | 到目前为止从表中获取的字节数
form.bytesExpected  | 此表单中预期的字节数
form.onPart         | 设置自定义的处理文件的程序

### 方法列表

方法                        | more
------------------------- | ------------------------
form.parse(request, [cb]) | 解析包含了form data 的 request

### 事件列表

事件        | more
--------- | ---------------------------------------------------------------------------------------------------------
progress  | Emitted after each incoming chunk of data that has been parsed
field     | Emitted whenever a field / value pair has been received
fileBegin | Emitted whenever a new file is detected in the upload stream
file      | Emitted whenever a field / file pair has been received
error     | Emitted when there is an error processing the incoming form
aborted   | Emitted when the request was aborted by the user
end       | Emitted when the entire request has been received, and all contained files have finished flushing to disk

## Formidable.File

### 属性列表

属性                    | more
--------------------- | -------------------------------------------------------------------------
file.size             | 上传文件的字节数（或者已经上传了的字节数）
file.path             | 文件被写入的路径
file.name             | 文件名
file.type             | 文件的 mime type
file.lastModifiedDate | A date object (or null) containing the time this file was last written to
file.hash             | If hash calculation was set, you can read the hex digest out of this var

### 方法列表

方法            | more
------------- | -----------------------------------------------------
file.toJSON() | This method returns a JSON-representation of the file
