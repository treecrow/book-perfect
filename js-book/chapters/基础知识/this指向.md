# this 指向

## 被直接调用时，this 指全局对象 window。

```js
func();
```

## 被作为构造函数调用时，this 指当前正在构建的对象。

```js
new func();
```

## 被作为某个对象 A 的方法调用时，this 指方法所属的对象 A。

```js
A.func();
```

## 使用函数的 apply 或 call 方法调用时，this 指第一个参数 B。

```js
func.apply(B, [m, n, ...]);
func.call(B, m, n, ...);
```
