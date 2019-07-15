# [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

> String 全局对象是一个用于字符串或一个字符序列的构造函数。

- 继承链: `String->Function->Object`

## api list

| 分类     | api                                                                | more                                                                                                                     |
| -------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 转化     | String(thing)                                                      | -                                                                                                                        |
| ^        | new String(thing)                                                  | -                                                                                                                        |
| 判断     | String.prototype.endsWith(searchString[, length])                  | 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false                                 |
| ^        | String.prototype.startsWith(searchString[, position])              | 用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。                                   |
| ^        | String.prototype.includes(searchString[, position])                | 用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false                                                   |
| ^        | String.prototype.localeCompare(compareString[, locales[, options]) | 返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同                                               |
| 索引     | String.prototype.indexOf(searchValue[, fromIndex])                 | 返回调用 String 对象中第一次出现的指定值的索引，开始在 fromIndex 进行搜索                                                |
| ^        | String.prototype.lastIndexOf(searchValue[, fromIndex]))            | 返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始       |
| 码点     | String.fromCharCode(num1, ..., numN)                               | 返回由指定的 UTF-16 代码单元序列创建的字符串                                                                             |
| ^        | String.fromCodePoint(num1[, ...[, numN]])                          | 返回使用指定的代码点序列创建的字符串                                                                                     |
| ^        | String.prototype.charCodeAt(index)                                 | 返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元                                                             |
| ^        | String.prototype.codePointAt(pos)                                  | 返回 一个 Unicode 编码点值的非负整数                                                                                     |
| ^        | String.prototype.normalize([form])                                 | 会按照指定的一种 Unicode 正规形式将当前字符串正规化                                                                      |
| 模式匹配 | String.prototype.match(regexp)                                     | 回一个字符串匹配正则表达式的的结果                                                                                       |
| ^        | String.prototype.matchAll(regexp)                                  | 返回一个包含所有匹配正则表达式及分组捕获结果的迭代器                                                                     |
| ^        | String.prototype.replace(regexp                                    | substr, newSubStr                                                                                                        | function) | 返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串 |
| ^        | String.prototype.search(regexp)                                    | 执行正则表达式和 String 对象之间的一个搜索匹配                                                                           |
| 大小写   | String.prototype.toLocaleLowerCase()                               | 根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值。                                                       |
| ^        | String.prototype.toLocaleUpperCase()                               | 使用本地化（locale-specific）的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串                                |
| ^        | String.prototype.toLowerCase()                                     | 会将调用该方法的字符串值转为小写形式，并返回                                                                             |
| ^        | String.prototype.toUpperCase()                                     | 将调用该方法的字符串值转换为大写形式，并返回                                                                             |
| trim     | String.prototype.trim()                                            | 会从一个字符串的两端删除空白字符                                                                                         |
| ^        | String.prototype.trimRight()                                       | 从一个字符串的右端移除空白字符                                                                                           |
| ^        | String.prototype.trimLeft()                                        | 从字符串的开头删除空格                                                                                                   |
| 提取     | String.prototype.slice(beginSlice[, endSlice])                     | 提取一个字符串的一部分，并返回一新的字符串                                                                               |
| ^        | String.prototype.substring(indexStart[, indexEnd])                 | 返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集                                 |
| ^        | String.prototype.charAt(index)                                     | 从一个字符串中返回指定的字符                                                                                             |
| 补全     | String.prototype.padEnd(targetLength [, padString])                | 用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充 |
| ^        | String.prototype.padStart(targetLength [, padString])              | 用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。   |
| ^        | String.prototype.repeat(count)                                     | 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。                                               |
| ^        | String.prototype.concat(string2, string3[, ..., stringN])          | 将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回                                                           |
| 数组     | String.prototype.split([separator[, limit]])                       | 使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置                 |
| 模版     | String.raw(callSite, ...substitutions)                             | 是一个模板字符串的标签函数                                                                                               |
| ^        | String.raw`templateString`                                         | ^                                                                                                                        |
| 字符串化 | String.prototype.valueOf()                                         | 返回一个 String 对象的原始值                                                                                             |
| ^        | String.prototype.toString()                                        | 返回指定对象的字符串形式                                                                                                 |
| 其他     | [...str]                                                           | 与 `str.split("")` 表现一致                                                                                              |
| ^        | Array.from(str)                                                    | ^                                                                                                                        |
| ^        | for...of 循环                                                      | 可以识别大于 0xFFFF 的码点                                                                                               |
| ^        | atr.length                                                         | -                                                                                                                        |
| ^        | atr.[index]                                                        | -                                                                                                                        |
