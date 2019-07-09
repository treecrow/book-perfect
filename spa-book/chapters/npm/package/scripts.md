# scripts

- [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

## 执行顺序

| 命令 | more                                 |
| ---- | ------------------------------------ |
| &    | 并行执行                             |
| &&   | 链式任务（一个任务接着一个任务运行） |

## 钩子

> `npm run build`=`npm run prebuild && npm run build && npm run postbuild`(如果 build 有 pre 和 post 两个钩子)
