# [console控制台](http://nodejs.cn/api/console.html)

### Console类
> Console 类可用于创建一个具有可配置的输出流的简单记录器，可以通过 require('console').Console 或 console.Console 使用
```js
const Console = require('console').Console;
const Console = console.Console;
```

### 创建Console实例
```js
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// 自定义的简单记录器
const logger = new Console(output, errorOutput);
// 像 console 一样使用
const count = 5;
logger.log('count: %d', count);
// stdout.log 中打印: count 5
```

### Console实例方法汇总
- console.assert(value[, message][, ...args])---一个简单的断言测试，验证 value 是否为真
- console.dir(obj[, options])---在 obj 上使用 util.inspect() 并打印结果字符串到 stdout(可用于打印对象)
- console.error([data][, ...args])---打印到 stderr，并带上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 printf(3) 中的代替值
- console.info([data][, ...args])---console.info() 函数是 console.log() 的一个别名
- console.log([data][, ...args])---打印到 stdout，并带上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 printf(3) 中的代替值
- console.time(label)---启动一个定时器，用以计算一个操作的持续时间
- console.timeEnd(label)---停止之前通过调用 console.time() 启动的定时器
- console.trace(message[, ...args])---打印字符串 'Trace :' 到 stderr ，并通过 util.format() 格式化消息与堆栈跟踪在代码中的当前位置
- console.warn([data][, ...args])---console.warn() 函数是 console.error() 的一个别名
