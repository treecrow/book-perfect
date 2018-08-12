# this 指向

```js
var num = 20;
var obj = {
  num: 30,
  fn: (function(num) {
    this.num *= 3;
    num += 15;
    var num = 45;
    return function() {
      this.num *= 4;
      num += 20;
      console.log(num, this.num);
    };
  })(num)
};
var fn = obj.fn;
fn(); // 65 240
obj.fn(); // 85 120
console.log(window.num, obj.num); // 240 120
```

```js
let length = 10;
function fn() {
  console.log(this.length);
}
let obj = {
  length: 5,
  method: function() {
    fn();
    fn.call(this);
  }
};
obj.method(); // 0 5
```
