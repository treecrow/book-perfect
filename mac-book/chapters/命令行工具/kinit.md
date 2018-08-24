# kinit

- [Kerberos更换密码](https://blog.csdn.net/xyznol/article/details/61915462)

> for Kerberos

```bash
# 创建文件
touch /etc/krb5.conf
# 修改文件内容(内容来自 http://kerberos.no.opi-corp.com/krb5.conf )
sudo vi /etc/krb5.conf
# 输入用户名密码
kinit zhihui.wang
```