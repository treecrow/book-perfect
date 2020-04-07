# [whistle](https://wproxy.org/whistle/)

## 文档

-   [cli](./cli.md)
-   [Network](./Network.md)
-   [Plugins](./Plugins.md)
-   [Rules](./Rules.md)
-   [Values](./Values.md)

## whistle 功能概览

| class      | point                                   |
| ---------- | --------------------------------------- |
| 抓包重放   | 查看请求响应数据                        |
| ^          | 重放请求(Replay)                        |
| ^          | 构造请求(Composer))                     |
| ^          | 导入导出抓包数据(支持 saz 或 txt 文件)  |
| 修改请求   | 修改请求 URL 或参数                     |
| ^          | 设置服务器 IP(host)                     |
| ^          | 修改请求方法                            |
| ^          | 修改请求头                              |
| ^          | 修改请求内容                            |
| ^          | 注入或替换内容                          |
| ^          | 限制速度或延迟请求                      |
| 修改响应   | 修改响应状态码                          |
| ^          | 修改响应头                              |
| ^          | 修改相应内容                            |
| ^          | 注入或替换内容                          |
| ^          | 限制速度或延迟响应                      |
| Socket     | 设置服务器 IP(host)                     |
| ^          | 查看发送及接受的帧数据                  |
| ^          | 修改发送及接受的帧数据                  |
| ^          | 构造 Socket(TCP)请求                    |
| WebSocket  | 修改请求 URL 或参数                     |
| ^          | 设置服务器 IP(hosts)                    |
| ^          | 修改请求或响应头                        |
| ^          | 查看发送及接受的帧数据                  |
| ^          | 修改发送及接受的帧数据                  |
| ^          | 构造 WebSocket 请求                     |
| 设置代理   | 设置 HTTP 代理                          |
| ^          | 设置 socks 代理                         |
| ^          | 设置 pac 脚本                           |
| 反向代理   | 实现类似 Nginx 的功能                   |
| ^          | 可视化动态修改配置及抓包                |
| 移动端调试 | 内置 weinre 修改移动端页面 DOM 结构     |
| ^          | 获取手机端页面 console 数据             |
| ^          | 自动捕获 JS 页面异常堆栈                |
| ^          | 注入 vconsole 或 Eruda                  |
| 插件扩展   | 扩展 whistle 满足一些复杂场景的调试需求 |
| ^          | 扩展 whistle 功能满足自身业务相关的需求 |
| ^          | 扩展 whistle 功能实现多任务处理         |
| 其他功能   | 请求数据导出 txt、saz 文件              |
| ^          | 通过 txt、saz、har 文件导入请求数据     |
