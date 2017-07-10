# chai

## Expect ／ Should

### 解释性字段(没有任何作用，只是为了易读)

字段     | more
------ | ----
.to    | -
.be    | -
.been  | -
.is    | -
.that  | -
.which | -
.and   | -
.has   | -
.have  | -
.with  | -
.at    | -
.of    | -
.same  | -
.but   | -
.does  | -

### 字段列表

字段                                                | more
------------------------------------------------- | ----
.not                                              | -
.deep                                             | -
.nested                                           | -
.own                                              | -
.ordered                                          | -
.any                                              | -
.all                                              | -
.a(type[, msg])                                   | -
.include(val[, msg])                              | -
.ok                                               | -
.true                                             | -
.false                                            | -
.null                                             | -
.undefined                                        | -
.NaN                                              | -
.exist                                            | -
.empty                                            | -
.arguments                                        | -
.equal(val[, msg])                                | -
.eql(obj[, msg])                                  | -
.above(n[, msg])                                  | -
.least(n[, msg])                                  | -
.below(n[, msg])                                  | -
.most(n[, msg])                                   | -
.within(start, finish[, msg])                     | -
.instanceof(constructor[, msg])                   | -
.property(name[, val[, msg]])                     | -
.ownPropertyDescriptor(name[, descriptor[, msg]]) | -
.lengthOf(n[, msg])                               | -
.match(re[, msg])                                 | -
.string(str[, msg])                               | -
.keys(key1[, key2[, ...]])                        | -
.throw([errorLike], [errMsgMatcher], [msg])       | -
.respondTo(method[, msg])                         | -
.itself                                           | -
.satisfy(matcher[, msg])                          | -
.closeTo(expected, delta[, msg])                  | -
.members(set[, msg])                              | -
.oneOf(list[, msg])                               | -
.change(subject[, prop[, msg]])                   | -
.increase(subject[, prop[, msg]])                 | -
.decrease(subject[, prop[, msg]])                 | -
.by(delta[, msg])                                 | -
.extensible                                       | -
.sealed                                           | -
.frozen                                           | -
.finite                                           | -
.fail(actual, expected, [message], [operator])    | -
fail(actual, expected, [message], [operator])     | -

## Assert

字段                                                                       | more
------------------------------------------------------------------------ | ----
assert(expression, message)                                              | -
.fail(actual, expected, [message], [operator])                           | -
.isOk(object, [message])                                                 | -
.isNotOk(object, [message])                                              | -
equal(actual, expected, [message])                                       | -
.notEqual(actual, expected, [message])                                   | -
.strictEqual(actual, expected, [message])                                | -
.notStrictEqual(actual, expected, [message])                             | -
.deepEqual(actual, expected, [message])                                  | -
.notDeepEqual(actual, expected, [message])                               | -
.isAbove(valueToCheck, valueToBeAbove, [message])                        | -
.isAtLeast(valueToCheck, valueToBeAtLeast, [message])                    | -
.isBelow(valueToCheck, valueToBeBelow, [message])                        | -
.isAtMost(valueToCheck, valueToBeAtMost, [message])                      | -
.isTrue(value, [message])                                                | -
.isNotTrue(value, [message])                                             | -
.isFalse(value, [message])                                               | -
.isNotFalse(value, [message])                                            | -
.isNull(value, [message])                                                | -
.isNotNull(value, [message])                                             | -
.isNaN                                                                   | -
.isNotNaN                                                                | -
.exists                                                                  | -
.notExists                                                               | -
.isUndefined(value, [message])                                           | -
.isDefined(value, [message])                                             | -
.isFunction(value, [message])                                            | -
.isNotFunction(value, [message])                                         | -
.isObject(value, [message])                                              | -
.isNotObject(value, [message])                                           | -
.isArray(value, [message])                                               | -
.isNotArray(value, [message])                                            | -
.isString(value, [message])                                              | -
.isNotString(value, [message])                                           | -
.isNumber(value, [message])                                              | -
.isNotNumber(value, [message])                                           | -
.isFinite(value, [message])                                              | -
.isBoolean(value, [message])                                             | -
.isNotBoolean(value, [message])                                          | -
.typeOf(value, name, [message])                                          | -
.notTypeOf(value, name, [message])                                       | -
.instanceOf(object, constructor, [message])                              | -
.notInstanceOf(object, constructor, [message])                           | -
.include(haystack, needle, [message])                                    | -
.notInclude(haystack, needle, [message])                                 | -
.deepInclude(haystack, needle, [message])                                | -
.notDeepInclude(haystack, needle, [message])                             | -
.nestedInclude(haystack, needle, [message])                              | -
.notNestedInclude(haystack, needle, [message])                           | -
.deepNestedInclude(haystack, needle, [message])                          | -
.notDeepNestedInclude(haystack, needle, [message])                       | -
.ownInclude(haystack, needle, [message])                                 | -
.notOwnInclude(haystack, needle, [message])                              | -
.deepOwnInclude(haystack, needle, [message])                             | -
.notDeepOwnInclude(haystack, needle, [message])                          | -
.match(value, regexp, [message])                                         | -
.notMatch(value, regexp, [message])                                      | -
.property(object, property, [message])                                   | -
.notProperty(object, property, [message])                                | -
.propertyVal(object, property, value, [message])                         | -
.notPropertyVal(object, property, value, [message])                      | -
.deepPropertyVal(object, property, value, [message])                     | -
.notDeepPropertyVal(object, property, value, [message])                  | -
.nestedProperty(object, property, [message])                             | -
.notNestedProperty(object, property, [message])                          | -
.nestedPropertyVal(object, property, value, [message])                   | -
.notNestedPropertyVal(object, property, value, [message])                | -
.deepNestedPropertyVal(object, property, value, [message])               | -
.notDeepNestedPropertyVal(object, property, value, [message])            | -
.lengthOf(object, length, [message])                                     | -
.hasAnyKeys(object, [keys], [message])                                   | -
.hasAllKeys(object, [keys], [message])                                   | -
.containsAllKeys(object, [keys], [message])                              | -
.doesNotHaveAnyKeys(object, [keys], [message])                           | -
.doesNotHaveAllKeys(object, [keys], [message])                           | -
.hasAnyDeepKeys(object, [keys], [message])                               | -
.hasAllDeepKeys(object, [keys], [message])                               | -
.containsAllDeepKeys(object, [keys], [message])                          | -
.doesNotHaveAnyDeepKeys(object, [keys], [message])                       | -
.doesNotHaveAllDeepKeys(object, [keys], [message])                       | -
.throws(fn, [errorLike/string/regexp], [string/regexp], [message])       | -
.doesNotThrow(fn, [errorLike/string/regexp], [string/regexp], [message]) | -
.operator(val1, operator, val2, [message])                               | -
.closeTo(actual, expected, delta, [message])                             | -
.approximately(actual, expected, delta, [message])                       | -
.sameMembers(set1, set2, [message])                                      | -
.notSameMembers(set1, set2, [message])                                   | -
.sameDeepMembers(set1, set2, [message])                                  | -
.notSameDeepMembers(set1, set2, [message])                               | -
.sameOrderedMembers(set1, set2, [message])                               | -
.notSameOrderedMembers(set1, set2, [message])                            | -
.sameDeepOrderedMembers(set1, set2, [message])                           | -
.notSameDeepOrderedMembers(set1, set2, [message])                        | -
.includeMembers(superset, subset, [message])                             | -
.notIncludeMembers(superset, subset, [message])                          | -
.includeDeepMembers(superset, subset, [message])                         | -
.notIncludeDeepMembers(superset, subset, [message])                      | -
.includeOrderedMembers(superset, subset, [message])                      | -
.notIncludeOrderedMembers(superset, subset, [message])                   | -
.includeDeepOrderedMembers(superset, subset, [message])                  | -
.notIncludeDeepOrderedMembers(superset, subset, [message])               | -
.oneOf(inList, list, [message])                                          | -
.changes(function, object, property, [message])                          | -
.changesBy(function, object, property, delta, [message])                 | -
.doesNotChange(function, object, property, [message])                    | -
.changesButNotBy(function, object, property, delta, [message])           | -
.increases(function, object, property, [message])                        | -
.increasesBy(function, object, property, delta, [message])               | -
.doesNotIncrease(function, object, property, [message])                  | -
.increasesButNotBy(function, object, property, [message])                | -
.decreases(function, object, property, [message])                        | -
.decreasesBy(function, object, property, delta, [message])               | -
.doesNotDecrease(function, object, property, [message])                  | -
.doesNotDecreaseBy(function, object, property, delta, [message])         | -
.decreasesButNotBy(function, object, property, delta, [message])         | -
.ifError(object)                                                         | -
.isExtensible(object)                                                    | -
.isNotExtensible(object)                                                 | -
.isSealed(object)                                                        | -
.isNotSealed(object)                                                     | -
.isFrozen(object)                                                        | -
.isNotFrozen(object)                                                     | -
.isEmpty(target)                                                         | -
.isNotEmpty(target)                                                      | -
