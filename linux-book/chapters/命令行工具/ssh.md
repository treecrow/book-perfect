# ssh

## 相关文档

- [github配置和ssh免密登录](https://zhuanlan.zhihu.com/p/27086828)
- [SSH免密登录是怎么玩儿的?](https://zhuanlan.zhihu.com/p/28423720)
- [ssh 别名登录](https://blog.csdn.net/zhanlanmg/article/details/48708255) 
- [多个ssh的问题](http://www.bkjia.com/Androidjc/837965.html)
- [SSH登陆阿里云服务器出现Permission denied (publickey)错误解决方案](http://www.cnblogs.com/wangchaowei/p/6914180.html)
- [github ssh添加:多个ssh的问题](http://www.bkjia.com/Androidjc/837965.html)
- [access token 连接 github](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
- [MAC通过SSH使用PEM文件登录](http://www.cnblogs.com/Jason-Born/p/6566503.html)

## 命令列表

| 命令                  | 含义                                       |
|---------------------|------------------------------------------|
| ssh 用户名@IP地址 -p 端口号 | 使用SSH登录远程服务器                             |
| ssh-keygen          | 用于为“ssh”生成、管理和转换认证密钥，它支持RSA和DSA两种认证密钥    |
| ssh-add             | 把专用密钥添加到ssh-agent的高速缓存中(临时性的 session 服务) |

## "ssh-add privateKey" 与 "ssh-add -K privateKey" 的区别

- "ssh-add privateKey"---每次重启电脑后都需要重新 ssh-add
- "ssh-add -K privateKey"---一劳永逸将私钥添加进 Mac 本身的钥匙串中，即 Keychain

## 私钥加密与公钥加密

| 区别     | 私钥         | 公钥                      |
|--------|------------|-------------------------|
| 特点     | privateKey | privateKey && publicKey |
| 生成key方 | 加密方        | 解密方                     |
| 速度     | 快          | 慢                       |

## https 连接 github

```bash
git credential-osxkeychain
git credential-osxkeychain erase
host=github.com
protocol=https
```