# REPL交互式解释器

```js
const repl = require('repl');
```

## 命令与特殊键
> 所有 REPL 的实例都支持下列特殊命令：
- .break - 在输入一个多行表达式的过程中，输入 .break 命令（或按下 <ctrl>-C 组合键）将终止表达式的继续输入。
- .clear - 重置 REPL 的 context 为一个空对象，并清除当前正输入的所有多行表达式。
- .exit - 关闭输入输出流，退出 REPL。
- .help - 显示特定命令的帮助列表。
- .save - 保存当前 REPL 会话到一个文件： > .save ./file/to/save.js
- .load - 读取一个文件到当前 REPL 会话。 > .load ./file/to/load.js
- .editor 进入编辑模式（<ctrl>-D 完成，<ctrl>-C 取消）
> REPL 中下列按键组合有特殊作用：
- ctrl+C - 当按下一次时，与 .break 命令的效果一样。当在空白行按下两次时，与 .exit 命令的效果一样。
- ctrl+D - 与 .exit 命令的效果一样。
- tab - 当在空白行按下时，显示全局和本地作用域内的变量。当在输入时按下，显示相关的自动补全选项

## repl.start([options])1
  > 创建并启动一个 repl.REPLServer 实例
#### options
- prompt---要显示的输入提示符。默认为 >
- input--- REPL 输入要被读取的可读流。默认为 process.stdin
- output---REPL 输出要被写入的可写流。默认为 process.stdout
- terminal---如果为 true，则指定 output 应被当作一个 TTY 终端，并且可以使用 ANSI/VT100 转义码写入。 默认值为初始化时 output 流的 isTTY 属性的值
- eval---当解释每行输入时使用的函数。默认为 JavaScript eval() 函数的异步封装。 eval 函数出错时会返回 repl.Recoverable，表明输入不完整并提示用户完成输入
- useColors---如果为 true，则指定默认的 writer 函数可以在 REPL 输出中包含 ANSI 颜色风格
- useGlobal---如果为 true，则指定默认的解释函数使用 JavaScript global 作为上下文，而不是为 REPL 实例创建一个新的独立的上下文。 默认为 false
- ignoreUndefined---如果为 true，则指定默认的输出器不会输出命令返回的 undefined 值。 默认为 false
- writer---在写入到 output 之前，该函数被调用用来格式化每个命令的输出。 默认为 util.inspect()
- completer---可选的函数，用来自定义 Tab 键的自动补全
- replMode--- 一个标志位，指定默认的解释器使用严格模式、默认模式、或混合模式中的哪一种来执行 JavaScript 命令
- breakEvalOnSigint---当接收到 SIGINT 时停止解释当前代码，比如按下 Ctrl+C。 不能与自定义的 eval 函数同时使用。 默认为 false

## 解释器
> 默认情况下，所有 repl.REPLServer 实例使用了一个解释函数，它可以解释 JavaScript 表达式、提供对 Node.js 内置模块的访问。 当 repl.REPLServer 实例被创建时可以传入一个替换的解释函数，覆盖其默认的功能
- JavaScript 表达式
- 全局作用域与局部作用域
- 访问 Node.js 核心模块
- _（下划线）变量的赋值
#### 自定义的解释函数
- 可恢复的错误
  > 当用户正在 REPL 中输入时，按下 <enter> 键会把当前行的输入发送到 eval 函数。 为了支持多行输入，eval 函数可以返回一个 repl.Recoverable 实例给提供的回调函数
 
#### 自定义 REPL 输出
> 默认情况下，在把输出写入到提供的可写流（默认为 process.stdout）之前，repl.REPLServer 实例会使用 util.inspect() 方法对输出进行格式化。 使用 util.inspect() 方法时，useColors 选项可被指定是否在建立默认输出器时使用 ANSI 风格的代码给输出上色

## REPLServer 类
> repl.REPLServer 的实例由 repl.start() 方法创建
#### 事件
- 'exit' 事件---当接收到 .exit 命令、或按下两次 <ctrl>-C 发出 SIGINT 信号、或按下 <ctrl>-D 发出 'end' 信号而使 REPL 被退出时，触发 'exit' 事件
- 'reset' 事件---当 REPL 的上下文被重置时，触发 'reset' 事件
#### 方法
- replServer.defineCommand(keyword, cmd)---用于添加新的前缀为 . 的命令到 REPL 实例
- replServer.displayPrompt([preserveCursor])---让 REPL 实例做好用户输入的准备，打印配置的 prompt 到 output 中新的一行，然后返回 input 等待新的输入

## Node.js REPL
#### 在高级的行编辑器中使用 Node.js REPL
  > 对于高级的行编辑器，可以使用环境变量 NODE_NO_READLINE=1 来启动 Node.js。 这会以标准的终端配置来启动主 REPL 和调试 REPL，可以使用 rlwrap


