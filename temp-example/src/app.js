let obj = {
  a: 'a',
  b: 'b'
};
console.log(JSON.stringify({
  obj,
  toString: obj.toString(),
  toLocaleString: obj.toLocaleString(),
  valueOf: obj.valueOf(),
}, null, 2));
