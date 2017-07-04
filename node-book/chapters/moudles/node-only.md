# node-only

## 使用示例

```javascript
var obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345'
};

var user = only(obj, 'name last email');
// or var user = only(obj, ['name', 'last', 'email']);
```

```javascript
// get
{
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com'
}
```
