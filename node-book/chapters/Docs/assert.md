## assert断言

### 断言相等
- assert.deepEqual(actual, expected[, message])
  > 测试 actual 和 expected 参数是否深度相等
    >  - 原始值会使用相等运算符（==）进行比较
    >  - 只比较可枚举的自身属性
    >  - deepEqual() 不测试对象的原型、连接符、或不可枚举的属性
- assert.deepStrictEqual(actual, expected[, message])
  > 测试 actual 和 expected 参数是否深度相等
    >  - 原始值使用严格相等运算符（===）进行比较
    >  - 对象对比包括严格比较它们的原型
- assert.equal(actual, expected[, message])
  > 使用相等运算符（==）来测试 actual 和 expected 参数是否相等
- assert.strictEqual(actual, expected[, message])
  > 使用严格相等运算符（===）测试是否严格相等
- assert.notDeepEqual(actual, expected[, message])
- assert.notDeepStrictEqual(actual, expected[, message])
- assert.notEqual(actual, expected[, message])
- assert.notStrictEqual(actual, expected[, message])


### 断言对错
- assert(value[, message])---assert.ok() 的别名
- assert.ok(value[, message])
- assert.ifError(value)
  > 如果 value 的值为真，抛出 value
- assert.throws(block[, error][, message])
  > 期望 block 函数抛出错误
- assert.doesNotThrow(block[, error][, message])
  > 断言 block 函数不会抛出错误
    > - 当调用 assert.doesNotThrow() 时，它会立即调用 block 函数
    > - 如果 block 函数抛出错误，并且错误类型与 error 参数指定的相同，则抛出 AssertionError。 
    > - 如果错误类型不相同，或 error 参数是 undefined，则错误回传给调用者。

### 直接抛出断言错误
- assert.fail(actual, expected, message, operator)
  > 抛出 AssertionError
    > - 如果 message 的值不为真，则错误信息为 actual 和 expected 的值，并以 operator 分隔
    > - 否则，错误信息为 message 的值。






