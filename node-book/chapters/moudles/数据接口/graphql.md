# graphql

## 相关文档

文档                                                  | more
--------------------------------------------------- | -----------
[graphql-js](http://graphql.org.cn/graphql-js.html) | graphql 中文网

## API列表

分类     | api                                                | more
------ | -------------------------------------------------- | --------------------
类型     | new GraphQLEnumType()                              | -
～      | new GraphQLInterfaceType()                         | -
～      | new GraphQLObjectType()                            | -
～      | new GraphQLNonNull(otherType)                      | -
～      | new GraphQLList()                                  | -
～      | GraphQLString                                      | -
schema | new GraphQLSchema()                                | 引入各个类型，构建 schema
请求     | graphql(schema, query).then((result)=>{})          | 根据 schema、query 请求数据
～      | graphql({schema: StarWarsSchema,source: query})    | -
~      | graphql(StarWarsSchema, query, null, null, params) | params为插入query的变量

## 类型列表

类型                    | more
--------------------- | ----
String                | -
`Boolean`             | -
`__Schema`            | -
`__Type`              | -
`__TypeKind`          | -
`__Field`             | -
`__InputValue`        | -
`__EnumValue`         | -
`__Directive`         | -
`__DirectiveLocation` | -

## 示例类型设计

类型           | from                       | 装载    | 联系
------------ | -------------------------- | ----- | -----------------------------------------
Episode      | new GraphQLEnumType()      | -     | -
Character    | new GraphQLInterfaceType() | -     | 用到了 Episode，resolveType中有 Human、Droid的导出？
Human        | new GraphQLObjectType()    | types | 用到了 Character，interfaces 中有 Character
Droid        | new GraphQLObjectType()    | types | 用到了 Character，interfaces 中有 Character
Query(query) | new GraphQLObjectType()    | query | 用到了 Character

## 类型

### GraphQLEnumType

```javascript
new GraphQLEnumType({
  name:'',
  description:'',
  values:{
    value1:{
      value:1,
      description:''
    },
    value2:{
      value:2,
      description:''
    },
    value3:{
      value:3,
      description:''
    }
  }
})
```

### GraphQLInterfaceType

````javascript
new GraphQLInterfaceType({
  name:'',
  description:'',
  fields:{
    field1:{
      type:,
      description:'this is field1',
      resolve:()=>{

      }
    },
    field2:{
      type:,
      description:'this is field2',
      resolve:()=>{

      }
    },
    field3:{
      type:,
      description:'this is field3',
      resolve:()=>{

      }
    }
  },
  resolveType(character){

  }
})
```

### GraphQLObjectType

```javascript
new GraphQLObjectType({
  name:'',
  description:'',
  fields:{
    field1:{
      type:,
      description:'this is field1',
      resolve:()=>{

      }
    },
    field2:{
      type:,
      description:'this is field2',
      resolve:()=>{

      }
    },
    field3:{
      type:,
      description:'this is field3',
      resolve:()=>{

      }
    }
  },
  interfaces:[]
})
````

### GraphQLSchema

```javascript
new GraphQLSchema({
  query: queryType,
  mutation:,
  types: [ humanType, droidType ]
})
```
