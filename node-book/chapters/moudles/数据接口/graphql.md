# graphql

## API列表

api                                       | more
----------------------------------------- | ------------------------------------------------------
new GraphQLSchema()                       | -
new GraphQLObjectType()                   | -
resolve()                                 | can return a value, a promise, or an array of promises
graphql(schema, query).then((result)=>{}) | 根据 schema、query 请求数据

## 字段列表

字段                             | more
------------------------------ | ----
schema.query                   | -
schema.mutation                | -
schema.query(/mutation).name   | -
schema.query(/mutation).fields | -
