# fullcalendar

## api列表

| api                                                     | more                                                                |
|---------------------------------------------------------|---------------------------------------------------------------------|
| $el.fullCalendar(ptions)                                | -                                                                   |
| $el.fullCalendar('next')                                | force to the calendar to move to the next month/week/day.           |
| $el.fullCalendar('option', 'height', 700)               | 动态设置 option                                                         |
| $el.fullCalendar( 'render' )                            | Immediately forces the calendar to render and/or readjusts its size |
| $el.fullCalendar('destroy')                             | Removes elements, events handlers, and internal data.               |
| $el.fullCalendar( 'getView' )                           | 获取 view 对象                                                          |
| $el.fullCalendar( 'changeView', viewName, dateOrRange ) | 切换 view                                                             |
| $el.fullCalendar( 'prev' )                              | -                                                                   |
| $el.fullCalendar( 'next' )                              | -                                                                   |
| $el.fullCalendar( 'prevYear' )                          | -                                                                   |
| $el.fullCalendar( 'nextYear' )                          | -                                                                   |
| $el.fullCalendar( 'today' )                             | -                                                                   |
| $el.fullCalendar( 'gotoDate',date )                     | -                                                                   |
| $el.fullCalendar( 'incrementDate',duration )            | 前进／后退指定长度的时间                                                        |
| $el.fullCalendar( 'getDate' )                           | Returns a Moment for the current date of the calendar               |
| $el.fullCalendar( 'xxx' )                               | -                                                                   |
| $el.fullCalendar( 'xxx' )                               | -                                                                   |
| $el.fullCalendar( 'xxx' )                               | -                                                                   |

## options 列表

| 分类                      | 选项                          | more                                                                                                      |
|-------------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------|
| General Display         | -                           | -                                                                                                         |
| ~                       | header                      | Defines the buttons and title at the top of the calendar                                                  |
| ~                       | footer                      | Defines the buttons and title at the top of the calendar                                                  |
| ~                       | customButtons               | 自定义按钮                                                                                                     |
| ~                       | themeSystem                 | Renders the calendar with a given theme system                                                            |
| ~                       | buttonIcons                 | themeSystem 不设置时有效                                                                                        |
| ~                       | themeButtonIcons            | themeSystem 设置为 jquery-ui 时有效                                                                             |
| ~                       | bootstrapGlyphicons         | themeSystem 设置为 bootstrap3 时有效                                                                            |
| ~                       | firstDay                    | 一周的第一天是周几？                                                                                                |
| ~                       | isRTL                       | 从右到左展示日历？                                                                                                 |
| ~                       | weekends                    | 是否包含周末？                                                                                                   |
| ~                       | hiddenDays                  | 隐藏没有的某几天                                                                                                  |
| ~                       | columnHeader                | whether the day headers should appear.                                                                    |
| ~                       | fixedWeekCount              | 是否每月显示六周？(或者自适应)                                                                                          |
| ~                       | weekNumbers                 | 是否显示周号？                                                                                                   |
| ~                       | weekNumbersWithinDays       | 周号显示位置是否在day方格内？                                                                                          |
| ~                       | weekNumberCalculation       | 计算周号的标准                                                                                                   |
| ~                       | businessHours               | 强调工作时间                                                                                                    |
| ~                       | showNonCurrentDates         | 是否显示非本月的日期？测试无效                                                                                           |
| ~                       | height                      | 设置日历卡高度                                                                                                   |
| ~                       | contentHeight               | 日历卡内容区域高度                                                                                                 |
| ~                       | aspectRatio                 | 设置日历卡宽高比                                                                                                  |
| ~                       | handleWindowResize          | 是否自动按宽高比调整日历卡尺寸                                                                                           |
| ~                       | windowResizeDelay           | 调整日历卡尺寸的延迟时间                                                                                              |
| ~                       | eventLimit                  | 每天事件数量是否有限制，限制的个数为多少                                                                                      |
| ~                       | eventLimitClick             | 有事件数量限制，并且已经超出限制的日期，点击more之后的行为                                                                           |
| ~                       | viewRender(view,element)    | Triggered when a new date-range is rendered, or when the view type switches                               |
| ~                       | viewDestroy(view,element)   | Triggered when a rendered date-range needs to be torn down                                                |
| ~                       | dayRender(date,cell)        | A hook for modifying a day cell                                                                           |
| ~                       | windowResize(view)          | Triggered after the calendar's dimensions have been changed due to the browser window being resized.      |
| Timezone                | -                           | -                                                                                                         |
| ~                       | timezone                    | 确定日历依据时间的标准                                                                                               |
| ~                       | now                         | 明确的设置今天的日期                                                                                                |
| Views                   | -                           | -                                                                                                         |
| ~                       | defaultView                 | 默认view,默认为 month                                                                                          |
| ~                       | views                       | View-Specific Options                                                                                     |
| Agenda Options          | -                           | -                                                                                                         |
| List View               | -                           | -                                                                                                         |
| Current Date            | -                           | -                                                                                                         |
| ~                       | defaultDate                 | 渲染日历依据的时间点                                                                                                |
| ~                       | nowIndicator                | 是否显示当前时间指示戳                                                                                               |
| ~                       | visibleRange                | 在 view 上设置一个时间范围                                                                                          |
| ~                       | validRange                  | Limits which dates the user can navigate to and where events can go                                       |
| ~                       | dateIncrement               | How far into the future/past the calendar navigates when prev/next is executed                            |
| ~                       | dateAlignment               | Determines the first visible day for a Custom or Generic view                                             |
| ~                       | duration                    | Sets the exact duration of a Custom or Generic view                                                       |
| ~                       | dayCount                    | Sets the exact number of days displayed in a Custom or Generic view, regardless of weekends or hiddenDays |
| Text/Time Customization | -                           | -                                                                                                         |
| ~                       | locale                      | 设置语言和本地化选项                                                                                                |
| ~                       | timeFormat                  | Determines the time-text that will be displayed on each event                                             |
| ~                       | columnFormat                | 定义日历卡头星期显示形式                                                                                              |
| ~                       | titleFormat                 | 定义 title 显示形式                                                                                             |
| ~                       | buttonText                  | 自定义按钮文本                                                                                                   |
| ~                       | monthNames                  | 设置月份文本                                                                                                    |
| ~                       | monthNamesShort             | 设置月份排序文本(1年的第一个月)                                                                                         |
| ~                       | dayNames                    | 设置星期文本                                                                                                    |
| ~                       | dayNamesShort               | 设置星期排序文本                                                                                                  |
| ~                       | weekNumberTitle             | The heading text for week numbers                                                                         |
| ~                       | displayEventTime            | 是否显示事件时间                                                                                                  |
| ~                       | displayEventEnd             | 是否显示事件结束时间                                                                                                |
| ~                       | eventLimitText              | 当有事件条数限制的时候，超出限制显示的文本内容                                                                                   |
| ~                       | dayPopoverFormat            | Determines the date format of title of the popover created by the eventLimitClick option.                 |
| Clicking & Hovering     | -                           | -                                                                                                         |
| ~                       | navLinks                    | -                                                                                                         |
| ~                       | navLinkDayClick (callback)  | -                                                                                                         |
| ~                       | navLinkWeekClick (callback) | -                                                                                                         |
| ~                       | dayClick (callback)         | -                                                                                                         |
| ~                       | eventClick (callback)       | -                                                                                                         |
| ~                       | eventMouseover (callback)   | -                                                                                                         |
| ~                       | eventMouseout (callback)    | -                                                                                                         |

### header 元素列表

| 元素         | more     |
|------------|----------|
| title      | 当前 年／月／日 |
| prev       | 上一月／日／天  |
| next       | 下一月／日／天  |
| prevYear   | 上一年      |
| nextYear   | 下一年      |
| today      | 今天       |
| month      | 切换到月份展示页 |
| agendaWeek | 切换到周展示页  |
| agendaDay  | 切换到天展示页  |

### 自定义按钮

| 字段                 | more               |
|--------------------|--------------------|
| text               | 按钮文本               |
| click              | 按钮点击后的回调           |
| icon               | buttonIcons        |
| themeIcon          | themeButtonIcons   |
| bootstrapGlyphicon | bootstrapGlyphicon |

### themeSystem

| 字段         | more |
|------------|------|
| standard   | -    |
| bootstrap3 | -    |
| jquery-ui  | -    |

## view 列表

| view       | more                    |
|------------|-------------------------|
| month      | -                       |
| basicWeek  | -                       |
| basicDay   | -                       |
| agendaWeek | -                       |
| agendaDay  | -                       |
| listYear   | -                       |
| listMonth  | -                       |
| listWeek   | -                       |
| listDay    | -                       |
| agenda     | agendaWeek && agendaDay |
| basic      | basicWeek && basicDay   |
| week       | basicWeek && agendaWeek |
| day        | basicDay && agendaDay   |

### View Object

| 字段            | more |
|---------------|------|
| name          | -    |
| title         | -    |
| start         | -    |
| end           | -    |
| intervalStart | -    |
| intervalEnd   | -    |

## callbacks(options) 列表

| callback | more |
|----------|------|
| dayClick | -    |

