# delegates

> 没有看明白，感觉是将一大堆属性、方法委托在一个临时的对象上

## 方法列表

方法                                            | more
--------------------------------------------- | -----------------------------
Delegate(proto, target)                       | 确定委托实例（proto）和被委托对象(target)
Delegate.auto(proto, targetProto, targetProp) | github官方库上有这个方法，npm安装的模块没有此方法
delegate.fluent(name)                         | 委托静态属性（不需要与作用域绑定）
delegate.method(name)                         | 方法委托
delegate.getter(name)                         | 委托 属性的 get() 方法
delegate.setter(name)                         | 委托 属性的 set() 方法
delegate.access(name)                         | 整合某个属性的委托(get && set)
