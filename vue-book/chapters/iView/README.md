# [iview](https://www.iviewui.com/)

## [github fork 之后与源项目保持同步](https://zhuanlan.zhihu.com/p/28348159)

```bash
# 添加远程仓库
git remote add iview https://github.com/iview/iview.git

# 创建新分支(用于拉去最新 iview 源码)
git branch iview2.0

# 拉取 iview 对应代码到 iview2.0 分支
git pull iview 2.0:iview2.0

# iview2.0 分支合并到开发分支（treecrow、liuchong、huaxi、jiana etc）,或者合并到 master
# ...

# 解决冲突、提交
# ...
```
