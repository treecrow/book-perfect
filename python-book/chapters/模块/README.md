# 模块

## 引入方式

```python
# 方式1
from some_module import foo
foo()

# 方式2
import some_module as sm
sm.foo()
```

## 模块的搜索路径

> 打印 sys.path 可以获得

| 描述           | path                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------- |
| undefind       | /usr/local/Cellar/python/3.7.3/Frameworks/Python.framework/Versions/3.7/lib/python37.zip            |
| 内置模块       | /usr/local/Cellar/python/3.7.3/Frameworks/Python.framework/Versions/3.7/lib/python3.7               |
| cpython        | /usr/local/Cellar/python/3.7.3/Frameworks/Python.framework/Versions/3.7/lib/python3.7/lib-dynload   |
| 不在搜索路径中 | /usr/local/Cellar/python/3.7.3/Frameworks/Python.framework/Versions/3.7/lib/python3.7/site-packages |
| 个人模块       | /Users/zhihui/Library/Python/3.7/lib/python/site-packages                                           |
| 通用模块       | /usr/local/lib/python3.7/site-packages                                                              |
