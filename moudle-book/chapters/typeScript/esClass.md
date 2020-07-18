# esClass

- 不支持共有私有方法；
- class 不存在变量提升;
- 类和模块的内部，默认就是严格模式，所以不需要使用 use strict 指定运行模式;
- 可以方便的继承；

```js
//定义类
class Point {
  // 构造方法
  constructor(x, y) {
    this.x = x; // this关键字则代表实例对象
    this.y = y;
  }

  // 类的实例属性（也可以写在 constructor 的 this 里面）
  myProp = 42;
  // 类的实例方法
  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }

  // 取值函数（getter）和存值函数（setter）
  get prop() {
    return "getter";
  }
  set prop(value) {
    console.log("setter: " + value);
  }

  // 类的静态属性
  static myStaticProp = 42;
  // 类的静态方法
  static classMethod() {
    return "hello";
  }
}

Object.assign(Point.prototype, {
  toString() {},
  toValue() {},
});

const point = new Point();

class ColorPoint extends Point {}
```
