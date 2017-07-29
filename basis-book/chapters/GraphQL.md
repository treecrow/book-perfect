# GraphQL

## 相关文档

文档                                                                                                      | more
------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------
[graphql](http://facebook.github.io/graphql/)                                                           | Facebook 官方文档
[awesome-graphql](https://github.com/chentsulin/awesome-graphql)                                        | 系列的关于GraphQL相关的资源的搜集
[从REST到GraphQL，更完善的数据查询定义](https://segmentfault.com/a/1190000005766732)                                 | -
[apollo](https://dev-blog.apollodata.com/)                                                              | Building Apollo Client and other tools for GraphQL developers
[从REST到GraphQL的思维变迁](https://0x2a.sh/from-rest-to-graphql-b4e95e94c26b)                                 | -
[GraphQL简单的原理介绍](https://dev-blog.apollodata.com/graphql-explained-5844742f195e)                        | 有助于理解GraphQL的设计理念与作用
[How do I GraphQL?](https://dev-blog.apollodata.com/how-do-i-graphql-2fcabfc94a01)                      | -
[GraphQL and Authentication](https://medium.com/the-graphqlhub/graphql-and-authentication-b73aed34bbeb) | -
[GraphQL vs. Falcor](https://dev-blog.apollodata.com/graphql-vs-falcor-4f1e9cbf7504)                    | -
[GraphQL入门](https://zhuanlan.zhihu.com/p/25042518?refer=deep-signts)                                    | -

## 概念列表

概念             | more
-------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------
schema         | schema定义了GraphQL API的类型系统。它完整描述了客户端可以访问的所有数据（对象、成员变量、关系、任何类型）。客户端的请求将根据schema进行校验和执行。客户端可以通过"自省"（introspection）获取关于schema的信息。schema存放于GraphQL API服务器
field          | field是你可以从对象中获取的数据单元。所有的GraphQL操作必须指明到最底层的field
scalar         | 所有的field的返回必须是标量
argument       | argument是附加在特定field后面的一组键值对。某些field会要求包含argument。mutation要求输入一个object作为argument
Implementation | GraphQL schema可以使用implement定义对象继承于哪个接口
connection     | connection让你能在同一个请求中查询关联的对象。通过connection，你只需要一个GraphQL请求就可以完成REST API中多个请求才能做的事
edge           | edge表示node之间的connection
node           | node是对象的一个泛型。你可以直接查询一个node，也可以通过connection获取相关node
variable       | 变量
validation     | 由于 GraphQL 是一个强类型语言，所以它可以在执行查询之前检查每个查询语句是否满足事先设定的 schema，符合则合法，如果查询语句不合法则不进行查询
-              | 别名
introspection  | 自省
fragment       | 一个query中有多个独立单元-fragments;提取fragments中的重复字段-fragment

## 检测查询语法规则

序号 | 规则
-- | ------------------------------------------------------------
1  | fragment 不能引用自己从而形成一个循环
2  | 不能查询类型中不存在的字段
3  | 查询的字段如果不是 scalar type(标量类型)或 enum type（枚举类型），则需要明确该字段下所包含的字段
4  | 同上一条相对，如果查询字段是 scalar type(标量类型)，那么它就不能再有子字段

## argument 用法

用法 | 语法                       | more
-- | ------------------------ | ------------------
排序 | (order: "someFild DESC") | 以字段someFild为标准降序排列
过滤 | (someFild:value)         | 根据响应的健值对过滤不符合的元素

## field 用法

用法 | 语法             | more
-- | -------------- | ------------------------------
别名 | {newFild:fild} | 返回给前端的数据里用 "newFild" 代替 "fild"

## fragment 用法

用法        | 语法                                                                   | more
--------- | -------------------------------------------------------------------- | -----------------
fragments | query {drumsets: products{},cymbals: products{}}                     | 一个query中有多个独立单元
fragment  | fragment ProductCommonFields on Product {} -> ...ProductCommonFields | 整合fragments中重复的字段

## variable 用法

用法     | 语法                                                                 | more
------ | ------------------------------------------------------------------ | ----
变量     | query($clientId: Int) {client(id: $clientId){}} && {"clientId": 1} | -
指定默认参数 | query ($date: String = "2017/01/28") {}                            | -

## GraphQL 内部类型

### 标量(scalar) 基本数据类型

类型      | more
------- | ----
String  | -
Int     | -
Float   | -
Boolean | -
ID      | -

### 自我检查的类型

类型                    | 字段                | more
--------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`__Schema`            |                   | 列出该schema中定义的相应类型，并获取每一个的细节
~                     | types             | 所有可用的类型
~                     | queryType         | 查询类型
~                     | mutationType      | 修改类型？
~                     | subscriptionType  | -
~                     | directives        | 指令类型？
`__Type`              | -                 | 获取 schema 中某个类型的详细信息，需要参数 `(name: someType)`
~                     | kind              | -
~                     | name              | -
~                     | description       | -
~                     | fields            | -
~                     | interfaces        | -
~                     | possibleTypes     | -
~                     | enumValues        | -
~                     | inputFields       | -
~                     | ofType            | -
`__TypeKind`          | -                 | An enum describing what kind of type a given `__Type` is.
`__Field`             | -                 | Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type
~                     | name              | -
~                     | description       | -
~                     | args              | -
~                     | type              | -
~                     | isDeprecated      | -
~                     | deprecationReason | -
`__InputValue`        | -                 | Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.
~                     | name              | -
~                     | description       | -
~                     | type              | -
~                     | defaultValue      | -
`__EnumValue`         | -                 | One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string
~                     | name              | -
~                     | description       | -
~                     | isDeprecated      | -
~                     | deprecationReason | -
`__Directive`         | -                 | A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor
~                     | name              | -
~                     | description       | -
~                     | locations         | -
~                     | args              | -
`__DirectiveLocation` | -                 | `A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies`

### 其它

类型          | more
----------- | ----
Enum        | -
List        | -
NotNull     | -
Interface   | -
Union       | -
InputObject | -
Object      | -
