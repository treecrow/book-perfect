# [datetime](https://docs.python.org/zh-cn/3/library/datetime.html)

> 提供了可以通过多种方式操作日期和时间的类

## api list

| 类型                    | api                                              | more                                                                                                                                      |
| ----------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| datetime.date           | -                                                | 理想的天真型日期假设公历是永远有效的。属性 : year, month, and day 。                                                                      |
| ~                       | -                                                | -                                                                                                                                         |
| datetime.time           | -                                                | 一个理想的时间独立于任何一天，假设每一天一共有 24*60*60 秒（这里没有"闰秒"的概念）。属性： hour, minute, second, microsecond, 和 tzinfo。 |
| ~                       | -                                                | -                                                                                                                                         |
| datetime.datetime--类   | -                                                | 日期和时间的结合。属性：year, month, day, hour, minute, second, microsecond, and tzinfo.                                                  |
| ~                       | datetime.today()                                 | -                                                                                                                                         |
| ~                       | datetime.now(tz=None)                            | 返回当前本地日期和时间                                                                                                                    |
| ~                       | datetime.utcnow()                                | -                                                                                                                                         |
| ~                       | datetime.fromtimestamp(timestamp, tz=None)       | -                                                                                                                                         |
| ~                       | datetime.utcfromtimestamp(timestamp)             | -                                                                                                                                         |
| ~                       | datetime.fromordinal(ordinal)                    | -                                                                                                                                         |
| ~                       | datetime.combine(date, time, tzinfo=self.tzinfo) | -                                                                                                                                         |
| ~                       | datetime.fromisoformat(date_string)              | -                                                                                                                                         |
| ~                       | datetime.strptime(date_string, format)           | -                                                                                                                                         |
| ~                       | datetime.min                                     | -                                                                                                                                         |
| ~                       | datetime.max                                     | -                                                                                                                                         |
| ~                       | datetime.resolution                              | -                                                                                                                                         |
| datetime.datetime--实例 | datetime.year                                    | -                                                                                                                                         |
| ~                       | datetime.month                                   | -                                                                                                                                         |
| ~                       | datetime.day                                     | -                                                                                                                                         |
| ~                       | datetime.hour                                    | -                                                                                                                                         |
| ~                       | datetime.minute                                  | -                                                                                                                                         |
| ~                       | datetime.second                                  | -                                                                                                                                         |
| ~                       | datetime.microsecond                             | -                                                                                                                                         |
| ~                       | datetime.tzinfo                                  | -                                                                                                                                         |
| ~                       | datetime.fold                                    | -                                                                                                                                         |
| ~                       | datetime.date()                                  | -                                                                                                                                         |
| ~                       | datetime.time()                                  | -                                                                                                                                         |
| ~                       | datetime.timetz()                                | -                                                                                                                                         |
| ~                       | datetime.astimezone(tz=None)                     | -                                                                                                                                         |
| ~                       | datetime.utcoffset()                             | -                                                                                                                                         |
| ~                       | datetime.dst()                                   | -                                                                                                                                         |
| ~                       | datetime.tzname()                                | -                                                                                                                                         |
| ~                       | datetime.timetuple()                             | -                                                                                                                                         |
| ~                       | datetime.utctimetuple()                          | -                                                                                                                                         |
| ~                       | datetime.toordinal()                             | -                                                                                                                                         |
| ~                       | datetime.timestamp()                             | -                                                                                                                                         |
| ~                       | datetime.weekday()                               | -                                                                                                                                         |
| ~                       | datetime.isoweekday()                            | -                                                                                                                                         |
| ~                       | datetime.isocalendar()                           | -                                                                                                                                         |
| ~                       | datetime.isoformat(sep='T', timespec='auto')     | -                                                                                                                                         |
| ~                       | `datetime.__str__()`                             | -                                                                                                                                         |
| ~                       | datetime.ctime()                                 | -                                                                                                                                         |
| ~                       | datetime.strftime(format)                        | 返回表示日期和时间的字符串，由显式格式字符串控制                                                                                          |
| ~                       | `datetime.__format__(format)`                    | -                                                                                                                                         |
| datetime.timedelta      | -                                                | 表示两个 date 对象或者 time 对象,或者 datetime 对象之间的时间间隔，精确到微秒。                                                           |
| ~                       | -                                                | -                                                                                                                                         |
| datetime.tzinfo         | -                                                | 一个描述时区信息的抽象基类。用于给 datetime 类和 time 类提供自定义的时间调整概念（例如，负责时区或者夏令时）。                            |
| ~                       | -                                                | -                                                                                                                                         |
| datetime.timezone       | -                                                | 一个实现了 tzinfo 抽象基类的子类，用于表示相对于 世界标准时间（UTC）的偏移量。                                                            |
| ~                       | -                                                | -                                                                                                                                         |
