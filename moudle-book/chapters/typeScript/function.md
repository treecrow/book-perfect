# function

```ts
// 普通
function add(x: number, y: number): number {
  return x + y;
}

// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

// 参数默认值
function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

// 参数默认传值（undefined）
function buildName(firstName = "Will", lastName: string) {
  return firstName + " " + lastName;
}
let result3 = buildName("Bob", "Adams");
let result4 = buildName(undefined, "Adams");

// 剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
```
