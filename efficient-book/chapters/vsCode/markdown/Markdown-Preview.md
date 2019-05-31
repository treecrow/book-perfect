# Markdown-Preview

## 标题 {.className #some_id}

> 标题添加 calss、id 是一个 MPE 扩展的特性

## 强调

- _斜体_ _斜体_
- **粗体** **粗体**
- ~~横线删除~~

## 列表

- 无序列表
  - li
  - li
  - li
- 有序列表
  1. li
  2. li
  3. li
- 任务列表
  - [x] task 1
  - [ ] task 2
  - [x] task 3

## 图片链接

- http://google.com/
- [google](http://google.com/)
- ![图片](someUrl)

## 分隔符

---

## 代码 && 代码块

- 代码

  - `code`
  - `` There is a literal backtick (`) here. ``

- 代码块

  ```ruby
  require 'redcarpet'
  markdown = Redcarpet.new("Hello World!")
  puts markdown.to_html
  ```

- 给你的代码块设置 class（MPE 扩展的特性）

  ```javascript {.class1 .class}
  function add(x, y) {
    return x + y;
  }
  ```

- 代码块显示代码行数

  ```javascript {.line-numbers}
  function add(x, y) {
    return x + y;
  }
  ```

## 表格

| a   | b   |
| --- | --- |
| 1   | 11  |

| a   | b   |
| --- | --- |
| >   | 11  |
| 2   |     |

| a   | b   |
| --- | --- |
| 1   | 11  |
| ^   | 22  |

## 小玩意

- :smile:
- 30^th^
- H~2~O
- ==marked==

## 缩略

_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium
The HTML specification
is maintained by the W3C.

## 标注

I get 10 times more traffic from [Google][1] than from [Yahoo][] or [MSN](http://search.msn.com/ "MSN Search").

[1]: http://google.com/ "Google Search"
[yahoo]: http://search.yahoo.com/ "Yahoo Search"

## 脚注

Content [^1]

[^1]: Hi! This is a footnote
