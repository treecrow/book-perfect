# markdown 语法

## 列表

- li
- li
- li

1. li
2. li
3. li

## 段落

> 段落

## code block

This is a normal paragraph:

    This is a code block.

```text
This is a code block.
```

```text
| English  | Hello      | |            |            |
| Chinese  | 你好       | | Vietnamese | 嗔嘲       |
| Japanese | こんにちは | | Korean     | 안녕하세요 |
```

```text
+------+------+------+------+------+------+
|      | Mon  | Tue  | Wed  | Thu  | Fri  |
+======+======+======+======+======+======+
| 田中 | (^^) | (xx) | (xx) | ('') | (^^) |
+------+------+------+------+------+------+
| 鈴木 | (^^) | (^^) | ('') | (xx) | (^^) |
+------+------+------+------+------+------+
```

```text
=====  =====  ========  =======
Input    .     Output
-----  -----  --------  -------
  A      B    "A or B"  A_and_B
=====  =====  ========  =======
False  False  False     False
True   False  True      False
=====  =====  ========  =======
```

```flow
flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```

## 表格

| a   | a   |
|-----|-----|
| b   | b   |

## hr

---

## 链接

[Google](http://google.com/)

http://google.com/

## 标注

I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

  [google]: http://google.com/        "Google"
  [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
  [msn]:    http://search.msn.com/    "MSN Search"

I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").

## 强调

- *em*
- _em_
- **strong**
- __strong__

## code

Use the `printf()` function.

``There is a literal backtick (`) here.``

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

Please don't use any `<blink>` tags.

`&#8212;` is the decimal-encoded equivalent of `&mdash;`.

## img

![报文的结构](../imgs/报文的结构.png)

图片 [报文的结构][]

[报文的结构]: ../imgs/报文的结构.png  "Optional title attribute"

## 特殊字符列表

| 字符     | more |
|--------|------|
| &copy; | -    |
| &lt;   | -    |
| &gt;   | -    |
| &amp;  | -    |

## 转义字符列表

| 转义字符 | more                |
|------|---------------------|
| \\   | backslash           |
| \`   | backtick            |
| \*   | asterisk            |
| \_   | underscore          |
| \{\} | curly braces        |
| \[\] | square brackets     |
| \(\) | parentheses         |
| \#   | hash mark           |
| \+   | plus sign           |
| \-   | minus sign (hyphen) |
| \.   | dot                 |
| \!   | exclamation mark    |
