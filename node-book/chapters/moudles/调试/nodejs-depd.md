# nodejs-depd

> 除了 deprecate(message) 不知道其他用法，感觉就是个 console

## 列表

..列表                                   | more
-------------------------------------- | -------------
depd(namespace)                        | 创建一个deprecate
deprecate(message)                     | 打印一条 message
deprecate.function(fn, message)        | -
deprecate.property(obj, prop, message) | -
process.on('deprecation', fn)          | -
process.env.NO_DEPRECATION             | -
process.env.TRACE_DEPRECATION          | -
