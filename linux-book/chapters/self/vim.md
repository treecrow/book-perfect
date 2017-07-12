# vim

## 操作列表

操作  | 含义
--- | ---------
i   | 插入模式
ESC | 插入模式到命令模式
:w  | 保存
:q  | 退出

## vim保存的时候提示权限不足问题的解决

- [vim保存的时候提示权限不足](http://jingyan.baidu.com/article/3f16e003e5ea752591c103d4.html)

```
:w !sudo tee %
```
