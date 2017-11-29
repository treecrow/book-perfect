# set

> 类似于数组，但是成员的值都是唯一的，没有重复的值

## 方法列表

方法                | more
----------------- | -------------------------------------------------
new Set()         | 创建一个新的set数组
new Set([1,2,2])  | Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化
set.add(value)    | 添加某个值，返回Set结构本身。
set.delete(value) | 删除某个值，返回一个布尔值，表示删除是否成功。
set.has(value)    | 返回一个布尔值，表示该值是否为Set的成员。
set.clear()       | 清除所有成员，没有返回值。

### 遍历方法

方法        | more
--------- | ------------
keys()    | 返回键名的遍历器
values()  | 返回键值的遍历器
entries() | 返回键值对的遍历器
forEach() | 使用回调函数遍历每个成员

## 属性列表

属性              | more
--------------- | --------------
set.constructor | 构造函数，默认就是Set函数
set.size        | Set实例的成员总数

## 应用

### 数组去重

> 也可以去 NaN 的重复（===判断不能去除NaN的重复）

```javascript
[...new Set(arr)]
```

### 并集、交集和差集

```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

--------------------------------------------------------------------------------

# WeakSet
