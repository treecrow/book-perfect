# co

## API

### co(fn*).then( val => )

> 直接根据 generator 函数返回一个 promise 函数

```javascript
co(function* () {
  return yield Promise.resolve(true);
}).then(function (val) {
  console.log(val);
}, function (err) {
  console.error(err.stack);
});
```

### var fn = co.wrap(fn*)

> 转化 generator 函数为一个常规函数，这个返回接受参数并返回一个 promise

```javascript
var fn = co.wrap(function* (val) {
  return yield Promise.resolve(val);
});

fn(true).then(function (val) {

});
```
