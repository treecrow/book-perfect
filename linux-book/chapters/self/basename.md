# basename

> 为basename指定一个路径，basename命令会删掉所有的前缀包括最后一个slash（'/'）字符，然后将字符串显示出来

## basename命令格式：

命令                           | more
---------------------------- | ----
basename [pathname] [suffix] | -
basename [string] [suffix]   | -

## 示例

```
$ basename /tmp/test/file.txt
file.txt
$ basename /tmp/test/file.txt .txt
file
```
