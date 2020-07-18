# class

## 概念

```ts
class Animal {
  // 构造函数
  constructor(theName: string) {
    this.name = theName;
  }

  // 当成员被标记成 private时，它就不能在声明它的类的外部访问（实例不能访问）
  private name: string;
  // 只读属性必须在声明时或构造函数里被初始化(实例只能访问不能修改)
  readonly numberOfLegs: number = 8;
  // 静态属性
  static origin = { x: 0, y: 0 };
}
```

## protected

```ts
class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee 能够继承 Person
class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
```

## 抽象类(不允许直接被实例化)

```ts
abstract class Animal {
  // 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earch...");
  }
}
```
