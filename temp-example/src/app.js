let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let brr = Object.assign({}, arr, {
  status: 1,
  msg: '成功获取scene'
})
console.log(brr);
