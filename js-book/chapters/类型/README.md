# 类型

## typeof

| 类型        | 示例               |
|-----------|------------------|
| number    | -                |
| ~         | 1                |
| ~         | NaN              |
| ~         | Number.MIN_VALUE |
| ~         | Infinity         |
| string    | ''               |
| boolean   | true             |
| object    | -                |
| ~         | null             |
| ~         | window           |
| function  | -                |
| ~         | eval             |
| ~         | Date             |
| undefined | -                |
| ~         | undefined        |
| ~         | a(未赋值变量)         |

## isNaN

> 用于检查其参数是否是非数字值

- isNaN(null)---false:判断 null 之前转化为 0 了

## 基本类型与引用类型

| 区别  | 基本类型                             | 引用类型           |
|-----|----------------------------------|----------------|
| 可变性 | 不可变类型，无法添加属性；即使添加属性，解析器无法再下一步读取它 | 可变类型，支持添加和删除属性 |
