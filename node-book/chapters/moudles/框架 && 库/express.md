# express

## 相关文档

| 文档                                             | more |
|------------------------------------------------|------|
| [官方 API](https://expressjs.com/en/4x/api.html) | -    |

## express()

| 分类         | 方法                              | more          |
|------------|---------------------------------|---------------|
| express 方法 | express.static(root, [options]) | 静态文件服务        |
| ~          | express.Router([options])       | 创建一个新的路由对象    |
| ~          | express()                       | 创建 express 应用 |

## Application

| 分类     | 方法                                                  | more                                   |
|--------|-----------------------------------------------------|----------------------------------------|
| 实例属性   | app.locals                                          | 定义 app 的本地变量                           |
| ~      | app.mountpath                                       | 包含子 app 的安装路径                          |
| 实例事件   | app.on('mount', callback(parent))                   | sub-app 被安装的时候出发 parent-app 的 mount 事件 |
| 实例方法   | app.all(path, callback [, callback ...])            | 任何 HTTP 操作都会触发                         |
| ~      | app.delete(path, callback [, callback ...])         | delete 请求 会触发                          |
| ~      | app.disable(name)                                   | 将 app 的某些设置字段设置为 false                 |
| ~      | app.disabled(name)                                  | 如果 app 设置中的对应字段为 false，则返回 true        |
| ~      | app.enable(name)                                    | ~                                      |
| ~      | app.enabled(name)                                   | ~                                      |
| ~      | app.engine(ext, callback)                           | 设置文件的渲染引擎                              |
| ~      | app.get(name)                                       | 获取 app 设置中相应字段的值                       |
| ~      | app.listen(path, [callback])                        | 连接指定的路径到 unix sockt 上                  |
| ~      | app.listen(port, [hostname], [backlog], [callback]) | 绑定、监听制定 hostname 和 端口的连接               |
| ~      | app.METHOD(path, callback [, callback ...])         | -                                      |
| ~      | app.param([name], callback)                         | 路由参数触发器，可以根据路由的参数做进一步的反应               |
| ~      | app.path()                                          | 返回 app 的安装路径                           |
| ~      | app.get(path, callback [, callback ...])            | 处理 HTTP GET 请求                         |
| ~      | app.post(path, callback [, callback ...])           | -                                      |
| ~      | app.put(path, callback [, callback ...])            | -                                      |
| ~      | app.render(view, [locals], callback)                | 获取一个 view 渲染为 html 后的数据                |
| ~      | app.route(path)                                     | 创建单一的路由 实例                             |
| ~      | app.set(name, value)                                | 设置 app 的设置                             |
| ~      | app.use([path,] callback [, callback...])           | 安装中间件到指定的路径                            |
| app 设置 | case sensitive routing                              | -                                      |
| ~      | env                                                 | -                                      |
| ~      | etag                                                | -                                      |
| ~      | jsonp callback name                                 | -                                      |
| ~      | json replacer                                       | -                                      |
| ~      | json spaces                                         | -                                      |
| ~      | query parser                                        | -                                      |
| ~      | strict routing                                      | -                                      |
| ~      | subdomain offset                                    | -                                      |
| ~      | trust proxy                                         | -                                      |
| ~      | views                                               | -                                      |
| ~      | view cache                                          | -                                      |
| ~      | view engine                                         | -                                      |
| ~      | x-powered-by                                        | -                                      |

## Request

属性列表

| 属性                | more           |
|-------------------|----------------|
| req.app           | app 实例自身       |
| req.baseUrl       | router 实例安装的路径 |
| req.originalUrl   | -              |
| req.path          | -              |
| req.body          | 健值对形式的请求体      |
| req.cookies       | 健值对形式的 cookie  |
| req.signedCookies | -              |
| req.fresh         | 内容是否新鲜         |
| req.stale         | 内容是否不新鲜了       |
| req.hostname      | 获取请求的 hostname |
| req.ip            | 获取请求的 ip       |
| req.ips           | -              |
| req.method        | -              |
| req.params        | 路径的参数          |
| req.protocol      | 请求协议           |
| req.query         | 路径查询参数         |
| req.route         | 当前匹配的路径对象      |
| req.secure        | 是否使用 https     |
| req.subdomains    | 子域名数组          |
| req.xhr           | 请求是否来自 ajax    |

方法列表

| 方法                     | more |
|------------------------|------|
| req.accepts()          | -    |
| req.acceptsCharsets()  | -    |
| req.acceptsEncodings() | -    |
| req.acceptsLanguages() | -    |
| req.get()              | -    |
| req.is()               | -    |
| req.param()            | -    |
| req.range()            | -    |

## Response

## Router