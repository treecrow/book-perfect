# apm

### 命令
命令|含义
---|---
apm search|-
apm view git-grep|显示git-grep插件的详细信息

### 快捷键
快捷键|含义
---|---
Cmd + shift + p|输入命令
Cmd+\— | 侧边栏
Cmd+Up|光标移动到文件头
Cmd+Down|光标移动到文件尾
Alt+Left|光标向左移动一个单词
Alt+Right|光标向右移动一个单词
Cmd+Left|光标移动到行头
Cmd+Right|光标移动到行尾
Cmd+R|在当前文档搜索并跳到符号
Cmd+Shift+R|在工程内搜索并跳到符号
Cmd+Shift+Up|选择当前位置到文件头
Cmd+Shift+Down|选择当前位置到文件尾
Cmd+Shift+D|复制当前行
Cmd+L|选中当前行
Ctrl+Shift+U|呼出编码选择窗口并手动选择文件的编码方式
Cmd+Shift+F|进行工程内查找
Cmd+Shift+B|列出所有新建的或更改过的文件
Cmd+Alt+[|代码折叠
Cmd+Alt+]|代码展开

### atom命令
命令|含义
---|---
mdpt|查看markdown文档

### Git支持
命令|含义
---|---
Cmd+Alt+Z／Checkout Head Revision|放弃你对文件所有的修改,直接将文件恢复为最后一次提交的版本，相当于Git命令git checkout HEAD -- filename和git reset HEAD -- filename

### 将Atom设置为Git的默认编辑器
```
git config --global core.editor "atom --wait"
```

### 插件列表
插件|作用
---|---
autoclose-html|html自动补全
activate-power-mode|打字烟花效果
atom-beautify|代码格式化
go definition|代码跳转
