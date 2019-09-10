# Rules

> 规则配置的地方

## pattern vs operatorURI

| 概念        | more                                                          |
| ----------- | ------------------------------------------------------------- |
| pattern     | 对请求进行匹配，并对匹配上的请求上应用 operatorURI 定义的操作 |
| operatorURI | 通过不同的 operatorURI，可以做到替换请求体、响应体、响应码等  |

## operatorURI 场景列表

| 场景                  | more                   |
| --------------------- | ---------------------- |
| resBody://{user.json} | 设置接口的响应内容     |
| replaceStatus://200   | 设置接口响应码         |
| resDelay://10000      | 设定接口请求的响应延时 |
| weinre://debug        | 为指定页面激活 weinre  |

## 映射

## Mock 数据

## 移动端调试
