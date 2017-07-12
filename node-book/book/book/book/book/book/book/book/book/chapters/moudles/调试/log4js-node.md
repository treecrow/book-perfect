# log4js-node

## 相关文档

- [官方文档](https://nomiddlename.github.io/log4js-node/)

## 特点

- 给日志赋予颜色
- 基于文件大小或日期生成日志文件
- SMTP 附加
- GELF 附加
- Loggly appender
- Logstash UDP appender
- logFaces (UDP and HTTP) appender
- multiprocess appender
- a logger for connect/express servers
- 配置 log 信息 layout/patterns
- 分级

## log level(默认为 OFF，不输出任何内容)

level | more
----- | ----
ALL   | -
TRACE | -
DEBUG | -
INFO  | -
WARN  | -
ERROR | -
FATAL | -
MARK  | -
OFF   | -

## 方法列表

方法                                 | more
---------------------------------- | -------------------------------------------------
log4js.configure(object / string)  | 用于配置log4js的运行方式，string类型会被看作是一个文件的路径，只想一个json配置文件
log4js.getLogger([category])       | 返回 Logger实例对象
`logger.<level>(args...)`          | 相当于console
`logger.is<level>Enabled()`        | 检测对应level是否可用
`logger.addContext(<key>,<value>)` | -
`logger.removeContext(<key>)`      | -
logger.clearContext()              | -
logger.level                       | 获取当前 level信息
logger.level=                      | 直接设置 level级别
log4js.shutdown(cb)                | 注册一个所有log打印完之后的回调
log4js.addLayout(type, fn)         | 用于制作 私人定制的 layout

### log4js.configure(object / string)

> 配置里面至少应该包含一个 appender和 一个 default category，否则报错

- 示例

```javascript
log4js.configure({
  levels(optional): object,
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
```

## Appenders

> appender 表示日志输出的形式，一种logger（category）可以对应多种 appender

### 核心 Appenders(有些需要额外引入其他依赖)

appender       | more
-------------- | ----
categoryFilter | -
console        | -
dateFile       | -
file           | -
fileSync       | -
gelf           | -
hipchat        | -
logFaces-HTTP  | -
logFaces-UDP   | -
loggly         | -
logLevelFilter | -
logstashUDP    | -
mailgun        | -
multiprocess   | -
recording      | -
redis          | -
slack          | -
smtp           | -
stderr         | -
stdout         | -

## Layouts

> 定义输出的格式

### 内置的一些 layout

layout             | more
------------------ | ---------------------------------------------------------------------------------
basic              | [2017-03-30 07:57:00.113] [ERROR] cheese - Cheese is too ripe!（无色）
Coloured           | [2017-03-30 07:57:00.113] [ERROR] cheese - Cheese is too ripe!（有颜色）
messagePassThrough | Cheese is too ripe!（无色）
dummy              | Cheese is too ripe!（无色），与 messagePassThrough 的区别是只打印第一个参数
pattern            | 15:46:45 ERROR default - Cheese is too ripe!（默认），可以通过其中的pattern、tokens等属性定制更个性的输出
