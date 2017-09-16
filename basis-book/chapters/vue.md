# vue

## 传递数据方式

- 作用域
- 通过 prop 传递数据
- 通过自定义事件(emit)
- 使用 slot 分发内容
- 通过 vuex

## vue 响应原理

 > vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()，来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。