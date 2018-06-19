# [vuex](https://vuex.vuejs.org/zh/)

## api

| api               | 解释                                                             |
| ----------------- | ---------------------------------------------------------------- |
| $store.state      | -                                                                |
| $store.getters    | -                                                                |
| $store.commit     | 提交 mutation                                                    |
| $store.dispatch   | 分发 action                                                      |
| vuex.mapState     | mapState 辅助函数帮助我们生成计算属性                            |
| vuex.mapGetters   | mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性 |
| vuex.mapMutations | mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用 |
| vuex.mapActions   | mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用   |