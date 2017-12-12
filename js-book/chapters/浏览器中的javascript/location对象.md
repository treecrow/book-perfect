# location 对象

## Method list

| method              | more                               |
|---------------------|------------------------------------|
| location.toString() | 返回 href 属性的值                       |
| location.assign()   | 使窗口载入并显示你指定的URL中的文档                |
| location.replace()  | 从浏览历史中把当前文档删除，并使窗口载入并显示你指定的URL中的文档 |
| location.reload()   | 让浏览器重新载入当前页面                       |

## Attribute list

| attr     | more                |
|----------|---------------------|
| href     | -                   |
| protocol | -                   |
| host     | -                   |
| hostname | -                   |
| hash     | 片段标志符部分             |
| port     | -                   |
| pathname | -                   |
| search   | ?之后的URL，通常是某种类型的字符串 |

## 载入新的文档

| way                                   | more                                                     |
|---------------------------------------|----------------------------------------------------------|
| `location = "https://www.baidu.com/"` | 使浏览器跳转到新页面                                               |
| `location = "page2.html"`             | 相对URL，会相对当前URL解析                                         |
| `location = "#top"`                   | 纯粹的片段标识符是相对URL的一种类型，会让文档滚动到指定区域，如果没有'#top',文档会滚动到文档开始的位置 |
| `location.search = '?page=333'`       | location对象的URL分解属性可写（载入新的文档/本文档跳转）                       |
