# [Intl](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl)

> Intl 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比、数字格式化，和日期时间格式化

## api list

| class | api                               | more                                                                                                         |
| ----- | --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 属性  | Intl.Collator                     | collators 的构造函数，用于启用对语言敏感的字符串比较的对象。                                                 |
| ^     | Intl.DateTimeFormat               | 用于启用语言敏感的日期和时间格式的对象的构造函数。                                                           |
| ^     | Intl.ListFormat                   | Constructor for objects that enable language-sensitive list formatting.                                      |
| ^     | Intl.NumberFormat                 | 用于启用语言敏感数字格式的对象的构造函数。                                                                   |
| ^     | Intl.PluralRules                  | 用于启用多种敏感格式和多种语言语言规则的对象的构造函数。                                                     |
| ^     | Intl.RelativeTimeFormat           | Constructor for objects that enable language-sensitive relative time formatting.                             |
| 方法  | Intl.getCanonicalLocales(locales) | 返回一个数组，数组包含规范的区域语言代码，重复的元素将会被去除，每一个元素都会被验证为格式有效的区域语言代码 |

## [Collator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator)

> 用于语言敏感字符串比较的 collators 构造函数

| class | api                                                  | more                                                                               |
| ----- | ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 创建  | new Intl.Collator([locales[, options]])              | -                                                                                  |
| ^     | Intl.Collator.call(this[, locales[, options]])       | -                                                                                  |
| 属性  | Intl.Collator.prototype                              | 表示 Intl.Collator 构造函数的原型对象                                              |
| 方法  | Intl.Collator.prototype.compare(string1, string2)    | 根据此 Collator 对象的排序顺序比较两个字符串。                                     |
| ^     | Intl.Collator.prototype.resolvedOptions()            | 返回一个新对象，其属性反映在此 Collator 对象初始化期间计算的区域设置和排序规则选项 |
| ^     | Intl.Collator.supportedLocalesOf(locales[, options]) | 返回一个数组，其中包含排序规则所支持的语言环境，而不必回退到运行时的默认语言环境。 |

## [DateTimeFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)

> 根据语言来格式化日期和时间的对象的构造器

| class | api                                                        | more                                                                                               |
| ----- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 创建  | new Intl.DateTimeFormat([locales[, options]])              | -                                                                                                  |
| ^     | Intl.DateTimeFormat.call(this[, locales[, options]])       | -                                                                                                  |
| 属性  | Intl.DateTimeFormat.prototype                              | 表示 Intl.DateTimeFormat 构造函数的原型对象                                                        |
| 方法  | Intl.DateTimeFormat.prototype.formatToParts(date)          | 允许 DateTimeFormat 格式化程序生成的字符串的区域设置感知格式。                                     |
| ^     | Intl.DateTimeFormat.prototype.resolvedOptions()            | 返回一个新对象，其属性反映了在此 DateTimeFormat 对象初始化期间计算的区域设置和日期和时间格式选项。 |
| ^     | Intl.DateTimeFormat.supportedLocalesOf(locales[, options]) | 返回一个数组，其中包含日期和时间格式支持的所提供语言环境的数组，而不必回退到运行时的默认语言环境。 |

## [ListFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ListFormat)

> Intl.ListFormat 是一个语言相关的列表格式化构造器

| class | api                                                    | more                                                                                               |
| ----- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 创建  | new Intl.ListFormat([locales[, options]])              | -                                                                                                  |
| 属性  | Intl.ListFormat.prototype                              | 表示 Intl.ListFormat 构造函数的原型对象                                                            |
| 方法  | Intl.ListFormat.supportedLocalesOf(locales[, options]) | 返回一个数组，其中包含日期和时间格式支持的所提供语言环境的数组，而不必回退到运行时的默认语言环境。 |
| ^     | Intl​.ListFormat.prototype​.format([ list ])           | 返回一个字符串，其中包含列表的特定于语言的表示形式。                                               |
| ^     | Intl​.List​Format​.prototype​.formatToParts()          | -                                                                                                  |
| ^     | Intl​.List​Format​.prototype​.resolvedOptions          | -                                                                                                  |

## [NumberFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)

> Intl.NumberFormat 是对语言敏感的格式化数字类的构造器类

| class | api                                                      | more                                                                                         |
| ----- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 创建  | new Intl.NumberFormat([locales[, options]])              | -                                                                                            |
| ^     | Intl.NumberFormat.call(this[, locales[, options]])       | -                                                                                            |
| 属性  | Intl.NumberFormat.prototype                              | 表示 Intl.NumberFormat 构造函数的原型对象                                                    |
| ^     | Intl.NumberFormat.prototype.format                       | 返回一个根据 NumberFormat 对象的语言环境和格式化选项，来格式化一个数字的 getter 函数         |
| 方法  | Intl.NumberFormat.prototype.formatToParts(number)        | 允许 NumberTimeFormat 格式化程序生成的字符串的区域设置感知格式。                             |
| ^     | Intl.NumberFormat.prototype.resolvedOptions()            | 返回一个新对象，其属性反映了在此 NumberFormat 对象初始化期间计算的区域设置和数字格式选项。   |
| ^     | Intl.NumberFormat.supportedLocalesOf(locales[, options]) | 返回一个数组，其中包含数字格式支持的所提供语言环境的数组，而不必回退到运行时的默认语言环境。 |

## [PluralRules](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/PluralRules)

| class | api                                                     | more                                                                                              |
| ----- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 创建  | new Intl.PluralRules([locales[, options]])              | -                                                                                                 |
| ^     | Intl.PluralRules.call(this[, locales[, options]])       | -                                                                                                 |
| 属性  | Intl.PluralRules.prototype                              | 表示 Intl.PluralRules 构造函数的原型对象                                                          |
| 方法  | Intl.PluralRules.prototype.resolvedOptions()            | 返回一个新对象，该对象具有反映语言环境的属性以及在此 PluralRules 对象初始化期间计算的多个格式选项 |
| ^     | Intl.PluralRules.select(number)                         | 返回一个 String，指示用于区域设置感知格式的多个规则。                                             |
| ^     | Intl.PluralRules.supportedLocalesOf(locales[, options]) | 回一个数组，该数组包含多个格式支持的提供的语言环境，而不必回退到运行时的默认语言环境。            |

## [RelativeTimeFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)

| class | api                                                            | more                                                                                                 |
| ----- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 创建  | new Intl.RelativeTimeFormat([locales[, options]])              | -                                                                                                    |
| 属性  | Intl.RelativeTimeFormat.prototype                              | 表示 Intl.RelativeTimeFormat 构造函数的原型对象。                                                    |
| 方法  | Intl.RelativeTimeFormat.prototype.format(value, unit)          | 根据 value 和 unit 的设置格式该的区域和选项 RelativeTimeFormat 对象。                                |
| ^     | Intl.RelativeTimeFormat.prototype.formatToParts(value, unit)   | 返回一个 Array 对象，表示可用于自定义区域设置感知格式的部分中的相对时间格式。                        |
| ^     | Intl.RelativeTimeFormat.prototype.resolvedOptions()            | 返回一个新对象，其属性反映了在此 RelativeTimeFormat 对象初始化期间计算的区域设置和相对时间格式选项。 |
| ^     | Intl.RelativeTimeFormat.supportedLocalesOf(locales[, options]) | 返回一个数组，其中包含日期和时间格式支持的所提供语言环境的数组，而不必回退到运行时的默认语言环境。   |
