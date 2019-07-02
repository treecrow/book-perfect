# [vue-router](https://router.vuejs.org/zh/)

## router-link 组件

| prop | 解释 |
| ---- | ---- |
| to   | -    |

## router-view 组件

## $router

> 在任何组件内通过 this.$router 访问路由器

| api                                             | 解释 |
| ----------------------------------------------- | ---- |
| router.push(location, onComplete?, onAbort?)    | -    |
| router.replace(location, onComplete?, onAbort?) | -    |
| router.go(n)                                    | -    |


## $route

> 通过 this.$route 访问当前路由

| api           | 解释                     |
| ------------- | ------------------------ |
| route.params  | 路由参数                 |
| route.query   | 获取 url 查询参数        |
| route.hash    | 获取 url hash            |
| route.matched | 路径匹配到的所有路由记录 |

## 路由模式

- hash 模式 ：运营中心
- history 模式：M 站、 PC 官网

## api

| api                                       | 解释                                                                     |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| router.beforeEach((to, from, next) => {}) | 注册一个全局前置守卫                                                     |
| router.afterEach((to, from) => {})        | 注册一个全局后置守卫                                                     |
| beforeRouteEnter()                        | -                                                                        |
| beforeRouteUpdate()                       | 组件内部生命周期，组件对应路由 path 变化前触发，主要应对参数值变化的情况 |
| beforeRouteLeave()                        | -                                                                        |