# String

> String类型相关知识点

## api列表

| 分类  | api                                         | more                                       |
|-----|---------------------------------------------|--------------------------------------------|
| 转化  | -                                           | -                                          |
| ~   | otherType.toString()                        | 不能将null和undefined转换为字符串，但是可以转进制字符串         |
| ~   | numType.toString(2/8/16)                    | 将数字转换为 2/8/16 进制，默认十进制                     |
| ~   | buffer.toString([encoding], [start], [end]) | 转换成字符串后的字符编码，默认为 ‘utf8′(我还知道有'hex')        |
| ~   | String()                                    | 可以将null和undefined转换为字符串，但是没法转进制字符串         |
| 查找  | -                                           | -                                          |
| ~   | str.indexOf()                               | 返回某个指定的字符串值在字符串中首次出现的位置                    |
| ~   | str.lastIndexOf()                           | 返回一个指定的字符串值最后出现的位置                         |
| ~   | str.charAt()                                | 返回字符串给定位置的字符                               |
| ~   | str.at()                                    | 返回字符串给定位置的字符                               |
| 操作  | -                                           | -                                          |
| ~   | str.substr(start [, length ])               | 在字符串中抽取从 start 下标开始的指定数目的字                 |
| ~   | str.substring(start [,stop])                | 用于提取字符串中介于两个指定下标之间的字符                      |
| ~   | str.slice(start [,stop])                    | 用于提取字符串中介于两个指定下标之间的字符                      |
| ~   | str.slice(-num)                             | 提取字符串后面 num 个字符                            |
| ~   | str.split()                                 | 用于把一个字符串分割成字符串数组                           |
| ~   | str.concat()                                | 将两个或多个字符串，并返回一个新的单字符串                      |
| ~   | str.repeat()                                | 返回一个新字符串，表示将原字符串重复n次                       |
| ~   | str.padStart()                              | 字符串补全长度                                    |
| ~   | str.padEnd()                                | 字符串补全长度                                    |
| ~   | String.raw()                                | 用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串 |
| 大小写 | -                                           | -                                          |
| ~   | str.toLowerCase()                           | 把字符串转换为小写                                  |
| ~   | str.toLocaleLowerCase()                     | -                                          |
| ~   | str.toUpperCase()                           | 把字符串转换为大写                                  |
| ~   | str.toLocaleUpperCase()                     | -                                          |
| 判断  | -                                           | -                                          |
| ~   | str.includes()                              | 返回布尔值，表示是否找到了参数字符串                         |
| ~   | str.startsWith()                            | 返回布尔值，表示参数字符串是否在源字符串的头部                    |
| ~   | str.endsWith()                              | 返回布尔值，表示参数字符串是否在源字符串的尾部                    |
| ~   | localeCompare()                             | 用本地特定的顺序来比较两个字符串                           |
| 码点  | -                                           | -                                          |
| ~   | str.charCodeAt()                            | 返回一个字符的码点                                  |
| ~   | str.codePointAt()                           | 返回一个字符的码点                                  |
| ~   | String.fromCharCode()                       | 从码点返回对应字符                                  |
| ~   | String.fromCodePoint()                      | 从码点返回对应字符                                  |
| ~   | unicode.normalize()                         | Unicode正规化                                 |

## 字符串的遍历

> 字符串的遍历就用for...of，可以识别大于0xFFFF的码点
