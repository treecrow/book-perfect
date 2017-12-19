# [artTemplate](https://aui.github.io/art-template/)

> 模版引擎

## 方法列表

| method                                 | more                                                             |
|----------------------------------------|------------------------------------------------------------------|
| template(filename, data)               | render template basing on template name                          |
| template.compile(source, options)      | compile source of template as function                           |
| template.render(source, data, options) | compile source of template as function and immediately invoke it |

## 语法

| syntax | more           |
|--------|----------------|
| $data  | 传入模版的数据对象      |
| $index | 数组的索引或对象的key   |
| $value | 数组的元素或对象的value |

```javascript
{{value}}
{{data.key}}
{{data['key']}}
{{a ? b : c}}
{{a || b}}
{{a + b}}
```

```javascript
<%= value %>
<%= data.key %>
<%= data['key'] %>
<%= a ? b : c %>
<%= a || b %>
<%= a + b %>
```