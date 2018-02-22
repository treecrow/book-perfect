# 对象

## 创建对象

| api                             | more                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| {}                              | 对象直接量（Object.prototype 作为新对象的原型）                                                  |
| new Object()                    | 创建一个空对象，和{}一样（使用构造函数的 prototype 属性作为新对象的原型）                        |
| Object.create()                 | 创建一个新对象，第一个参数是这个对象的原型，第二个参数（可选），用于对对象的属性进行进一步的描述 |
| Object.create(null)             | 创建一个没有原型的新对象                                                                         |
| Object.create(Object.prototype) | 创建一个普通的空对象                                                                             |

## 对象方法

| api                 | more                                                                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| obj.toString()      | 返回对象的字符串表示                                                                                                                    |
| obj.toLocalString() | 返回对象的字符串表示                                                                                                                    |
| obj.valueOf()       | 返回对象的字符串,数值或布尔值表示,通常与 toString()方法返回结果相等                                                                     |
| Object.is()         | 比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致                                                                           |
| Object.assign()     | 用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）(只能够浅拷贝)                                              |
| obj.inspect()       | 字面量对象的 inspect()是个特殊的方法（需要显示的声明），如果一个对象字面量声明了这个方法，则此对象 console 的结果为 inspect()返回的结果 |

## 属性相关 api

| 分类               | api                                         | more                                                                                                 |
| ------------------ | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 访问属性           | -                                           | -                                                                                                    |
| ~                  | `let len = obj && obj.key && obj.key.key1;` | 安全的访问属性                                                                                       |
| 删除属性           | -                                           | -                                                                                                    |
| ~                  | `delete obj.key`                            | 删除属性                                                                                             |
| 检测是否有对应属性 | -                                           | -                                                                                                    |
| ~                  | `"key" in obj`                              | in 运算符的左侧是属性名（字符串），右侧是对象。如果对象的自有属性或继承属性中包含这个属性则返回 true |
| ~                  | obj.hasOwnProperty(key)                     | 检测给定的名字是否是对象的自有属性                                                                   |
| ~                  | obj.propertyIsEnumerable(key)               | 检测属性是否是自有可枚举属性                                                                         |
| 枚举属性           | -                                           | -                                                                                                    |
| ~                  | for...in                                    | -                                                                                                    |
| ~                  | Object.keys(obj)                            | 返回一个数组，这个数组由对象中可枚举的自有属性的名称组成                                             |
| ~                  | Object.getOwnPropertyNames(obj)             | 返回一个数组，这个数组由对象中所有自有属性的名称组成                                                 |
| ~                  | Object.values()                             | 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值                   |
| ~                  | Object.entries()                            | 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组             |
| ~                  | Reflect.ownKeys(obj)                        | 返回一个数组，包含对象自身的所有属性，不管是属性名是 Symbol 或字符串，也不管是否可枚举               |
| ~                  | Object.getOwnPropertySymbols(obj)           | 返回一个数组，包含对象自身的所有 Symbol 属性                                                         |
| 属性描述符         | -                                           | -                                                                                                    |
| ~                  | Object.getOwnPropertyDescriptor(obj,key)    | 获取某个对象某个自有属性的属性描述符（对于继承属性和不存在的属性返回 undefined）                     |
| ~                  | Object.getOwnPropertyDescriptors(obj)       | 返回指定对象所有自身属性（非继承属性）的描述对象                                                     |
| ~                  | Object.defineProperty(obj,key,属性描述符)   | 设置属性的特性                                                                                       |
| ~                  | Object.definePropertys(obj,{属性描述符 s})  | 同时设置多个属性的特性                                                                               |
| 数值属性           | -                                           | -                                                                                                    |
| ~                  | value                                       | -                                                                                                    |
| ~                  | writable                                    | -                                                                                                    |
| ~                  | enumerable                                  | -                                                                                                    |
| ~                  | configurable                                | -                                                                                                    |
| 存储器属性         | -                                           | -                                                                                                    |
| ~                  | get                                         | -                                                                                                    |
| ~                  | set                                         | -                                                                                                    |
| ~                  | enumerable                                  | -                                                                                                    |
| ~                  | configurable                                | -                                                                                                    |
| 原型属性           | -                                           | -                                                                                                    |
| ~                  | obj.constructor                             | 通过 new 表达式创建的对象，通常挤成一个 constructor 属性，这个属性指代创建这个对象的构造函数         |
| ~                  | obj1.isPrototypeOf(obj2)                    | 检测 obj1 是否是 obj2 的原型                                                                         |
| ~                  | `obj.__proto__`                             | 直接查询/设置对象的原型(也就是创建该对象的构造函数的原型)                                            |
| ~                  | Object.getPrototypeOf(obj)                  | 用于读取一个对象的原型对象(原型链中最近的)                                                           |
| ~                  | Object.setPrototypeOf()                     | 用来设置一个对象的 prototype 对象，返回参数对象本身                                                  |
| 类属性             | obj.toString()                              | -                                                                                                    |
| 可扩展性           | -                                           | -                                                                                                    |
| ~                  | Object.isExtensible(obj)                    | 判断对象是否是可扩展的（是否可以添加新的属性）                                                       |
| ~                  | Object.preventExtensions(obj)               | 将对象转换为不可扩展的（过程不可逆）                                                                 |
| ~                  | Object.isSealed(obj)                        | 检测对象是否封闭                                                                                     |
| ~                  | Object.seal(obj)                            | 将对象转换为不可扩展的,将所有自有属性设置为不可配置（过程不可逆）                                    |
| ~                  | Object.isFrozen(obj)                        | 检测对象是否冻结                                                                                     |
| ~                  | Object.freeze(obj)                          | 将对象转换为不可扩展的,将所有自有属性设置为不可配置且只读的（过程不可逆）                            |

## super 关键字

> ES6 又新增了另一个类似的关键字 super，指向当前对象的原型对象

> super 关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错

### 属性遍历的次序规则

* 首先遍历所有属性名为数值的属性，按照数字排序。
* 其次遍历所有属性名为字符串的属性，按照生成时间排序。
* 最后遍历所有属性名为 Symbol 值的属性，按照生成时间排序。

### getter && setter

```javascript
var p = {
  x: 1,
  y: 1,
  get r() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  set r(newValue) {
    var oldValue = Math.sqrt(this.x * this.x + this.y * this.y);
    var radio = newValue / oldValue;
    thisx *= radio;
    thisy *= radio;
  },
  get theta() {
    return Math.atan2(this.y, this.x);
  }
};
```
