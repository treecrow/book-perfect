# storage对象（持久化关联数组）

## 属性/方法列表

| method                     | more           |
|----------------------------|----------------|
| storage.setItem(key,value) | -              |
| storage.getItem(key)       | -              |
| storage.removeItem(key)    | -              |
| storage.clear()            | 清空数据           |
| storage.key(index)         | 根据索引获取存储数据的key |
| storage.length[index]      | ~              |

## localStorage && sessionStorage

| \#  | localStorage      | sessionStorage      |
|-----|-------------------|---------------------|
| 有效期 | 存储的数据是永久的，除非人为的删除 | 窗口或标签页删除后存储的数据就被删除了 |
| 作用域 | 限定在文件源级别的         | 限定在顶层窗口             |

## 存储事件对象

| attr        | more                               |
|-------------|------------------------------------|
| key         | 被设置或移除项的名字或键名，如果调用的clear，则该属性为null |
| newValue    | 保存该项的新值(调用removeItem时，该属性为null)    |
| oldValue    | 该项原来的值，如果为新插入项，该属性为null            |
| storageArea | storage对象本身                        |
| url         | 触发该存储变化脚本所在文档的URL                  |