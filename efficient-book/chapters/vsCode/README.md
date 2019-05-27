# vsCode

## 参考文档

- [Microsoft Visual Studio Code 中文手册](https://jeasonstudio.gitbooks.io/vscode-cn-doc/content/)
- [mermaid](https://mermaidjs.github.io)
- [vscode 瞎折腾记](https://www.cnblogs.com/zwfymqz/p/10070264.html)

## vsCode 重置

1. [VS Code 恢复默认设置](http://www.pianshen.com/article/4275146510/)
2. 修改默认配置项目
3. 安装配置扩展
4. 安装 code
5. 设置快捷键

# [vsCode 扩展](https://marketplace.visualstudio.com/VSCode)

| 扩展                                                                                                                                                    | more                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [Chinese (Simplified) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) | 中文包                                                                                                                  |
| [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)                                                   | 支持 markdown 格式化 / TOC / 导出 html / Math（自动补全）                                                               |
| [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)                                                           | 在浏览器中预览当前 html 文件                                                                                            |
| [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)                                    | 导入文件 / 代码块运行 / LaTeX、幻灯片 / 导出 pdf、word、书籍、图片、html / 自定义预览样式 / TOC / 流程图、时序图 / 脚注 |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                                                 | 以 Prettier 风格格式化代码、文件(首次格式化某一类型的文件会要求定义一个默认格式化程序,这时候统一选择 prettier)          |

# code

> vsCode 命令行工具

| 命令        | more                                               |
| ----------- | -------------------------------------------------- |
| code .      | 打开当前路径所在文件                               |
| code folder | 打开文件夹(多个文件夹对应打开多个项目)             |
| code file   | 打开／创建 文件                                    |
| code -h     | 帮助                                               |
| code -v     | 查看 vsCode 版本号                                 |
| code -n     | 打开一个新的 VS Code 会话窗口                      |
| code -r xxx | 强制在上一个激活窗口中打开文件或文件夹(原项目不在) |
| code -g     | -                                                  |
| code -d     | 打开对比编辑器，需要两个文件路径作为参数           |
