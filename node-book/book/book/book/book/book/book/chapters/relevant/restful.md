# RESTful API

## JSON-RPC 与 RESTful API 比较

### JSON-RPC

> RPC的思想是把本地函数映射到API，也就是说一个API对应的是一个function，我本地有一个getAllUsers，远程也能通过某种约定的协议来调用这个getAllUsers。

- 比较符合直观，格式也相对宽松
- 不限制协议
- JSON-RPC无法像REST一样享受HTTP的各种优点，又必须承担HTTP作为基于文本的协议。payload过大传输的成本以及序列化反序列化的开销

### RESTful API

> 它的URL主体是资源，是个名词

- 仅支持HTTP协议

## RESTful API设计规则

### URL

规则 | more                                                | 示例
-- | --------------------------------------------------- | ------------------------------
-  | 应该将API部署在专用域名之下                                     | <https://api.example.com>
-  | 不用大写                                                | -
-  | 用中杠-不用下杠_                                           | -
-  | 参数列表要encode                                         | -
-  | URI中不应该出现动词，动词应该使用HTTP方法表示，但是如果无法表示，也可使用动词（如search） | -
-  | URI中的名词表示资源集合，使用复数形式                                | -
-  | 虽然/在URI中表达层级，但是避免为了追求REST导致层级过深，适当使用参数表示            | GET /comments/tid?tid=1&page=1
-  | 不用大写                                                | -
-  | 不用大写                                                | -

### Request：通过标准HTTP方法对资源CRUD

动作          | 示例                     | 解释
----------- | ---------------------- | --------------
GET：查询资源    | GET /comments          | 获取所有评论
-           | GET /comments/tid/1    | 获取文章tid为1的所有评论
POST:创建资源   | POST /comments/tid/1   | 为tid为1的文章创建评论
PUT：更新资源    | POST /comments/tid/1   | 为tid为1的文章创建评论
DELETE：删除资源 | DELETE /comments/cid/1 | 删除cid为1的评论

# Response

规则 | more
-- | ------------------------------------------------------------------
-  | 采用JSON，不要使用XML
-  | 默认情况下JSON外层不需要嵌套大括号，API需要支持JSONP跨域访问或者客户端无法访问HTTP header才需要加上嵌套大括号
-  | 默认情况下不要过滤API输出中的空格，并且要支持gzip
