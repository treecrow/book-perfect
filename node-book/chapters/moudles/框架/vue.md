# vue

--------------------------------------------------------------------------------

## 相关资源文档

文档                                                                     | more
---------------------------------------------------------------------- | ---------
[awesome-vue](https://github.com/vuejs/awesome-vue#libraries--plugins) | vue各种资源集合
[vue 在线测试界面](https://jsfiddle.net/chrisvfritz/50wL7mdz/)               | -

## 框架对比

...         | react        | vue                    | angular
----------- | ------------ | ---------------------- | -------
Virtual DOM | yes          | yes(实现更为轻量)            | -
JSX         | yes          | 支持（建议展示组件用模版，逻辑组件用jsx） | -
本地渲染        | react native | weex                   | -
TypeScript  | -            | ？                      | 必须使用

--------------------------------------------------------------------------------

## api列表

api                                            | more
---------------------------------------------- | ------------------------------
new Vue(vueConfig)                             | 创建一个 Vue 根实例
Vue.extend(extendConfig)                       | 扩展 Vue 构造器，从而用预定义选项创建可复用的组件构造器
Vue.component(componentName, componentConfig)  | 注册一个全局组件(声明后才能用)
Vue.set(example1.items, indexOfItem, newValue) | 直接修改数组元素，vue 无法监测到数据的变动
Vue.config.keyCodes.f1 = 112                   | 自定义键值修饰符别名

### vueConfig

分类   | 字段            | more
---- | ------------- | ----------------------------
～    | el            | -
～    | data          | 每个 Vue 实例都会代理其 data 对象里所有的属性
～    | filters       | 设置过滤器
～    | computed      | 设置计算属性
～    | watch         | 观察和响应 Vue 实例上的数据变动
～    | methods       | 设置方法
～    | components    | 注册局部组件
生命周期 | beforeCreate  | -
～    | created       | 在实例被创建之后被调用
～    | beforeMount   | -
～    | mounted       | -
～    | beforeUpdate  | -
～    | updated       | -
～    | beforeDestroy | -
～    | destroyed     | -

#### 计算属性 && Methods && watch

计算属性                 | Methods
-------------------- | ---------
只有在它的相关依赖发生改变时才会重新求值 | 每次访问都重新执行

计算属性                 | watch
-------------------- | ----------------------
可以使用计算属性解决就不使用 watch | 数据变动后，有必要进行进一步的操作的时候使用

- get && set

### componentConfig

字段       | more
-------- | ---------------------------
name     | -
props    | 接受父组件传来的数据
data     | 数据（必须是一个 function,内部返回数据对象）
template | 模板
model    | 双向绑定设计中解决 value props 冲突

--------------------------------------------------------------------------------

## 指令列表

分类   | 指令        | more
---- | --------- | ---------------------------------------------------
插值   | v-bind    | 绑定数据到 DOM，简写形式 :href=''
～    | v-model   | 实现表单输入和应用状态之间的双向绑定
～    | v-once    | 执行一次性地插值，当数据改变时，插值处的内容不会更新
～    | v-html    | 插入 HTML
条件渲染 | v-if      | -
～    | v-else-if | 充当 v-if 的"else-if 块"。可以链式地使用多次
～    | v-else    | v-else 元素必须紧跟在 v-if 或者 v-else-if 元素的后面----否则它将不会被识别
～    | v-show    | 元素始终会被渲染并保留在 DOM 中。v-show 是简单地切换元素的 CSS 属性 display
列表渲染 | v-for     | 绑定数组到 DOM
绑定事件 | v-on      | 绑定一个事件监听器，简写形式 @click=''

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
{{ message／capitalize }}            | ~
{{ message／filterA／filterB }}       | 串联的过滤器
{{ message／filterA('arg1', arg2) }} | 接受参数的过滤器

### Class 与 Style 绑定

示例                                                               | more
---------------------------------------------------------------- | -----------------------
v-bind:class="{ active: isActive }"                              | 对象
v-bind:class="{ active: isActive, 'text-danger': hasError }"     | cl用引号包裹起来ass类名有连字符的时候需要
v-bind:class="[isActive ? activeClass : '', errorClass]"         | 数组
v-bind:class="[{ active: isActive }, errorClass]"                | 数组与对象并用
v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }" | 对象
v-bind:style="[baseStyles, overridingStyles]"                    | 数组中包含多个对象

## 组件
