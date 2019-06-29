# REPL

> 交互式解释器

## api 列表

| api                                        | more                                                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| replServer = repl.start([options])         | 创建并启动一个 repl.REPLServer 实例                                                                                 |
| replServer.defineCommand(keyword, cmd)     | 用于添加新的前缀为 . 的命令到 REPL 实例。 这些命令通过输入一个 . 加 keyword 来调用                                  |
| replServer.displayPrompt([preserveCursor]) | 让 REPL 实例做好用户输入的准备，打印配置的 prompt 到 output 中新的一行，然后返回 input 等待新的输入                 |
| replServer.clearBufferedCommand()          | 清除已缓冲但尚未执行的任何命令。 此方法主要用于在使用 replServer.defineCommand() 方法注册的命令的 action 函数内调用 |

## repl.start()选项列表

| option            | more                                                                                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| prompt            | 要显示的输入提示符。默认为 >                                                                                                                   |
| eval              | 当解释每行输入时使用的函数。默认为 JavaScript eval() 函数的异步封装。 eval 函数出错时会返回 repl.Recoverable，表明输入不完整并提示用户完成输入 |
| writer            | 在写入到 output 之前，该函数被调用用来格式化每个命令的输出。 默认为 util.inspect()                                                             |
| input             | REPL 输入要被读取的可读流。默认为 process.stdin                                                                                                |
| output            | REPL 输出要被写入的可写流。默认为 process.stdout                                                                                               |
| terminal          | 如果为 true，则指定 output 应被当作一个 TTY 终端，并且可以使用 ANSI/VT100 转义码写入。 默认值为初始化时 output 流的 isTTY 属性的值             |
| useColors         | 如果为 true，则指定默认的 writer 函数可以在 REPL 输出中包含 ANSI 颜色风格                                                                      |
| useGlobal         | 如果为 true，则指定默认的解释函数使用 JavaScript global 作为上下文，而不是为 REPL 实例创建一个新的独立的上下文。 默认为 false                  |
| ignoreUndefined   | 如果为 true，则指定默认的输出器不会输出命令返回的 undefined 值。 默认为 false                                                                  |
| completer         | 可选的函数，用来自定义 Tab 键的自动补全                                                                                                        |
| replMode          | 一个标志位，指定默认的解释器使用严格模式、默认模式、或混合模式中的哪一种来执行 JavaScript 命令                                                 |
| breakEvalOnSigint | 当接收到 SIGINT 时停止解释当前代码，比如按下 Ctrl+C。 不能与自定义的 eval 函数同时使用。 默认为 false                                          |

## 事件列表

| 事件    | more                                                                                                                           |
| ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 'exit'  | 当接收到 .exit 命令、或按下两次 <ctrl>-C 发出 SIGINT 信号、或按下 <ctrl>-D 发出 'end' 信号而使 REPL 被退出时，触发 'exit' 事件 |
| 'reset' | 当 REPL 的上下文被重置时，触发 'reset' 事件。 每当接收到 .clear 命令时会触发该事件                                             |

## 特殊命令列表

| 命令    | more                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------ |
| .break  | 在输入一个多行表达式的过程中，输入 .break 命令（或按下 <ctrl>-C 组合键）将终止表达式的继续输入。 |
| .exit   | 关闭输入输出流，退出 REPL。 (ctrl+D 或连续两次 ctrl+C 效果于此相同)                              |
| <tab>   | 当在空白行按下时，显示全局和本地作用域内的变量。当在输入时按下，显示相关的自动补全选项           |
| .clear  | 重置 REPL 的 context 为一个空对象，并清除当前正输入的所有多行表达式。                            |
| .help   | 显示特定命令的帮助列表。                                                                         |
| .save   | 保存当前 REPL 会话到一个文件： > .save ./file/to/save.js                                         |
| .load   | 读取一个文件到当前 REPL 会话。 > .load ./file/to/load.js                                         |
| .editor | 进入编辑模式（<ctrl>-D 完成，<ctrl>-C 取消）                                                     |

## 解释器

> 默认情况下，所有 repl.REPLServer 实例使用了一个解释函数，它可以解释 JavaScript 表达式、提供对 Node.js 内置模块的访问。 当 repl.REPLServer 实例被创建时可以传入一个替换的解释函数，覆盖其默认的功能

- JavaScript 表达式
- 全局作用域与局部作用域
- 访问 Node.js 核心模块
- \_（下划线）变量的赋值

## Node.js REPL

#### 在高级的行编辑器中使用 Node.js REPL

> 对于高级的行编辑器，可以使用环境变量 NODE_NO_READLINE=1 来启动 Node.js。 这会以标准的终端配置来启动主 REPL 和调试 REPL，可以使用 rlwrap
