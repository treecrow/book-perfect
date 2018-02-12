# JSDoc

## 相关文档

* [JSDoc](http://www.css88.com/doc/jsdoc/index.html)

## 块标签

| 标签                              | 含义                                                                |
| --------------------------------- | ------------------------------------------------------------------- |
| @abstract / @virtual              | 该成员（一般指父类的方法）必须在继承的子类中实现（或重写）          |
| @access                           | 指定该成员的访问级别（私有 private，公共 public，或保护 protected） |
| @alias                            | 标记成员有一个别名                                                  |
| @augments                         | 指名这个子类继承至哪个父类，后面需要加父类名                        |
| @author                           | 指定项目的作者                                                      |
| @borrows                          | 这个对象使用另一个对象的某些东西                                    |
| @callback                         | 描述一个回调函数                                                    |
| @class / @constructor             | 此函数旨在需要使用"new"关键字调用，即构造函数                       |
| @classdesc                        | 使用后面的文字来描述整个类                                          |
| @constant                         | 记录一个对象作为一个常量                                            |
| @constructs                       | 这个函数成员将成为类的构造函数                                      |
| @copyright                        | 描述一些版权信息                                                    |
| @default                          | 记录默认值                                                          |
| @deprecated                       | 说明这已不再是首选方法                                              |
| @description                      | 描述一个标识                                                        |
| @enum                             | 描述一个相关属性的集合                                              |
| @event                            | 事件                                                                |
| @example                          | 提供一个如何使用描述项的例子                                        |
| @exports                          | 标识一个由 JavaScript 模块导出的成员                                |
| @external                         | 外部组件                                                            |
| @file / @fileoverview / @overview | 描述一个文件                                                        |
| @fires / @emits                   | 描述事件这个方法可能会触发                                          |
| @function / @func / @method       | 描述一个函数或方法                                                  |
| @global                           | 记录一个全局对象                                                    |
| @ignore                           | 忽略文档中的一个标识                                                |
| @implements                       | 这个标识实现一个接口                                                |
| @inheritdoc                       | 指明这个标识应继承其父类的文档                                      |
| @inner                            | 描述一个内部对象                                                    |
| @instance                         | 记录一个实例成员                                                    |
| @interface                        | 这是别人可以实现的一个接口                                          |
| @kind                             | 标识的类型                                                          |
| @lends                            | 将一个字面量对象的所有属性标记为某个标识符（类或模块）的成员        |
| @license                          | 标识你的代码采用何种软件许可协议                                    |
| @listens                          | 列出一个标识的监听事件                                              |
| @member / @var                    | 记录一个成员                                                        |
| @memberof                         | 标明这个标识属于哪个父级标识                                        |
| @mixes                            | 此对象混入了另一个对象中的所有成员                                  |
| @mixin                            | 记录一个 mixin（混入）对象                                          |
| @module                           | 模块                                                                |
| @name                             | 记录一个对象的名称                                                  |
| @namespace                        | 命名空间                                                            |
| @override                         | 指明一个标识符覆盖其父类同名的标识符                                |
| @param / @arg / @argument         | 记录传递给一个函数的参数                                            |
| @private                          | 标记为私有                                                          |
| @property                         | 记录一个对象的属性                                                  |
| @protected                        | 这个标识是受保护的                                                  |
| @public                           | 标记为公开的                                                        |
| @readonly                         | 标记为只读的                                                        |
| @requires                         | 这个文件需要一个 JavaScript 模块                                    |
| @returns                          | 记录一个函数的返回值                                                |
| @see                              | 更多详细信息请参阅其他一些文档                                      |
| @since                            | 此功能何时被添加进来的                                              |
| @static                           | 记录一个静态成员                                                    |
| @summary                          | 完整描述的一个简写版本                                              |
| @this                             | this 关键字的指向                                                   |
| @throws                           | 说明可能会被抛出什么样的错误                                        |
| @todo                             | 记录一个将要完成的任务                                              |
| @tutorial                         | 插入一个链接到包含教程文件                                          |
| @type                             | 类型                                                                |
| @typedef                          | 记录一个自定义的类型                                                |
| @variation                        | 区分具有相同名称的不同的对象                                        |
| @version                          | 描述版本信息                                                        |

## 内联标签

| 标签      | 含义                     |
| --------- | ------------------------ |
| @link     | 链接到文档中的另一个项目 |
| @tutorial | 链接到一个教程           |

## jsdoc 命令行

| 选项                              | 描述                                                                                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -a <value>, --access <value>      | 只显示特定 access 方法属性的标识符： private, protected, public, or undefined, 或者 all（表示所有的访问级别）。默认情况下， 显示除 private 标识符以外的所有标识符。 |
| -c <value>, --configure <value>   | JSDoc 配置文件的路径。默认为安装 JSDoc 目录下的 conf.json 或 conf.json.EXAMPLE。                                                                                    |
| -d <value>, --destination <value> | 输出生成文档的文件夹路径。JSDoc 内置的 Haruki 模板，使用 console 将数据转储到控制台。默认为./out。                                                                  |
| --debug                           | 打印日志信息，可以帮助调试 JSDoc 本身的问题。                                                                                                                       |
| -e <value>, --encoding <value>    | 当 JSDoc 阅读源代码时假定使用这个编码，默认为 utf8。                                                                                                                |
| -h, --help                        | 显示 JSDoc 的命令行选项的信息，然后退出。                                                                                                                           |
| --match <value>                   | 只有运行测试，其名称中包含 value。                                                                                                                                  |
| --nocolor                         | 当运行测试时，在控制台输出信息不要使用的颜色。在 Windows 中，这个选项是默认启用的。                                                                                 |
| -p, --private                     | 将标记有[@private 标签][tags-private.md]的标识符也生成到文档中。默认情况下，不包括私有标识符。                                                                      |
| -P, --package                     | 包含项目名称，版本，和其他细节的 package.json 文件。默认为在源路径中找到的第一个 package.json 文件。                                                                |
| --pedantic                        | 将错误视为致命错误，将警告视为错误。默认为 false。                                                                                                                  |
| -q <value>, --query <value>       | 一个查询字符串用来解析和存储到全局变量 env.opts.query 中。示例：foo=bar&baz=true。                                                                                  |
| -r, --recurse                     | 扫描源文件和导览时递归到子目录。                                                                                                                                    |
| -R, --readme                      | 用来包含到生成文档的 README.md 文件。默认为在源路径中找到的第一 README.md 文件。                                                                                    |
| -t <value>, --template <value>    | 用于生成输出文档的模板的路径。默认为 templates/default，JSDoc 内置的默认模板。                                                                                      |
| -T, --test                        | 运行 JSDoc 的测试套件，并把结果打印到控制台。                                                                                                                       |
| -u <value>, --tutorials <value>   | 导览路径，JSDoc 要搜索的目录。如果省略，将不生成导览页。查看导览说明，以了解更多信息。                                                                              |
| -v, --version                     | 显示 JSDoc 的版本号，然后退出。                                                                                                                                     |
| --verbose                         | 日志的详细信息到控制台 JSDoc 运行。默认为 false。                                                                                                                   |
| -X, --explain                     | 以 JSON 格式转储所有的 doclet 到控制台，然后退出。                                                                                                                  |

## 名称路径

| 路径                         | more     |
| ---------------------------- | -------- |
| myFunction                   | -        |
| MyConstructor                | -        |
| MyConstructor#instanceMember | 实例方法 |
| MyConstructor.staticMember   | 静态方法 |
| MyConstructor~innerMember    | 内部函数 |
