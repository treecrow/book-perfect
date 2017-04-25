const _ = require('lodash');

var youngest = _([1, 2, 3])
 .tap(function(array) {
   array.pop();
 })
 .reverse()
 .value();
// => [2, 1]

console.log(youngest);
