# mocha

## 相关文档

- [测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

## 命令行

命令                                        | more
----------------------------------------- | -------------------------------------------------
mocha                                     | 运行当前目录test目录下的第一层*.js文件
mocha --recursive                         | 运行当前目录test目录下的所有*.js文件
mocha spec/{my,awesome}.js                | 命令行指定测试脚本时，可以使用通配符，同时指定多个文件
mocha test/unit/*.js                      | 命令行指定测试脚本时，可以使用通配符，同时指定多个文件
mocha --help, -h                          | 查看Mocha的所有命令行参数
mocha --reporter, -R                      | 指定测试报告的格式
mocha --reporters                         | 显示所有内置的报告格式
mocha --growl, -G                         | 打开--growl参数，就会将测试结果在桌面显示
mocha --watch，-w                          | 用来监视指定的测试脚本。只要测试脚本有变化，就会自动运行Mocha
mocha --bail, -b                          | 指定只要有一个测试用例没有通过，就停止执行后面的测试用例
mocha --grep, -g                          | 用于搜索测试用例的名称（即it块的第一个参数），然后只执行匹配的测试用例
mocha --invert, -i                        | 表示只运行不符合条件的测试脚本，必须与--grep参数配合使用
mocha --compilers js:babel-core/register  | 使用--compilers参数指定测试脚本的转码器
mocha --timeout, -t                       | 改变默认的超时设置(Mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错)
mocha --slow, -s                          | Mocha默认会高亮显示超过75毫秒的测试用例，可以用-s或--slow调整这个参数
mocha init test                           | 浏览器测试
mocha --harmony<_classes,_generators,...> | all node --harmony* flags are available

## 配置文件mocha.opts

> Mocha允许在test目录下面，放置配置文件mocha.opts，把命令行参数写在里面

## 异步测试

## 钩子

钩子         | more
---------- | ----
before     | -
beforeEach | -
afterEach  | -
after      | -

## 测试用例管理

- only---只运行某个测试套件或测试用例
- skip---跳过指定的测试套件或测试用例

## 生成规格文件

```
mocha --recursive -R markdown > spec.md
mocha --recursive -R doc > spec.html
```
