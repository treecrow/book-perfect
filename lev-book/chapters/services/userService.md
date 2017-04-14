# userService
- service.user
- factory
- userService

## 方法
方法|from|传入值|返回值|含义
---|---|---|---|---
updateLocal|-|-|-|-
save|-|-|-|与updateLocal功能重复
getUserToken|-|-|user|-
isExisted|$UserCenter|userInfo|bool|-
register|$UserCenter|userInfo|then|-
createUser|-|-|-|与register功能重复
login|$UserCenter|userLogin|then|-
logout|-|-|-|-
checkToken|$UserCenter|userInfo|bool|-
setActiveMailCode|$UserCenter|userInfo|then|-
setActivePhoneCode|$UserCenter|userInfo|then|-
activeByMail|$UserCenter|userInfo|then|-
activeByPhone|$UserCenter|userInfo|then|-
changUserName|$UserCenter|userInfo|-|-
updateCard|$UserCenter|userInfo|then|-
updatePassword|$UserCenter|userInfo|then|-
updateEmail|$UserCenter|userInfo|then|-
updatePhone|$UserCenter|userInfo|then|-
findById|CjUsers|-|-|-
findByEmail|CjUsers|-|-|-
findByPhoneNo|CjUsers|-|-|-
findByUserPasswd|CjUsers|-|-|-
checkEmail|-|-|-|-
checkPhoneNo|-|-|-|-
getMessage|$UserCenter|-|-|-
savecomment|-|-|-|-


