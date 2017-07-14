# ejs

## 使用示例

```javascript
var template = ejs.compile(str, options);
template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});

ejs.render(dataAndOptions);
// => Rendered HTML string
```

## 配置列表

字段           | more
------------ | ------------------------------------------
cache        | 是否缓存（需要filename）
filename     | 缓存名称，会用作缓存的key
root         | -
context      | 执行上下文函数
compileDebug | 是否编译debug，如果为true，将显示堆栈信息
client       | 是否在客户端执行，如果为true,则返回函数
delimiter    | 指定分隔符，默认"%"
debug        | 是否设置为debug状态，如果为true则会在控制台显示生成函数源码
strict       | -
`_with`      | 是否你用"with(){}"函数，如果为false，数据将会保存在locals变量中
localsName   | -
rmWhitespace | -
escape       | -

## 语法列表

语法                  | more
------------------- | ------------------------
`<% %>`             | 逻辑处理
`<%= %>`            | 变量输出
`<%- %>`            | html文本插入
`-%>`               | -
`<%_ _%>`           | -
`<%# %>`            | -
`<%% %%>`           | -
include(path, data) | 向一个ejs模版中插入另外一个渲染后的ejs模版
