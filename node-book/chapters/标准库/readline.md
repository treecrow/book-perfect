# [readline逐行读取](http://nodejs.cn/api/readline.html)

```js
const readline = require('readline');
```
## Interface 类
> readline.Interface 类的实例是使用 readline.createInterface() 方法构造的。 每个实例都关联一个 input 可读流和一个 output 可写流。 output 流用于为到达的用户输入打印提示，且从 input 流读取
### 事件
- close事件
  > 当以下之一发生时，触发 'close' 事件：
    - rl.close() 方法被调用，且 readline.Interface 实例已撤回对 input 流和 output 流的控制；
    - input 流接收到 'end' 事件；
    - input 流接收到表示结束传输的 <ctrl>-D；
    - input 流接收到表示 SIGINT 的 <ctrl>-C，且 readline.Interface 实例上没有注册 SIGINT 事件监听器
- line事件---每当 input 流接收到接收行结束符（\n、\r 或 \r\n）时触发 'line' 事件
- pause事件
  > 当以下之一发生时触发 'pause' 事件：
    - input 流被暂停。
    - input 流不是暂停的，且接收到 SIGCONT 事件。（详见 SIGTSTP 事件和 SIGCONT 事件）
- resume事件---每当 input 流被恢复时触发 'resume' 事件
- SIGCONT事件---当一个 Node.js 进程使用 <ctrl>-Z（也就是 SIGTSTP）移入后台之后再使用 fg(1) 移回前台时，触发 'SIGCONT' 事件。
- SIGINT事件---每当 input 流接收到一个 <ctrl>-C 输入（通常被称为 SIGINT）时，触发 'SIGINT' 事件
- SIGTSTP事件---每当 input 流接收到一个 <ctrl>-Z 输入（通常被称为 SIGTSTP）时，触发 'SIGTSTP' 事件
### 方法
- rl.close()---rl.close() 方法会关闭 readline.Interface 实例，且撤回对 input 和 output 流的控制
- rl.pause()---rl.pause() 方法会暂停 input 流，且稍后需要时可被恢复
- rl.prompt([preserveCursor])---会在 output 流中新的一行写入 readline.Interface 实例配置后的 prompt，用于为用户提供一个可供输入的新的位置
- rl.question(query, callback)---通过写入到 output 来展示 query，并等待用户提供到 input 的输入，然后调用 callback 函数并传入提供的输入作为第一个参数
- rl.resume()---如果 input 流已被暂停，则 rl.resume() 方法会恢复 input 流
- rl.setPrompt(prompt)---rl.setPrompt() 方法用于设置每当 rl.prompt() 被调用时要被写入到 output 的提示
- rl.write(data[, key])---把 data 或一个由 key 指定的按键序列写入到 output。 只有当 output 是一个 TTY 文本终端时，key 参数才被支持

## 其它类方法
- readline.clearLine(stream, dir)---会以 dir 指定的方向清除给定的 TTY 流的当前行
- readline.clearScreenDown(stream)---会从光标的当前位置向下清除给定的 TTY 流
- readline.createInterface(options)---会创建一个新的 readline.Interface 实例
  > options
    - input---要监听的可读流(Readable)
    - output---要写入逐行读取数据的可写流(Writable)
    - completer---一个可选的函数，用于 Tab 自动补全(Function)
    - terminal---如果 input 和 output 应被当作一个 TTY，且要写入 ANSI/VT100 转换的代码，则设为 true。 默认为实例化时在 output 流上检查 isTTY(boolean)
    - historySize---保留的历史行数的最大数量。 设为 0 可禁用历史记录。 默认为 30。 该选项只有当 terminal 被用户或内部 output 设为 true 时才有意义，否则历史缓存机制不会被初始化(number)
    - prompt---要使用的提示字符串。默认为 '> '
    - crlfDelay---如果 \r 与 \n 之间的延迟超过 crlfDelay 毫秒，则 \r 和 \n 都会被当作换行分隔符。 默认为 100 毫秒。 crlfDelay 的范围为 [100, 2000]
- readline.cursorTo(stream, x, y)---会移动光标到给定的 TTY stream 中指定的位置
- readline.emitKeypressEvents(stream[, interface])---使给定的可写流 stream 相应于接收到的输入触发 'keypress' 事件
- readline.moveCursor(stream, dx, dy)---会移动光标到给定的 TTY stream 中相对当前的位置
