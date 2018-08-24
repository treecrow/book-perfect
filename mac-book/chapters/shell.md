# linux shell 编程

## 相关文档

- [Shell 教程](http://www.runoob.com/linux/linux-shell.html)

## 头文件

```
#!/bin/bash
```

## 运行 Shell 脚本

- 作为可执行程序

```
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本
```

- 作为解释器参数

```
/bin/sh test.sh

// or

sh test.sh
```

## 变量

```
#!/bin/bash
name1=hui
name2="qiang"
name3='ling'
echo $name1 // hui
echo ${name2} // qiang
echo $name3 // ling
```
