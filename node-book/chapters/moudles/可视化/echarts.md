# echarts

## 相关文档

- [官方网站](http://echarts.baidu.com/)
- [可以按需引入的模块列表](https://github.com/ecomfe/echarts/blob/master/index.js)
- [教程](http://echarts.baidu.com/tutorial.html)
- [api](http://echarts.baidu.com/api.html)
- [配置项](http://echarts.baidu.com/option.html)
- [GL](http://echarts.baidu.com/option-gl.html)

## 地图示例

| 示例                                                                                       | more      |
|------------------------------------------------------------------------------------------|-----------|
| [全国地图示例](http://gallery.echartsjs.com/editor.html?c=xH14AUvnUW)                          | 亮亮给的示例    |
| [ECHARTS-MAP的使用: 中国地图及省份边界的查看](http://blog.csdn.net/u010367582/article/details/53305866) | CSDN示例    |
| [iphone 3、4、5](http://www.echartsjs.com/gallery/editor.html?c=doc-example/map-example)   | iphone 示例 |

## 方法列表

### echarts 示例

| 方法                       | more         |
|--------------------------|--------------|
| myChart.setOption()      | 动态更新         |
| myChart.showLoading()    | 图表显示 loading |
| myChart.hideLoading()    | 图表隐藏 loading |
| myChart.on()             | 绑定事件处理函数     |
| myChart.dispatchAction() | 触发图表行为       |

## 鼠标事件包含参数 params

| 字段            | more                                                                                                                                  |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------|
| componentType | 当前点击的图形元素所属的组件名称，其值如 'series'、'markLine'、'markPoint'、'timeLine' 等                                                                     |
| seriesType    | 系列类型。值可能为：'line'、'bar'、'pie','map' 等。当 componentType 为 'series' 时有意义                                                                  |
| seriesName    | 系列名称。当 componentType 为 'series' 时有意义                                                                                                  |
| seriesIndex   | 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义                                                                         |
| dataIndex     | 数据在传入的 data 数组中的 index                                                                                                                |
| data          | 传入的原始数据项                                                                                                                              |
| value         | 传入的数据值                                                                                                                                |
| color         | 数据图形的颜色。当 componentType 为 'series' 时有意义                                                                                               |
| name          | 数据名，类目名                                                                                                                               |
| dataType      | sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。其他大部分图表中只有一种 data，dataType 无意义 |

## 省份序号

| 序号  | 省份  |
|-----|-----|
| 1   | 河北  |
| 2   | 山西  |
| 3   | 内蒙古 |
| 4   | 辽宁  |
| 5   | 吉林  |
| 6   | 黑龙江 |
| 7   | 江苏  |
| 8   | 浙江  |
| 9   | 安徽  |
| 10  | 福建  |
| 11  | 江西  |
| 12  | 山东  |
| 13  | 河南  |
| 14  | 湖北  |
| 15  | 湖南  |
| 16  | 广东  |
| 17  | 广西  |
| 18  | 海南  |
| 19  | 四川  |
| 20  | 贵州  |
| 21  | 云南  |
| 22  | 西藏  |
| 23  | 陕西  |
| 24  | 甘肃  |
| 25  | 青海  |
| 26  | 宁夏  |
| 27  | 新疆  |
| 28  | 北京  |
| 29  | 天津  |
| 30  | 上海  |
| 31  | 重庆  |
| 32  | 香港  |
| 33  | 台湾  |
| 34  | 澳门  |
