const async = require('async');

function square(a) {
  return Math.pow(a, 2);
}
var aa = [1, 2, 3];
async.map(aa, square,
  function(err, result) {
    console.log(square(result));
  }
);
console.log(aa);

console.log(square(8));
