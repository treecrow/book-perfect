# Class

> 面向对象的模板

## 关键字列表

| 关键字      | more                                                                                                                                                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| constructor | -                                                                                                                                                                                                                                       |
| get         | -                                                                                                                                                                                                                                       |
| set         | -                                                                                                                                                                                                                                       |
| new.target  | 返回 new 命令作用于的那个构造函数                                                                                                                                                                                                       |
| static      | 只能声明静态方法                                                                                                                                                                                                                        |
| extends     | class 的继承                                                                                                                                                                                                                            |
| super()     | 子类必须在 constructor 方法中调用 super 方法（如果没有定义 constructor，会默认添加），否则新建实例时会报错。这是因为子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工。如果不调用 super 方法，子类就得不到 this 对象 |

## 类的 prototype 属性和`__proto__`属性

```javascript
class A {}
class B extends A {}
B.__proto__ === A; // true
B.prototype.__proto__ === A.prototype; // true
```

## 类的继承是按照下面的模式实现

```javascript
class A {}
class B {}
// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);
// B 的实例继承 A 的静态属性
Object.setPrototypeOf(B, A);
const b = new B();
```

## 原生构造函数

* Boolean()
* Number()
* String()
* Array()
* Date()
* Function()
* RegExp()
* Error()
* Object()
