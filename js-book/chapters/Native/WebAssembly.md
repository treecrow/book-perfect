# [WebAssembly](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly)

> WebAssemblyJavaScript 对象是所有 WebAssembly 相关功能的命名空间

## api list

| class  | api                                                    | more                                                                                                                                                              |
| ------ | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 方法   | WebAssembly.instantiate(bufferSource, importObject)    | 用于编译和实例化 WebAssembly 代码的主 API，返回一个 Module 和它的第一个实例。                                                                                     |
| ^      | WebAssembly.instantiateStreaming(source, importObject) | 直接从流式底层源编译和实例化 WebAssembly 模块，同时返回 Module 及其第一个实例。                                                                                   |
| ^      | WebAssembly.compile(bufferSource)                      | 把 WebAssembly 二进制代码编译为一个 WebAssembly.Module ，不进行实例化。                                                                                           |
| ^      | WebAssembly.compileStreaming(source)                   | 直接从流式底层源代码编译 WebAssembly.Module ，将实例化作为一个单独的步骤。                                                                                        |
| ^      | WebAssembly.validate(bufferSource)                     | 校验 WebAssembly 二进制代码的类型数组是否合法，合法则返回 true ，否则返回 false 。                                                                                |
| 构造器 | WebAssembly.Module()                                   | 创建一个新的 WebAssembly 模块对象。 [Module](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module)                 |
| ^      | WebAssembly.Instance()                                 | 创建一个新的 WebAssembly 实例对象。 [Instance](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance)             |
| ^      | WebAssembly.Memory()                                   | 创建一个新的 WebAssembly 内存对象。 [Memory](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory)                 |
| ^      | WebAssembly.Table()                                    | 创建一个新的 WebAssembly 表格对象。 [Table](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table)                   |
| ^      | WebAssembly.CompileError()                             | 创建一个新的 WebAssembly 编译错误对象。 [CompileError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError) |
| ^      | WebAssembly.LinkError()                                | 创建一个新的 WebAssembly 链接错误对象。 [LinkError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError)       |
| ^      | WebAssembly.RuntimeError()                             | 创建一个新的 WebAssembly 运行时错误对象 [RuntimeError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError) |
