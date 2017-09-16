function Foo() {
  getName = function () {
    console.log(1)
  }
}
Foo.getName = function () {
  console.log(2)
}
Foo.prototype.getName = function () {
  console.log(3)
}

var getName = function () {
  console.log(4)
}

function getName() {
  console.log(5)
}

// new Foo.getName(); // 2
// Foo.getName(); // 2
// new Foo().getName(); // 3

let aa = function () {
  console.log(2222)
  return {
    a: '1',
    b: '2'
  }
}

let bb = new aa
console.log(bb)