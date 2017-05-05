# user-center

## 字段

字段        | 含义
--------- | --
sceneId   | -
sceneName | -
offset    | -

## 方法

方法                 | accepts                                                  | returns                   | 含义
------------------ | -------------------------------------------------------- | ------------------------- | ----------
isExisted          | [user.email, user.phone]                                 | (user-object)             | 检查是否存在当前用户
registerByEmail    | [user.uname, user.email, user.password]                  | (user-object, msg-string) | 邮箱注册
registerByPhone    | [user.uname, user.phone, user.password, user.activeCode] | (user-object, msg-string) | 手机注册
loginByEmail       | [email, password ]                                       | (user-object)             | 邮箱登录
loginByPhone       | [phone, password ]                                       | (user-object)             | 手机登录
checkToken         | [user.userid, user.token]                                | (user-object)             | 检查ＴＯＫＥＮ
setActivePhoneCode | [phone]                                                  | (user-object)             | 重置手机激活码
updateUserName     | [user.userid, user.token, user.uname]                    | (user-object)             | 修改用户名
updateCard         | [user.userid, user.token, user.uname, user.heading]      | (user-object)             | 修改用户信息－－姓名－头像
updatePassword     | [user.userid, user.token, user.password]                 | (user-object)             | 修改用户登陆密码
updateEmail        | [user.userid, user.token, user.email]                    | (user-object)             | 修改用户登陆邮箱
updatePhone        | [user.userid, user.token, user.phone]                    | (user-object)             | 修改用户登陆手机号码
