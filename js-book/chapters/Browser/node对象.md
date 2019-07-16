# Node对象

## Node的子类

| 子类            | 子类               | 子类                                                 |
|---------------|------------------|----------------------------------------------------|
| Document      | -                | -                                                  |
| ~             | HTMLDocument     | -                                                  |
| ~             | DocumentFragment | -                                                  |
| Element       | -                | -                                                  |
| ~             | HTMLElement      | -                                                  |
| CharacterData | -                | CharacterData 通常是 Text 和 Comment 的祖先，定义这两种节点所共享的方法 |
| ~             | Text             | -                                                  |
| ~             | Comment          | 代表html文档的注释                                        |
| Attr          | -                | 代表html属性，几乎从不使用                                    |

## 属性列表

| attr             | more                                                             |
|------------------|------------------------------------------------------------------|
| parentNode       | 改元素的父节点                                                          |
| childNodes       | 只读的NodeList对象                                                    |
| firstChild       | 该节点子节点中的第一个                                                      |
| lastChild        | 该节点子节点中的最后一个                                                     |
| nextSibling      | 该节点兄弟节点中的前一个                                                     |
| previoursSibling | 该节点兄弟节点中的后一个                                                     |
| nodeType         | 该节点的类型 1-Element 3-Text 8-Comment 9-Document 11-DocumentFragment |
| nodeValue        | Text 或 Comment节点的文本内容                                            |
| nodeName         | 元素的标签名（大写）                                                       |

## 方法列表

| calss  | method                   | more                                                                   |
|--------|--------------------------|------------------------------------------------------------------------|
| 插入节点   | -                        | 以下方法中，待插入的节点如果是文档中已经存在的节点，会在原位置删除对应的节点（相当于移动节点）                        |
| ~      | someNode.appendChild()   | 插入指定的节点，使其成为那个节点的最后一个子节点                                               |
| ~      | someNode.insertBBefore() | 接受两个参数，第一个参数就是待插入的节点，第二个参数是已存在的节点，新节点将插入该节点的前面（没有第二个参数效果同 appendChild） |
| 删除替换节点 | -                        | -                                                                      |
| ~      | someNode.removeChild()   | 从父节点中删除一个子节点                                                           |
| ~      | someNode.replaceChild()  | 替换父节点中的一个子节点                                                           |
| ~      | -                        | -                                                                      |
| ~      | -                        | -                                                                      |
