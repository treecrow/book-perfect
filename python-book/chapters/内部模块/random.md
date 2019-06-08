# [random](https://docs.python.org/zh-cn/3/library/random.html)

> random 提供了生成随机数的工具

## api list

| api                                                            | more                                                                                             |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| random.randint(a, b)                                           | 返回随机整数 N 满足 a <= N <= b。相当于 randrange(a, b+1)。                                      |
| random.randrange(stop) / random.randrange(start, stop[, step]) | 返回一个随机选择的元素                                                                           |
| random.sample(population, k)                                   | 返回从总体序列或集合中随机选择 k 个元素                                                          |
| random.choice(seq)                                             | 从序列的元素中随机挑选一个元素，比如 random.choice(range(10))，从 0 到 9 中随机挑选一个整数。    |
| random.random()                                                | 随机生成下一个实数，它在[0,1)范围内。                                                            |
| random.seed([x])                                               | 改变随机数生成器的种子 seed。如果你不了解其原理，你不必特别去设定 seed，Python 会帮你选择 seed。 |
| random.shuffle(lst)                                            | 将序列的所有元素随机排序                                                                         |
| random.uniform(x, y)                                           | 随机生成下一个实数，它在[x,y]范围内。                                                            |
