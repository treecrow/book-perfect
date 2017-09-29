# lessc

## 相关文档

## 命令列表

| 命令                             | more                |
|--------------------------------|---------------------|
| lessc                          | 输出所有可用选项的列表         |
| lessc styles.less > styles.css | 输出编译之后的 CSS 代码到指定文件 |

## 函数列表

| 分类     | 函数            | more                                                                     |
|--------|---------------|--------------------------------------------------------------------------|
| 杂项函数   | color         | 解析颜色，将代表颜色的字符串转换为颜色值                                                     |
| ~      | convert       | 将数字从一种单位转换到另一种单位                                                         |
| ~      | data-uri      | 将资源内联进样式表                                                                |
| ~      | default       | 默认的 mixin 匹配                                                             |
| ~      | unit          | 删除或更换单位                                                                  |
| 字符串函数  | escape        | 对字符串中的特殊字符做 URL-encoding 编码                                              |
| ~      | e             | -                                                                        |
| ~      | % 格式化         | -                                                                        |
| ~      | replace       | -                                                                        |
| 列表函数   | length        | 返回列表中元素的个数                                                               |
| ~      | extract       | 返回列表中指定位置的元素                                                             |
| 数学函数   | ceil          | 向上取整                                                                     |
| ~      | floor         | 向下取整                                                                     |
| ~      | percentage    | 将浮点数转换为百分比字符串                                                            |
| ~      | round         | 四舍五入取整                                                                   |
| ~      | sqrt          | 计算一个数的平方根，并原样保持单位                                                        |
| ~      | abs           | 计算数字的绝对值，并原样保持单位                                                         |
| ~      | sin           | 正弦函数                                                                     |
| ~      | asin          | 反正弦函数。返回以弧度为单位的角度，区间在 -PI/2 到 PI/2之间                                     |
| ~      | cos           | 余弦函数                                                                     |
| ~      | acos          | 反余弦函数，区间在 0 到 PI之间                                                       |
| ~      | tan           | 正切函数                                                                     |
| ~      | atan          | 反正切函数                                                                    |
| ~      | pi            | 返回圆周率 π (pi)                                                             |
| ~      | pow           | 设第一个参数为A，第二个参数为B，返回A的B次方                                                 |
| ~      | mod           | 返回第一个参数对第二参数取余的结果                                                        |
| ~      | min           | 返回一系列值中最小的那个                                                             |
| ~      | max           | 返回一系列值中最大的那个                                                             |
| 类型函数   | isnumber      | -                                                                        |
| ~      | isstring      | -                                                                        |
| ~      | iscolor       | -                                                                        |
| ~      | iskeyword     | 如果待验证的值为关键字则返回 true ，否则返回 false                                          |
| ~      | isurl         | 如果待验证的值为 url 则返回 true ，否则返回 false                                        |
| ~      | ispixel       | 如果待验证的值为像素数则返回 true ，否则返回 false                                          |
| ~      | isem          | 如果待验证的值的单位是 em 则返回 true ，否则返回 false                                      |
| ~      | ispercentage  | 如果待验证的值为百分比则返回 true ，否则返回 false                                          |
| ~      | isunit        | 如果待验证的值为指定单位的数字则返回 true ，否则返回 false                                      |
| 颜色定义函数 | rgb           | 通过十进制红色、绿色、蓝色三种值 (RGB) 创建不透明的颜色对象                                        |
| ~      | rgba          | 通过十进制红色、绿色、蓝色，以及 alpha 四种值 (RGBA) 创建带alpha透明的颜色对象                        |
| ~      | argb          | 创建格式为 #AARRGGBB 的十六进制颜色值 (注意不是 #RRGGBBAA！)                               |
| ~      | hsl           | 通过色相 (hue)，饱和度 (saturation)，亮度 (lightness) 三种值 (HSL) 创建不透明的颜色对象          |
| ~      | hsla          | 通过色相 (hue)，饱和度 (saturation)，亮度 (lightness)，以及 alpha 四种值 (HSLA) 创建透明的颜色对象 |
| ~      | hsv           | 通过色相 (hue)、饱和度 (saturation)、色调 (value) 三种值 (HSV) 创建不透明的颜色对象              |
| ~      | hsva          | 通过色相 (hue)，饱和度 (saturation)，色调 (value)，以及 alpha 四种值 (HSVA) 创建透明的颜色对象     |
| 颜色通道函数 | hue           | 从颜色对象的 HSL 颜色空间中提取色色调值                                                   |
| ~      | saturation    | 从颜色对象的 HSL 色彩空间中提取饱和度值                                                   |
| ~      | lightness     | 从颜色对象的 HSL 色彩空间中提取亮度值                                                    |
| ~      | hsvhue        | 在颜色对象的 HSV 色彩空间中提取色相值                                                    |
| ~      | hsvsaturation | 在颜色对象的 HSV 色彩空间提取饱和度值                                                    |
| ~      | hsvvalue      | Extracts the value channel of a color object in the HSV color space      |
| ~      | red           | 从颜色对象中提取红色通道值                                                            |
| ~      | green         | 从颜色对象中提取绿色通道值                                                            |
| ~      | blue          | 从颜色对象中提取蓝色通道值                                                            |
| ~      | alpha         | 从颜色对象中提取 alpha 通道值                                                       |
| ~      | luma          | 计算颜色对象的 luma (perceptual brightness) 值（亮度的百分比表示法）                        |
| 颜色操作函数 | saturate      | -                                                                        |
| ~      | desaturate    | -                                                                        |
| ~      | lighten       | -                                                                        |
| ~      | darken        | -                                                                        |
| ~      | fadein        | -                                                                        |
| ~      | fadeout       | -                                                                        |
| ~      | fade          | -                                                                        |
| ~      | spin          | -                                                                        |
| ~      | mix           | -                                                                        |
| ~      | greyscale     | -                                                                        |
| ~      | contrast      | -                                                                        |
| 颜色混合函数 | multiply      | -                                                                        |
| ~      | screen        | -                                                                        |
| ~      | overlay       | -                                                                        |
| ~      | softlight     | -                                                                        |
| ~      | hardlight     | -                                                                        |
| ~      | difference    | -                                                                        |
| ~      | exclusion     | -                                                                        |
| ~      | average       | -                                                                        |
| ~      | negation      | -                                                                        |
