# [re](https://docs.python.org/zh-cn/3/library/re.html)

> re 模块为高级字符串处理提供了正则表达式工具。

## api list

| api                                             | more                                                                           |
| ----------------------------------------------- | ------------------------------------------------------------------------------ |
| re.compile(pattern, flags=0)                    | 编译正则表达式返回正则表达式对象                                               |
| re.match(pattern, string, flags=0)              | 用正则表达式匹配字符串 成功返回匹配对象 否则返回 None                          |
| re.search(pattern, string, flags=0)             | 搜索字符串中第一次出现正则表达式的模式 成功返回匹配对象 否则返回 None          |
| re.split(pattern, string, maxsplit=0, flags=0)  | 用正则表达式指定的模式分隔符拆分字符串 返回列表                                |
| re.sub(pattern, repl, string, count=0, flags=0) | 用指定的字符串替换原字符串中与正则表达式匹配的模式 可以用 count 指定替换的次数 |
| re.fullmatch(pattern, string, flags=0)          | match 函数的完全匹配（从字符串开头到结尾）版本                                 |
| re.findall(pattern, string, flags=0)            | 查找字符串所有与正则表达式匹配的模式 返回字符串的列表                          |
| re.finditer(pattern, string, flags=0)           | 查找字符串所有与正则表达式匹配的模式 返回一个迭代器                            |
| re.purge()                                      | 清除隐式编译的正则表达式的缓存                                                 |
| re.I / re.IGNORECASE                            | 忽略大小写匹配标记                                                             |
| re.M / re.MULTILINE                             | 多行匹配标记                                                                   |
