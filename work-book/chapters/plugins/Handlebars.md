# [handlebars.js](http://handlebarsjs.com/)

## handlebars渲染

```javascript
function handlebarsRend(template, handle, data) {
  var render = Handlebars.compile($(template).html());
  $(handle).html(render(data));
}
```

## Helper 列表

- if_true

```javascript
Handlebars.registerHelper('if_true', function (v1, opts) {
  if (!!v1) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});
```

- if_eq

```javascript
Handlebars.registerHelper('if_eq', function (a, b, opts) {
  return a == b ? opts.fn(this) : opts.inverse(this);
});
```