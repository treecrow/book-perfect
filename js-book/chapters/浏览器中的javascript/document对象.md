# document对象

## 属性列表

| class  | attr            | more                                            |
|--------|-----------------|-------------------------------------------------|
| 文档元素相关 | documentElement | -                                               |
| ~      | head            | -                                               |
| ~      | scripts         | 页面中 HTMLCollection类型的`<script>`元素的集合            |
| ~      | forms           | 页面中 HTMLCollection类型的`<form>`元素的集合              |
| ~      | title           | 文档`<title>`标签的内容                                |
| url相关  | URL             | 文档的URL，只读字符串                                    |
| ~      | referrer        | 浏览器导航到当前链接的上一个文档，该属性和HTTP的Referer头信息的内容相同       |
| http相关 | cookie          | 设置/读取 HTTP cookie                               |
| ~      | domain          | 该属性允许当web页面之间交互时，相同域名下互相信任的web服务器之间协作放宽同源策略安全限制 |
| ~      | lastModified    | 包含文档修改时间的字符串                                    |
| 未分类    | designMode      | 设置为'on'使得整个文档可以编辑                               |

## 方法列表

| calss  | method                            | more                                                                |
|--------|-----------------------------------|---------------------------------------------------------------------|
| 选取文档元素 | document.getElementById()         | 用指定的id属性                                                            |
| ~      | document.getElementByName()       | 用指定的name属性获取元素（在IE中，也返回id属性匹配指定值的元素）                                |
| ~      | document.getElementByTagName()    | 用指定的标签名字（通配符*将获得一个代表文档中所有元素的NodeList对象）                             |
| ~      | document.getElementByClassName()  | 可以同时包含多个类名                                                          |
| ~      | docuemnt.querySelectorAll()       | 接受也个css选择器的字符串参数，返回一个表示文档中匹配选择器的所有元素的NodeList对象（这里的NodeList对象不是实时的） |
| ~      | docuemnt.querySelector()          | 与 querySelectorAll 类似，不过只返回第一个匹配的元素                                 |
| 创建节点   | document.createElement()          | 创建新的 Element 节点                                                     |
| ~      | document.createTextNode()         | 创建新的 Text 节点                                                        |
| ~      | document.createComment()          | 创建一个 Comment 节点                                                     |
| ~      | document.createDocumentFragment() | 创建一个 DocumentFragment 节点                                            |
| 元素位置   | document.elementFromPoint()       | 该方法返回在指定位置的一个元素（如果指定位置不在视口内则返回null）                                 |
| ~      | document.write()                  | 只有在解析文档时才能使用write()输出HTML到当前文档中                                     |
| ~      | document.writeln()                | ~                                                                   |
