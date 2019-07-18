# [Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)

> Storage 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项

## api list

| class | api                                | more                                                                                       |
| ----- | ---------------------------------- | ------------------------------------------------------------------------------------------ |
| 属性  | Storage.length                     | 返回一个整数，表示存储在 Storage 对象中的数据项数量。                                      |
| 方法  | Storage.key(n)                     | 该方法接受一个数值 n 作为参数，并返回存储中的第 n 个键名。                                 |
| ^     | Storage.getItem(keyName)           | 该方法接受一个键名作为参数，返回键名对应的值。                                             |
| ^     | Storage.setItem(keyName, keyValue) | 该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。 |
| ^     | Storage.removeItem(keyName)        | 该方法接受一个键名作为参数，并把该键名从存储中删除。                                       |
| ^     | Storage.clear()                    | 调用该方法会清空存储中的所有键名。                                                         |

## localStorage、sessionStorage 区别

| @        | localStorage                 | sessionStorage     |
| -------- | ---------------------------- | ------------------ |
| 持久化   | 可以长期保留                 | 页面会话结束时清除 |
| 应用范围 | 当前页面（不同页面不能共享） | 同域名             |
| 大小限制 | 大小支持能达到 5M            | 大小支持能达到 5M  |
