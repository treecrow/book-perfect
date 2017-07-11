# rimraf

## 支持命令行

```
rimraf dist/*
```

## rimraf(f, [opts], function(err))

- options

字段           | more
------------ | ------------------------------------------------------------
maxBusyTries | windows 上出现了EBUSY, ENOTEMPTY, EPERM错误时会重试，这里是重试的次数（默认3次）
emfileWait   | 如果发生了'EMFILE'错误，程序会每隔1ms重试一次,直到达到 emfileWait 设置的时间（默认1000ms）
glob         | 是否全局正则匹配（默认false）
disableGlob  | 相当于{glob: false}
