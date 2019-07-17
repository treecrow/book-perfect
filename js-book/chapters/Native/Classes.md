# [Classes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)

> ECMAScript 2015 中引入的 JavaScript 类实质上是 JavaScript 现有的基于原型的继承的语法糖。类语法不会为 JavaScript 引入新的面向对象的继承模型

## 相关文档

| 知识点                                                                                               | more                                                                                          |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor) | constructor 是一种用于创建和初始化 class 创建的对象的特殊方法                                 |
| [super](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)           | super 关键字用于访问和调用一个对象的父对象上的函数                                            |
| [extends](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/extends)         | 用于类声明或者类表达式中，以创建一个类，该类是另一个类的子类                                  |
| [static](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/static)           | 类（class）通过 static 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用 |

## api 列表

| api                                          | more                                                                                     |
| -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| class ChildClass extends ParentClass { ... } | 用于类声明或者类表达式中，以创建一个类，该类是另一个类的子类                             |
| constructor([arguments]) { ... }             | constructor 是一种用于创建和初始化 class 创建的对象的特殊方法                            |
| super([arguments])                           | 调用 父对象/父类 的构造函数                                                              |
| super.functionOnParent([arguments])          | 调用 父对象/父类 上的方法                                                                |
| static methodName() { ... }                  | 定义一个类的一个静态方法。调用静态方法不需要实例化该类，但不能通过一个类实例调用静态方法 |
| methodName() { ... }                         | 原型方法                                                                                 |

## 模拟类（class）的继承

```javascript
class A {}
class B {}
// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype); // 相当于 B.prototype.__proto__ = A.prototype;
// B 的实例继承 A 的静态属性
Object.setPrototypeOf(B, A); // 相当于 B.__proto__ = A
```

## [修饰器](http://es6.ruanyifeng.com/#docs/decorator)

> 还没有定案
