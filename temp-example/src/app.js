
function delay(num){
  setTimeout(function(){
    return num;
  }, 3000);
}
function dbFuc() {
  let nums = [1,2,3,4,5,6,7,8,9,10];

  // 可能得到错误结果
  nums.forEach(async function (num) {

    let aa = await setTimeout(function(){
      return num;
    }, 3000);
    console.log(aa);
  });
}

dbFuc();
