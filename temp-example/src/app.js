let obj1 = {
  a: 1,
  b: 2,
  c: {
    aa:1,
    bb:2,
    cc:3
  },
};

let result = { ...obj1};

result.b = 4444;
result.c.cc = 555;
console.log(result);
console.log(obj1);
