# 爬虫

> 爬虫相关知识总结

## 常用模块

| moudle         | api                         | more                                                     |
| -------------- | --------------------------- | -------------------------------------------------------- |
| urllib         | urllib.request.Request()    | 创建请求对象                                             |
| ^              | urllib.request.urlopen()    | 传入 url 或请求对象，请求指定网页                        |
| ^              | urllib.parse.urlencode()    | 编码请求参数对象为字符串                                 |
| re             | re.compile('', re.S)        | 编译正则表达式返回正则表达式对象                         |
| ^              | re.findall(pattern, string) | 查找字符串所有与正则表达式匹配的模式 返回字符串的列表    |
| beautifulsoup4 | -                           | -                                                        |
| lxml           | -                           | 用于解析 XML 和 html 文件,可以使用 xpath 和 css 定位元素 |
| selenium       | -                           | 模拟用户使用浏览器                                       |
| pymysql        | pymysql.connect()           | 连接数据库                                               |
| xlwt           | -                           | 操作 excel 表格                                          |
| json           | json.dumps()                | 将 Python 对象处理成 JSON 格式的字符串                   |
