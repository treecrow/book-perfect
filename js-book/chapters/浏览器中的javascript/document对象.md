# document对象

## 属性列表

| attr            | more                                 |
|-----------------|--------------------------------------|
| documentElement | -                                    |
| head            | -                                    |
| scripts         | 页面中 HTMLCollection类型的`<script>`元素的集合 |

## 方法列表(选取文档元素)

| method                           | more                                                                |
|----------------------------------|---------------------------------------------------------------------|
| document.getElementById()        | 用指定的id属性                                                            |
| document.getElementByName()      | 用指定的name属性获取元素（在IE中，也返回id属性匹配指定值的元素）                                |
| document.getElementByTagName()   | 用指定的标签名字（通配符*将获得一个代表文档中所有元素的NodeList对象）                             |
| document.getElementByClassName() | 可以同时包含多个类名                                                          |
| docuemnt.querySelectorAll()      | 接受也个css选择器的字符串参数，返回一个表示文档中匹配选择器的所有元素的NodeList对象（这里的NodeList对象不是实时的） |
| docuemnt.querySelector()         | 与 querySelectorAll 类似，不过只返回第一个匹配的元素                                 |
