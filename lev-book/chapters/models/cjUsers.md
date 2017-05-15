# cj-users

## 字段

字段                | 含义
----------------- | --------------------------------
useridInt         | 用户id(前端-userid)
gid               | 用户名片场景id
uname             | 用户名
email             | 邮箱
openidQq          | -
password          | 密码
createTime        | -
lastTime          | -
limitTime         | -
status            | -
createip          | -
lastip            | -
level             | -
sceneTimes        | -
remark            | -
shenheStatus      | -
allowNums         | -
endTime           | -
xd                | -
sex               | -
phone             | 手机号
tel               | -
qq                | -
headimg           | 头像
type              | -
token             | -
tokenExptime      | 过期时间点
role              | -
userActivationKey | 验证码（只用于邮箱，手机注册字段为sms的activeCode）
activeExptime     | 过期时间点
checkemail        | -

## 问题

- 没有做ACL（access controls list），任何人都可以通过借口修改user信息
