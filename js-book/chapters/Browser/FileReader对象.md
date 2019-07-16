# FileReader对象

## api列表

| api                              | more                            |
|----------------------------------|---------------------------------|
| var reader = new FileReader()    | -                               |
| reader.readyState                | 0-未读取任何信息；1-读取到一些数据；2-数据完全读取完毕  |
| reader.result                    | 包含部分或者完整的结果（字符串或者ArrayBuffer形式） |
| reader.readAsText(blob[,编码方式])   | 默认采用ASCII和UTF-8文本处理             |
| reader.readAsArrayBuffer(blob,)  | -                               |
| reader.readAsDataURL(blob,)      | 可以将图片转换成链接                      |
| reader.readAsBinaryString(blob,) | -                               |

## 事件列表

| event     | more |
|-----------|------|
| load      | -    |
| error     | -    |
| progress  | -    |
| loadstart | -    |
| loadend   | -    |
| abort     | -    |
