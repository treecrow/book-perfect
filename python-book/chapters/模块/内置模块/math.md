# [math](https://docs.python.org/zh-cn/3/library/math.html)

> math 模块为浮点运算提供了对底层 C 函数库的访问

## api list

| class    | api              | more                                                                           |
| -------- | ---------------- | ------------------------------------------------------------------------------ |
| 数学函数 | math.ceil(x)     | 返回数字的上入整数，如 math.ceil(4.1) 返回 5                                   |
| ~        | math.exp(x)      | 返回 e 的 x 次幂(ex),如 math.exp(1) 返回 2.718281828459045                     |
| ~        | math.fabs(x)     | 返回数字的绝对值，如 math.fabs(-10) 返回 10.0                                  |
| ~        | math.floor(x)    | 返回数字的下舍整数，如 math.floor(4.9)返回 4                                   |
| ~        | math.log(x)      | 如 math.log(math.e)返回 1.0,math.log(100,10)返回 2.0                           |
| ~        | math.log10(x)    | 返回以 10 为基数的 x 的对数，如 math.log10(100)返回 2.0                        |
| ~        | math.modf(x)     | 返回 x 的整数部分与小数部分，两部分的数值符号与 x 相同，整数部分以浮点型表示。 |
| ~        | math.sqrt(x)     | 返回数字 x 的平方根。                                                          |
| 三角函数 | math.acos(x)     | 返回 x 的反余弦弧度值。                                                        |
| ~        | math.asin(x)     | 返回 x 的反正弦弧度值。                                                        |
| ~        | math.atan(x)     | 返回 x 的反正切弧度值。                                                        |
| ~        | math.atan2(y, x) | 返回给定的 X 及 Y 坐标值的反正切值。                                           |
| ~        | math.cos(x)      | 返回 x 的弧度的余弦值。                                                        |
| ~        | math.hypot(x, y) | 返回欧几里德范数 sqrt(x*x + y*y)。                                             |
| ~        | math.sin(x)      | 返回的 x 弧度的正弦值。                                                        |
| ~        | math.tan(x)      | 返回 x 弧度的正切值。                                                          |
| ~        | math.degrees(x)  | 将弧度转换为角度,如 degrees(math.pi/2) ， 返回 90.0                            |
| ~        | math.radians(x)  | 将角度转换为弧度                                                               |
| 常数     | math.pi          | 数学常数 π = 3.141592...，精确到可用精度                                       |
| ~        | math.e           | 数学常数 e = 2.718281...，精确到可用精度                                       |
| ~        | math.tau         | -                                                                              |
| ~        | math.inf         | -                                                                              |
| ~        | math.nan         | -                                                                              |
