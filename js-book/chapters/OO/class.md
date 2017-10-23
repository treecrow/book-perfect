# class

## constructor

> constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加

## name 属性

> name属性总是返回紧跟在class关键字后面的类名,如果使用的 class 表达式，并且class关键词后面没有类名，则属性为表达式的变量名

## class 表达式

```javascript
const Point = class {
  constructor(){
    // ...
  }
}
```

## 不存在变量提升

```javascript
new Foo(); // ReferenceError
class Foo {}
```

## new.target属性

> ES6 为new命令引入了一个new.target属性，该属性一般用在在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的

```javascript
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用new生成实例');
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 生成实例');
  }
}

var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三');  // 报错
```

### 不能独立使用、必须继承后才能使用的类

> 子类继承父类时，new.target会返回子类,利用这个特点，可以写出不能独立使用、必须继承后才能使用的类

```javascript
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确
```

## Class 的取值函数（getter）和存值函数（setter）

```javascript
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```

## Class 的静态方法(类自身的方法，不会被实例继承，但会被子类继承)和静态属性

- 静态方法

```javascript
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```

- 静态属性

```javascript
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
```

## 私有方法

> 只限于内部使用的方法

- 命名上加以区别（并不是真正的私有方法）

```javascript
class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }

  // ...
}
```

- 将方法移出模块

```javascript
class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

  // ...
}

function bar(baz) {
  return this.snaf = baz;
}
```

- 利用Symbol值

```javascript
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};
```

## 向类添加新的方法

> 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法

```javascript
class Point {
  constructor(){
    // ...
  }
}

Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});
```

## class的继承

### 与es5继承的区别

版本  | more
--- | -----------------------------------------------------
es5 | 先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）
es6 | 先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this

### super()

> 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象

```javascript
class Point {
}

class ColorPoint extends Point {
  constructor() {
    super()
  }
}
```

#### 如果子类没有定义constructor方法，这个方法会被默认添加

```javascript
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
```

#### 只有调用super之后，才可以使用this关键字

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
```

### super

> super指向父类的原型对象,定义在父类实例上的方法或属性，是无法通过super调用的

```javascript
class A {
  constructor() {
    this.p = 2;
  }
}
A.prototype.pp = 3

class B extends A {
  get m() {
    return super.p;
  }
  get mm() {
    return super.pp;
  }
}

let b = new B();
console.log(b.m) // undefined
console.log(b.mm) // 3
```

#### ES6 规定，通过super调用父类的方法时，super会绑定子类的this

```javascript
class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();
```

#### 静态方法之中的super（如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象）

```javascript
class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2
```

## 类的 prototype 属性和**proto**属性

```javascript
class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
```

### 类的继承是按照下面的模式实现的

```javascript
class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 的实例继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();
```

#### Object.setPrototypeOf方法的实现

```javascript
Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

## Mixin 模式的实现(将多个对象合成为一个类)

> Mixin 模式指的是，将多个类的接口"混入"（mix in）另一个类。它在 ES6 的实现如下

```javascript
function mix(...mixins) {
  class Mix {}

  for (let mixin of mixins) {
    copyProperties(Mix, mixin);
    copyProperties(Mix.prototype, mixin.prototype);
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== "constructor"
      && key !== "prototype"
      && key !== "name"
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}

class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}
```
