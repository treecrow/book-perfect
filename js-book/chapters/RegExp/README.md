# 正则表达式

## 创建RegExp实例

- 字面量方式:

```javascript
let pattern = /someRule/flags;
```

- RegExp构造函数方式:

```javascript
let pattern = new RegExp("somrRule",flags)
```

--------------------------------------------------------------------------------

## RegExp修饰符

- g---表示全局模式,即模式将被应用于所有字符串,而非在发现第一个匹配时就停止;
- i---表示不区分大小写模式,即在确定匹配项时忽略模式与字符串的大小写;
- m---表示多行模式,即在到达一行文本末尾时还会继续查询下一行中是否存在与模式匹配的项.

## RegExp实例属性

- pattern.global---布尔值,表示是否设置了g标志
- pattern.ignoreCase---布尔值,表示是否设置了i标志
- pattern.multiline---布尔值,表示是否设置了m标志
- pattern.lastIndex---整数,表示开始搜索下一个匹配项的字符位置,从0算起
- pattern.source---正则表达式的字符串表示

## RegExp实例方法

- pattern.exec()---返回匹配的组

```javascript
let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi;
let matches = pattern.exec(text);
console.log(JSON.stringify({
  index: matches.index,
  input: matches.input,
  matches: matches
}, null, 2));
// 返回值(如果没有匹配项,则返回null)
{
  "index": 0,
  "input": "mom and dad and baby",
  "matches": [
    "mom and dad and baby",
    " and dad and baby",
    " and baby"
  ]
}
```

- pattern.test()---接受一个字符串类型(如果不是,会转化为字符串),返回是否匹配的布尔值
- pattern.toString()
- pattern.toLocalString()
- pattern.valueOf()

```javascript
let pattern = /mom( and dad( and baby)?)?/gi;
console.log(JSON.stringify({
  toString: pattern.toString(),
  toLocaleString: pattern.toLocaleString(),
  valueOf: pattern.valueOf()
}, null, 2));
// 返回值:
{
  "toString": "/mom( and dad( and baby)?)?/gi",
  "toLocaleString": "/mom( and dad( and baby)?)?/gi",
  "valueOf": {}
}
```

--------------------------------------------------------------------------------

## 正则

### 位置

- \b---\b代表单词的开头或结尾,也就是单词的分界处

  > 精确查找hi这个单词: \bhi\b

- ^---匹配你要用来查找的字符串的开头

- $---匹配你要用来查找的字符串的结尾
- \B---匹配不是单词开头或结束的位置

### 次数

- ?---指定?前面的内容匹配0次或1次;
- +---元字符,指定+前面的内容需要至少匹配一次;
- {}---指定{}前面的内容匹配{}内规定的次数;
- *---匹配任意次

### 字符

- .---匹配除换行符以外的任意字符;
- \s---匹配任意的空白符,包括空格,制表符,换行符
- \w---匹配字母,数字,下划线,汉字等;
- \d---匹配一个数字;
- \0---空字符
- \v---垂直制表符
- \e---escape字符
- \a---alert字符
- \f---换页符
- \r---回车符
- \n---换行符
- \t---制表符
- \D---匹配任意非数字的字符
- \S---匹配任意不是空白符的字符
- \W---匹配任意不是字母.数字,下划线,汉字的字符

### 本身

- .---
- []---匹配没有预定义元字符的字符集合

  > [aerou]匹配任意一个英文原因字母; [0-9]匹配数字0到9

- "-"---

### 分支条件

- |---使用|可以将不同批评日规则分开,只要满足了其中一个就可以

### 分组

- ()---可以使用()将子表达式包起来,然后后面可以使用{}来指定子表达式的重复次数了

### 反义

- [^]---匹配除了括号内部内容以外的任意字符

  > [^aerou]匹配除了aerou这几个字母以外的任意字符
