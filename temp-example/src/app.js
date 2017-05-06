let aaa = {
  a:1,
  b:2
};
let bbb = Object.assign(aaa,{
  a:2,
  b:1
})
console.log(aaa);
console.log(bbb);
