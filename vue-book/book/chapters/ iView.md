# [iview](https://www.iviewui.com/)

## 相关文档

## scripts

| script      | 解释 |
| ----------- | ---- |
| dev         | -    |
| dev:s       | -    |
| dist:style  | -    |
| dist:dev    | -    |
| dist:prod   | -    |
| dist:locale | -    |
| dist        | -    |
| lint        | -    |
| unit        | -    |
| test        | -    |
| prepare     | -    |

## [github fork 之后与源项目保持同步](https://zhuanlan.zhihu.com/p/28348159)

```bash
# 添加远程仓库
git remote add iview https://github.com/iview/iview.git

# 创建新分支(用于拉去最新 iview 源码)
git branch iview2.0

# 拉取 iview 对应代码到 iview2.0 分支
git pull iview 2.0:iview2.0

# iview2.0 分支合并到开发分支（treecrow、liuchong、huaxi、jiana etc）,或者合并到 master
# ...

# 解决冲突、提交
# ...
```

## 组件整理

| 组件                          | alien             | 来源           | 解释        |
| ----------------------------- | ----------------- | -------------- | ----------- |
| Affix                         | -                 | -              | 图钉        |
| Alert                         | -                 | -              | 警告提示    |
| AutoComplete                  | -                 | -              | 自动完成    |
| Avatar                        | -                 | -              | 头像        |
| BackTop                       | -                 | -              | 返回顶部    |
| Badge                         | -                 | -              | 徽标数      |
| Breadcrumb                    | -                 | -              | 面包屑      |
| BreadcrumbItem                | -                 | Breadcrumb     | ~           |
| Button                        | iButton           | -              | 按钮        |
| ButtonGroup                   | -                 | Button.Group   | ~           |
| Card                          | -                 | -              | 卡片        |
| Carousel                      | -                 | -              | 轮播图      |
| CarouselItem                  | -                 | Carousel.Item  | ~           |
| Cascader                      | -                 | -              | 级联选择    |
| Checkbox                      | -                 | -              | 多选框      |
| CheckboxGroup                 | -                 | Checkbox.Group | ~           |
| Circle                        | iCircle           | -              | 进度环      |
| Collapse                      | -                 | -              | 折叠面板    |
| Panel                         | -                 | Collapse.Panel | ~           |
| ColorPicker                   | -                 | -              | 颜色选择器  |
| DatePicker                    | -                 | -              | 日期选择器  |
| Dropdown                      | -                 | -              | 下拉菜单    |
| DropdownItem                  | -                 | Dropdown.Item  | ~           |
| DropdownMenu                  | -                 | Dropdown.Menu  | ~           |
| Form                          | iForm             | -              | 表单        |
| FormItem                      | -                 | Form.Item      | ~           |
| Icon                          | -                 | -              | 图标        |
| Input                         | iInput            | -              | 输入框      |
| InputNumber                   | -                 | -              | 数字输入框  |
| Scroll                        | -                 | -              | 无限滚动    |
| Layout                        | -                 | -              | Layout 布局 |
| Header                        | iHeader           | -              | ~           |
| Sider                         | -                 | -              | ~           |
| Content                       | iContent          | -              | ~           |
| Footer                        | iFooter           | -              | ~           |
| LoadingBar                    | -                 | -              | 加载进度条  |
| Menu                          | iMenu             | -              | 导航菜单    |
| MenuGroup                     | -                 | Menu.Group     | ~           |
| MenuItem                      | -                 | Menu.Item      | ~           |
| Message                       | -                 | -              | 全局提示    |
| Modal                         | -                 | -              | 对话框      |
| Notice                        | -                 | -              | 通知提醒    |
| Page                          | -                 | -              | 分页        |
| Poptip                        | -                 | -              | 气泡提示    |
| Progress                      | iProgress         | -              | 进度条      |
| Radio                         | -                 | -              | 单选框      |
| RadioGroup                    | -                 | Radio.Group    | ~           |
| Rate                          | -                 | -              | 评分        |
| Slider                        | -                 | -              | 滑块        |
| Spin                          | -                 | -              | 加载中      |
| Steps                         | -                 | -              | 步骤条      |
| Step                          | -                 | Steps.Step     | ~           |
| Switch                        | iSwitch(只有异名) | -              | 开关        |
| Table                         | iTable(只有异名)  | -              | 表格        |
| Tabs                          | -                 | -              | 标签页      |
| TabPane                       | -                 | Tabs.Pane      | ~           |
| Tag                           | -                 | -              | 标签        |
| Timeline                      | -                 | -              | 时间轴      |
| TimelineItem                  | -                 | Timeline.Item  | ~           |
| TimePicker                    | -                 | -              | 时间选择器  |
| Tooltip                       | -                 | -              | 文字提示    |
| Transfer                      | -                 | -              | 穿梭框      |
| Tree                          | -                 | -              | 树形控件    |
| Upload                        | -                 | -              | 上传        |
| {Row, Col}                    | iCol              | grid           | Grid 栅格   |
| {Select, Option, OptionGroup} | iSelect,iOption   | select         | 选择器      |
| locale                        | -                 | -              | -           |