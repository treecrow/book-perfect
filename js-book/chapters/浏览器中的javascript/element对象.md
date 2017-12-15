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
| 尺寸      | someEle.offsetWidth            | 元素的尺寸(基于border)                                                         |
| ~       | someEle.offsetHeight           | ~                                                                       |
| ~       | someEle.clientWidth            | 元素的尺寸(基于padding)                                                        |
| ~       | someEle.clientHeight           | ~                                                                       |
| ~       | someEle.scrollWidth            | 元素的尺寸(基于padding，包含滚动条滚动距离)                                              |
| ~       | someEle.scrollHeight           | ~                                                                       |
| ~       | someEle.clientLeft             | 元素的内边距的外边缘和它的边框的外边缘的水平和垂直距离（一般等于边框的宽度）                                  |
| ~       | someEle.clientTop              | ~                                                                       |
| 位置      | someEle.offsetLeft             | 元素的坐标（相对于已经定位的父元素）                                                      |
| ~       | someEle.offsetTop              | ~                                                                       |
| ~       | someEle.scrollLeft             | 元素的滚动条的位置（可设置）                                                          |
| ~       | someEle.scrollTop              | ~                                                                       |
| 父元素     | someEle.offsetParent           | 已经定位的离自己最近的父元素（如果没有则为body）                                              |

## 方法列表

| class  | method                                     | more                                                                              |
|--------|--------------------------------------------|-----------------------------------------------------------------------------------|
| 选取文档元素 | someEle.getElementByTagName()              | 只选取 someEle 元素的后代元素                                                               |
| ~      | someEle.getElementByClassName()            | 可以同时包含多个类名                                                                        |
| ~      | someEle.querySelectorAll()                 | 接受也个css选择器的字符串参数，返回一个表示文档中匹配选择器的所有元素的NodeList对象（这里的NodeList对象不是实时的）               |
| ~      | someEle.querySelector()                    | 与 querySelectorAll 类似，不过只返回第一个匹配的元素                                               |
| 属性操作   | someEle.getAttribute(key)                  | 查询元素属性                                                                            |
| ~      | someEle.setAttribute(key,vlaue)            | 设置元素属性                                                                            |
| ~      | someEle.hasAttribute(key)                  | 检测元素是否有属性                                                                         |
| ~      | someEle.removeAttribute(key)               | 完全删除元素某个属性                                                                        |
| 内容操作   | someEle.insertAdjacentHTML(position, text) | 在元素的某个位置插入内容                                                                      |
| 位置尺寸   | someEle.getBoundingClientRect()            | 返回一个包含 left,right,top,bottom,width,height[,x,y]等属性的对象（宽高包含元素border）。返回元素在视口坐标中的位置 |
| ~      | someEle.scrollIntoView()                   | 通过滚动页面使元素在视口中可见（默认元素尽量靠近视口的上边缘，传入false元素尽量靠近视口的下边缘）                               |
