# jwt

## header

```json
{
  "alg": "HS256", //使用的算法
  "typ": "JWT" //类型
}
```

## payload

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

### claims 类型列表

| 类型             | more                                                                                                                                    |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| reserved claim | reserved claim是预先定义好的，不强制使用但推荐使用的一组claim，比如 iss(issuer 发布者), exp(expiration time 失效时间)，sub(subject 主题），aud(audience 听众) 等。用于说明一些有用的交互信息 |
| public claim   | public claim,是指由JTWs所定义的，但是为了防止和其他名字发生重名的claims。它们需要定义成IANA JSON web token registery 里面 或者定义成一个URI，这个URI包含一组固定的命名                       |
| private claim  | private claim 是客户自己创建的用于彼此分享信息                                                                                                          |

## signature

> signature 就是用点号将header和payload联系起来，然后用header里面指定的加密方法进行加密后的字符串

```string
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

## JWT 应用步骤

1. 浏览器将用户名和密码以post请求的方式发送给服务器。
2. 服务器接受后验证通过，用一个密钥生成一个JWT。
3. 服务器将这个生成的JWT返回给浏览器。
4. 浏览器将JWT包含在authorization header里面，然后发送请求给服务器。
5. 服务器可以在JWT中提取用户相关信息。进行验证。
6. 服务器验证完成后，发送响应结果给浏览器。
