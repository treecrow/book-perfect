# vsCode

## 参考文档

- [Microsoft Visual Studio Code 中文手册](https://jeasonstudio.gitbooks.io/vscode-cn-doc/content/)
- [VS Code extensions](https://marketplace.visualstudio.com/VSCode)
- [mermaid](https://mermaidjs.github.io)

## 快捷键列表

| 分类     | 快捷键       | more                                       |
| -------- | ------------ | ------------------------------------------ |
| 项目文件 | -            | -                                          |
| ~        | ⌘+⇧+n        | 新建新窗口                                 |
| ~        | ⌘+⇧+w        | 关闭当前窗口                               |
| ~        | ⌘+n          | 新建文件                                   |
| 编辑器   | -            | -                                          |
| ~        | ⌘+k+t        | 切换编辑器主题色                           |
| ~        | ⌘+b          | 侧边栏显/隐                                |
| ~        | ⌘ + +/-      | 放大缩小视图Ï                              |
| ~        | ctrl+tab     | 文件之间切换                               |
| ~        | ⌘ + \\       | 切出一个新的编辑                           |
| ~        | ⌘+1 ⌘+2 ⌘+3  | 左中右 3 个编辑器的快捷键                  |
| ~        | ⌘+⇧+v        | 查看 markdown                              |
| ~        | ⇧+⌘+D        | 调试                                       |
| ~        | ⇧+⌘+X        | 扩展                                       |
| 编辑     | ⌥ + 点击     | 多行编辑                                   |
| ~        | ⌥ + 上下箭头 | 将当前行向上／下移动一行                    |
| ~        | ⇧+⌥+上下箭头 | 将当前行向上／下复制一行                    |
| ~        | ⇧+⌘+空格     | 输入表情                                   |
| 代码     | ⇧⌥F          | 代码格式化                                 |
| ~        | ⌥Z           | 开启/关闭代码自动换行                      |
| ~        | ⌥⌘[          | 代码折叠                                   |
| ~        | ⇧⌥⌘[         | 为全部折叠                                 |
| ~        | ⌥⌘]          | 代码展开                                   |
| ~        | ⇧⌥⌘]         | 为全部展开                                 |
| ~        | ⇧⌘M          | 显示当前文件的错误与警告信息               |
| ~        | ⌘+/          | 切换行注释                                 |
| ~        | ⌥+⇧+A        | 切换块注释                                 |
| 命令     | -            | -                                          |
| ~        | ⌘+⇧+p        | 打开命令面板                               |
| ~        | ⌘+p          | 转到文件                                   |
| ~        | ^ + `        | 切换编辑器内部终端                         |
| ~        | ⌘+J          | 切换面板                                   |
| 其它     | -            | -                                          |
| ~        | ⇧+⌘+F        | 在文件夹中查找                             |
| 任务     | -            | -                                          |
| ~        | ⇧+⌘+B        | Run Build Task(如果是typeScript会自动编译) |

## 命令面板(⌘+⇧+p)

| 工具               | more                       |
| ------------------ | -------------------------- |
| Shell Command      | 安装或卸载 code 命令行工具 |
| task               | 任务相关                   |
| Keyboard Shortcuts | 打开 keybindings.json 文件 |

## Task(任务)

### 键值对

| key          | key2   | more                                                    |
| ------------ | ------ | ------------------------------------------------------- |
| label        | -      | The tasks's label used in the user interface            |
| type         | -      | 任务类型，对于自定义任务，会是 shell 或 process 类型    |
| command      | -      | 真实运行的命令                                          |
| windows      | -      | 配置 windows 系统中的特殊特性                           |
| linux        | -      | 配置 linux 系统中的特殊特性                             |
| osx          | -      | 配置 osx 系统中的特殊特性                               |
| group        | -      | 任务分组                                                |
| presentation | -      | 任务运行的表现形式                                     |
| ~            | reveal | 控制编辑器内部terminal是否显示：always、never、silent |
| ~            | focus  | 控制编辑器内部terminal是否获取焦点，默认不获取          |
| ~            | echo   | 控制echo等是否在terminal中回显，默认回显                |
| ~            | panel  | 是否与其他任务共享一个terminal：shared、dediated、new   |

### problem matchers

| matcher         | refer                  | more |
| --------------- | ---------------------- | ---- |
| $tsc            | TypeScript             | -    |
| $tsc-watch      | TypeScript Watch       | -    |
| $jshint         | JSHint                 | -    |
| $jshint-stylish | JSHint Stylish         | -    |
| $eslint-compact | ESLint Compact         | -    |
| $eslint-stylish | ESLint Stylish         | -    |
| $go             | Go                     | -    |
| $mscompile      | CSharp and VB Compiler | -    |
| $lessCompile    | Less                   | -    |

### 变量

| 分类           | 变量                       | more                                                             |
| -------------- | -------------------------- | ---------------------------------------------------------------- |
| 预定义变量     | -                          | -                                                                |
| ~              | ${workspaceFolder}         | the path of the folder opened in VS Code                         |
| ~              | ${workspaceFolderBasename} | the name of the folder opened in VS Code without any slashes (/) |
| ~              | ${file}                    | the current opened file                                          |
| ~              | ${relativeFile}            | the current opened file relative to workspaceFolder              |
| ~              | ${fileBasename}            | the current opened file's basename                               |
| ~              | ${fileBasenameNoExtension} | the current opened file's basename with no file extension        |
| ~              | ${fileDirname}             | the current opened file's dirname                                |
| ~              | ${fileExtname}             | the current opened file's extension                              |
| ~              | ${cwd}                     | the task runner's current working directory on startup           |
| ~              | ${lineNumber}              | the current selected line number in the active file              |
| 环境变量       | -                          | -                                                                |
| ~              | ${env:Name}                | -                                                                |
| 设置和命令变量 | -                          | -                                                                |
| ~              | ${config:Name}             | -                                                                |
| ~              | ${command:CommandID}       | -                                                                |

## 扩展

| 扩展                     | more                            |
| ------------------------ | ------------------------------- |
| ESLint                   | js 代码风格检查                 |
| Markdown PDF             | markdown 转化为 PDF             |
| markdown-table-formatter | markdown table 表格代码格式化   |
| Markdown Theme Kit       | -                               |
| Markdown Math            | markdown 支持数学公式           |
| markdownlint             | markdown 语法错误检查提示       |
| Table Formatter          | markdown table 等多种代码格式化 |
| Vue 2 Snippets           | *.vue 文件代码支持              |
| CSS Formatter            | css代码格式化                   |