# Array

## 转换

方法           | 功能
------------ | ----------------------------------------------------------
Array.from() | 用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象
Array.of()   | 用于将一组值，转换为数组

## 位置方法

方法                | 功能
----------------- | --
arr.indexOf()     | -
arr.lastIndexOf() | -

## 排序

方法            | 功能
------------- | --
arr.reverse() | -
arr.sort()    | -

## 队列方法

方法            | 功能
------------- | --
arr.unshift() | -
arr.push()    | -
arr.shift()   | -
arr.pop()     | -

## 操作方法

方法                           | 功能
---------------------------- | -------------------------------------------------------------
arr.concat()                 | -
arr.slice(起始位，结束位)           | 不会改变原数组
arr.splice(起始位，要删除的个数，要插入的项) | 会改变原数组
arr.fill()                   | 使用给定值，填充一个数组
arr.copyWithin()             | 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组

## 迭代归并方法

方法                | 功能
----------------- | -----------------
arr.every()       | -
arr.some()        | -
arr.filter()      | -
arr.map()         | -
arr.forEach()     | -
arr.find()        | 用于找出第一个符合条件的数组成员
arr.findIndex()   | 返回第一个符合条件的数组成员的位置
arr.reduce()      | -
arr.reduceRight() | -

## 遍历方法

方法            | 功能
------------- | -------
arr.keys()    | 键名的遍历
arr.values()  | 对键值的遍历
arr.entries() | 对键值对的遍历

- 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历

```javascript
let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']
```

## 判断

方法              | 功能
--------------- | ----------------------
arr.includes()  | 返回一个布尔值，表示某个数组是否包含给定的值
Array.isArray() | -

## 数组的空位

方法           | 处理空位的机制
------------ | ---------------------------------------
forEach()    | 跳过空位
filter()     | 跳过空位
every()      | 跳过空位
some()       | 跳过空位
map()        | 跳过空位，但会保留这个值
join()       | 将空位视为undefined，而undefined和null会被处理成空字符串
toString()   | 将空位视为undefined，而undefined和null会被处理成空字符串
Array.from   | 将数组的空位，转为undefined
扩展运算符（...）   | 将空位转为undefined
copyWithin() | 连空位一起拷贝
fill()       | 会将空位视为正常的数组位置
for...of循环   | 会遍历空位
entries()    | 将空位处理成undefined
keys()       | 将空位处理成undefined
values()     | 将空位处理成undefined
find()       | 将空位处理成undefined
findIndex()  | 将空位处理成undefined
