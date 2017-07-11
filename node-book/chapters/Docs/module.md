# module模块

## 模块系统

语句                    | more
--------------------- | ---------------
require('src/lib.js') | -
exports.name1         | 单个导出（name1是必须的）

## 属性列表

属性                 | more
------------------ | ---------------------------------------------------
require.main       | node直接运行的模块
module             | 当前所在模块
module.children    | 被该模块引用的模块对象
moudle.exports =   | 定义在整个模块上的导出（默认）
module.filename    | 模块的完全解析后的文件名
module.id          | 模块的标识符。 通常是完全解析后的文件名
module.loaded      | 模块是否已经加载完成，或正在加载中
module.parent      | 最先引用该模块的模块
module.require(id) | module.require 方法提供了一种类似 require() 从原始模块被调用的加载模块的方式

## 方法列表

方法                | more
----------------- | ----
require.resolve() | -
