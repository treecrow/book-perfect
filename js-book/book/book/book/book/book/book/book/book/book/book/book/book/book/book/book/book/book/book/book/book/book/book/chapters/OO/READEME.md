# OO(Object-oriented)

## 私有属性/方法、对象公有属性/方法、特权属性／方法、非特权属性／方法

```javascript
function Book(id, name, price) {
  // 私有属性/方法
  var num = 1;
  function chrckId() { }
  // 对象公有属性(特权属性)
  this.id = id;
  // 对象公有方法(特权方法)
  this.getName = function () { };
  this.getPrice = function () { };
  this.setName = function () { };
  this.setPrice = function () { };
  this.copy = function () { };
  // 构造器
  this.setName(name);
  this.setPrice(price);
}
Book.prototype = {
  // 公有属性/方法（非特权属性/方法）
  isJSBook: false,
  display: function () { }
};
```

## 类静态私有属性／方法、类静态公有属性/方法

```javascript
var Book = (function () {
  // 类静态私有变量／方法
  var bookNum = 0;
  function checkBook() { }
  return function (newId, newName, newPrice) {
    // 私有属性/方法
    var num = 1;
    var name, price;
    function checkId(id) { }
    // 对象公有属性/方法(特权属性/方法)
    this.id = newId;
    this.getName = function () { };
    this.getPrice = function () { };
    this.setName = function () { };
    this.setPrice = function () { };
    this.copy = function () { };
    // 构造器
    this.setName(name);
    this.setPrice(price);
  }
})();
// 类静态公有属性/方法（对象不能访问）
Book.isChinese = true;
Book.resetTime = function () {
  console.log('new time');
};
```