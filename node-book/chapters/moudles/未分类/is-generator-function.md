# is-generator-function

> Is this an ES6 generator function?

## 相关文档

- [is-generator-function](https://github.com/ljharb/is-generator-function)

## example

```javascript
var isGeneratorFunction = require('is-generator-function');
assert(!isGeneratorFunction(function () {}));
assert(!isGeneratorFunction(null));
assert(isGeneratorFunction(function* () { yield 42; return Infinity; });
```
