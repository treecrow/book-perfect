# Number、parseInt、parseFloat的区别

## Number()

```javascript
console.log(Number(true)); // 1
console.log(Number(99)); // 99
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number('Hello World')); // NaN
console.log(Number('192.168.0.1')); // NaN
console.log(Number('192.168')); // 192.168
console.log(Number('0192.168')); // 192.168
console.log(Number('0.192.168')); // NaN
console.log(Number('')); // 0
```

## parseInt()

```javascript
console.log(parseInt(true)); // NaN
console.log(parseInt(99)); // 99
console.log(parseInt(null)); // NaN
console.log(parseInt(undefined)); // NaN
console.log(parseInt('Hello World')); // NaN
console.log(parseInt('192.168.0.1')); // 192
console.log(parseInt('192.168')); // 192
console.log(parseInt('0192.168')); // 192
console.log(parseInt('0.192.168')); // 0
console.log(parseInt('')); // NaN
console.log(parseInt('0x10')); // 16
console.log(parseInt('012')); // 12
```

## parseFloat()

```javascript
console.log(parseFloat('192.168.0.1')); // 192.168
console.log(parseFloat('-192.168')); // -192.168
console.log(parseFloat('0192.168')); // 192.168
console.log(parseFloat('0.192.168')); // 0.192
console.log(parseFloat('0x10')); // 0
console.log(parseFloat('012')); // 12
```