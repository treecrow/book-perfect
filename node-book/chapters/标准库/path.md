# path

> 路径

## api list

| api                         | more                                                                     |
| --------------------------- | ------------------------------------------------------------------------ |
| path.basename(path[, ext])  | 返回一个 path 的最后一部分                                               |
| path.delimiter              | 提供平台特定的路径分隔符（Windows 上是 ; POSIX 上是 :）                  |
| path.dirname(path)          | 返回一个 path 的目录名(除了最后一部分)                                   |
| path.extname(path)          | 返回 path 的扩展名（最后一部分的后半部分）                               |
| path.format(pathObject)     | path.format() 方法会从一个对象返回一个路径字符串。 与 path.parse() 相反  |
| path.isAbsolute(path)       | 判定 path 是否为一个绝对路径                                             |
| path.join([...paths])       | 使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径 |
| path.resolve([...paths])    | 把一个路径或路径片段的序列解析为一个绝对路径                             |
| path.normalize(path)        | 规范化给定的 path                                                        |
| path.parse(path)            | 返回一个对象，对象的属性表示 path 的元素                                 |
| path.posix                  | path.posix 属性提供了 path 方法针对 POSIX 的实现                         |
| path.relative(from, to)     | 返回从 from 到 to 的相对路径                                             |
| path.sep                    | 提供了平台特定的路径片段分隔符（Windows 上是 \ ,POSIX 上是 /）           |
| path.toNamespacedPath(path) | -                                                                        |
| path.win32                  | path.win32 属性提供了 path 方法针对 Windows 的实现                       |
