# delegates

> 没有看明白，感觉是将一大堆属性、方法委托在一个临时的对象上

## 方法列表

方法                                            | more
--------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------
Delegate(proto, prop)                         | Creates a delegator instance used to configure using the prop on the given proto object
Delegate.auto(proto, targetProto, targetProp) | Delegates getters, setters, values, and methods from targetProto to proto
Delegate#method(name)                         | Allows the given method name to be accessed on the host.
Delegate#getter(name)                         | Creates a "getter" for the property with the given name on the delegated object
Delegate#setter(name)                         | Creates a "setter" for the property with the given name on the delegated object
Delegate#access(name)                         | Creates an "accessor" (both getter and setter) for the property with the given name on the delegated object
Delegate#fluent(name)                         | A unique type of "accessor" that works for a "fluent" API. When called as a getter, the method returns the expected value
