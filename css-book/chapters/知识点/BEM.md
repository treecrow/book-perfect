# [BEM](http://getbem.com/)

## BEM 概念

| 概念     | more                                                                     |
| -------- | ------------------------------------------------------------------------ |
| Block    | 封装一个独立的实体                                                       |
| Element  | Block 的一部分，没有独立的含义。任何元素都在语义上绑定到其对应的 Block。 |
| Modifier | Block 或 Element 上的标志。使用它们来更改外观、行为或状态。              |

## BEM 语法

| 语法 | more                                                                            |
| ---- | ------------------------------------------------------------------------------- |
| `__` | `Block__Element`                                                                |
| --   | Block--Modifier / `Block__Element--Modifier` / `Block--Modifier Block__Element` |
