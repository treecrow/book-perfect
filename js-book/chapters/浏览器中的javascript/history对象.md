# history对象

## 属性列表

| attr           | more          |
|----------------|---------------|
| history.length | 浏览器历史列表中的元素数量 |

## 方法列表

| method                                       | more                               |
|----------------------------------------------|------------------------------------|
| history.back()                               | 后退一格                               |
| history.forword()                            | 前进一格                               |
| history.go()                                 | 后退或前进任意次                           |
| history.pushState(state object,title,URL)    | 改变当前文档url而不刷新页面，history.length长度加1 |
| history.replaceState(state object,title,URL) | 改变当前文档url而不刷新页面，history.length不变化  |
