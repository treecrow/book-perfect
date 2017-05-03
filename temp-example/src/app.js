//延时n毫秒
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function consoleNum() {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let num of nums) {
    await timeout(2000);
    console.log(num);
  }
}
consoleNum();
