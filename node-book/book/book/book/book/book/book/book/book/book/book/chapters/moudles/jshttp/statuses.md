# statuses

## 方法列表

方法                     | more
---------------------- | -------------------------------------------------------------------------------------------------------
status(Integer／String) | If Integer or String is a valid HTTP code or status message, then the appropriate code will be returned

## 属性列表

属性                    | more
--------------------- | --------------------------------------------------------
status.codes          | 返回一个包含了所有状态码（整数形式）的数组
status[code]          | 根据状态吗返回对应的状态描述
status[msg]           | 根据状态描述返回对应的状态吗
status.redirect[code] | Returns true if a status code is a valid redirect status
status.empty[code]    | Returns true if a status code expects an empty body
status.retry[code]    | Returns true if you should retry the rest
