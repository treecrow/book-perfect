# Postman

- [官网](https://www.getpostman.com/)
- [Postman Learning Center](https://learning.getpostman.com/)
- [Postman Echo](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722)
- [如果你是Postman的新手，首先要尝试的5件事](http://blog.getpostman.com/2018/04/11/first-5-things-to-try-if-youre-new-to-postman/?_ga=2.167562621.216669487.1538733216-910379531.1538733216)
- [基于Postman的API自动化测试](https://segmentfault.com/a/1190000005055899)

## 区域列表

| 区域               | 功能                 | more                                  |
| ------------------ | -------------------- | ------------------------------------- |
| 顶部左侧           | Create New           | -                                     |
| ~                  | ~                    | Request                               |
| ~                  | ~                    | Collection                            |
| ~                  | ~                    | Environment                           |
| ~                  | ~                    | API Documentation                     |
| ~                  | ~                    | Mock Server                           |
| ~                  | ~                    | Monitor                               |
| ~                  | Templates            | -                                     |
| ~                  | API Network          | -                                     |
| ~                  | Import               | -                                     |
| ~                  | Runner               | 集合运行测试                          |
| 顶部中间           | workspace            | 工作区                                |
| ~                  | team                 | 团队                                  |
| ~                  | invite               | 邀请                                  |
| 顶部右侧           | 刷新                 | Sync your API requests across devices |
| ~                  | 雷达                 | Capture API requests with Postman     |
| ~                  | 🔧                   | 设置                                  |
| ~                  | 🔔                   | 通知                                  |
| ~                  | 圆饼                 | 个人中心                              |
| ~                  | 升级                 | 查看权限和当前账户使用状态            |
| 左侧               | 筛选                 | -                                     |
| ~                  | 历史                 | -                                     |
| ~                  | 集合                 | -                                     |
| ~                  | 创建集合             | -                                     |
| 测试标签页         | 请求方法下拉列表     | -                                     |
| ~                  | url输入框            | -                                     |
| ~                  | Send                 | 发送请求                              |
| ~                  | Save                 | 保存当前请求到某个集合                |
| ~                  | Params               | -                                     |
| ~                  | Authorization        | -                                     |
| ~                  | Headers              | -                                     |
| ~                  | Body                 | -                                     |
| ~                  | Pre-request Script   | -                                     |
| ~                  | Tests                | -                                     |
| ~                  | Cookies              | 为指定域名添加 cookie                 |
| ~                  | Code                 | 收集不同语言请求接口的模版            |
| ~                  | Response             | 接口请求反馈区域                      |
| 标签页更多         | -                    | -                                     |
| 更多区域（右上角） | 下拉菜单             | 选择环境                              |
| ~                  | 👀                   | 查看环境变量                          |
| ~                  | ⚙️                   | 添加环境变量                          |
| 底部左侧           | 切换左侧区域         | -                                     |
| ~                  | 🔍                   | 查找                                  |
| ~                  | postman console      | -                                     |
| 底部右侧           | Build && Browse 切换 | -                                     |
| ~                  | 💡                   | PostMan 新手指导                      |
| ~                  | 🚪                   | 测试标签页上下布局与左右布局切换      |
| ~                  | ⌨️                   | 快捷键概览                            |

## 知识点

| 知识点       | more                 |
| ------------ | -------------------- |
| 使用环境变量 | {{}}将环境变量包起来 |

## Authorization

| type                       | more                                                            |
| -------------------------- | --------------------------------------------------------------- |
| Inherit auth from parent   | 继承父级认证方式                                                |
| No Auth                    | 没有认证                                                        |
| Basic auth                 | Basic 认证                                                      |
| Digest Auth                | Digest 认证                                                     |
| OAuth 1.0                  | -                                                               |
| OAuth 2.0                  | -                                                               |
| Hawk Authentication        | -                                                               |
| AWS Signature              | -                                                               |
| Bearer Token               | 只能在原生 Postman app 中使用（不能再 chrome 浏览器插件中使用） |
| NTLM Authentication [Beta] | ~                                                               |

## pm

| api                                                                                                        | more         |
| ---------------------------------------------------------------------------------------------------------- | ------------ |
| `pm.environment.get("variable_key")`                                                                       | 获取环境变量 |
| `pm.globals.get("variable_key")`                                                                           | 获取全局变量 |
| `pm.variables.get("variable_key")`                                                                         | 获取变量     |
| `pm.environment.set("variable_key", "variable_value")`                                                     | 设置环境变量 |
| `pm.globals.set("variable_key", "variable_value")`                                                         | 设置全局变量 |
| `pm.environment.unset("variable_key")`                                                                     | 清除环境变量 |
| `pm.globals.unset("variable_key")`                                                                         | 清除全局变量 |
| `pm.sendRequest("https://postman-echo.com/get", function (err, response) {console.log(response.json());})` | 发送一个请求 |

## postman

| api                                             | more           |
| ----------------------------------------------- | -------------- |
| `postman.getResponseHeader('WWW-Authenticate')` | 获取响应头字段 |
| `postman.getResponseCookie('some cookie')`      | 获取某个cookie |

## responseCode

| api                 | more           |
| ------------------- | -------------- |
| `responseCode.code` | 接口响应状态码 |

## responseBody

| api                                                  | more                         |
| ---------------------------------------------------- | ---------------------------- |
| `responseBody.has("authenticated")`                  | 判断返回的结果是否有某个字段 |
| `responseBody.has("Found. Redirecting to /cookies")` | -                            |

## tests

| api                                        | more                         |
| ------------------------------------------ | ---------------------------- |
| `tests["some success describe"] = Boolean` | 测试 Boolean 语句是否为 true |

## _

| api                          | more                 |
| ---------------------------- | -------------------- |
| `_.get(obj,key)`             | 获取 obj 的 key 字段 |
| `_.has(responseJSON, 'url')` | -                    |

