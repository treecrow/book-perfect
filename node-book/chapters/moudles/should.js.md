# should.js

## 解释性字段(没有任何作用，只是为了易读)

字段     | more
------ | ----
.an    | -
.of    | -
.a     | -
.and   | -
.be    | -
.have  | -
.with  | -
.is    | -
.which | -

## 字段列表

字段                                                                                                   | more
---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------
.not                                                                                                 | 否定当前断言
any                                                                                                  | allow for assertions with multiple parameters to assert on any of parameters (not all)
.ok                                                                                                  | 判断是否为真
.true                                                                                                | object === true？
.false                                                                                               | object === false？
.eql(otherValue)                                                                                     | object与otherValue内容上是否相等（type不一样没事）
.startWith(str)                                                                                      | 断言字符串以str开头
.endWith(str)                                                                                        | 断言字符串以str结尾
.within(from, to)                                                                                    | 断言数字在规定的区间
.approximately(num, delta)                                                                           | 断言浮点数在给定的数的浮动范围内
.above(num) ／ .greaterThan(num)                                                                      | 断言大于给定的数
.below(num) ／ .lessThan(num)                                                                         | 断言小于给定的数
.NaN                                                                                                 | 断言为NaN
.Infinity                                                                                            | 断言为Infinity
.type(str)                                                                                           | 断言object属于str类型
.instanceof(constructor) / .instanceOf(constructor)                                                  | 断言为constructor的实例
.arguments                                                                                           | 断言为Arguments
.Object                                                                                              | 断言为 Object 的实例
.Number                                                                                              | 断言为 Number 的实例
.Array                                                                                               | 断言为 Array 的实例
.Boolean                                                                                             | 断言为 Boolean 的实例
.Function                                                                                            | 断言为 Function 的实例
.String                                                                                              | 断言为 String 的实例
.Error                                                                                               | 断言为 Error 的实例
.enumerable(name[, value])                                                                           | 断言有可枚举的属性name，属性值为value(可选)
.property(name[, value])                                                                             | 断言有属性name，属性值为value(可选)
.properties(propName1, propName2, ...) ／ .properties([propName1, propName2, ...]) ／ .properties(obj) | 断言有所有给定的属性，属性值也一一对应
.length(number) ／ .lengthOf(number)                                                                  | 断言length属性存在并且与number相等
.ownProperty(str) ／ .hasOwnProperty(str)                                                             | 断言有str属性,并且属性的hasOwn为true
.empty                                                                                               | 断言为空
.keys([key1, key2, ...]) ／ .keys(key1, key2, ...) ／ .key(key)                                        | 断言对象的自有属性，遗漏了会报错
.containEql(otherValue)                                                                              | 断言有给定的元素（浅层）
.containDeep(otherValue)                                                                             | 断言有给定的元素（深层）
.match(otherValue)                                                                                   | 断言matches otherValue（正则）
.matchEach(otherValue)                                                                               | 断言每个元素都符合otherValue要求
.throw() ／ .throwError()                                                                             | 断言异常抛出
status(code)                                                                                         | 断言statusCode属性等于code
.header(field[, value])                                                                              | 断言headers属性有field字段，并且值为value(可选)
.json                                                                                                | 断言Content-Type 为 "application/json; charset=utf-8"
.html                                                                                                | 断言Content-Type 为 "text/html; charset=utf-8"

## 可选的错误描述

```javascript
(1).should.eql(0, 'some useful description')

AssertionError: some useful description
  at Object.eql (/Users/swift/code/should.js/node_modules/should/lib/should.js:280:10)
  ...
```
