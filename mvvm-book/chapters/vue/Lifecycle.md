# Lifecycle

- beforeCreate
  > 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
- created
  > 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
- beforeMount
  > 在挂载开始之前被调用：相关的 render 函数首次被调用
- mounted
  > el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
- beforeUpdate
  > 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程
- updated
  > 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
- activated
  > keep-alive 组件激活时调用
- deactivated
  > keep-alive 组件停用时调用
- beforeDestroy
  > 实例销毁之前调用。在这一步，实例仍然完全可用
- destroyed
  > Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
