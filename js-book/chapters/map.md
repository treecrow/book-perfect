# map

> 类似于对象，也是键值对的集合，但是"键"的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了"字符串--值"的对应，Map结构提供了"值--值"的对应，是一种更完善的 Hash 结构实现。如果你需要"键值对"的数据结构，Map 比 Object 更合适

## 方法列表

方法                | more
----------------- | ------------------------------------
new Map()         | -
new Map(arr)      | Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
map.set(key, val) | -
map.get(key)      | -
map.has(key)      | -
map.delete(key)   | -
map.clear()       | -

### 遍历方法

方法        | more
--------- | -------------
keys()    | 返回键名的遍历器。
values()  | 返回键值的遍历器。
entries() | 返回所有成员的遍历器。
forEach() | 遍历 Map 的所有成员。

## 属性列表

属性       | more
-------- | ----
map.size | -

## 与其他数据结构的互相转换

### 数组转化为map

```javascript
new Map
```

### 转为数组

```javascript
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
```

### Map 转为对象

```javascript
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
```

### 对象转为 Map

```javascript
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
// Map {"yes" => true, "no" => false}
```

### Map 转为 JSON

### JSON 转为 Map

--------------------------------------------------------------------------------

# WeakMap
