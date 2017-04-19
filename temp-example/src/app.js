var sleep = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('sancnalc');
        }, 1000);
    })
};

(async function(){
  console.log('start');
  let aa = await sleep(3000);
  console.log(aa);
})()
console.log('4334');
