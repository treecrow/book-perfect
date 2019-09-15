# Values

> 配置 key-value 数据，之后可以在 Rules 使用对应的键值进行引用

## 请求信息列表

| key         | value                     | 释义 |
| ----------- | ------------------------- | ---- |
| url         | `${url}`                  | -    |
| port        | `${port}`                 | -    |
| version     | `${version}`              | -    |
| search      | `${url.search}`           | -    |
| query       | `${url.query}`            | -    |
| queryValue  | `${url.query.name}`       | -    |
| host        | `${url.host}`             | -    |
| hostname    | `${url.hostname}`         | -    |
| path        | `${url.path}`             | -    |
| pathname    | `${url.pathname}`         | -    |
| reqId       | `${reqId}`                | -    |
| now         | `${now}`                  | -    |
| method      | `${method}`               | -    |
| xff         | `${reqHeaders.x-test}`    | -    |
| other       | `${reqHeaders.other}`     | -    |
| cookie      | `${reqCookie}`            | -    |
| cookieValue | `${reqCookie.cookieName}` | -    |
| clientIp    | `${clientIp}"`            | -    |

## 响应信息列表

| key            | value                             | 释义 |
| -------------- | --------------------------------- | ---- |
| url            | `${url}`                          | -    |
| search         | `${url.search}`                   | -    |
| query          | `${url.query}`                    | -    |
| queryValue     | `${url.query.name}`               | -    |
| host           | `${url.host}`                     | -    |
| hostname       | `${url.hostname}`                 | -    |
| path           | `${url.path}`                     | -    |
| pathname       | `${url.pathname}`                 | -    |
| reqId          | `${reqId}`                        | -    |
| now            | `{now`                            | -    |
| method         | `${method}`                       | -    |
| xff            | `${reqHeaders.x-forwarded-for}`   | -    |
| other          | `${reqHeaders.other}`             | -    |
| cookie         | `${reqCookie}`                    | -    |
| cookieValue    | `${reqCookie.cookieName}`         | -    |
| clientIp       | `${clientIp}`                     | -    |
| statusCode     | `${statusCode}`                   | -    |
| serverIp       | `${serverIp}`                     | -    |
| resHeaderValue | `${resHeaders.x-res-header-name}` | -    |
| resCookieValue | `${resCookie.res_cookie_name}`    | -    |
