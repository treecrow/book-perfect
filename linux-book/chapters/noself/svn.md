# svn

## 命令
命令 | 含义 
---|---
add|添加指定的目录或文件
auth|-
blame (praise, annotate, ann)|-
cat|-
changelist (cl)|-
checkout (co)|将文件checkout到本地目录
cleanup|-
commit (ci)|将当前目录下的所有已修改文件进行提交
copy (cp)|-
delete (del, remove, rm)|-
diff (di) path| 比对指定的文件  
export -r version original_file target_file|＃ version 指定的版本号 ＃ original_file 指定的文件 ＃ target_file 指定的目标路径 功能：导出指定文件的指定版本到指定路径
help (?, h)|-
import|-
info|查看指定目录或文件的详细信息
list (ls)|-
lock|加锁
log|查看指定目录或文件的所有修改纪录，及版本号的变化
merge original_url ＃ original_url|将主干的最新代码合并到分支上
merge —reintegrate branch_url|将分支合并到主干上
svn rm branch_url|删除分支
mergeinfo|-
mkdir|-
move (mv, rename, ren)|-
patch|-
propdel (pdel, pd)|-
propedit (pedit, pe)|-
propget (pget, pg)|查看属性的值，如 ：svn:ignore
proplist (plist, pl)|查看当前目录下的 svn 属性信息
propset(pset, ps) prop value path| prop 属性，value 值，path 路径:在 path 路径下，设置 prop 属性的值为 value:  svn propset svn:ignore -R .idea .
relocate|-
resolve|-
resolved|-
revert|恢复本地指定的目录或文件的修改: svn revert -R *
status (stat, st)|查看文件或者目录状态: ？---不在svn控制中 M---内容被修改 C---发生冲突 A---预定加入到版本库 K---被锁定
switch (sw)|-
unlock|解锁
update (up)|更新svn库到最新版本
upgrade|-

- [Linux SVN 命令详解](http://blog.csdn.net/zyz511919766/article/details/7289530)
- [SVN命令行，Subversion的正确使用姿势，让版本控制更简单~](http://www.cnblogs.com/liushilin/p/6401017.html)
