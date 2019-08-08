# [DataTransfer](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer)

> 这个对象可以从所有拖动事件 drag events 的 dataTransfer 属性上获取，但是不能单独创建。

## api list

| class  | api            | more                                                                                                                |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------------------- |
| attr   | dropEffect     | 获取 / 设置实际的放置效果，它应该始终设置成 effectAllowed 的可能值之一                                              |
| ^      | effectAllowed  | 用来指定拖动时被允许的效果                                                                                          |
| ^      | files          | 包含一个在数据传输上所有可用的本地文件列表                                                                          |
| ^      | types          | 保存一个被存储数据的类型列表作为第一项，顺序与被添加数据的顺序一致                                                  |
| method | addElement()   | 设置拖动源。通常你不需要改变这项，如果修改这项将会影响拖动的哪个节点和 dragend 事件的触发。默认目标是被拖动的节点。 |
| ^      | clearData()    | 删除与给定类型关联的数据                                                                                            |
| ^      | getData()      | 根据指定的类型检索数据，如果指定类型的数据不存在或者该 DataTransfer 对象中没有数据，方法将返回一个空字符串。        |
| ^      | setData()      | 为一个给定的类型设置数据。如果该数据类型不存在，它将添加到的末尾，这样类型列表中的最后一个项目将是新的格式          |
| ^      | setDragImage() | 自定义一个期望的拖动时的图片                                                                                        |
