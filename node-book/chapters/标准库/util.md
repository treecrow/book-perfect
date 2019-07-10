# [util](http://nodejs.cn/api/util.html)

## 方法列表

方法                               | 功能
-------------------------------- | -------------------------------------------------------------------------------------------------------------------
util.inspect(object[, options])  | 返回 object 的字符串表示，主要用于调试。 附加的 options 可用于改变格式化字符串的某些方面
util.debuglog(section)           | 用于创建一个函数，基于 NODE_DEBUG 环境变量的存在与否有条件地写入调试信息到 stderr。 如果 section 名称在环境变量的值中，则返回的函数类似于 console.error()。 否则，返回的函数是一个空操作
util.deprecate(function, string) | 会包装给定的 function 或类，并标记为废弃的
util.format(format[, ...args])   | 返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式
