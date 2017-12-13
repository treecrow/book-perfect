# element对象

## 属性列表

| class   | attr                           | more                                                                    |
|---------|--------------------------------|-------------------------------------------------------------------------|
| element | someEle.children               | 也是一个 NodeList 对象，类似 childNodes，不同的是 children 列表只包含 Element 对象           |
| ~       | someEle.firstElementChild      | 只包含 Element 对象                                                          |
| ~       | someEle.lastElementChild       | 只包含 Element 对象                                                          |
| ~       | someEle.nextElementSibling     | 只包含 Element 对象                                                          |
| ~       | someEle.previousElementSibling | 只包含 Element 对象                                                          |
| ~       | someEle.childElementCount      | 子元素的数量                                                                  |
| 属性      | someEle.dataSet                | 指代一个对象，它的各个属性对应于去掉前缀的data-属性（-变驼峰 && 设置或删除其中的一个属性就等同于设置或移除对应元素的data-属性） |
| ~       | someEle.attributes             | 只读的类数组对象（每一项是Attr对象，一种特殊的Node节点），它代表元素的所有属性                             |
| 内容      | someEle.innerHTML              | 返回 / 设置元素的内容                                                            |
| ~       | someEle.outerHTML              | 返回 / 设置元素本身                                                             |
| ~       | someEle.textContent            | 返回元素解析后的纯文本内容                                                           |

## 方法列表

| class  | method                                     | more                                                                |
|--------|--------------------------------------------|---------------------------------------------------------------------|
| 选取文档元素 | someEle.getElementByTagName()              | 只选取 someEle 元素的后代元素                                                 |
| ~      | someEle.getElementByClassName()            | 可以同时包含多个类名                                                          |
| ~      | someEle.querySelectorAll()                 | 接受也个css选择器的字符串参数，返回一个表示文档中匹配选择器的所有元素的NodeList对象（这里的NodeList对象不是实时的） |
| ~      | someEle.querySelector()                    | 与 querySelectorAll 类似，不过只返回第一个匹配的元素                                 |
| 属性操作   | someEle.getAttribute(key)                  | 查询元素属性                                                              |
| ~      | someEle.setAttribute(key,vlaue)            | 设置元素属性                                                              |
| ~      | someEle.hasAttribute(key)                  | 检测元素是否有属性                                                           |
| ~      | someEle.removeAttribute(key)               | 完全删除元素某个属性                                                          |
| 内容操作   | someEle.insertAdjacentHTML(position, text) | 在元素的某个位置插入内容                                                        |
