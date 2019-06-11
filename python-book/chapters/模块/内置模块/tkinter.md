# [tkinter](https://docs.python.org/zh-cn/3/library/tkinter.html)

> The tkinter package ("Tk interface") is the standard Python interface to the Tk GUI toolkit

- [基于 tkinter 模块的 GUI](https://github.com/jackfrued/Python-100-Days/blob/master/Day01-15/10.%E5%9B%BE%E5%BD%A2%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2%E5%92%8C%E6%B8%B8%E6%88%8F%E5%BC%80%E5%8F%91.md#%E5%9F%BA%E4%BA%8Etkinter%E6%A8%A1%E5%9D%97%E7%9A%84gui)

## api list

| class    | api                  | more                 |
| -------- | -------------------- | -------------------- |
| ~        | tkinter.Frame()      | 创建一个装组件的容器 |
| ~        | tkinter.mainloop()   | 开启主事件循环       |
| top 实例 | tkinter.TK()         | 创建顶层窗口         |
| ~        | top.title()          | 设置窗口标题         |
| ~        | top.geometry()       | 设置窗口大小         |
| ~        | top.wm_attributes()  | -                    |
| 组件     | tkinter.Button()     | 创建按钮对象         |
| ~        | tkinter.Label()      | 创建标签对象         |
| ~        | someComponent.pack() | 放置组件             |
