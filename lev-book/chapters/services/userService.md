# userService

- service.user
- factory
- userService

## 方法

方法                 | from         | 传入值      | 返回值      | 含义
------------------ | ------------ | -------- | -------- | --------------------------------
updateLocal        | -            | user     | -        | 用于localStorage数据待更新
getUserToken       | localStorage | -        | user     | -
skipToLogin        | -            | -        | -        | 跳到登录界面
checkUserStatus    | -            | -        | .promise | 验证用户待登录状态
isExisted          | $UserCenter  | userInfo | bool     | 根据手机或邮箱判断用户是否存在
login              | $UserCenter  | userInfo | then     | 登录（loginByPhone && loginByEmail）
logout             | -            | -        | -        | 登出
checkToken         | $UserCenter  | userInfo | bool     | 验证token是否过期
setActivePhoneCode | $UserCenter  | userInfo | then     | 设置手机激活码
updateUserName     | $UserCenter  | userInfo | then     | 重置用户unname
updateCard         | $UserCenter  | userInfo | then     | 重置用户unname && headimg
updatePassword     | $UserCenter  | userInfo | then     | 重置用户密码
updateEmail        | $UserCenter  | userInfo | then     | 重置用户邮箱
updatePhone        | $UserCenter  | userInfo | then     | 重置用户手机

## 待修改待方法

方法               | from        | 传入值 | 返回值 | 含义
---------------- | ----------- | --- | --- | ----
findById         | CjUsers     | -   | -   | 用使用到
findByEmail      | CjUsers     | -   | -   | 有漏洞
findByPhoneNo    | CjUsers     | -   | -   | 有漏洞
findByUserPasswd | CjUsers     | -   | -   | 功能重复
checkEmail       | -           | -   | -   | 功能重复
checkPhoneNo     | -           | -   | -   | 功能重复
getMessage       | $UserCenter | -   | -   | -
savecomment      | -           | -   | -   | -
