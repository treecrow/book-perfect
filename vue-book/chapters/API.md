# API

## 全局配置

> Vue.config 是一个对象，包含 Vue 的全局配置

| key                   | 默认值                | 解释                                                                                            |
| --------------------- | --------------------- | ----------------------------------------------------------------------------------------------- |
| silent                | false                 | 取消 Vue 所有的日志与警告                                                                       |
| optionMergeStrategies | {}                    | 自定义合并策略的选项                                                                            | ❓ |
| devtools              | true (生产版为 false) | 配置是否允许 vue-devtools 检查代码                                                              |
| errorHandler          | undefined             | 指定组件的渲染和观察期间未捕获错误的处理函数                                                    |
| warnHandler           | undefined             | 为 Vue 的运行时警告赋予一个自定义处理函数                                                       |
| ignoredElements       | []                    | 须使 Vue 忽略在 Vue 之外的自定义元素                                                            |
| keyCodes              | {}                    | 给 v-on 自定义键位别名                                                                          |
| performance           | false                 | 设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪 | ❓ |
| productionTip         | true                  | 设置为 false 以阻止 vue 在启动时生成生产提示                                                    |

## 全局 API

| api                                 | 解释                                                                         |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| Vue.extend(options)                 | 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象          |
| Vue.nextTick( [callback, context] ) | 在下次 DOM 更新循环结束之后执行延迟回调                                      |
| Vue.set(target, key, value)         | 向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。 |
| Vue.delete                          | 删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。                 |
| Vue.directive( id, [definition] )   | 注册或获取全局指令。                                                         |
| Vue.filter( id, [definition] )      | 注册或获取全局过滤器。                                                       |
| Vue.component( id, [definition] )   | 注册或获取全局组件。注册还会自动使用给定的id设置组件的名称                   |
| Vue.use( plugin )                   | 安装 Vue.js 插件。                                                           |
| Vue.mixin( mixin )                  | 全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。                      |
| Vue.compile( template )             | 在 render 函数中编译模板字符串。只在独立构建时有效                           |
| Vue.version                         | 提供字符串形式的 Vue 安装版本号。                                            |

## 选项

> 创建一个 Vue 实例: `new Vue(options)`

| 分类         | api              | more                                                                                                                             |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 数据         | data             | Vue 实例的数据对象                                                                                                               |
| ~            | props            | props 可以是数组或对象，用于接收来自父组件的数据                                                                                 |
| ~            | propsData        | 创建实例时传递 props。主要作用是方便测试。                                                                                       |
| ~            | computed         | 计算属性将被混入到 Vue 实例中。                                                                                                  |
| ~            | methods          | methods 将被混入到 Vue 实例中。                                                                                                  |
| ~            | watch            | 一个对象，键是需要观察的表达式，值是对应回调函数                                                                                 |
| DOM          | el               | 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标                                                                         |
| ~            | template         | 一个字符串模板作为 Vue 实例的标识使用。                                                                                          |
| ~            | render           | 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力                                                                       |
| ~            | renderError      | 当 render 函数遭遇错误时，提供另外一种渲染输出                                                                                   |
| 生命周期钩子 | beforeCreate     | 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用                                                   |
| ~            | created          | 在实例创建完成后被立即调用。                                                                                                     |
| ~            | beforeMount      | 在挂载开始之前被调用：相关的 render 函数首次被调用                                                                               |
| ~            | mounted          | el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子                                                                        |
| ~            | beforeUpdate     | 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。                    |
| ~            | updated          | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。                                                              |
| ~            | activated        | keep-alive 组件激活时调用                                                                                                        |
| ~            | deactivated      | keep-alive 组件停用时调用                                                                                                        |
| ~            | beforeDestroy    | 实例销毁之前调用。在这一步，实例仍然完全可用                                                                                     |
| ~            | destroyed        | Vue 实例销毁后调用                                                                                                               |
| ~            | errorCaptured    | 当捕获一个来自子孙组件的错误时被调用                                                                                             |
| 资源         | directives       | 包含 Vue 实例可用指令的哈希表                                                                                                    |
| ~            | filters          | 包含 Vue 实例可用过滤器的哈希表                                                                                                  |
| ~            | components       | 包含 Vue 实例可用组件的哈希表                                                                                                    |
| 组合         | parent           | 指定已创建的实例之父实例，在两者之间建立父子关系                                                                                 |
| ~            | mixins           | mixins 选项接受一个混入对象的数组                                                                                                |
| ~            | extends          | 允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend。这主要是为了便于扩展单文件组件                |
| ~            | provide / inject | 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。 |
| 其它         | name             | 允许组件模板递归地调用自身。注意，组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。                             |
| ~            | delimiters       | 改变纯文本插入分隔符                                                                                                             |
| ~            | functional       | 使组件无状态 (没有 data ) 和无实例 (没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染                  |
| ~            | model            | 允许一个自定义组件在使用 v-model 时定制 prop 和 event                                                                            |
| ~            | inheritAttrs     | 设置组件的根元素是否继承特性（默认为 true）                                                                                      |
| ~            | comments         | 当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们                                                             |

## 实例

| 分类                | api                                       | 解释                                                                    |
| ------------------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| 实例属性            | vm.$data                                  | Vue 实例观察的数据对象                                                  |
| ~                   | vm.$props                                 | 当前组件接收到的 props 对象                                             |
| ~                   | vm.$el                                    | Vue 实例使用的根 DOM 元素                                               |
| ~                   | vm.$options                               | 用于当前 Vue 实例的初始化选项                                           |
| ~                   | vm.$parent                                | 父实例，如果当前实例有的话                                              |
| ~                   | vm.$root                                  | 当前组件树的根 Vue 实例                                                 |
| ~                   | vm.$children                              | 当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的。 |
| ~                   | vm.$slots                                 | 用来访问被插槽分发的内容                                                |
| ~                   | vm.$scopedSlots                           | 用来访问作用域插槽                                                      |
| ~                   | vm.$refs                                  | 一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例                 |
| ~                   | vm.$isServer                              | 当前 Vue 实例是否运行于服务器                                           |
| ~                   | vm.$attrs                                 | 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定                  |
| ~                   | vm.$listeners                             | 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器              |
| 实例方法 / 数据     | vm.$watch( expOrFn, callback, [options] ) | 观察 Vue 实例变化的一个表达式或计算属性函数                             |
| ~                   | vm.$set( target, key, value )             | 这是全局 Vue.set 的别名                                                 |
| ~                   | vm.$delete( target, key )                 | 这是全局 Vue.delete 的别名                                              |
| 实例方法 / 事件     | vm.$on( event, callback )                 | 监听当前实例上的自定义事件。                                            |
| ~                   | vm.$once( event, callback )               | 监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。        |
| ~                   | vm.$off( event, callback )                | 移除自定义事件监听器。                                                  |
| ~                   | vm.$emit( event, callback )               | 触发当前实例上的事件。                                                  |
| 实例方法 / 生命周期 | vm.$mount                                 | 手动地挂载一个未挂载的实例                                              |
| ~                   | vm.$forceUpdate                           | 迫使 Vue 实例重新渲染。                                                 |
| ~                   | vm.$nextTick                              | 将回调延迟到下次 DOM 更新循环之后执行。                                 |
| ~                   | vm.$destroy                               | 完全销毁一个实例。                                                      |

## 指令

| 指令      | 解释                                               |
| --------- | -------------------------------------------------- |
| v-text    | 更新元素的 textContent。                           |
| v-html    | 更新元素的 innerHTML 。                            |
| v-show    | 根据表达式之真假值，切换元素的 display CSS 属性。  |
| v-if      | 根据表达式的值的真假条件渲染元素。                 |
| v-else    | 为 v-if 或者 v-else-if 添加“else 块”。           |
| v-else-if | 表示 v-if 的 “else if 块”。可以链式调用。        |
| v-for     | 基于源数据多次渲染元素或模板块。                   |
| v-on（@） | 绑定事件监听器。                                   |
| v-bind(:) | 动态地绑定一个或多个特性，或一个组件 prop 到表达式 |
| v-model   | 在表单控件或者组件上创建双向绑定                   |
| v-pre     | 跳过这个元素和它的子元素的编译过程。               |
| v-cloak   | 这个指令保持在元素上直到关联实例结束编译。         |
| v-once    | 只渲染元素和组件一次                               |

## 修饰符

| 分类           | 修饰符   | 解释                                            |
| -------------- | -------- | ----------------------------------------------- |
| 事件修饰符     | .stop    | event.stopPropagation()                         |
| ~              | .prevent | event.preventDefault()                          |
| ~              | .capture | 添加事件监听器时使用事件捕获模式                |
| ~              | .self    | -                                               |
| ~              | .once    | 事件只会触发一次                                |
| ~              | .passive | -                                               |
| 按键修饰符     | .enter   | -                                               |
| ~              | .tab     | -                                               |
| ~              | .delete  | -                                               |
| ~              | .esc     | -                                               |
| ~              | .space   | -                                               |
| ~              | .up      | -                                               |
| ~              | .down    | -                                               |
| ~              | .left    | -                                               |
| ~              | .right   | -                                               |
| 系统修饰键     | .ctrl    | -                                               |
| ~              | .alt     | -                                               |
| ~              | .shift   | -                                               |
| ~              | .meta    | -                                               |
| ~              | .exact   | 允许你控制由精确的系统修饰符组合触发的事件      |
| 鼠标按钮修饰符 | .left    | -                                               |
| ~              | .right   | -                                               |
| ~              | .middle  | -                                               |
| v-model修饰符  | .lazy    | 转变为使用 change 事件进行同步(默认 input 事件) |
| ~              | .number  | 自动将用户的输入值转为数值类型                  |
| ~              | .trim    | 自动过滤用户输入的首尾空白字符                  |

## 特殊特性

| 特性       | 解释                                                                       |
| ---------- | -------------------------------------------------------------------------- |
| key        | key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes |
| ref        | ref 被用来给元素或子组件注册引用信息。                                     |
| slot       | 用于标记往哪个具名插槽中插入子组件内容。                                   |
| slot-scope | 用于将元素或组件表示为作用域插槽。                                         |
| is         | 用于动态组件且基于 DOM 内模板的限制来工作                                  |

## 内置组件

| 组件             | 解释                                                             |
| ---------------- | ---------------------------------------------------------------- |
| component        | 渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。 |
| transition       | 作为单个元素/组件的过渡效果                                      |
| transition-group | 作为多个元素/组件的过渡效果                                      |
| keep-alive       | 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们           |
| slot             | `<slot>` 元素作为组件模板之中的内容分发插槽                      |