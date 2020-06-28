# [eslint](https://cn.eslint.org/)

- [eslint 规则列表](https://cn.eslint.org/docs/rules/)

| class         | key          | more                                                                      |
| ------------- | ------------ | ------------------------------------------------------------------------- |
| parser        | -            | 设置解析器                                                                |
| parserOptions | -            | 设置解析器选项                                                            |
| ^             | ecmaVersion  | 指定你想要使用的 ECMAScript 版本                                          |
| ^             | sourceType   | 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)       |
| ^             | ecmaFeatures | 配置额外的语言特性                                                        |
| processor     | -            | 配置处理器（插件可以提供处理器）                                          |
| env           | -            | 指明环境（一个环境定义了一组预定义的全局变量）                            |
| globals       | -            | 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告，可以在此指明   |
| plugins       | -            | 配置插件                                                                  |
| rules         | -            | ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则 |
| settings      | -            | ESLint 支持在配置文件添加共享设置                                         |
| extends       | -            | -                                                                         |
