# vue

--------------------------------------------------------------------------------

## 相关资源文档

文档                                                                     | more
---------------------------------------------------------------------- | ----------
[vue 官方文档](https://cn.vuejs.org/v2/guide/)                             | 官方文档
[vue-router](https://router.vuejs.org/zh-cn/)                          | vue框架路由
[vuex](https://github.com/vuejs/vuex)                                  | vue 状态管理
[vue-devtools](https://github.com/vuejs/vue-devtools)                  | vue 开发调试工具
[vue-loader](https://vue-loader.vuejs.org/zh-cn/)                      | -
[vue-template-loader](https://github.com/ktsn/vue-template-loader)     | -
[awesome-vue](https://github.com/vuejs/awesome-vue#libraries--plugins) | vue各种资源集合
[vue 在线测试界面](https://jsfiddle.net/chrisvfritz/50wL7mdz/)               | -

--------------------------------------------------------------------------------

## 全局

### 全局配置

> Vue.config 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改

配置                               | 默认值             | more
-------------------------------- | --------------- | ---------------------------------------------------
silent                           | false           | 是否取消 Vue 所有的日志与警告
optionMergeStrategies            | {}              | 设置自定义选项混合策略（默认为覆盖）
devtools                         | true(生产版为false) | 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false
errorHandler=(err, vm, info)=>{} | undefined       | 指定组件的渲染和观察期间未捕获错误的处理函数（如果已设置）
warnHandler=(msg, vm, trace)=>{} | undefined       | 为 Vue 的运行时警告赋于一个自定义句柄。注意这只会在开发者环境下生效，在生产环境下它会被忽略
ignoredElements                  | []              | 须使 Vue 忽略在 Vue 之外的自定义元素
keyCodes                         | {}              | 给 v-on 自定义键位别名
performance                      | false           | 设置为 true 以在浏览器开发工具中启用对组件初始化，渲染和打补丁的性能追踪
produvtionTip                    | true            | 设置为 false 以阻止 vue 在启动时生成生产提示

### 全局 API

api                               | more
--------------------------------- | -----------------------------------------
Vue.extend(options)               | 使用基础 Vue 构造器，创建一个"子类"。参数是一个包含组件选项的对象
Vue.nextTick([callback, context]) | 在下次 DOM 更新循环结束之后执行延迟回调
Vue.set(target, key, value)       | 设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新
Vue.delete(target, key)           | 删除对象的属性。如果对象是响应式的，确保删除能触发更新视图
Vue.directive(id, [definition])   | 注册或获取全局指令
Vue.filter(id, [definition])      | 注册或获取全局过滤器
Vue.component(id, [definition])   | 注册或获取全局组件
Vue.use(plugin，optionObj)         | 安装 Vue.js 插件
Vue.mixin(mixin)                  | 全局注册一个混合，影响注册之后所有创建的每个 Vue 实例
Vue.compile(template)             | 在render函数中编译模板字符串。只在独立构建时有效
Vue.version                       | 提供字符串形式的 Vue 安装版本号
new Vue(vueConfig)                | 创建一个 Vue 根实例

--------------------------------------------------------------------------------

## 选项 && vue 实例

### 选项列表

分类     | 选项               | more
------ | ---------------- | ----------------------------------------------------------------------------------------------------------
数据     | data             | Vue 实例的数据对象(组件的定义只接受 function)
~      | props            | props 可以是数组或对象，用于接收来自父组件的数据
~      | propsData        | 只用于 new 创建的实例的过程中
~      | computed         | 计算属性将被混入到 Vue 实例中
~      | methods          | methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用
~      | watch            | 一个对象，键是需要观察的表达式，值是对应回调函数
DOM    | el               | 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例
~      | template         | 一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发 slot
~      | render           | 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力
~      | renderError      | 当 render 函数遭遇错误时，提供另外一种渲染输出。其错误将会作为第二个参数传递到 renderError（只在开发者环境下工作）
生命周期钩子 | beforeCreate     | 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
～      | created          | 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
～      | beforeMount      | 在挂载开始之前被调用：相关的 render 函数首次被调用(该钩子在服务器端渲染期间不被调用)
～      | mounted          | el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内(该钩子在服务器端渲染期间不被调用)
～      | beforeUpdate     | 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程(该钩子在服务器端渲染期间不被调用)
～      | updated          | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子(该钩子在服务器端渲染期间不被调用)
～      | activated        | keep-alive 组件激活时调用(该钩子在服务器端渲染期间不被调用)
～      | deactivated      | keep-alive 组件停用时调用(该钩子在服务器端渲染期间不被调用)
～      | beforeDestroy    | 实例销毁之前调用。在这一步，实例仍然完全可用(该钩子在服务器端渲染期间不被调用)
～      | destroyed        | Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁(该钩子在服务器端渲染期间不被调用)
资源     | directives       | 自定义局部指令
~      | filters          | 自定义局部过滤器
~      | components       | 声明或创建要使用的组件
组合     | parent           | 指定已创建的实例之父实例，在两者之间建立父子关系
~      | mixins           | mixins 选项接受一个混合对象的数组
~      | extends          | 允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数),而无需使用 Vue.extend。这主要是为了便于扩展单文件组件(和 mixins 类似，区别在于，组件自身的选项会比要扩展的源组件具有更高的优先级)
~      | provide / inject | 与 React 的上下文特性很相似
其它     | name             | 允许组件模板递归地调用自身(只有作为组件选项时起作用)
~      | delimiters       | 改变纯文本插入分隔符(这个选项只在完整构建版本中的浏览器内编译时可用)
~      | functional       | 函数式组件，使组件无状态（没有 data ）和无实例（没有 this 上下文(用一个简单的 render 函数返回虚拟节点使他们更容易渲染)
~      | model            | 允许一个自定义组件在使用 v-model 时定制 prop 和 event(用于自定义组件的 v-model 双向绑定)
~      | inheritAttrs     | 默认情况下父作用域的不被认作 props 的特性绑定 (attribute bindings) 将会"回退"且作为普通的 HTML 特性应用在子组件的根元素上(有时候这种方式并不符合预期)
~      | comments         | 当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们(这个选项只在完整构建版本中的浏览器内编译时可用)

### 实例

分类      | 字段              | more
------- | --------------- | --------------------------------------------------------------------------------------------------------------
属性      | vm.$data        | Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象属性的访问。
~       | vm.$props       | 一个对象，代表当前组件收到的 props。Vue 示例代理访问到这个 props 对象的属性们
~       | vm.$el          | Vue 实例使用的根 DOM 元素
~       | vm.$options     | 用于当前 Vue 实例的初始化选项(需要在选项中包含自定义属性时会有用处)
~       | vm.$parent      | 父实例，如果当前实例有的话
~       | vm.$root        | 当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自已
~       | vm.$children    | 当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的
~       | vm.$slots       | 用来访问被 slot 分发的内容。每个具名 slot 有其相应的属性（例如：slot="foo" 中的内容将会在 vm.$slots.foo 中被找到）。default 属性包括了所有没有被包含在具名 slot 中的节点
~       | vm.$scopedSlots | 用来访问 scoped slots。对于包括 默认 slot 在内的每一个 slot， 该对象都包含一个返回相应 VNode 的函数
~       | vm.$refs        | 一个对象，其中包含了所有拥有 ref 注册的子组件
~       | vm.$isServer    | 当前 Vue 实例是否运行于服务器
~       | vm.$attrs       | 包含了父作用域中不被认为 (且不预期为) props 的特性绑定 (class 和 style 除外)
~       | vm.$listeners   | 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器
方法／数据   | vm.$watch       | 观察 Vue 实例变化的一个表达式或计算属性函数
~       | vm.$set         | 这是全局 Vue.set 的别名
~       | vm.$delete      | 这是全局 Vue.delete 的别名
方法／事件   | vm.$on          | 监听当前实例上的自定义事件。事件可以由vm.$emit触发
~       | vm.$once        | 监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器
~       | vm.$off         | 移除自定义事件监听器
~       | vm.$emit        | 触发当前实例上的事件。附加参数都会传给监听器回调
方法／生命周期 | vm.$mount       | 如果 Vue 实例在实例化时没有收到 el 选项，则它处于"未挂载"状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例
~       | vm.$forceUpdate | 迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件
~       | vm.$nextTick    | 将回调延迟到下次 DOM 更新循环之后执行
~       | vm.$destroy     | 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器

### 计算属性 && Methods && watch

计算属性                 | Methods
-------------------- | ---------
只有在它的相关依赖发生改变时才会重新求值 | 每次访问都重新执行

计算属性                 | watch
-------------------- | ----------------------
可以使用计算属性解决就不使用 watch | 数据变动后，有必要进行进一步的操作的时候使用

--------------------------------------------------------------------------------

## 指令列表

分类   | 指令        | more
---- | --------- | -------------------------------------------------------
插值   | v-text    | 更新元素的 textContent
～    | v-html    | 更新元素的 innerHTML
～    | v-bind    | 动态地绑定一个或多个特性，或一个组件 prop 到表达式，简写形式 :href=''
～    | v-once    | 只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能
～    | v-model   | 在表单控件或者组件上创建双向绑定
条件渲染 | v-show    | 根据表达式之真假值，切换元素的 display CSS 属性(元素始终会被渲染并保留在 DOM 中)
～    | v-if      | 根据表达式的值的真假条件渲染元素(元素会销毁或重建)
～    | v-else-if | 表示 v-if 的 "else if 块"。可以链式调用
～    | v-else    | 为 v-if 或者 v-else-if 添加 "else 块"
～    | v-pre     | 跳过这个元素和它的子元素的编译过程
～    | v-cloak   | 这个指令保持在元素上直到关联实例结束编译
列表渲染 | v-for     | 基于源数据多次渲染元素或模板块
绑定事件 | v-on      | 绑定事件监听器，简写形式 @click=''

### 修饰符列表

分类             | 修饰符      | more
-------------- | -------- | -----------------------------------------
常用             | .stop    | 阻止事件冒泡
～              | .prevent | 取消默认事件
～              | .capture | 使用事件捕获模式
～              | .self    | 当事件在元素自身触发的时候才执行方法
～              | .once    | 事件只触发一次（可用到自定义的组件事件上，其它修饰符只能修饰原生的 DOM 事件）
～              | .native  | 监听组件上的原生事件
～              | .sync    | 父子组件实现双向绑定（语法糖）
～              | .passive | 以 { passive: true } 模式添加侦听器
鼠标或键盘修饰符       | .ctrl    | -
～              | .alt     | -
～              | .shift   | -
～              | .meta    | -
键盘修饰符          | .enter   | -
～              | .tab     | -
～              | .delete  | 删除 ／ 退格键
～              | .esc     | -
～              | .space   | -
～              | .up      | -
～              | .down    | -
～              | .left    | -
～              | .right   | -
滑鼠按键修饰符        | .left    | -
～              | .right   | -
～              | .middle  | -
表单修饰符（v-model） | .lazy    | 双向绑定延时同步
～              | .number  | 自动将用户的输入值转为 Number 类型
～              | .trim    | 自动过滤用户输入的首尾空格

### 过滤器

示例                                  | more
----------------------------------- | --------
\{\{ message／capitalize \}\}            | -
\{\{ message／filterA／filterB \}\}       | 串联的过滤器
\{\{ message／filterA('arg1', arg2) \}\} | 接受参数的过滤器

### Class 与 Style 绑定

示例                                                               | more
---------------------------------------------------------------- | -----------------------
v-bind:class="{ active: isActive }"                              | 对象
v-bind:class="{ active: isActive, 'text-danger': hasError }"     | cl用引号包裹起来ass类名有连字符的时候需要
v-bind:class="[isActive ? activeClass : '', errorClass]"         | 数组
v-bind:class="[{ active: isActive }, errorClass]"                | 数组与对象并用
v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }" | 对象
v-bind:style="[baseStyles, overridingStyles]"                    | 数组中包含多个对象

--------------------------------------------------------------------------------

### 杂项

### 特殊属性

属性   | more
---- | ----------------------------------------------------------------------------------------------------------------------------------------
key  | key 的特殊属性主要用在 Vue的虚拟DOM算法，在新旧nodes对比时辨识VNodes。如果不使用key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用key，它会基于key的变化重新排列元素顺序，并且会移除key不存在的元素
ref  | 用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素; 如果用在子组件上，引用就指向组件实例
slot | 用于标记往哪个slot中插入子组件内容
is   | 用于动态组件且基于DOM 内模板到限制来工作

### 内置组件

组件               | more
---------------- | ----------------------------------------------------
component        | 渲染一个"元组件"为动态组件。依 is 的值，来决定哪个组件被渲染
transition       | 不会渲染额外的 DOM 元素，也不会出现在检测过的组件层级中。它只是将内容包裹在其中，简单的运用过渡行为
transition-group | 渲染一个真实的 DOM 元素。默认渲染`<span>`，可以通过 tag 属性配置哪个元素应该被渲染
keep-alive       | 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们
slot             | 作为组件模板之中的内容分发插槽

--------------------------------------------------------------------------------

## 自定义指令

### 钩子函数

函数               | more
---------------- | ------------------------------------------------------------------------------------
bind             | 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作
inserted         | 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）
update           | 所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
componentUpdated | 所在组件的 VNode 及其孩子的 VNode 全部更新时调用
unbind           | 只调用一次， 指令与元素解绑时调用

### 钩子函数参数

字段1      | 字段2        | more
-------- | ---------- | --------------------------------------------
el       | -          | 指令所绑定的元素，可以用来直接操作 DOM
binding  | -          | 一个对象，包含以下属性
～        | name       | 指令名，不包括 v- 前缀
～        | value      | 指令的绑定值
～        | oldValue   | 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用
～        | expression | 绑定值的字符串形式
～        | arg        | 传给指令的参数
～        | modifiers  | 一个包含修饰符的对象
vnode    | -          | Vue 编译生成的虚拟节点
oldVnode | -          | 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用

--------------------------------------------------------------------------------

## 过渡效果

### 过渡的class类名

class          | more
-------------- | --------------------------------------------------------------------------------------------
v-enter        | 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除
v-enter-active | 定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数
v-enter-to     | 定义进入过渡的结束状态。在元素被插入一帧后生效（于此同时 v-enter 被删除），在 transition/animation 完成之后移除
v-leave        | 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
v-leave-active | 定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
v-leave-to     | 定义离开过渡的结束状态。在离开过渡被触发一帧后生效（于此同时 v-leave 被删除），在 transition/animation 完成之后移除

### 自定义过度类

属性                 | more
------------------ | ----
enter-class        | -
enter-active-class | -
enter-to-class     | -
leave-class        | -
leave-active-class | -
leave-to-class     | -

### :duration

> 显性的过渡效果持续时间

### javascript 钩子

> 推荐对于仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响

钩子              | more
--------------- | ----------------------------------------------------------------------------
before-enter    | -
enter           | 当只用 JavaScript 过渡的时候， 在 enter 和 leave 中，回调函数 done 是必须的 。 否则，它们会被同步调用，过渡会立即完成
after-enter     | -
enter-cancelled | -
before-leave    | -
leave           | -
after-leave     | -
leave-cancelled | -

### mode

mode   | more
------ | ---------------------
in-out | 新元素先进行过渡，完成之后当前元素过渡离开
out-in | 当前元素先进行过渡，完成之后新元素过渡进入
