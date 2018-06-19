# vue 生态

> vue + webpack

## 相关文档

- [vue](https://cn.vuejs.org/)
- [awesome-vue](https://github.com/vuejs/awesome-vue#components--libraries)

## 相关教程

- [从零开始的 webpack4 + vue2.x](https://segmentfault.com/a/1190000014251654)

<!-- slide -->

## 调研列表

- 框架对比
- 请求转发
- 代码分割
- 样式设计
- 组件库选择
- 模块设计
- 静态发布

<!-- slide -->

## 框架对比

- [react](https://reactjs.org/docs/hello-world.html)

1.  JSX vs Templates: 基于 HTML 的模板使得将已有的应用逐步迁移到 Vue 更为容易
2.  (PureComponent && shouldComponentUpdate) vs 自动渲染
3.  都有 vue 开发项目的经验，都没有 react 开发实际项目的经验

<!-- slide -->

## 请求转发

```js
// 接口代理
proxy: {
  "/api": {
    target: "https://m.kaixin.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }
}
```

<!-- slide -->

## 代码分割

- [code-splitting](https://webpack.js.org/guides/code-splitting/)
- [异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

1.  每一个模块一个 chunk
2.  每个页面一个 chunk
3.  按需加载/异步组件

<!-- slide -->

## 样式设计

1.  统一使用一种预处理器 ，如 stylus
2.  模块和项目中的公共样式如果要添加样式，一定要慎重，公共样式一定要清晰合理
3.  不适合提取为公共样式的时候，一定要写在对应的组件中，不要污染公共样式
4.  使用变量注入技术注入 css 变量，不需要每个组件都引入 css 变量

<!-- slide -->

## 组件库选择

- [iview](https://www.iviewui.com/)
- [element](http://element.eleme.io/#/zh-CN)

<!-- slide -->

## 模块设计

- 多个项目通用的组件，应该发布为模块，不应该重复在各个项目中写;
- 使用 `Vue.use(component)` 语句就可以使用全局注册的 Vue 组件，模块中的组件全部为全局组件；
- 只在一个页面使用的组件，可以不写在模块中，而是写在对应项目中，以局部组件的形式引到相应页面；
- 重复使用的组件应该在模块中维护。

<!-- slide -->

## 静态发布

> 不再适合使用之前的模式，一个项目所有的 css、js、img 都包含在项目对应的文件中(不应该再与 svn 中的文件耦合)，最后打包。应该有一种发布机制可以一次性 cdn 加速打包后的所有静态文件，而不是继续在原来 svn 的基础上发布静态。
