# [react](https://react.docschina.org/)

## React

| api                                       | key                     | more                                                                                                                                                 |
| ----------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| React.createRef()                         | -                       | 创建一个 React ref                                                                                                                                   |
| React.lazy()                              | -                       | 能让你像渲染常规组件一样处理动态引入（的组件）                                                                                                       |
| React.forwardRef((props, ref)=>())        | -                       | 获取传递给组件本身的 ref                                                                                                                             |
| const SomeContext = React.createContext() | -                       | 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值 |
| ^                                         | SomeContext.Provider    | 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化                                                                 |
| ^                                         | SomeContext.Consumer    | 可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context                                                                                      |
| ^                                         | SomeContext.displayName | context 对象接受一个名为 displayName 的 property，类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容                               |
| ^                                         | Class.contextType       | this.context                                                                                                                                         |
| React.Suspense                            | -                       | 用于包裹懒加载组件的组件                                                                                                                             |
| React.Fragment / <>                       | -                       | 用于包裹多个组件，而不产生额外标签                                                                                                                   |

## React.Component{}

| class    | key                                           | more                                                                                                              |
| -------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 生命周期 | constructor()                                 | -                                                                                                                 |
| ^        | static getDerivedStateFromProps(props, state) | 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用                                                  |
| ^        | componentDidMount()                           | 组件已经被渲染到 DOM 中后运行                                                                                     |
| ^        | componentDidUpdate()                          | 会在更新后会被立即调用,首次渲染不会执行此方法                                                                     |
| ^        | componentWillUnmount()                        | -                                                                                                                 |
| ^        | static getDerivedStateFromError()             | 此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state（主要用于更新组件状态） |
| ^        | componentDidCatch()                           | 此生命周期在后代组件抛出错误后被调用(主要用于打印错误信息)                                                        |
| ^        | render                                        | -                                                                                                                 |
| state    | this.state                                    | -                                                                                                                 |
| ^        | this.setState({})                             | 同步                                                                                                              |
| ^        | this.setState((state,props)=>({}))            | 异步，不要依赖原有的值来更新下一个状态                                                                            |
| props    | this.props                                    | -                                                                                                                 |
| ^        | this.props.children                           | 将子组件传递到渲染结果中                                                                                          |
| ^        | this.props.someComponent                      | 将 someComponent 组件传递到渲染结果中                                                                             |
| orther   | `private xxx =''`                             | this.xxx                                                                                                          |

## 概念列表

| 概念       | more                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------- |
| 函数组件   | -                                                                                             |
| class 组件 | -                                                                                             |
| 受控组件   | 使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作 |
| 高阶组件   | 高阶组件是参数为组件，返回值为新组件的函数                                                    |

## jsx

| class    | key                   | more                                                   |
| -------- | --------------------- | ------------------------------------------------------ |
| 条件渲染 | 与运算符 &&           | {isLoggedIn && <someComponent />}                      |
| ^        | 三目运算符            | {isLoggedIn ? <someComponent1 /> : <someComponent2 />} |
| 列表渲染 | 赋值插入              | -                                                      |
| ^        | 函数组件插入          | -                                                      |
| ^        | 嵌入 map()            | {xxx.map((item)=><someComponent />)}                   |
| 表单     | value                 | -                                                      |
| ^        | multiple              | -                                                      |
| ^        | name                  | -                                                      |
| ^        | <input type="file" /> | 非受控组件                                             |

## 事件

| event    | more |
| -------- | ---- |
| onClick  | -    |
| onChange | -    |
