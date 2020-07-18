# example

```ts
// 1
function greeter(person: string) {
  return "Hello, " + person;
}

// 2
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
```
