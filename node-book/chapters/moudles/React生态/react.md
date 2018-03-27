# react

## 相关文档

* [官方文档](https://reactjs.org/docs/hello-world.html)

## 相关章节

| 章节                       | more                                  |
| -------------------------- | ------------------------------------- |
| Introducing JSX            | JSX 语法介绍                          |
| Rendering Elements         | 渲染元素（元素是 react 最基本的单元） |
| Components and Props       | 组件和 props                          |
| State and Lifecycle        | 状态和生命周期                        |
| Handling Events            | -                                     |
| Conditional Rendering      | -                                     |
| Lists and Keys             | -                                     |
| Forms                      | -                                     |
| Lifting State Up           | -                                     |
| Composition vs Inheritance | -                                     |
| Thinking In React          | -                                     |

## ReactDOM api 列表

| api                                  | more |
| ------------------------------------ | ---- |
| ReactDOM.render(element,HTMLElement) | -    |

## React api 列表

| api                   | more |
| --------------------- | ---- |
| React.createElement() | -    |
| React.Component       | -    |

## React.Component 内部生命周期方法

| 分类     | api                    | more                                                                                                                                                                        |
| -------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 生命周期 | -                      | -                                                                                                                                                                           |
| ~        | mounting               | 组件首次被渲染到 DOM 上后触发                                                                                                                                               |
| ~        | unmounting             | 组件被从 DOM 上移除后触发                                                                                                                                                   |
| ~        | componentDidMount()    | 组件首次被渲染到 DOM 上后触发                                                                                                                                               |
| ~        | componentWillUnmount() | 组件将要被从 DOM 上移除前触发                                                                                                                                               |
| 其它     | -                      | -                                                                                                                                                                           |
| ~        | constructor()          | super(props)                                                                                                                                                                |
| ~        | render()               | 返回 element                                                                                                                                                                |
| ~        | this.setState()        | 不能直接修改组件的 state，可以直接修改 state 的地方只有一个，就是 constructor()中; state 更新有可能是异步的，更改 state 依赖当前 state 的时候应该使用匿名函数返回对象的形式 |
