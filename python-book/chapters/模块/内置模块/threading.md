# [threading](https://docs.python.org/zh-cn/3/library/threading.html)

> 基于线程的并行

## api list

| class     | api                        | more                                                                         |
| --------- | -------------------------- | ---------------------------------------------------------------------------- |
| Thread 类 | threading.Thread()         | 创建一个 Thread 对象                                                         |
| ~         | thread.start()             | 开始线程活动                                                                 |
| ~         | thread.join(timeout=None)) | 等待，直到线程终结。这会阻塞调用这个方法的线程，直到被调用 join() 的线程终结 |
