# Decorator(修饰器)

## 类的修饰

```js
@testable
class MyTestableClass {
  // ...
}
function testable(target) {
  target.isTestable = true;
}
MyTestableClass.isTestable; // true
```

## 方法的修饰

```js
class Person {
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}
function readonly(target, name, descriptor) {
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}
```

## Mixin

## Trait
