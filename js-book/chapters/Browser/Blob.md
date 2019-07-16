# Blob

## api列表

| api               | more        |
|-------------------|-------------|
| new BlobBuilder() | -           |
| blob.append()     | 合并多个blob    |
| blob.size         | 获取大小（字节为单位） |
| blob.type         | MIME类型      |
| blob.slice()      | 分割为更小都Blob  |
| blob.getBlob()    | -           |

## Blob应用场景

| 应用场景        | 写                              | 读                             |
|-------------|--------------------------------|-------------------------------|
| web         | XMLHttpRequest.send()          | XMLHttpRequest.response()     |
| URL         | URL.createObjectURL()          | FileReader.readAsDataURL()(写) |
| 文件系统        | FileWriter                     | File                          |
| 文本          | FileReader.readAsText()        | BlobBuilder.append()          |
| ArrayBuffer | FileReader.readAsArrayBuffer() | BoldBuilder.append()          |
| Worker      | postMessage()                  | message event                 |
| 数据库         | IndexedDB API                  | IndexedDB API                 |
