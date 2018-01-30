# [laydate](http://www.layui.com/laydate/)

## 渲染时间表单

```javascript
 laydate.render({
  elem: '#dateInput',
  theme: '#e49700',
  value: new Date(),
  btns: ['now', 'confirm'],
  range: true,
  done: function (value, date) {
  }
});
```