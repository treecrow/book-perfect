# this

- this 永远指向函数运行时所在的对象，而不是函数创建时所在的对象；
- 匿名函数和不处于任何对象中的函数，This指向window；
- call, apply, with指的This是谁就是谁；
- 普通函数调用，函数被谁调用，This就指向谁；
- 如果有new关键字，this指向new出来的那个对象;

```javascript
var x = 0;
var foo = {
    x:1,
    bar:{
        x:2,
        baz: function () {
            console.log(this.x)
        }
    }
};
var a = foo.bar.baz;
foo.bar.baz(); // 2
a()//0
```

## 对象、闭包中的this

```javascript
var x = 0;
var foo = {
    x:1,
    bar:function () {
        console.log(this.x);
        var that = this;
        return function () {//这块代码不是foo的一部分（return出来的）
            console.log(this.x);
            console.log(that.x);
        }
    }
};
foo.bar(); //1
foo.bar()();//1 0 1
```
