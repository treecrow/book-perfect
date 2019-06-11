# [multiprocessing](https://docs.python.org/zh-cn/3/library/multiprocessing.html)

> 基于进程的并行

## api list

| class      | api                       | more                                                                                                                                      |
| ---------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Process 类 | multiprocessing.Process() | 创建一个 Process 对象                                                                                                                     |
| ~          | process.start()           | 启动进程活动                                                                                                                              |
| ~          | process.join(([timeout])  | 如果可选参数 timeout 是 None （默认值），则该方法将阻塞，直到调用 join() 方法的进程终止。如果 timeout 是一个正数，它最多会阻塞 timeout 秒 |
| Queue 类   | multiprocessing.Queue()   | 返回一个使用一个管道和少量锁和信号量实现的共享队列实例                                                                                    |
| ~          | someQueue.put()           | 将 obj 放入队列                                                                                                                           |
| ~          | someQueue.get()           | 从队列中取出并返回对象                                                                                                                    |
| ~          | someQueue.empty()         | 如果队列是空的，返回 True ，反之返回 False                                                                                                |
