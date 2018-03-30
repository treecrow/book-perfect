# react

## 相关文档

* [官方文档](https://reactjs.org/docs/hello-world.html)

## 快速开始

| 章节                       | more                                  |
| -------------------------- | ------------------------------------- |
| Introducing JSX            | JSX 语法介绍                          |
| Rendering Elements         | 渲染元素（元素是 react 最基本的单元） |
| Components and Props       | 组件和 props                          |
| State and Lifecycle        | 状态和生命周期                        |
| Handling Events            | 处理事件                              |
| Conditional Rendering      | 条件渲染                              |
| Lists and Keys             | 列表和 keys                           |
| Forms                      | 表单                                  |
| Lifting State Up           | 提升状态                              |
| Composition vs Inheritance | 组合与继承（推荐构建，不推荐继承）    |
| Thinking In React          | 一个应用示例                          |

## 深入指南

| 章节                             | more                                                          |
| -------------------------------- | ------------------------------------------------------------- |
| JSX In Depth                     | jsx                                                           |
| Typechecking With PropTypes      | prop-types(props 类型检测模块)                                |
| Static Type Checking             | 静态类型检测（ Flow / TypeScript）                            |
| Refs and the DOM                 | Refs（父组件不以 props 的方式修改子组件）                     |
| Uncontrolled Components          | 受控组件                                                      |
| Optimizing Performance           | 性能优化                                                      |
| React Without ES6                | 使用 ES6                                                      |
| React Without JSX                | 使用 JSX                                                      |
| Reconciliation                   | diffing 算法解读                                              |
| Context                          | Context（React.createContext(),避免数据在多级组件中传递）     |
| Fragments                        | <React.Fragment>（当返回的元素不止一个的时候，包裹多个元素）  |
| Portals                          | Portals（提前渲染元素到一个页面上不存在的元素上）             |
| Error Boundaries                 | componentDidCatch（生命周期函数，用于创建错误边界，捕获错误） |
| Web Components                   | react 与 Web Components 兼容                                  |
| Higher-Order Components          | -                                                             |
| Forwarding Refs                  | -                                                             |
| Render Props                     | props 为函数？                                                |
| Integrating with Other Libraries | 与其它库整合                                                  |
| Accessibility                    | 易访问性的应用                                                |
| Code-Splitting                   | 代码分割                                                      |
| Strict Mode                      | <React.StrictMode>（静态模式）                                |

## 参考

| 章节                        | more |
| --------------------------- | ---- |
| React                       | -    |
| React.Component             | -    |
| ReactDOM                    | -    |
| ReactDOMServer              | -    |
| DOM Elements                | -    |
| SyntheticEvent              | -    |
| Test Utilities              | -    |
| Shallow Renderer            | -    |
| Test Renderer               | -    |
| JS Environment Requirements | -    |
| Glossary                    | -    |

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
