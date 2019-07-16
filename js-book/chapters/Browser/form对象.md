# form对象

## 获取 form 对象/元素

```javascript
document.forms.someForm // 显式的访问有name或id的表单
```

## 表单属性列表

| class        | attr                      | more                    |
|--------------|---------------------------|-------------------------|
| `<form>`元素属性 | formEle.action            | -                       |
| ~            | formEle.encoding          | -                       |
| ~            | formEle.method            | -                       |
| ~            | formEle.target            | -                       |
| 选取元素         | formEle.someName          | 根据name获取表单的某个元素         |
| ~            | formEle.elements          | 获取表单的元素列表               |
| ~            | formEle.elements.someName | 表单的元素列表也可以通过name索引到相应元素 |

## 表单方法列表

| method           | more |
|------------------|------|
| formEle.reset()  | -    |
| formEle.submit() | -    |

------------------------------------------------------------------------

## 表单元素

### 表单元素列表

| element                                            | more |
|----------------------------------------------------|------|
| `<input type="file">`                              | -    |
| `<input type="hidden">`                            | -    |
| `<input type="password">`                          | -    |
| `<input type="radio">` 或 `<button type="reset">`   | -    |
| `<input type="submit">` 或 `<button type="submit">` | -    |
| `<input type="text">`                              | -    |
| `<select>`                                         | -    |
| `<select multiple>`                                | -    |
| `<option>`                                         | -    |
| `<textarea>`                                       | -    |

### 表单元素属性列表

| element  | attr           | more                                                        |
|----------|----------------|-------------------------------------------------------------|
| all      | type           | 表单元素类型                                                      |
| ~        | form           | 对表单的引用                                                      |
| ~        | name           | -                                                           |
| ~        | value          | -                                                           |
| 单选和复选框元素 | checked        | 可读写的布尔值，指定了元素当前是否选中                                         |
| ~        | defaultChecked | 布尔值，是HTML属性checked的值，指定了元素在第一次加载页面时是否选中                     |
| select   | size           | 默认为1，当>1时，显示为列表中的选项（不是下拉列表了）                                |
| ~        | multiple       | 允许用户选取多个选项（有这个属性type为select-multiple，没有这个属性type为select-one） |
| ~        | selectedIndex  | 返回被选中选项的索引（针对type="select-one"有效）                           |
| ~        | options        | 设置这个属性的length属性可以截断 option 元素数组                             |
| option   | selected       | -                                                           |
| ~        | text           | 设置或获取option的文本内容                                            |
| ~        | vlaue          | 指定了在提交表单时发送的文本字符串                                           |
