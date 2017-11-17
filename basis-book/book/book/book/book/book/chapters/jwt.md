# jwt

## header

```json
{
  "alg": "HS256", //使用的算法
  "typ": "JWT" //类型
}
```

## payload

> 载荷就是存放有效信息的地方

### claims 类型列表

| 类型             | more                                                                                                                                    |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| reserved claim | reserved claim是预先定义好的，不强制使用但推荐使用的一组claim，比如 iss(issuer 发布者), exp(expiration time 失效时间)，sub(subject 主题），aud(audience 听众) 等。用于说明一些有用的交互信息 |
| public claim   | public claim,是指由JTWs所定义的，但是为了防止和其他名字发生重名的claims。它们需要定义成IANA JSON web token registery 里面 或者定义成一个URI，这个URI包含一组固定的命名                       |
| private claim  | private claim 是客户自己创建的用于彼此分享信息                                                                                                          |

### 标准中注册的声明

| 字段    | more                                        |
|-------|---------------------------------------------|
| iss   | issuer 请求实体，可以是发起请求的用户的信息，也可是jwt的签发者        |
| iat   | issued at。 token创建时间，unix时间戳格式              |
| exp   | expire 指定token的生命周期。unix时间戳格式               |
| sub   | 该JWT所面向的用户                                  |
| aud   | 接收该JWT的一方                                   |
| nbf   | 如果当前时间在nbf里的时间之前，则Token不被接受；一般都会留一些余地，比如几分钟 |
| jti   | jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击          |
| 自定义字段 | -                                           |

### 公共的声明

> 公共的声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密

### 私有的声明

> 私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息

### 示例

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

## signature

> signature 就是用点号将header和payload联系起来，然后用header里面指定的加密方法进行加密后的字符串

```string
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret) //加盐
```

## JWT 应用步骤

1. 浏览器将用户名和密码以post请求的方式发送给服务器。
2. 服务器接受后验证通过，用一个密钥生成一个JWT。
3. 服务器将这个生成的JWT返回给浏览器。
4. 浏览器将JWT包含在authorization header里面，然后发送请求给服务器。
5. 服务器可以在JWT中提取用户相关信息。进行验证。
6. 服务器验证完成后，发送响应结果给浏览器。
