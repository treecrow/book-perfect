const util = require('util');

let aa = [1, 2, 3];
let bb = {
  a: 1,
  b: 2,
  c: 3
}

console.log(util.inspect(bb));
console.log(typeof bb.valueOf());
