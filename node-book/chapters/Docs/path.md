# path路径

> path 模块提供了一些工具函数，用于处理文件与目录的路径

## 不同操作系统路径的不同（Windows 与 POSIX）

- path.win32

  > 要想在任何操作系统上处理 Windows 文件路径时获得一致的结果，可以使用 path.win32

- path.posix

  > 要想在任何操作系统上处理 POSIX 文件路径时获得一致的结果，可以使用 path.posix

## 属性列表

属性             | 含义
-------------- | -----------------------------------------
path.delimiter | 提供平台特定的路径分隔符（Windows 上是 ; POSIX 上是 :）
path.sep       | 提供了平台特定的路径片段分隔符（Windows 上是 \ ,POSIX 上是 /）
path.posix     | path.posix 属性提供了 path 方法针对 POSIX 的实现
path.win32     | path.win32 属性提供了 path 方法针对 Windows 的实现

## 方法列表

方法                         | 作用
-------------------------- | ---------------------------------------
path.dirname(path)         | 返回一个 path 的目录名(除了最后一部分)
path.basename(path[, ext]) | 返回一个 path 的最后一部分
path.extname(path)         | 返回 path 的扩展名（最后一部分的后半部分）
path.isAbsolute(path)      | 判定 path 是否为一个绝对路径
path.normalize(path)       | 规范化给定的 path
path.join([...paths])      | 使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径
path.resolve([...paths])   | 把一个路径或路径片段的序列解析为一个绝对路径
path.relative(from, to)    | 返回从 from 到 to 的相对路径

- 解析与整合（好像这两个方法不支持了）

方法                      | 作用
----------------------- | --------------------------------------------------
path.parse(path)        | 返回一个对象，对象的属性表示 path 的元素
path.format(pathObject) | path.format() 方法会从一个对象返回一个路径字符串。 与 path.parse() 相反
