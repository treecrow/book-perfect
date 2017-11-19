# ssh

## 相关文档

- [github配置和ssh免密登录](https://zhuanlan.zhihu.com/p/27086828)
- [SSH免密登录是怎么玩儿的?](https://zhuanlan.zhihu.com/p/28423720)
- [SSH登陆阿里云服务器出现Permission denied (publickey)错误解决方案](http://www.cnblogs.com/wangchaowei/p/6914180.html)

## 命令列表

| 命令                  | 含义                                       |
|---------------------|------------------------------------------|
| ssh 用户名@IP地址 -p 端口号 | 使用SSH登录远程服务器                             |
| ssh-keygen          | 用于为“ssh”生成、管理和转换认证密钥，它支持RSA和DSA两种认证密钥    |
| ssh-add             | 把专用密钥添加到ssh-agent的高速缓存中(临时性的 session 服务) |

## 私钥加密与公钥加密

| 区别     | 私钥         | 公钥                      |
|--------|------------|-------------------------|
| 特点     | privateKey | privateKey && publicKey |
| 生成key方 | 加密方        | 解密方                     |
| 速度     | 快          | 慢                       |

## "ssh-add privateKey" 与 "ssh-add -K privateKey" 的区别

- "ssh-add privateKey"---每次重启电脑后都需要重新 ssh-add
- "ssh-add -K privateKey"---一劳永逸将私钥添加进 Mac 本身的钥匙串中，即 Keychain

## ssh 共钥添加到服务器

- 方法1

```bash
// 将本地公钥添加到服务器中
scp -P 端口号 本地文件路径 用户名@远程服务器地址:远程路径
// 将公钥内容写入到authorized_keys文件中
cat -n ~/.ssh/rsa.pub ~/.ssh/authorized_keys
// 将.ssh目录的权限为700
// 将authorized_keys目录的权限为600
```

- 方法2

```bash
ssh-copy-id username@remote-server
```