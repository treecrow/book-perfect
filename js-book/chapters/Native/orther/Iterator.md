# Iterator

> 是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 

## Iterator 的作用

1. 一是为各种数据结构，提供一个统一的、简便的访问接口
2. 使得数据结构的成员能够按某种次序排列
3. ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费

## Iterator 的遍历过程

1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象；
2. 第一次调用指针对象的 next 方法，可以将指针指向数据结构的第一个成员。
3. 第二次调用指针对象的 next 方法，指针就指向数据结构的第二个成员。
4. 不断调用指针对象的 next 方法，直到它指向数据结构的结束位置。

## 原生具备 Iterator 接口的数据结构(普通对象没有 Iterator 接口!!!)

* Array
* Map
* Set
* String
* TypedArray
* 函数的 arguments 对象
* NodeList 对象

## 调用 Iterator 接口的场合

* 解构赋值
* 扩展运算符
* yield\*
* for...of
* Array.from()
* Map(), Set(), WeakMap(), WeakSet()（比如 new Map([['a',1],['b',2]])）
* Promise.all()
* Promise.race()
