# Node对象

## Node的子类

| 子类            | 子类           | 子类                                                 |
|---------------|--------------|----------------------------------------------------|
| Document      | -            | -                                                  |
| ~             | HTMLDocument | -                                                  |
| Element       | -            | -                                                  |
| ~             | HTMLElement  | -                                                  |
| CharacterData | -            | CharacterData 通常是 Text 和 Comment 的祖先，定义这两种节点所共享的方法 |
| ~             | Text         | -                                                  |
| ~             | Comment      | 代表html文档的注释                                        |
| Attr          | -            | 代表html属性，几乎从不使用                                    |

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
