# [vue-router](https://router.vuejs.org/zh/api)

## <router-link>

| props              | more                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| to                 | 表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。                      |
| replace            | 设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录                                    |
| append             | 设置 append 属性后，则在当前 (相对) 路径前添加基路径                                                                                              |
| tag                | 有时候想要 <router-link> 渲染成某种标签，例如 <li>。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。                       |
| exact              | "是否激活" 默认类名的依据是 inclusive match (全包含匹配)。 举个例子，如果当前的路径是 /a 开头的，那么 <router-link to="/a"> 也会被设置 CSS 类名。 |
| active-class       | 设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。                                                         |
| exact-active-class | 配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。                          |
| event              | 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组                                                                              |

## <router-view>

| props | more                                                                           |
| ----- | ------------------------------------------------------------------------------ |
| name  | 如果 <router-view>设置了名称，则会渲染对应的路由配置中 components 下的相应组件 |

## Router 构建选项

| option                      | more                                                                               |
| --------------------------- | ---------------------------------------------------------------------------------- |
| routes                      | -                                                                                  |
| mode                        | 配置路由模式                                                                       |
| base                        | 应用的基路径                                                                       |
| linkActiveClass             | 全局配置 <router-link> 的默认“激活 class 类名”                                     |
| linkExactActiveClass        | 全局配置 <router-link> 精确激活的默认的 class                                      |
| scrollBehavior              | 滚动行为                                                                           |
| parseQuery / stringifyQuery | 提供自定义查询字符串的解析/反解析函数。覆盖默认行为                                |
| fallback                    | 当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式。默认值为 true。 |

## Router 实例属性/方法

> `this.$router`

| class  | api                                       | more                                                                                                               |
| ------ | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| attr   | router.app                                | 配置了 router 的 Vue 根实例。                                                                                      |
| ^      | router.mode                               | 路由使用的模式。                                                                                                   |
| ^      | router.currentRoute                       | 当前路由对应的路由信息对象。                                                                                       |
| method | router.beforeEach()                       | 全局的导航守卫                                                                                                     |
| ^      | router.beforeResolve()                    | ^                                                                                                                  |
| ^      | router.afterEach()                        | ^                                                                                                                  |
| ^      | router.push()                             | 动态的导航到一个新 URL                                                                                             |
| ^      | router.replace()                          | ^                                                                                                                  |
| ^      | router.go()                               | ^                                                                                                                  |
| ^      | router.back()                             | ^                                                                                                                  |
| ^      | router.forward()                          | ^                                                                                                                  |
| ^      | router.getMatchedComponents()             | 返回目标位置或是当前路由匹配的组件数组                                                                             |
| ^      | router.resolve()                          | 解析目标位置                                                                                                       |
| ^      | router.addRoutes()                        | 动态添加更多的路由规则                                                                                             |
| ^      | router.onReady(callback, [errorCallback]) | 该方法把一个回调排队，在路由完成初始导航时调用，这意味着它可以解析所有的异步进入钩子和路由初始化相关联的异步组件。 |
| ^      | router.onError(callback)                  | 注册一个回调，该回调会在路由导航过程中出错时被调用                                                                 |

## 路由对象

> `this.$route`

| attr                    | more                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `$route.path`           | 字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。                     |
| `$route.params`         | 一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。 |
| `$route.query`          | 一个 key/value 对象，表示 URL 查询参数                                              |
| `$route.hash`           | 当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串。                        |
| `$route.fullPath`       | 完成解析后的 URL，包含查询参数和 hash 的完整路径。                                  |
| `$route.matched`        | 一个数组，包含当前路由的所有嵌套路径片段的路由记录                                  |
| `$route.name`           | 当前路由的名称，如果有的话                                                          |
| `$route.redirectedFrom` | 如果存在重定向，即为重定向来源的路由的名字                                          |

## 组件配置选项

| option              | more                                                                     |
| ------------------- | ------------------------------------------------------------------------ |
| beforeRouteEnter()  | -                                                                        |
| beforeRouteUpdate() | 组件内部生命周期，组件对应路由 path 变化前触发，主要应对参数值变化的情况 |
| beforeRouteLeave()  | -                                                                        |
