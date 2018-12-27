# [screen](https://www.electronjs.cn/docs/api/screen)

> 检索有关屏幕大小、显示器、光标位置等的信息

## api 列表

| api                                  | more                                                    |
| ------------------------------------ | ------------------------------------------------------- |
| screen.getCursorScreenPoint()        | 当前鼠标的绝对位置。                                    |
| screen.getPrimaryDisplay()           | 返回主窗口Display                                       |
| screen.getAllDisplays()              | 返回一个窗口数组Display[]，表示当前可用的窗口。         |
| screen.getDisplayNearestPoint(point) | 返回离指定点最近的一个窗口Display                       |
| screen.getDisplayMatching(rect)      | 返回离指定的图形最密切相交一个窗口Display               |
| screen.screenToDipPoint(point)       | Converts a screen physical point to a screen DIP point. |
| screen.dipToScreenPoint(point)       | Converts a screen DIP point to a screen physical point. |
| screen.screenToDipRect(window, rect) | Converts a screen physical rect to a screen DIP rect.   |
| screen.dipToScreenRect(window, rect) | Converts a screen DIP rect to a screen physical rect    |

## 事件列表

| event                   | more                                    |
| ----------------------- | --------------------------------------- |
| display-added           | 当新的窗口newDisplay被添加的时候触发    |
| display-removed         | 当旧的窗口oldDisplay被移除的时候触发    |
| display-metrics-changed | 当display中的一个或多个值发生改变时发出 |