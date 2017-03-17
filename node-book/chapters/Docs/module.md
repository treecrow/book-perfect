# module模块

- module.children---被该模块引用的模块对象
- module.exports---module.exports 对象是由模块系统创建的
  > exports 快捷方式:exports 变量是在模块的文件级别作用域内有效的，它在模块被执行前被赋于 module.exports 的值
- module.filename---模块的完全解析后的文件名
- module.id---模块的标识符。 通常是完全解析后的文件名
- module.loaded---模块是否已经加载完成，或正在加载中
- module.parent---最先引用该模块的模块
- module.require(id)---module.require 方法提供了一种类似 require() 从原始模块被调用的加载模块的方式

## 目录作为模块
- 在根目录下创建一个 package.json 文件，并指定一个 main 模块
- 从 node_modules 目录加载
- 从全局目录加载
