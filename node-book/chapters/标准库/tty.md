# TTY

## tty (终端)
> 当 Node.js 检测到它正被运行在一个文本终端（TTY）的上下文中时，则 process.stdin 默认会被初始化为一个 tty.ReadStream 实例，process.stdout 和 process.stderr 默认会被初始化为一个 tty.WriteStream 实例

> 判断 Node.js 是否正被运行在一个 TTY 上下文中的首选方法是去检查 process.stdout.isTTY 属性的值是否为 true

## tty.ReadStream 类
> tty.ReadStream 类是 net.Socket 的一个子类，表示一个 TTY 的可读部分。 正常情况下，process.stdin 是一个 Node.js 进程中唯一的 tty.ReadStream 实例，没有理由创建更多的实例
- readStream.isRaw---一个 boolean 值，如果 TTY 当前被配置成作为一个原始设备来操作，则返回 true。 默认为 false
- readStream.setRawMode(mode)---允许配置 tty.ReadStream 作为一个原始设备来操作
## tty.WriteStream 类
> tty.WriteStream 类是 net.Socket 的一个子类，表示一个 TTY 的可写部分。 正常情况下，process.stdout 和 process.stderr 是一个 Node.js 进程中唯一的 tty.WriteStream 实例，没有理由创建更多的实例
- 'resize' 事件---当 writeStream.columns 属性或 writeStream.rows 属性发生变化时触发 'resize' 事件
- writeStream.columns---一个 number，指明 TTY 当前具有的列数。 当 'resize' 事件被触发时，该属性会被更新
- writeStream.rows---一个 number，指明 TTY 当前具有的行数。 当 'resize' 事件被触发时，该属性会被更新
## tty.isatty(fd)
- fd <number> 一个数值型的文件描述符
> 如果给定的 fd 与一个 TTY 相关联，则 tty.isatty() 方法返回 true，否则返回 false
