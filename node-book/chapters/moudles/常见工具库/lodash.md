# lodash

## 相关文档

文档                              | more
------------------------------- | -----------
[官方文档](https://lodash.com/docs) | lodash 官方文档

## Array

api                   | more
--------------------- | ----
`_.chunk`             | -
`_.compact`           | -
`_.concat`            | -
`_.difference`        | -
`_.differenceBy`      | -
`_.differenceWith`    | -
`_.drop`              | -
`_.dropRight`         | -
`_.dropRightWhile`    | -
`_.dropWhile`         | -
`_.fill`              | -
`_.findIndex`         | -
`_.findLastIndex`     | -
`_.first -> head`     | -
`_.flatten`           | -
`_.flattenDeep`       | -
`_.flattenDepth`      | -
`_.fromPairs`         | -
`_.head`              | -
`_.indexOf`           | -
`_.initial`           | -
`_.intersection`      | -
`_.intersectionBy`    | -
`_.intersectionWith`  | -
`_.join`              | -
`_.last`              | -
`_.lastIndexOf`       | -
`_.nth`               | -
`_.pull`              | -
`_.pullAll`           | -
`_.pullAllBy`         | -
`_.pullAllWith`       | -
`_.pullAt`            | -
`_.remove`            | -
`_.reverse`           | -
`_.slice`             | -
`_.sortedIndex`       | -
`_.sortedIndexBy`     | -
`_.sortedIndexOf`     | -
`_.sortedLastIndex`   | -
`_.sortedLastIndexBy` | -
`_.sortedLastIndexOf` | -
`_.sortedUniq`        | -
`_.sortedUniqBy`      | -
`_.tail`              | -
`_.take`              | -
`_.takeRight`         | -
`_.takeRightWhile`    | -
`_.takeWhile`         | -
`_.union`             | -
`_.unionBy`           | -
`_.unionWith`         | -
`_.uniq`              | -
`_.uniqBy`            | -
`_.uniqWith`          | -
`_.unzip`             | -
`_.unzipWith`         | -
`_.without`           | -
`_.xor`               | -
`_.xorBy`             | -
`_.xorWith`           | -
`_.zip`               | -
`_.zipObject`         | -
`_.zipObjectDeep`     | -
`_.zipWith`           | -

## Collection

api                           | more
----------------------------- | ----
`_.countBy`                   | -
`_.each -> forEach`           | -
`_.eachRight -> forEachRight` | -
`_.every`                     | -
`_.filter`                    | -
`_.find`                      | -
`_.findLast`                  | -
`_.flatMap`                   | -
`_.flatMapDeep`               | -
`_.flatMapDepth`              | -
`_.forEach`                   | -
`_.forEachRight`              | -
`_.groupBy`                   | -
`_.includes`                  | -
`_.invokeMap`                 | -
`_.keyBy`                     | -
`_.map`                       | -
`_.orderBy`                   | -
`_.partition`                 | -
`_.reduce`                    | -
`_.reduceRight`               | -
`_.reject`                    | -
`_.sample`                    | -
`_.sampleSize`                | -
`_.shuffle`                   | -
`_.size`                      | -
`_.some`                      | -
`_.sortBy`                    | -

## Date

api     | more
------- | ----
`_.now` | -

## Function

api              | more
---------------- | ----
`_.after`        | -
`_.ary`          | -
`_.before`       | -
`_.bind`         | -
`_.bindKey`      | -
`_.curry`        | -
`_.curryRight`   | -
`_.debounce`     | -
`_.defer`        | -
`_.delay`        | -
`_.flip`         | -
`_.memoize`      | -
`_.negate`       | -
`_.once`         | -
`_.overArgs`     | -
`_.partial`      | -
`_.partialRight` | -
`_.rearg`        | -
`_.rest`         | -
`_.spread`       | -
`_.throttle`     | -
`_.unary`        | -
`_.wrap`         | -

## Lang

api                   | more
--------------------- | ----
`_.castArray`         | -
`_.clone`             | -
`_.cloneDeep`         | -
`_.cloneDeepWith`     | -
`_.cloneWith`         | -
`_.conformsTo`        | -
`_.eq`                | -
`_.gt`                | -
`_.gte`               | -
`_.isArguments`       | -
`_.isArray`           | -
`_.isArrayBuffer`     | -
`_.isArrayLike`       | -
`_.isArrayLikeObject` | -
`_.isBoolean`         | -
`_.isBuffer`          | -
`_.isDate`            | -
`_.isElement`         | -
`_.isEmpty`           | -
`_.isEqual`           | -
`_.isEqualWith`       | -
`_.isError`           | -
`_.isFinite`          | -
`_.isFunction`        | -
`_.isInteger`         | -
`_.isLength`          | -
`_.isMap`             | -
`_.isMatch`           | -
`_.isMatchWith`       | -
`_.isNaN`             | -
`_.isNative`          | -
`_.isNil`             | -
`_.isNull`            | -
`_.isNumber`          | -
`_.isObject`          | -
`_.isObjectLike`      | -
`_.isPlainObject`     | -
`_.isRegExp`          | -
`_.isSafeInteger`     | -
`_.isSet`             | -
`_.isString`          | -
`_.isSymbol`          | -
`_.isTypedArray`      | -
`_.isUndefined`       | -
`_.isWeakMap`         | -
`_.isWeakSet`         | -
`_.lt`                | -
`_.lte`               | -
`_.toArray`           | -
`_.toFinite`          | -
`_.toInteger`         | -
`_.toLength`          | -
`_.toNumber`          | -
`_.toPlainObject`     | -
`_.toSafeInteger`     | -
`_.toString`          | -

## Math

api          | more
------------ | ----
`_.add`      | -
`_.ceil`     | -
`_.divide`   | -
`_.floor`    | -
`_.max`      | -
`_.maxBy`    | -
`_.mean`     | -
`_.meanBy`   | -
`_.min`      | -
`_.minBy`    | -
`_.multiply` | -
`_.round`    | -
`_.subtract` | -
`_.sum`      | -
`_.sumBy`    | -

## Number

api         | more
----------- | ----
`_.clamp`   | -
`_.inRange` | -
`_.random`  | -

## Object

分类          | api              | more
----------- | ---------------- | ---------------------------------------------------------
归并          | `_.assign`       | 只归并自身可枚举的属性
~           | `_.assignIn`     | 归并自身以及继承来的可枚举的属性
~           | `_.assignInWith` | 与`_.assignIn` 类似，可以添加 customizer
~           | `_.assignWith`   | 与`_.assign` 类似，可以添加 customizer
~           | `_.at`           | 安全的读取对象的属性到数组中
~           | `_.create`       | Creates an object that inherits from the prototype object
~           | `_.defaults`     | 归并自身以及继承来的可枚举的属性,如果原对象已经有值，不再修改原对象的值
~           | `_.defaultsDeep` | 与`_.defaults`类似，并且可以深度归并
~           | `_.merge`        | 与`_.defaults`类似，并且可以深度归并
~           | `_.mergeWith`    | 与`_.merge`类似，可以添加 customizer
健值对         | `_.toPairs`      | 对象(字面量)转化为健值对(二维数组形式),只转化自身可枚举的属性
~           | `_.toPairsIn`    | 对象(字面量)转化为健值对(二维数组形式),转化自身和继承来的可枚举属性
查找第一个符合条件的  | `_.findKey`      | 找到对象中第一个复合条件的属性，返回对应的 key
~           | `_.findLastKey`  | 找到对象中最后一个复合条件的属性，返回对应的 key
遍历          | `_.forIn`        | 遍历对象中自身以及继承来的可枚举的属性(先遍历自身属性，再遍历继承属性)
~           | `_.forInRight`   | 与`_.forIn`类似，但遍历顺序相反
~           | `_.forOwn`       | 遍历对象中自身可枚举的属性
~           | `_.forOwnRight`  | `_.forOwn`类似，但遍历顺序相反
~           | `_.mapKeys`      | 遍历对象,返回值用于更新对象的 key 值
~           | `_.mapValues`    | 遍历对象,返回值用于更新对象的 value 值
~           | `_.transform`    | -
key/value数组 | `_.functions`    | 将对象中自身可枚举的属性放到一个数组里
~           | `_.functionsIn`  | 将对象中自身以及继承来的可枚举的属性放到一个数组里
~           | `_.keys`         | 将对象中自身可枚举的属性放到一个数组里
~           | `_.keysIn`       | 将对象中自身以及继承来的可枚举的属性放到一个数组里
~           | `_.values`       | -
~           | `_.valuesIn`     | -
path        | `_.get`          | 安全的获取对象的某个属性，如果属性值为false，可以设置一个默认值
~           | `_.result`       | 与`_.get`类似，如果属性值为 function,返回运行后的结果
~           | `_.has`          | 验证某个对象自身是否有指定的属性
~           | `_.hasIn`        | 验证某个对象自身或原型上是否有指定的属性
~           | `_.invoke`       | 在对象的指定属性上执行方法
~           | `_.set`          | 设置对象的指定属性
~           | `_.setWith`      | -
~           | `_.unset`        | -
~           | `_.update`       | -
~           | `_.updateWith`   | -
倒置          | `_.invert`       | 倒置对象的 key, value，如果倒置后key相同，后面的覆盖前面的
~           | `_.invertBy`     | 倒置对象的 key, value，如果倒置后key相同，对应的value整合为数组
选择部分属性      | `_.omit`         | 对象中指定的属性不会被返回
~           | `_.omitBy`       | 对象中符合条件的属性不会被返回
~           | `_.pick`         | 对象中指定的属性会被返回
~           | `_.pickBy`       | 对象中符合条件的属性会被返回

## Seq

api                            | more
------------------------------ | ----
`_`                            | -
`_.chain`                      | -
`_.tap`                        | -
`_.thru`                       | -
`_.prototype[Symbol.iterator]` | -
`_.prototype.at`               | -
`_.prototype.chain`            | -
`_.prototype.commit`           | -
`_.prototype.next`             | -
`_.prototype.plant`            | -
`_.prototype.reverse`          | -
`_.prototype.toJSON -> value`  | -
`_.prototype.value`            | -
`_.prototype.valueOf -> value` | -

## String

api              | more
---------------- | ----
`_.camelCase`    | -
`_.capitalize`   | -
`_.deburr`       | -
`_.endsWith`     | -
`_.escape`       | -
`_.escapeRegExp` | -
`_.kebabCase`    | -
`_.lowerCase`    | -
`_.lowerFirst`   | -
`_.pad`          | -
`_.padEnd`       | -
`_.padStart`     | -
`_.parseInt`     | -
`_.repeat`       | -
`_.replace`      | -
`_.snakeCase`    | -
`_.split`        | -
`_.startCase`    | -
`_.startsWith`   | -
`_.template`     | -
`_.toLower`      | -
`_.toUpper`      | -
`_.trim`         | -
`_.trimEnd`      | -
`_.trimStart`    | -
`_.truncate`     | -
`_.unescape`     | -
`_.upperCase`    | -
`_.upperFirst`   | -
`_.words`        | -

## Util

api                 | more
------------------- | ----
`_.attempt`         | -
`_.bindAll`         | -
`_.cond`            | -
`_.conforms`        | -
`_.constant`        | -
`_.defaultTo`       | -
`_.flow`            | -
`_.flowRight`       | -
`_.identity`        | -
`_.iteratee`        | -
`_.matches`         | -
`_.matchesProperty` | -
`_.method`          | -
`_.methodOf`        | -
`_.mixin`           | -
`_.noConflict`      | -
`_.noop`            | -
`_.nthArg`          | -
`_.over`            | -
`_.overEvery`       | -
`_.overSome`        | -
`_.property`        | -
`_.propertyOf`      | -
`_.range`           | -
`_.rangeRight`      | -
`_.runInContext`    | -
`_.stubArray`       | -
`_.stubFalse`       | -
`_.stubObject`      | -
`_.stubString`      | -
`_.stubTrue`        | -
`_.times`           | -
`_.toPath`          | -
`_.uniqueId`        | -

## Properties

api                              | more
-------------------------------- | ----
`_.VERSION`                      | -
`_.templateSettings`             | -
`_.templateSettings.escape`      | -
`_.templateSettings.evaluate`    | -
`_.templateSettings.imports`     | -
`_.templateSettings.interpolate` | -
`_.templateSettings.variable`    | -

## Methods

api                            | more
------------------------------ | ----
`_.templateSettings.imports._` | -
