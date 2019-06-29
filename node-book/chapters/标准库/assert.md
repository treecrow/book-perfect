# assert断言

> assert 模块提供了一组简单的断言测试集合，可被用于测试不变式

## 方法列表

| 分类             | 方法                                                                     | more                                                                |
| ---------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 断言相等         | assert.deepEqual(actual, expected[, message])                            | 测试 actual 参数与 expected 参数是否深度相等                        |
| ~                | assert.deepStrictEqual(actual, expected[, message])                      | 大多数情况下与 assert.deepEqual() 一样，但有三个例外：              |
| ~                | assert.equal(actual, expected[, message])                                | 使用 相等运算符（==）测试 actual 参数与 expected 参数是否相等       |
| ~                | assert.strictEqual(actual, expected[, message])                          | 使用 全等运算符（===）测试是否全等                                  |
| ~                | assert.notDeepEqual(actual, expected[, message])                         | 测试是否不深度相等                                                  |
| ~                | assert.notDeepStrictEqual(actual, expected[, message])                   | 测试是否不深度全等                                                  |
| ~                | assert.notEqual(actual, expected[, message])                             | 使用 不等运算符（!=）测试是否不相等                                 |
| ~                | assert.notStrictEqual(actual, expected[, message])                       | 使用 不全等运算符（!==）测试是否不全等                              |
| 断言对错         | assert(value[, message])                                                 | assert.ok() 的别名                                                  |
| ~                | assert.ok(value[, message])                                              | 测试 value 是否为真值。 相当于 assert.equal(!!value, true, message) |
| ~                | assert.ifError(value)                                                    | 如果 value 为真，则抛出 value                                       |
| ~                | assert.throws(block[, error][, message])                                 | 期望 block 函数抛出错误                                             |
| ~                | assert.doesNotThrow(block[, error][, message])                           | 断言 block 函数不会抛出错误                                         |
| 直接抛出断言错误 | assert.fail(message) && assert.fail(actual, expected, message, operator) | 抛出 AssertionError                                                 |