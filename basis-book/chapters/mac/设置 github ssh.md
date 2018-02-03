# 设置 github ssh

```bash
// 设置git的user.name和email
git config --global user.name "treecrow"
git config --global user.email "drytreecrow@gmail.com" 
// 生成私钥和公钥
ssh-keygen -t rsa -C "drytreecrow@gmail.com"
ssh-add -K id_rsa
// 添加 私密钥 到ssh(一般不需要做这一步)
id_rsa.pub
// 拷贝 id_rsa.pub 中的公钥到github
// ...
```