# mime-types

## 方法列表

方法                     | more
---------------------- | -----------------------------------------------
mime.lookup(path)      | 根据一个文件的路径返回对应的 content-type
mime.contentType(type) | 根据 content-type 或者 扩展名获取完整的 content-type header
mime.extension(type)   | 根据 content-type 获取扩展名
mime.charset(type)     | 获取一个 content-type 默认的 charset
mime.types[extension]  | 根据扩展名获取对应的 content-type 列表
mime.extensions[type]  | 根据 content-type 获取 对应的扩展列表
