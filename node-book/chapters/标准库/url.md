# [url](http://nodejs.cn/api/url.html)

> url 模块提供了一些实用函数，用于 URL 处理与解析

## The WHATWG URL API

### URL类

> 通过URL类，可以使用 WHATWG URL API

```javascript
const { URL } = require('url');
const url = new URL('/foo', 'https://example.org/');
```

#### 属性列表

属性               | more
---------------- | ----------------------------------------------------------------------------
url.hash         | Gets and sets the fragment portion of the URL
url.host         | Gets and sets the host portion of the URL
url.hostname     | ets and sets the hostname portion of the URL
url.href         | Gets and sets the serialized URL
url.origin       | Gets the read-only serialization of the URL's origin
url.password     | Gets and sets the password portion of the URL
url.pathname     | Gets and sets the path portion of the URL
url.port         | Gets and sets the port portion of the URL
url.protocol     | Gets and sets the protocol portion of the URL
url.search       | Gets and sets the serialized query portion of the URL
url.searchParams | Gets the URLSearchParams object representing the query parameters of the URL
url.username     | Gets and sets the username portion of the URL

#### 方法列表

方法             | more
-------------- | --------------------------
url.toString() | returns the serialized URL
url.toJSON()   | returns the serialized URL

### URLSearchParams 类

> The URLSearchParams API provides read and write access to the query of a URL

#### 创建/获取 URLSearchParams实例的几个方法

方法                            | more
----------------------------- | ----
new URLSearchParams()         | -
new URLSearchParams(string)   | -
new URLSearchParams(obj)      | -
new URLSearchParams(iterable) | -

#### urlSearchParams实例方法列表

方法                                     | more
-------------------------------------- | -----------------------------------------------------------------------------------------------------
urlSearchParams.append(name, value)    | Append a new name-value pair to the query string
urlSearchParams.delete(name)           | emove all name-value pairs whose name is name
urlSearchParams.entries()              | Returns an ES6 Iterator over each of the name-value pairs in the query
urlSearchParams.forEach(fn[, thisArg]) | Iterates over each name-value pair in the query and invokes the given function
urlSearchParams.get(name)              | Returns the value of the first name-value pair whose name is name
urlSearchParams.getAll(name)           | Returns the values of all name-value pairs whose name is name
urlSearchParams.has(name)              | Returns true if there is at least one name-value pair whose name is name
urlSearchParams.keys()                 | Returns an ES6 Iterator over the names of each name-value pair
urlSearchParams.set(name, value)       | Sets the value in the URLSearchParams object associated with name to value
urlSearchParams.sort()                 | Sort all existing name-value pairs in-place by their names
urlSearchParams.toString()             | Returns the search parameters serialized as a string, with characters percent-encoded where necessary
urlSearchParams.values()               | Returns an ES6 Iterator over the values of each name-value pair
urlSearchParams[@@iterator]()          | Returns an ES6 Iterator over each of the name-value pairs in the query string

### 其他方法

方法                          | more
--------------------------- | ------------------------------------------------------------------------------------------
URL.domainToASCII(domain)   | Returns the Punycode ASCII serialization of the domain
URL.domainToUnicode(domain) | Returns the Unicode serialization of the domain
URL.format(URL[, options])  | Returns a customizable serialization of a URL String representation of a WHATWG URL object

## Legacy URL API

### Legacy urlObject

> The legacy urlObject (require('url').Url) is created and returned by the url.parse() function.

#### 属性列表

属性                 | more
------------------ | --------------------------------------------------------------------
urlObject.auth     | auth 属性是 URL 的用户名与密码部分
urlObject.hash     | hash 属性包含 URL 的碎片部分，包括开头的 ASCII 哈希字符（#）
urlObject.host     | host 属性是 URL 的完整的小写的主机部分，包括 port（如果有）
urlObject.hostname | hostname 属性是 host 组成部分排除 port 之后的小写的主机名部分
urlObject.href     | href 属性是解析后的完整的 URL 字符串，protocol 和 host 都会被转换为小写的
urlObject.path     | path 属性是一个 pathname 与 search 组成部分的串接
urlObject.pathname | pathname 属性包含 URL 的整个路径部分
urlObject.port     | port 属性是 host 组成部分中的数值型的端口部分
urlObject.protocol | protocol 属性表明 URL 的小写的协议体制
urlObject.query    | query 属性是不含开头 ASCII 问号（?）的查询字符串，或一个被 querystring 模块的 parse() 方法返回的对象
urlObject.search   | search 属性包含 URL 的整个查询字符串部分，包括开头的 ASCII 问号字符（?）
urlObject.slashes  | slashes 属性是一个 boolean，如果 protocol 中的冒号后面跟着两个 ASCII 斜杠字符（/），则值为 true

#### 方法列表

方法                                                            | more
------------------------------------------------------------- | ------------------------------------------------------------
url.format(urlObject)                                         | url.format() 方法返回一个从 urlObject 格式化后的 URL 字符串
url.parse(urlString[, parseQueryString[, slashesDenoteHost]]) | url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象
url.resolve(from, to)                                         | url.resolve() 方法会以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL

### 转义字符

#### Legacy API

```
//URL 只被允许包含一个特定范围的字符串。 URL 对象的属性中的空格（' '）和以下字符会被自动转义:
< > " ` \r \n \t { } | \ ^ '
```

#### WHATWG API

> 略
