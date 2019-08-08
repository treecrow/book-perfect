# [cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

```js
// 读取所有可从此位置访问的Cookie
allCookies = document.cookie;
// 写一个新 cookie
document.cookie = newCookie;
```

## key list

| key                               | 例子                                           | more                                                                                                                                                                             |
| --------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ;path=path                        | (例如 '/', '/mydir')                           | 如果没有定义，默认为当前文档位置的路径。                                                                                                                                         |
| ;domain=domain                    | (例如 'example.com'， 'subdomain.example.com') | 如果没有定义，默认为当前文档位置的路径的域名部分。与早期规范相反的是，在域名前面加 . 符将会被忽视，因为浏览器也许会拒绝设置这样的 cookie。如果指定了一个域，那么子域也包含在内。 |
| ;max-age=max-age-in-seconds       | (例如一年为 60*60*24\*365)                     |
| ;expires=date-in-GMTString-format | -                                              | 如果没有定义，cookie 会在对话结束时过期。 这个值的格式参见 Date.toUTCString()                                                                                                    |
| ;secure                           |                                                | cookie 只通过 https 协议传输                                                                                                                                                     |
