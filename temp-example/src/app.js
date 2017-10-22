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