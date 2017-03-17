# error错误

### 错误类型汇总
- 标准的 JavaScript 错误
  - EvalError : 当调用 eval() 失败时抛出。
  - SyntaxError : 当 JavaScript 语法错误时抛出。
  - RangeError : 当一个值不在预期范围内时抛出。
  - ReferenceError : 当使用未定义的变量时抛出。
  - TypeError : 当传入错误类型的参数时抛出。
  - URIError : 当一个全局的 URI 处理函数被误用时抛出。
- 由底层操作系的触发的系统错误，例如试图打开一个不存在的文件、试图向一个已关闭的 socket 发送数据等
- 由应用程序代码触发的用户自定义的错误
- 断言错误是错误的一个特殊的类，每当 Node.js 检测到一个不应该发生的异常逻辑时会触发。 这类错误通常由 assert 模块触发

### 错误的报告方式
- 除了少数例外，同步的 API（任何不接受 callback 函数的阻塞方法，例如 fs.readFileSync）会使用 throw 报告错误
- callback 函数接受error对象做参数,并做进一步的处理
- 异步方法被EventEmitter 对象调用时,错误会被分发到对象的 'error' 事件上
- 有一小部分普通的异步方法仍可能使用 throw 机制抛出异常，且必须使用 try / catch 处理

### EventEmitter 对象无'error' 事件句柄的情况
> 对于所有的 EventEmitter 对象，如果没有提供一个 'error' 事件句柄，则错误会被抛出，并造成 Node.js 进程报告一个未处理的异常且随即崩溃，除非： 适当地使用 domain 模块或已经注册了一个 process.on('uncaughtException') 事件的句柄

### Error类 && Error实例
#### 方法
- Error.captureStackTrace(targetObject[, constructorOpt])
  > 在 targetObject 上创建一个 .stack 属性，当访问时返回一个表示代码中调用 Error.captureStackTrace() 的位置的字符串
  
#### 属性
- Error.stackTraceLimit---指定了堆栈跟踪收集的栈帧数量
- error.message---返回错误的字符串描述，通过调用 new Error(message) 设置
- error.stack---返回一个字符串，描述代码中 Error 被实例化的位置

### 系统错误
> 略

