# [time](https://docs.python.org/zh-cn/3/library/time.html)

> 该模块提供了各种时间相关的函数

## api list

| api              | more                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| time.sleep(secs) | 暂停执行调用线程达到给定的秒数                                                                                                             |
| time.time()      | 返回浮点数的 seconds since the epoch 。                                                                                                    |
| time.strftime()  | 转换一个元组或 struct_time 表示的由 gmtime() 或 localtime() 返回的时间到由 format 参数指定的字符串                                         |
| time.localtime() | 与 gmtime() 相似但转换为当地时间。如果未提供 secs 或为 None ，则使用由 time() 返回的当前时间。当 DST 适用于给定时间时，dst 标志设置为 1 。 |
