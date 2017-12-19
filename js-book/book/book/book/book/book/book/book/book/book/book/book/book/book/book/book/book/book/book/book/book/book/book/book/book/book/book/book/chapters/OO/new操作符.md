# new操作符

## new创建一个对象都进行了哪些操作：

- 创建一个空对象，用this 变量引用该对象并继承该函数的原型
- 属性和方法加入到this的引用对象中
- 新创建的对象由this所引用，并且最后隐式的返回this

> 模拟过程:

```javascript
function newObj(Fun,arguments) {
    var o = {};
    if (Fun && typeof Fun === "function") {
        o.__proto__ = Fun.prototype;
        Fun.apply(o, arguments);
        return o;
    }
}
```

## new操作符返回机制

### 无return

```javascript
function Thing() {
    this.one = 1;
    this.two = 2;
}
var myThing = new Thing();
console.log(myThing.one); // 1
console.log(myThing.two); // 2
```

### return 基本类型

```javascript
function Thing() {
    this.one = 1;
    this.two = 2;
    return 5;
}
var myThing = new Thing();
console.log(myThing.one); // 1
console.log(myThing.two); // 2
console.log(myThing); // Thing {one: 1, two: 2}
```

### return 引用类型

```javascript
function Thing() {
    this.one = 1;
    this.two = 2;
    return {
        three: 3,
        four: 4
    };
}
var myThing = new Thing();
console.log(myThing.one); // undefined
console.log(myThing.two); // undefined
console.log(myThing.three); // 3
console.log(myThing.four); // 4
console.log(myThing); // Object {three: 3, four: 4}
```
