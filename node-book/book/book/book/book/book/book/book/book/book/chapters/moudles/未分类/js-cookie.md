# js-cookie

## api 列表

api                                                    | more
------------------------------------------------------ | -------------------------------------
Cookies.noConflict()                                   | 生成一个 Cookie 实例，解决 Namespace conflicts
Cookies.withConverter()                                | 生成一个 Cookie 实例，重写 cookie 解析和编写规则
Cookies.set('name', 'value')                           | Create a cookie
Cookies.set('name', 'value', { expires: 7 })           | ~
Cookies.set('name', 'value', { expires: 7, path: '' }) | ~
Cookies.get('name')                                    | Read cookie
Cookies.get()                                          | Read all visible cookies
Cookies.getJSON('name')                                | 读出来的数据为 JSON 对象格式
Cookies.remove('name')                                 | Delete cookie
Cookies.remove('name', { path: '' })                   | ~

## Cookie Attributes

字段      | more
------- | -----------------
expires | cookie 什么时候过期
path    | 那些路径下 cookie 可见
domain  | 指定那个域名下 cookie 可见
secure  | 是否只在 https 下可用
