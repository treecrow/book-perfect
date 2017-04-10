# API

## Object类
### 方法
#### 其它
- Object.create(proto[,propertiesObject])---一种对象创建方式,第一个参数是要继承的原型,如果不是一个子函数,可以传一个null,第二个参数是对象的属性描述符,这个参数是可选的;
- Object.setPrototypeOf()---用来设置一个对象的prototype对象，返回参数对象本身
- Object.getPrototypeOf()---用于读取一个对象的原型对象
- Object.defineProperties()---为对象赋予属性,同时可以设置访问器属性
#### 操作方法
- Object.is()---比较两个值是否相等
- Object.assign()---用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）(只能够浅拷贝)
#### 描述对象
- Object.getOwnPropertyDescriptor(obj, 'p')---返回某个对象属性的描述对象
- Object.getOwnPropertyDescriptors(obj)---返回指定对象所有自身属性（非继承属性）的描述对象
#### 遍历方法
- Object.keys(obj)---返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
- Object.values()---返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
- Object.entries()---返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
- Object.getOwnPropertyNames(obj)---获取obj所有属性,不管他是否可以枚举
- Object.getOwnPropertySymbols(obj)---返回一个数组，包含对象自身的所有Symbol属性

## object的实例
#### 方法
- obj.hasOwnProperty(propertyName)---判断propertyName属性是实例自身的还是继承来的
- obj.isPrototypeOf(otherObj)---判断obj是否存在于另一个对象otherObj的原型链中
- obj.getPrototypeOf()---返回[[Prototype]]值,实际上就是对应对象的原型
- obj.prototypeIsEnumerable(propertyName)---判断propertyName属性是否时实例自身的,并且判断是否时可枚举的
- obj.toString()---返回对象的字符串表示
- obj.toLocalString()---返回对象的字符串表示
- obj.valueOf()---返回对象的字符串,数值或布尔值表示,通常与toString()方法返回结果相等
#### 属性
- obj.constructor---保存着用于创建当前对象的函数
- obj.__proto__---用来读取或设置当前对象的prototype对象
```js
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
======>
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

## 自定义方法
- 判断name属性是否处于原型链上
```js
function hasPrototypeProperty(obj,name){
  return !obj.hasOwnProperty(name) && (name in obj);
}
```