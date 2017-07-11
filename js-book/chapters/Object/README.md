# Object

## 属性

方法              | 功能
--------------- | -----------------------
obj.constructor | 保存着用于创建当前对象的函数
`obj.__proto__` | 用来读取或设置当前对象的prototype对象

## 操作方法

方法                  | 功能
------------------- | ------------------------------------------------------------------------------
Object.is()         | 比较两个值是否相等
Object.assign()     | 用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）(只能够浅拷贝)
obj.toString()      | 返回对象的字符串表示
obj.toLocalString() | 返回对象的字符串表示
obj.valueOf()       | 返回对象的字符串,数值或布尔值表示,通常与toString()方法返回结果相等
obj.inspect()       | 字面量对象的inspect()是个特殊的方法（需要显示的声明），如果一个对象字面量声明了这个方法，则此对象console的结果为inspect()返回的结果

```javascript
let obj = {
  a: 'a',
  b: 'b'
};
console.log(JSON.stringify({
  obj,
  toString:obj.toString(),
  toLocaleString:obj.toLocaleString(),
  valueOf:obj.valueOf(),
}, null, 2));
//======>
{
  "obj": {
    "a": "a",
    "b": "b"
  },
  "toString": "[object Object]",
  "toLocaleString": "[object Object]",
  "valueOf": {
    "a": "a",
    "b": "b"
  }
}
```

## 遍历方法

方法                                | 功能
--------------------------------- | -------------------------------------------------
for...in                          | 循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）
Object.keys(obj)                  | 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
Object.values()                   | 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
Object.entries()                  | 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
Reflect.ownKeys(obj)              | 返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举
Object.getOwnPropertyNames(obj)   | 获取obj所有属性,不管它是否可以枚举
Object.getOwnPropertySymbols(obj) | 返回一个数组，包含对象自身的所有Symbol属性

> 属性遍历的次序规则:

- 首先遍历所有属性名为数值的属性，按照数字排序。
- 其次遍历所有属性名为字符串的属性，按照生成时间排序。
- 最后遍历所有属性名为Symbol值的属性，按照生成时间排序。

## 属性方法

方法                                        | 功能
----------------------------------------- | -----------------------------------------
Object.defineProperty()                   | 为对象定义或修改一个属性（可以设置访问器属性）
Object.defineProperties()                 | 为对象赋予多个属性,同时可以设置访问器属性
Object.getOwnPropertyDescriptor(obj, 'p') | 返回某个对象属性的描述对象
Object.getOwnPropertyDescriptors(obj)     | 返回指定对象所有自身属性（非继承属性）的描述对象
obj.hasOwnProperty(propertyName)          | 判断propertyName属性是实例自身的还是继承来的
obj.prototypeIsEnumerable(propertyName)   | 判断propertyName属性是否时实例自身的,并且判断是否时可枚举的
`obj.__defineGetter__(kay,()=>{})`        | 在对象定义后某个属性的 get 方法（定义前的方法是 get key () {}）
`obj.__defineSetter__(kay,()=>{})`        | 在对象定义后某个属性的 set 方法（定义前的方法是 set key () {}）

## 原型链相关方法

方法                                      | 功能
--------------------------------------- | -----------------------------------------------------------------
Object.create(proto[,propertiesObject]) | 一种对象创建方式,第一个参数是要继承的原型,如果不是一个子函数,可以传一个null,第二个参数是对象的属性描述符,这个参数是可选的
Object.setPrototypeOf()                 | 用来设置一个对象的prototype对象，返回参数对象本身
Object.getPrototypeOf()                 | 用于读取一个对象的原型对象
obj.isPrototypeOf(otherObj)             | 判断obj是否存在于另一个对象otherObj的原型链中
obj.getPrototypeOf()                    | 返回[[Prototype]]值,实际上就是对应对象的原型
