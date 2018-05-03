# console_colorpoint

### version

1.0.7

优化了类型判断，以及显示效果

### introducation

一个console库，使用不同的颜色标记console输出，更加醒目，轻松注释掉所有console，发布无忧。

### 使用

import Log from 'console_colorpoint'

const log = new Log()

log.green({name: 'Jack'})

#### 构造函数

Log生成实例时传入任意隐式转换为 `true` 的值都会让所有 `console` 失效。

### todo

Set等可遍历的支持table展示 // 完成



