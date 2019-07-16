# [new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

## new 操作符返回机制

| 返回类型        | 效果                   |
| --------------- | ---------------------- |
| 无 return       | 返回 this              |
| return 基本类型 | 返回 this              |
| return 引用类型 | 返回 return 的引用类型 |

## new 创建一个对象都进行了哪些操作：

- 创建一个空的简单 JavaScript 对象（即{}）: `{}`
- 链接该对象到构造函数的原型上（让该对象与构造函数共享同一个原型，也就是构造函数的原型）: `{}.__proto__ = NewName.prototype`
- 将步骤 1 新创建的对象作为 this 的上下文,运行构造函数内部程序: `NewName.apply({},arguments)`
- 如果该函数没有返回对象，则返回 this: `return {}/this`

- 模拟过程:

```javascript
function newObj(Fun, arguments) {
  var o = {};
  if (Fun && typeof Fun === "function") {
    Object.setPrototypeOf(o, Fun.prototype);
    Fun.apply(o, arguments);
    return o;
  }
}
```
