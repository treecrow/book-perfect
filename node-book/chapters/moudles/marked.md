# marked模块

## 初始设置（setOptions）

option      | 功能
----------- | ------------------------
renderer    | 声明使用的渲染器
gfm         | github风格的markdown
tables      | gfm风格的table
breaks      | gfm风格的breaks
pedantic    | 尽可能的使用md文件本身，不修改其中的语法错误？
sanitize    | 过滤输入的html标签
smartLists  | 使用智能列表（pedantic需要为false）
smartypants | 使用智能的标点符
highlight   | 代码高亮

## 方法列表

method                                               | 功能
---------------------------------------------------- | ---------
marked.setOptions()                                  | 初始设置
new marked.Renderer()                                | 设置个性化的渲染器
marked()                                             | 默认渲染方式
marked.code(string code, string language)            | -
marked.blockquote(string quote)                      | -
marked.html(string html)                             | -
marked.heading(string text, number level)            | -
marked.hr()                                          | -
marked.list(string body, boolean ordered)            | -
marked.listitem(string text)                         | -
marked.paragraph(string text)                        | -
marked.table(string header, string body)             | -
marked.tablerow(string content)                      | -
marked.tablecell(string content, object flags)       | -
marked.strong(string text)                           | -
marked.em(string text)                               | -
marked.codespan(string code)                         | -
marked.br()                                          | -
marked.del(string text)                              | -
marked.link(string href, string title, string text)  | -
marked.image(string href, string title, string text) | -
marked.lexer()                                       | 解析html?
lexer.lex()                                          | -
marked.parser()                                      | 解析html?

## 渲染器

```
let renderer = new marked.Renderer();
```

- 块级元素

lebel                                            | 功能
------------------------------------------------ | --------
renderer.heading(text, level)                    | 设置H标签的渲染
renderer.code(string code, string language)      | -
renderer.blockquote(string quote)                | -
renderer.html(string html)                       | -
renderer.heading(string text, number level)      | -
renderer.hr()                                    | -
renderer.list(string body, boolean ordered)      | -
renderer.listitem(string text)                   | -
renderer.paragraph(string text)                  | -
renderer.table(string header, string body)       | -
renderer.tablerow(string content)                | -
renderer.tablecell(string content, object flags) | -

- 行内元素

lebel                                                  | 功能
------------------------------------------------------ | --
renderer.strong(string text)                           | -
renderer.em(string text)                               | -
renderer.codespan(string code)                         | -
renderer.br()                                          | -
renderer.del(string text)                              | -
renderer.link(string href, string title, string text)  | -
renderer.image(string href, string title, string text) | -
