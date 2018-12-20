# remote

> 在渲染进程中使用主进程模块

> remote 模块为渲染进程（web页面）和主进程通信（IPC）提供了一种简单方法

## api 列表

| api                            | more                                                                                                 |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| remote.require(module)         | 返回 any - 主进程中require(module) 返回的对象。 由其相对路径指定的模块将相对于主进程的入口点来解析。 |
| remote.getCurrentWindow()      | 返回 BrowserWindow - 此网页所属的窗口                                                                |
| remote.getCurrentWebContents() | 返回 WebContents - 此网页的 web 内容                                                                 |
| remote.getGlobal(name)         | 返回 any-主进程中 name (例如 global[name]) 的全局变量                                                |
| remote.process                 | 主进程中的 process 对象                                                                              |