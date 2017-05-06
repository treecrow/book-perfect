# title变化

```javascript
let t = document.title;
let title = {
  focus: document.title,
  exit: '到我这里来嘛～～',
};
window.onblur = () => {
  document.title = title.exit;
};
window.onfocus = () => {
  document.title = title.focus;
};
```
