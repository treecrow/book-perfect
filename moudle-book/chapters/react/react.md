# [react](https://react.docschina.org/)

## 概念列表

| 概念       | more                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------- |
| 函数组件   | -                                                                                             |
| class 组件 | -                                                                                             |
| 受控组件   | 使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作 |
| 高阶组件   | 高阶组件是参数为组件，返回值为新组件的函数                                                    |

## React

| class                                     | api                                                   | more                                                                                                                                                 |
| ----------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 组件                                      | React.Component{}                                     | -                                                                                                                                                    |
| ^                                         | React.PureComponent{}                                 | 创建进行浅比较的 shouldComponentUpdate 组件                                                                                                          |
| ^                                         | React.memo()                                          | 与 React.PureComponent 非常相似，但只适用于函数组件，而不适用 class 组件                                                                             |
| 创建 React 元素                           | React.createElement()                                 | 创建并返回指定类型的新 React 元素                                                                                                                    |
| 转换元素                                  | React.cloneElement()                                  | 以 element 元素为样板克隆并返回新的 React 元素                                                                                                       |
| ^                                         | React.isValidElement(object)                          | 验证对象是否为 React 元素，返回值为 true 或 false。                                                                                                  |
| ^                                         | React.Children                                        | React.Children 提供了用于处理 this.props.children 不透明数据结构的实用方法                                                                           |
| ^                                         | React.Children.map(children, function[(thisArg)])     | 在 children 里的每个直接子节点上调用一个函数，并将 this 设置为 thisArg。如果 children 是一个数组，它将被遍历并为数组中的每个子节点调用该函数         |
| ^                                         | React.Children.forEach(children, function[(thisArg)]) | 与 React.Children.map() 类似，但它不会返回一个数组                                                                                                   |
| ^                                         | React.Children.count(children)                        | 返回 children 中的组件总数量，等同于通过 map 或 forEach 调用回调函数的次数。                                                                         |
| ^                                         | React.Children.only(children)                         | 验证 children 是否只有一个子节点（一个 React 元素），如果有则返回它，否则此方法会抛出错误。                                                          |
| ^                                         | React.Children.toArray(children)                      | 将 children 这个复杂的数据结构以数组的方式扁平展开并返回，并为每个子节点分配一个 key                                                                 |
| Fragments                                 | <React.Fragment> / <></>                              | React.Fragment 组件能够在不额外创建 DOM 元素的情况下，让 render() 方法中返回多个元素。                                                               |
| Refs                                      | React.createRef()                                     | React.createRef 创建一个能够通过 ref 属性附加到 React 元素的 ref                                                                                     |
| ^                                         | React.forwardRef((props, ref)=>())                    | React.forwardRef 会创建一个 React 组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中                                                |
| Suspense                                  | React.lazy()                                          | React.lazy() 允许你定义一个动态加载的组件。这有助于缩减 bundle 的体积，并延迟加载在初次渲染时未用到的组件                                            |
| ^                                         | <React.Suspense>                                      | React.Suspense 可以指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件                                                   |
| ===                                       | ===                                                   | ===                                                                                                                                                  |
| const SomeContext = React.createContext() | -                                                     | 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值 |
| ^                                         | SomeContext.Provider                                  | 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化                                                                 |
| ^                                         | SomeContext.Consumer                                  | 可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context                                                                                      |
| ^                                         | SomeContext.displayName                               | context 对象接受一个名为 displayName 的 property，类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容                               |
| ^                                         | Class.contextType                                     | this.context                                                                                                                                         |
| Profiler                                  | -                                                     | 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销                                                                                        |

## React.Component{}

| class    | key                                           | more                                                                                                                                          |
| -------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 生命周期 | constructor()                                 | -                                                                                                                                             |
| ^        | static getDerivedStateFromProps(props, state) | 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容                |
| ^        | render                                        | -                                                                                                                                             |
| ^        | componentDidMount()                           | 在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方                |
| ^        | shouldComponentUpdate(nextProps, nextState)   | 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响                                              |
| ^        | getSnapshotBeforeUpdate(prevProps, prevState) | 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）                              |
| ^        | componentDidUpdate(prevProps)                 | 会在更新后会被立即调用,首次渲染不会执行此方法                                                                                                 |
| ^        | componentWillUnmount()                        | 在组件卸载及销毁之前直接调用                                                                                                                  |
| ^        | static getDerivedStateFromError(error)        | 在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state                                                                 |
| ^        | componentDidCatch(error, info)                | 在后代组件抛出错误后被调用                                                                                                                    |
| state    | this.state                                    | -                                                                                                                                             |
| ^        | this.setState({})                             | 同步                                                                                                                                          |
| ^        | this.setState((state,props)=>({}))            | 异步，不要依赖原有的值来更新下一个状态                                                                                                        |
| props    | this.props                                    | -                                                                                                                                             |
| ^        | this.props.children                           | 将子组件传递到渲染结果中                                                                                                                      |
| ^        | this.props.someComponent                      | 将 someComponent 组件传递到渲染结果中                                                                                                         |
| ^        | this.props.render                             | 一个用于告知组件需要渲染什么内容的函数 prop                                                                                                   |
| orther   | `private xxx =''`                             | this.xxx                                                                                                                                      |
| ^        | this.forceUpdate(callback)                    | 默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 render() 方法依赖于其他数据，则可以调用 forceUpdate() 强制让组件重新渲染 |

## react-dom

| api                                              | more                                                                                                                            |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| ReactDOM.render(element, container[, callback])  | 在提供的 container 里渲染一个 React 元素，并返回对该组件的引用（或者针对无状态组件返回 null）                                   |
| ReactDOM.hydrate(element, container[, callback]) | 与 render() 相同，但它用于在 ReactDOMServer 渲染的容器中对 HTML 的内容进行 hydrate 操作。React 会尝试在已有标记上绑定事件监听器 |
| ReactDOM.unmountComponentAtNode()                | 从 DOM 中卸载组件，会将其事件处理器（event handlers）和 state 一并清除                                                          |
| ReactDOM.findDOMNode(component)                  | 如果组件已经被挂载到 DOM 上，此方法会返回浏览器中相应的原生 DOM 元素                                                            |
| ReactDOM.createPortal(child, container)          | 创建 portal。Portal 将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外                              |

## 合成事件（SyntheticEvent）

| 属性/方法              | more             |
| ---------------------- | ---------------- |
| bubbles                | -                |
| cancelable             | -                |
| currentTarget          | -                |
| defaultPrevented       | -                |
| eventPhase             | -                |
| isTrusted              | -                |
| nativeEvent            | 浏览器的底层事件 |
| target                 | -                |
| timeStamp              | -                |
| type                   | -                |
| preventDefault()       | -                |
| isDefaultPrevented()   | -                |
| stopPropagation()      | -                |
| isPropagationStopped() | -                |
| persist()              | -                |

- 合成事件列表

| class      | event                 | more |
| ---------- | --------------------- | ---- |
| 剪贴板事件 | onCopy                | -    |
| ^          | onCut                 | -    |
| ^          | onPaste               | -    |
| 复合事件   | onCompositionEnd      | -    |
| ^          | onCompositionStart    | -    |
| ^          | onCompositionUpdate   | -    |
| 键盘事件   | onKeyDown             | -    |
| ^          | onKeyPress            | -    |
| ^          | onKeyUp               | -    |
| 焦点事件   | onFocus               | -    |
| ^          | onBlur                | -    |
| 表单事件   | onChange              | -    |
| ^          | onInput               | -    |
| ^          | onInvalid             | -    |
| ^          | onReset               | -    |
| ^          | onSubmit              | -    |
| 通用事件   | onError               | -    |
| ^          | onLoad                | -    |
| 鼠标事件   | onClick               | -    |
| ^          | onContextMenu         | -    |
| ^          | onDoubleClick         | -    |
| ^          | onDrag                | -    |
| ^          | onDragEnd             | -    |
| ^          | onDragEnter           | -    |
| ^          | onDragExit            | -    |
| ^          | onDragLeave           | -    |
| ^          | onDragOver            | -    |
| ^          | onDragStart           | -    |
| ^          | onDrop                | -    |
| ^          | onMouseDown           | -    |
| ^          | onMouseEnter          | -    |
| ^          | onMouseLeave          | -    |
| ^          | onMouseMove           | -    |
| ^          | onMouseOut            | -    |
| ^          | onMouseOver           | -    |
| ^          | onMouseUp             | -    |
| 指针事件   | onPointerDown         | -    |
| ^          | onPointerMove         | -    |
| ^          | onPointerUp           | -    |
| ^          | onPointerCancel       | -    |
| ^          | onGotPointerCapture   | -    |
| ^          | onLostPointerCapture  | -    |
| ^          | onPointerEnter        | -    |
| ^          | onPointerLeave        | -    |
| ^          | onPointerOver         | -    |
| ^          | onPointerOut          | -    |
| 选择事件   | onSelect              | -    |
| 触摸事件   | onTouchCancel         | -    |
| ^          | onTouchEnd            | -    |
| ^          | onTouchMove           | -    |
| ^          | onTouchStart          | -    |
| UI 事件    | onScroll              | -    |
| 滚轮事件   | onWheel               | -    |
| 媒体事件   | onAbort               | -    |
| ^          | onCanPlay             | -    |
| ^          | onCanPlayThrough      | -    |
| ^          | onDurationChange      | -    |
| ^          | onEmptied onEncrypted | -    |
| ^          | onEnded               | -    |
| ^          | onError               | -    |
| ^          | onLoadedData          | -    |
| ^          | onLoadedMetadata      | -    |
| ^          | onLoadStart           | -    |
| ^          | onPause               | -    |
| ^          | onPlay                | -    |
| ^          | onPlaying             | -    |
| ^          | onProgress            | -    |
| ^          | onRateChange          | -    |
| ^          | onSeeked              | -    |
| ^          | onSeeking             | -    |
| ^          | onStalled             | -    |
| ^          | onSuspend             | -    |
| ^          | onTimeUpdate          | -    |
| ^          | onVolumeChange        | -    |
| ^          | onWaiting             | -    |
| 图像事件   | onLoad                | -    |
| ^          | onError               | -    |
| 动画事件   | onAnimationStart      | -    |
| ^          | onAnimationEnd        | -    |
| ^          | onAnimationIteration  | -    |
| 过渡事件   | onTransitionEnd       | -    |
| 其他事件   | onToggle              | -    |
