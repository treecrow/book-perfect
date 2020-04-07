# XSS 与 CSRF

- [前端安全：XSS与CSRF](https://zhuanlan.zhihu.com/p/31553667)

## 跨站脚本攻击 (Cross Site Scripting, 安全专家们通常将其缩写成 XSS)

> XSS 是一种常见的 web 安全漏洞，它允许攻击者将恶意代码植入到提供给其它用户使用的页面中。

- 避免 XSS 攻击方法

| 方法                                         | more                                                                         |
| -------------------------------------------- | ---------------------------------------------------------------------------- |
| CSP(Content Security Policy)                 | 限制一个页面的行为是否是受 javascript 控制的                                 |
| 对于任何用户输入的信息，入库之前都要进行转义 | -                                                                            |
| Http-Only                                    | 使用 http-only 保护 cookie。可以保证即使发生了 xss，用户的 cookie 也是安全的 |

## 跨站请求伪造攻击（Cross Site Request Forgery, 缩写为 CSRF)

> 攻击者假装以你的身份发送请求

- 避免 CSRF 攻击方法

| 方法                    | 缺陷             |
| ----------------------- | ---------------- |
| 验证 HTTP Referer 字段  | 可以篡改 Referer |
| 验证码                  | -                |
| 尽量使用 POST，限制 GET | -                |
| 添加 token 验证         | -                |
| SameSite Cookies        | -                |
