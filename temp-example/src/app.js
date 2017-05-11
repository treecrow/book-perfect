let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c'
};

let arr = ['a', 'b', 'c'];

function turnToArr(str) {
  let obj = JSON.parse(str);
  obj.length = Object.keys(obj).length;
  return Array.from(obj);
}

function turnToStr(arr) {
  return Object.assign({},arr)
}

console.log(turnToStr(arr));
