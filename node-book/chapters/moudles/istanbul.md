# istanbul

## 相关文档

- [代码覆盖率工具 Istanbul 入门教程](http://www.tuicool.com/articles/FfYbUfR)

## 安装

```
$ npm install -g istanbul
```

## 与测试框架的结合

- 与mocha结合

```
$ istanbul cover _mocha
// or
$ istanbul cover _mocha test/test.sqrt.js
```

- 向 mocha 传入参数

```
$ istanbul cover _mocha -- tests/test.sqrt.js -R spec
```

## 忽略某些代码

> istanbul 提供 注释语法 ，允许某些代码不计入覆盖率

## 命令行列表

命令                                                                | more
----------------------------------------------------------------- | --------------------------------------------
istanbul cover simple.js                                          | 使用 istanbul cover 命令，获得覆盖率，生成一个 coverage 子目录
istanbul check-coverage --statement 90                            | 设置覆盖率门槛，同时检查当前代码是否达标(百分比)
istanbul check-coverage --statement -1                            | 绝对值门槛(只允许有一个语句没有被覆盖到)
istanbul check-coverage --statement -5 --branch -3 --function 100 | 百分比门槛和绝对值门槛结合使用
