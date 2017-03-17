
## Immediate 类

## Timeout 类
- timeout.ref()---调用时，只要 Timeout 处于活动状态就要求 Node.js 事件循环不要退出
- timeout.unref()---当调用时，活动的 Timeout 对象不要求 Node.js 事件循环保持活动

## 预定定时器
- setImmediate(callback[, ...args])
- setInterval(callback, delay[, ...args])
- setTimeout(callback, delay[, ...args])
## 取消定时器
- clearImmediate(immediate)
- clearInterval(timeout)
- clearTimeout(timeout)
