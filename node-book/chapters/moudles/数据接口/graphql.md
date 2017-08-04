# graphql

## 相关文档

文档                                                                                                                                                      | more
------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------
[graphql](http://facebook.github.io/graphql/)                                                                                                           | Facebook 官方文档
[awesome-graphql](https://github.com/chentsulin/awesome-graphql)                                                                                        | 系列的关于GraphQL相关的资源的搜集
[graphql-js](http://graphql.org.cn/graphql-js.html)                                                                                                     | graphql 中文网
[learning-graphql](https://github.com/mugli/learning-graphql)                                                                                           | -
[GraphQL入门](https://zhuanlan.zhihu.com/p/25042518?refer=deep-signts)                                                                                    | Fragments／
[GraphQL初探:从REST到GraphQL，更完善的数据查询定义](https://segmentfault.com/a/1190000005766732)                                                                       | 没什么内容
[解读GraphQL(一): WHAT & WHY](https://zhuanlan.zhihu.com/p/26522359)                                                                                       | GraphQL是什么，它的优缺点有哪些？
[GraphQLInterfaceType 与 GraphQLUnionType](https://stackoverflow.com/questions/34726666/real-world-example-of-graphqlinterfacetype-and-graphqluniontype) | GraphQLInterfaceType 与 GraphQLUnionType 的区别

## API列表

分类           | api                                                                                      | more
------------ | ---------------------------------------------------------------------------------------- | -------------------------------------------------------
运行           | graphql (schema, requestString, rootValue?,contextValue?,variableValues?,operationName?) | lexes, parses, validates and executes a GraphQL request
定义类型         | new GraphQLScalarType()                                                                  | scalar 类型
～            | new GraphQLObjectType()                                                                  | object 类型（包含字段）
～            | new GraphQLInterfaceType()                                                               | interface 类型（多个类型共有的部分定义在这里）
～            | new GraphQLUnionType()                                                                   | union 类型(用"或"的方式合并多个类型)
～            | new GraphQLEnumType()                                                                    | enum 类型（声明一个有效值列表）
～            | new GraphQLInputObjectType()                                                             | input object 类型（代表结构体的输入／参数）
～            | new GraphQLList()                                                                        | 包裹起其它类型，代表某个类型的列表
～            | new GraphQLNonNull(otherType)                                                            | 包裹起其它类型，代表某个类型的noNull版本
标量类型         | GraphQLInt                                                                               | 整数
～            | GraphQLFloat                                                                             | 浮点数
～            | GraphQLString                                                                            | 字符串
～            | GraphQLBoolean                                                                           | 布尔类型
～            | GraphQLID                                                                                | 代表 IDs
断言           | isInputType()                                                                            | -
～            | isOutputType()                                                                           | -
～            | isLeafType()                                                                             | -
～            | isCompositeType()                                                                        | -
～            | isAbstractType()                                                                         | -
Un-modifiers | getNullableType                                                                          | -
～            | getNamedType                                                                             | -
自省工具         | introspectionQuery                                                                       | 字符串，
～            | buildClientSchema                                                                        | Build a GraphQLSchema for use by client tools（功能阉割？）
Schema语言工具   | new GraphQLSchema({query: GraphQLObjectType, mutation?: ?GraphQLObjectType})             | 引入各个类型，构建 schema
～            | buildSchema                                                                              | 使用默认语法构建 schema
～            | printSchema                                                                              | 接受一个 schema,打印出对应的字符串内容
～            | printIntrospectionSchema                                                                 | 接受一个 schema，打印出所有的字符串内容（脑阔 graphql 内部的）
～            | buildASTSchema                                                                           | （功能阉割？）
～            | typeFromAST                                                                              | -
～            | astFromValue                                                                             | -
TypeInfo     | new TypeInfo(schema)                                                                     | 获取 schema 的各种不同类型的信息
～            | typeInfo.getType()                                                                       | -
～            | typeInfo.getParentType()                                                                 | -
～            | typeInfo.getInputType()                                                                  | -
～            | typeInfo.getFieldDef()                                                                   | -
～            | typeInfo.getDirective()                                                                  | -
～            | typeInfo.getArgument()                                                                   | -
value 认证     | isValidJSValue                                                                           | 接受一个类型和一个值，判断这个值与类型是否匹配
～            | isValidLiteralValue                                                                      | 与上面类似？
未分类          | GraphQLError                                                                             | graphql 的错误类
-            | execute                                                                                  | 等价于 graphql(),返回一个 promise
-            | Source                                                                                   | parsing and operating on the GraphQL language
认证           | validate(schema, ast, rules?)                                                            | 用于认证
-            | specifiedRules                                                                           | graphql 内部认证规则列表(数组)

## 自我检查的类型

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
