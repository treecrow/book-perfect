# splitChunks

- [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)
- [一步一步的了解 webpack4 的 splitChunk 插件](https://juejin.im/post/5af1677c6fb9a07ab508dabb)
- [webpack 4 Code Splitting 的 splitChunks 配置探索](https://imweb.io/topic/5b66dd601402769b60847149)

| class       | option                             | 默认值       | more                                                                                                                                                        |
| ----------- | ---------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| splitChunks | -                                  | -            |
| ^           | splitChunks.automaticNameDelimiter | ~            | 抽取出来的文件的自动生成名字的分割符                                                                                                                        |
| ^           | splitChunks.automaticNameMaxLength | 109          | 块名称最大字符数                                                                                                                                            |
| ^           | splitChunks.chunks                 | async        | 指明那些 chunks 需要被优化 initial、async 和 all                                                                                                            |
| ^           | splitChunks.maxAsyncRequests       | 5            | 最大的按需(异步)加载次数，默认为 5                                                                                                                          |
| ^           | splitChunks.maxInitialRequests     | 3            | 最大的初始化加载次数，默认为 3                                                                                                                              |
| ^           | splitChunks.minChunks              | 1            | 在分割之前，这个代码块最小应该被引用的次数（译注：保证代码块复用性，默认配置的策略是不需要多次引用也可以被分割）                                            |
| ^           | splitChunks.minSize                | 30000        | 表示抽取出来的文件在压缩前的最小大小，默认为 30000；                                                                                                        |
| ^           | splitChunks.maxSize                | 0            | 表示抽取出来的文件在压缩前的最大大小，默认为 0，表示不限制最大大小；                                                                                        |
| ^           | splitChunks.name                   | true         | 抽取出来文件的名字，默认为 true，表示自动生成文件名；                                                                                                       |
| ^           | splitChunks.cacheGroups            | -            | 缓存组                                                                                                                                                      |
| cacheGroup  | -                                  | -            | -                                                                                                                                                           |
| ^           | cacheGroup.test                    | 所有 modules | 表示要过滤 modules，默认为所有的 modules，可匹配模块路径或 chunk 名字，当匹配的是 chunk 名字的时候，其里面的所有 modules 都会选中；                         |
| ^           | cacheGroup.priority                | -            | 表示抽取权重，数字越大表示优先级越高。因为一个 module 可能会满足多个 cacheGroups 的条件，那么抽取到哪个就由权重最高的说了算                                 |
| ^           | cacheGroup.reuseExistingChunk      | -            | 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。                                           |
| ^           | cacheGroup.filename                | -            | -                                                                                                                                                           |
| ^           | cacheGroup.enforce                 | false        | 告诉 WebPack 忽略 SplitChunks.MinSize、SplitChunks.MinChunks、SplitChunks.MaxAsyncRequests 和 SplitChunks.MaxInitialRequests 选项，并始终为此缓存组创建块。 |
