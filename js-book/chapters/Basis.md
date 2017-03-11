# javascript基础


## 基本类型与引用类型
### 可变性
```js
// 基本类型：不可变类型，无法添加属性；即使添加属性，解析器无法再下一步读取它；
var cat = "cat";
cat.color = "black";
cat.color // undefined

//对象类型：可变类型，支持添加和删除属性
```


## 变量/函数提升
### 变量提升
```js
//变量提升
console.log(definedLater); //undefined
var definedLater;

//变量赋值不会提升
console.log(definedSimulateneously); //undefined
var definedSimulateneously = 'I am defined!';
console.log(definedSimulateneously); //I am defined!

functionVar(); //functionVar is not a function
var functionVar = function(){
    console.log('I did it!');
};
```

### 函数提升
```js
doSomethingElse(); //I did it!
function doSomethingElse(){
    console.log('I did it!');
}
```

### 如果发现了重复的标识符，则优先级为函数声明 、形参 、变量声明（优先级低的会被无视）
```js
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a); //1

//实际上b内是这样的：
function b() {
  //这里是函数声明提升，与下面的a重复，由于优先级比较高，所以使用这个
  function a() {}; 
  a = 10;
  return;
  function a() {}
}
```

### 全局变量
> 定义全局变量与在window对象上直接定义属性的差别

```js
//delete隐式定义的全局变量无效
(function(){
    var age=29;
    window.color="red";
    delete window.age;//返回false
    delete window.color;//返回true
    alert(window.age);//29
    alert(window.color);//undefind
})();

// 尝试访问未声明的变量会抛出错误，但通过查询window对象，可以知道某个可能未声明的变量是否存在
(function(){
    var newValue=oldValue;//抛出错误，因为oldValue没有定义
    var newValue=window.oldValue; //undefind,因为是一次属性查询
})();
```

## this
-  this 永远指向函数运行时所在的对象，而不是函数创建时所在的对象；
-  匿名函数和不处于任何对象中的函数，This指向window；
-  call, apply, with指的This是谁就是谁；
-  普通函数调用，函数被谁调用，This就指向谁；
-  如果有new关键字，this指向new出来的那个对象;

```js
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

### 对象、闭包中的this
```js
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

##  new操作符
> new创建一个对象都进行了哪些操作：
- 创建一个空对象，用this 变量引用该对象并继承该函数的原型
- 属性和方法加入到this的引用对象中
- 新创建的对象由this所引用，并且最后隐式的返回this

### 模拟过程
```js
function newObj(Fun,arguments) {
    var o = {};
    if (Fun && typeof Fun === "function") {
        o.__proto__ = Fun.prototype;
        Fun.apply(o, arguments);
        return o;
    }
}
```

### new操作符返回机制
*无return*
```js
function Thing() {
    this.one = 1;
    this.two = 2;
}
var myThing = new Thing();
console.log(myThing.one); // 1
console.log(myThing.two); // 2
```
*return 基本类型*
```js
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
*return 引用类型*
```js
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

## 传参机制
### 只传递值，原变量不变
```js
function addTen(num){
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
alert(result); //30
alert(count);  //20,没有变化
```

### 引用类型的传递
```js
function setName(obj){
    obj.name = "nick"; //与person指向同一个引用，所以修改会有变化
}
function setNameEx(obj){
    obj = new Object();
    obj.name = "grge"; //重新定义了一个对象，与person指向不同，修改不会影响person
}
var person = new Object();
setName(person);
alert(person.name); //nick
setNameEx(person);
alert(person.name);//nick

//重新指向了一个对象，不会在与原来的me有联系
var me = {'partOf' : 'A Team'};
function myTeam(me) {
    me = { 'belongsTo' : 'A Group'};
}
myTeam(me);
console.log(me); //{'partOf' : 'A Team'}
```

## 严格模式
### arguments对象的限制
*不允许对arguments赋值*
```js
(function(){
    "use strict";
    arguments++; // 语法错误
    var obj = { set p(arguments) { } }; // 语法错误
    try { } catch (arguments) { } // 语法错误
    function arguments() { } // 语法错误
    var f = new Function("arguments", "'use strict'; return 17;"); // 语法错误
})();
```
*arguments不再追踪参数的变化*
```js
(function(){
    "use strict";
    function showValue(value){
        value="Foo";
        alert(value);
        alert(arguments[0]);
    }
    showValue('hi');//Foo hi(非严格模式下是Foo Foo)
})();
```
*禁止使用arguments.callee*
```js
(function(){
    "use strict";
    var f = function() { return arguments.callee; };
    f(); // 报错
})();
```

###  函数必须声明在顶层
```js
(function(){
    "use strict";
    if(true){
        function f(){}//语法错误
    }
    for(var i=0;i<5;i++){
        function f2(){}//语法错误
    }
})();
```

### 变量
*全局变量必须显式声明*
```js
(function(){
    "use strict";
    v=1;
    for(i=0;i<2;i++){}//v和i等为通过var声明的变量都会报错
})();
```
*严格模式下无法删除变量。只有configurable设置为true的对象属性，才能被删除*
```js
function haha(){
    "use strict";
    var a=10;
    delete a; //报错
    var o = Object.create(null, {'x': {
        value: 1,
        configurable: true
    }});
    delete o.x; // 删除成功
}
```

### 增强的安全措施
*禁止this关键字指向全局对象*
```js
(function(){
    function f(){return !this;} // 返回false，因为"this"指向全局对象，"!this"就是false
    function f(){
        "use strict";
        return !this; // 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。
    }
})();
```
*禁止在函数内部遍历调用栈*
```js
(function(){
    function f1(){
        "use strict";
        f1.caller; // 报错
        f1.arguments; // 报错
    }
    f1();
})();
```

### 显式报错(对象属性的操作)
*为只读属性赋值报错（这里没有验证错误）*
```js
(function(){
    "use strict";
    var o = {};
    Object.defineProperty(o, "v", { value: 1, writable: false });
    o.v = 2; // 报错
})();
```
*对一个使用getter方法读取的属性进行赋值，会报错*
```js
(function(){
    "use strict";
    var o = {
        get v() { return 1; }
    };
    o.v = 2; // 报错
})();
```
*删除一个不可删除的属性，会报错*
```js
(function(){
    "use strict";
    delete Object.prototype; // 报错
})();
```
*对禁止扩展的对象添加新属性，会报错*
```js
(function(){
    "use strict";
    var o = {};
    Object.preventExtensions(o);
    o.v = 1; // 报错
})();
```

###  严格模式下使用JS的保留关键字作为变量名会导致语法错误
```js
function haha(){
    "use strict";
    function private() { } // 报错!
}
```

###  禁止八进制表示法
```js
(function(){
    "use strict";
    var n = 0100; // 语法错误
})();
```

###  重名错误
*对象字面量同一个属性重复赋值（好像并不会报错，但是会有警示）*
```js
(function(){
    "use strict";
    var person={
        name:"Tom",
        name:"cat"
    };
})();
```
*严格模式下参数名不能重复*
```js
(function(){
    "use strict";
    function sum(num, num) {}  //报错
})();
```

### 静态绑定
> 严格模式对动态绑定做了一些限制。某些情况下，只允许静态绑定。也就是说，属性和方法到底归属哪个对象，在编译阶段就确定。这样做有利于编译效率的提高，也使得代码更容易阅读，更少出现意外

```js
//禁止使用with语句
(function(){
    "use strict";
    var v = 1;
    with (o){ // 语法错误
        v = 2;
    }
})();
//创设eval作用域
(function(){
    "use strict";
    var x = 2;
    console.info(eval("var x = 5; x")); // 5
    console.info(x); // 2
})();
```


## 创建对象模式
### 工厂模式
```js
//解决：解决了对象字面量等在创建多个相似对象时代码的重复问题
//问题：没有解决对象识别的问题（如何知道一个对象的类型）

function createPerson(name,age,job){
    var o=new Obeject();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function(){
        alert(this.name);
    };
    return o;
}
var person1=createPerson("Nicholas",29,"Software Enginer");
var person2=createPerson("Greg",27,"Docter");
```

### 构造函数模式
```js
//解决：对象识别的问题（对应的实例）
//问题： 每个方法都要在实例上重新创建一遍

function Person(name,age,job){
    this.age=namel
    this.age=age;
    this.job=job;
    this.sayName=function(){
        alert(this.name);
    };
}
var person1=new Person("Nicholas",29,"Software Enginer");
var person2=new Person("Greg",27,"Docter");
```

### 原型模式
```js
//解决：构造函数模式实例中重复创建方法的问题
//问题：所有属性在默认情况下都取得相同的值；
//包含引用类型的值的属性会被实例所改变；

function Person(){}
Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Enginer";
Person.prototype.sayName=function(){ alert(this.name);};
var person1=new Person();
var person2=new Person();
alert(person1.sayName==person2,sayName); //true
```

### 组合使用构造函数模式和原型模式
```js
//解决：要求相同的值放到原型中，要求不同的值放到构造函数中，解决了原型模式的问题
//问题：无问题

function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.friends=["Shelby","Court"];
}
person.prototype={ //这里重新定义了构造函数的原型对象，不喜欢可以不用
    constructor:Person,
    sayName:function(){
        alert(this.name);
    }
};
var person1=new Person("Nicholas",29,"Software Engineer");
var person2=new Person("Greg",27,"Doctor");
person1.friends.push("Van");
alert(person1.friends); //"Shelby,Court,Van"
alert(person2.friends); //"Shelby,Court"
alert(person1.friends===person2.friends); //false
alert(person1.sayName()===person2.sayName()); //true
```

### 动态原型模式
```js
// 解决：升级组合使用构造函数模式和原型模式的结构，仅在需要的时候初始化原型
// 问题：无

function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    if(typeof  this.sayName !="function"){
        Person.prototype.sayName=function(){alert(this.name);};
    }
}
var friend=new Person("Nicholas",29,"Software Engineer");
friend.sayName();
```

### 寄生构造函数模式
```js
 //寄生构造函数模式
 //解决：不解决问题
 //问题：很多
 
function Person(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function(){
        alert(this.name);
    };
    return o;
}
var friend=new Person("Nicholas",29,"Software Engineer");
friend.sayName(); //"Nicholas"
```

### 稳妥构造函数模式
```js
//解决：安全问题
//问题：很多

function Person(name,age,job){
    var o=new Object();
    o.sayName=function(){ alert(name);};
    return o;
}
var friend=Person("Nicholas",29,"Software Engineer");
friend.sayName(); //"Nicholas"
```


## 对象的继承
### 原型链
```js
//解决：
//问题：包含引用类型值的原型属性会被所有实例（原型链的下一级）共享（同原型模式）

function SuperType(){
    this.colors=["red","blue","green"];
}
function SubType(){}
SubType.prototype=new SuperType();
var instance1=new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red","blue","green","black"
var instance2=new SubType();
alert(instance2.colors); //"red","blue","green","black"
```

### 借用构造函数（很少使用）
```js
//解决：原型链所有实例共享原型属性的问题
//问题：方法都在构造函数中定义，函数复用无从谈起

function SuperType(){
    this.colors=["red","blue","green"];
}
function SubType(){
    SuperType.call(this); //继承了SuperType
}
var instance1=new SubType();
var instance2=new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
alert(instance2.colors); //"red,blue,green"
```

### 组合继承（伪类经典继承）
```js
//解决：避免了原型链和借用构造函数的缺陷，融合了它们的优点，是JS中最常用的继承模式
//问题：会调用两次超类型构造函数

function Box(name,age){
    this.name=name;
    this.age=age;
    this.family=["哥哥","姐姐","妹妹"];
}
Box.prototype.run=function(){
    return this.name+this.age+"运行中.....";
};
function Desk(name,age){
    Box.call(this,name,age); //对象冒充
}
Desk.prototype=new Box();
var desk=new Desk("lee",100);
alert(desk.run());
```

### 原型式继承
```js
//解决：
//问题：

var person={
    name:"Nicholas",
    friends:["Shelby","Court","Van"]
};
var anotherPerson=Object.create(person,{
    name:{value:"Greg"}
});
alert(anotherPerson.name); //"Greg"
```

### 寄生式继承
```js
//解决：
//问题：

function createAnother(original){
    var clone=object(original); //通过调用函数创建一个新对象
    clone.sayHi=function(){  //以某种方式来增强这个对象
        alert("hi");
    };
    return clone; //返回这个对象
}
var person={
    name:"Nicholas",
    friends:["Shelby","Court","Van"]
};
var anotherPerson=createAnother(person);
anotherPerson.sayHi(); //"hi"
```

### 寄生组合式继承 （借用构造函数来继承属性，通过原型链的混成形式来继承方法）
```js
//解决：组合继承多次调用超类型构造函数的问题
//问题：

function inheritPrototupe(subType,superType){
    var prototype=object(superType.prototype); //创建对象（创建超类型原型的一个副本）
    prototype.constructor=subType; //增强对象（为创建的副本添加constructor属性,从而弥补因重写原型而失去的默认的constructor属性）
    subType.prototype=prototype; //指定对象（将新创建的对象（即副本）复制给子类型的原型）
}
function SuperType(name){
    this.name=name;
    this.colors=["red","blue","green"];
}
SuperType.prototype.sayName=function(){
    alert(this.name);
};
function SubType(name,age){
    SuperType.call(this,name);
    this.age=age;
}
inheritPrototupe(subType,superType);
SubType.prototype.sayAge=function(){
    alert(this.age);
};
```
