# [plugins](https://webpack.js.org/plugins/)

## Internal webpack plugins list

| class                      | plugin                                                                                                                     | more                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| config.mode=="development" | webpack.NamedChunksPlugin                                                                                                  | 把 chunk id 变为一个字符串标识符                                                         |
| ^                          | webpack.NamedModulesPlugin                                                                                                 | 在热加载时直接返回更新文件名，而不是文件的 id                                            |
| config.mode=="production"  | webpack.optimize.FlagDependencyUsagePlugin                                                                                 | 删除无用代码的                                                                           |
| ^                          | [webpack.optimize.FlagIncludedChunksPlugin](https://webpack.js.org/plugins/internal-plugins/#flagincludedchunksplugin)     | 删除无用代码的                                                                           |
| ^                          | [webpack.optimize.ModuleConcatenationPlugin](https://webpack.js.org/plugins/module-concatenation-plugin/)                  | 作用域提升 : [Webpack 3 的新功能：Scope Hoisting](https://zhuanlan.zhihu.com/p/27980441) |
| ^                          | webpack.NoEmitOnErrorsPlugin                                                                                               | 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误                               |
| ^                          | [webpack.optimize.OccurrenceOrderPlugin](https://webpack.js.org/plugins/internal-plugins/#occurrenceorderplugin)           | 按出现顺序排列模块和块                                                                   |
| ^                          | webpack.SideEffectsFlagPlugin                                                                                              | -                                                                                        |
| ===                        | ===                                                                                                                        | ===                                                                                      |
| ^                          | [webpack.DefinePlugin](https://webpack.js.org/plugins/define-plugin/)                                                      | 定义全局变量                                                                             |
| ^                          | [webpack.ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/)                                                    | 自动加载模块，而不必在任何地方导入或需要它们。                                           |
| ^                          | [webpack.HashedModuleIdsPlugin](https://webpack.js.org/plugins/hashed-module-ids-plugin/)                                  | hash 值基于相关模块的路径                                                                |
| ^                          | [webpack.HotModuleReplacementPlugin](https://webpack.js.org/plugins/hot-module-replacement-plugin/)                        | 热重载                                                                                   |
| ^                          | [webpack.SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)                                           | 代码分割,隐式调用，通过 optimization.splitChunks 配置项调用                              |
| ^                          | [webpack.AutomaticPrefetchPlugin](https://webpack.js.org/plugins/automatic-prefetch-plugin/)                               | -                                                                                        |
| ^                          | [webpack.BannerPlugin](https://webpack.js.org/plugins/banner-plugin/)                                                      | -                                                                                        |
| ^                          | [webpack.ContextReplacementPlugin](https://webpack.js.org/plugins/context-replacement-plugin/)                             | -                                                                                        |
| ^                          | [webpack.DllPlugin](https://webpack.js.org/plugins/dll-plugin/)                                                            | -                                                                                        |
| ^                          | [webpack.EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/)                                            | -                                                                                        |
| ^                          | [webpack.EvalSourceMapDevToolPlugin](https://webpack.js.org/plugins/eval-source-map-dev-tool-plugin/)                      | -                                                                                        |
| ^                          | [webpack.IgnorePlugin](https://webpack.js.org/plugins/ignore-plugin/)                                                      | -                                                                                        |
| ^                          | [webpack.LoaderOptionsPlugin](https://webpack.js.org/plugins/loader-options-plugin/)                                       | -                                                                                        |
| ^                          | [webpack.NormalModuleReplacementPlugin](https://webpack.js.org/plugins/normal-module-replacement-plugin/)                  | -                                                                                        |
| ^                          | [webpack.PrefetchPlugin](https://webpack.js.org/plugins/prefetch-plugin/)                                                  | -                                                                                        |
| ^                          | [webpack.ProgressPlugin](https://webpack.js.org/plugins/progress-plugin/)                                                  | -                                                                                        |
| ^                          | [webpack.SourceMapDevToolPlugin](https://webpack.js.org/plugins/source-map-dev-tool-plugin/)                               | -                                                                                        |
| ^                          | [webpack.WatchIgnorePlugin](https://webpack.js.org/plugins/watch-ignore-plugin/)                                           | -                                                                                        |
| ^                          | [webpack.optimize.MergeDuplicateChunksPlugin](https://webpack.js.org/plugins/internal-plugins/#mergeduplicatechunksplugin) | -                                                                                        |
| ^                          | [webpack.optimize.RemoveEmptyChunksPlugin](https://webpack.js.org/plugins/internal-plugins/#removeemptychunksplugin)       | -                                                                                        |
| ^                          | [webpack.optimize.DedupePlugin](https://webpack.js.org/plugins/internal-plugins/#dedupeplugin)                             | -                                                                                        |
| ^                          | [webpack.optimize.LimitChunkCountPlugin](https://webpack.js.org/plugins/limit-chunk-count-plugin/)                         | -                                                                                        |
| ^                          | [webpack.optimize.MinChunkSizePlugin](https://webpack.js.org/plugins/min-chunk-size-plugin/)                               | -                                                                                        |
| ^                          | [webpack.debug.ProfilingPlugin](https://webpack.js.org/plugins/profiling-plugin/)                                          | -                                                                                        |
| ^                          | [webpack.NodeEnvironmentPlugin](https://webpack.js.org/plugins/internal-plugins/#nodeenvironmentplugin)                    | -                                                                                        |
| ^                          | [webpack.CachePlugin](https://webpack.js.org/plugins/internal-plugins/#cacheplugin)                                        | -                                                                                        |
| ^                          | [webpack.RecordIdsPlugin](https://webpack.js.org/plugins/internal-plugins/#recordidsplugin)                                | -                                                                                        |
| ^                          | [webpack.SingleEntryPlugin](https://webpack.js.org/plugins/internal-plugins/#singleentryplugin)                            | -                                                                                        |
| ^                          | [webpack.MultiEntryPlugin](https://webpack.js.org/plugins/internal-plugins/#multientryplugin)                              | -                                                                                        |
| ^                          | [webpack.FunctionModulePlugin](https://webpack.js.org/plugins/internal-plugins/#functionmoduleplugin)                      | -                                                                                        |
| ^                          | [webpack.JsonpTemplatePlugin](https://webpack.js.org/plugins/internal-plugins/#jsonptemplateplugin)                        | -                                                                                        |
| ^                          | [webpack.NodeTemplatePlugin](https://webpack.js.org/plugins/internal-plugins/#nodetemplateplugin)                          | -                                                                                        |
| ^                          | [webpack.LibraryTemplatePlugin](https://webpack.js.org/plugins/internal-plugins/#librarytemplateplugin)                    | -                                                                                        |
| ^                          | [webpack.WebWorkerTemplatePlugin](https://webpack.js.org/plugins/internal-plugins/#webworkertemplateplugin)                | -                                                                                        |
| ^                          | [webpack.EvalDevToolModulePlugin](https://webpack.js.org/plugins/internal-plugins/#evaldevtoolmoduleplugin)                | -                                                                                        |
| ^                          | [webpack.NoHotModuleReplacementPlugin](https://webpack.js.org/plugins/internal-plugins/#nohotmodulereplacementplugin)      | -                                                                                        |
| ^                          | [webpack.source](https://webpack.js.org/plugins/internal-plugins/#source)                                                  | -                                                                                        |
| ^                          | [webpack.APIPlugin](https://webpack.js.org/plugins/internal-plugins/#apiplugin)                                            | -                                                                                        |
| ^                          | [webpack.CompatibilityPlugin](https://webpack.js.org/plugins/internal-plugins/#compatibilityplugin)                        | -                                                                                        |
| ^                          | [webpack.ConsolePlugin](https://webpack.js.org/plugins/internal-plugins/#consoleplugin)                                    | -                                                                                        |
| ^                          | [webpack.ConstPlugin](https://webpack.js.org/plugins/internal-plugins/#constplugin)                                        | -                                                                                        |
| ^                          | [webpack.NodeStuffPlugin](https://webpack.js.org/plugins/internal-plugins/#nodestuffplugin)                                | -                                                                                        |
| ^                          | [webpack.RequireJsStuffPlugin](https://webpack.js.org/plugins/internal-plugins/#requirejsstuffplugin)                      | -                                                                                        |
| ^                          | [webpack.NodeSourcePlugin](https://webpack.js.org/plugins/internal-plugins/#nodesourceplugin)                              | -                                                                                        |
| ^                          | [webpack.NodeTargetPlugin](https://webpack.js.org/plugins/internal-plugins/#nodetargetplugin)                              | -                                                                                        |
| ^                          | [webpack.AMDPlugin](https://webpack.js.org/plugins/internal-plugins/#amdplugin)                                            | -                                                                                        |
| ^                          | [webpack.CommonJsPlugin](https://webpack.js.org/plugins/internal-plugins/#commonjsplugin)                                  | -                                                                                        |
| ^                          | [webpack.LabeledModulesPlugin](https://webpack.js.org/plugins/internal-plugins/#labeledmodulesplugin)                      | -                                                                                        |
| ^                          | [webpack.RequireContextPlugin](https://webpack.js.org/plugins/internal-plugins/#requirecontextplugin)                      | -                                                                                        |
| ^                          | [webpack.RequireEnsurePlugin](https://webpack.js.org/plugins/internal-plugins/#requireensureplugin)                        | -                                                                                        |
| ^                          | [webpack.RequireIncludePlugin](https://webpack.js.org/plugins/internal-plugins/#requireincludeplugin)                      | -                                                                                        |
| ^                          | webpack.TerserPlugin                                                                                                       | -                                                                                        |

## 官方推荐插件列表

| plugin                                                                                     | more          |
| ------------------------------------------------------------------------------------------ | ------------- |
| [babel-minify-webpack-plugin](https://webpack.js.org/plugins/babel-minify-webpack-plugin/) | -             |
| [closure-webpack-plugin](https://webpack.js.org/plugins/closure-webpack-plugin/)           | -             |
| [compression-webpack-plugin](https://webpack.js.org/plugins/compression-webpack-plugin/)   | -             |
| [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/)                 | 拷贝文件      |
| [extract-text-webpack-plugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/) | 抽离 css 样式 |
| [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)                 | 生成入口页面  |
| [i18n-webpack-plugin](https://webpack.js.org/plugins/i18n-webpack-plugin/)                 | -             |
| [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)         | -             |
| [npm-install-webpack-plugin](https://webpack.js.org/plugins/npm-install-webpack-plugin/)   | -             |
| [stylelint-webpack-plugin](https://webpack.js.org/plugins/stylelint-webpack-plugin/)       | -             |
| [terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/)             | -             |
| [uglifyjs-webpack-plugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)         | 压缩 js       |
| [zopfli-webpack-plugin](https://webpack.js.org/plugins/zopfli-webpack-plugin/)             | -             |

## 其他插件列表

| plugin                             | more                                     |
| ---------------------------------- | ---------------------------------------- |
| webpack-serve                      | -                                        |
| webpack-dev-server                 |
| vue-loader/lib/plugin              | vue-loader                               |
| optimize-css-assets-webpack-plugin | 压缩提取出的 css,并解决 css 代码重复问题 |
| webpack-dashboard                  | -                                        |
| webpack-merge                      | 整合 webpack 配置项                      |
