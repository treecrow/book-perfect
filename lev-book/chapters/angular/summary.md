# angular 知识点汇总

### $http
方法 | 描述
---|---
$http|-
$http.get|-
$http.head|-
$http.post|-
$http.put|-
$http.delete|-
$http.jsonp|-
$http.patch|-
### $provide

### 全局 API
方法 | 描述
---|---
angular.lowercase()	|转换字符串为小写
angular.uppercase()	|转换字符串为大写
angular.isString()	|判断给定的对象是否为字符串，如果是返回 true。
angular.isNumber()	|判断给定的对象是否为数字，如果是返回 true。


## 进阶
--------
### 依赖注入
#### provider
````js
mainApp.provider('greeting', function() {
  this.$get = function() {
return function(name) {
  alert("Hello, " + name);
};
  };
});
````
> provider完整示例

````js
myMod.provider('greeting', function() {
  var text = 'Hello, ';

  this.setText = function(value) {
     text = value;
  };

  this.$get = function() {
     return function(name) {
         alert(text + name);
     };
  };
});

myMod.config(function(greetingProvider) {
  greetingProvider.setText("Howdy there, ");
});

myMod.run(function(greeting) {
  greeting('Ford Prefect');
});
````
#### value
````js
mainApp.value('greeting', function(name) {
  alert("Hello, " + name);
}); 
````
#### factory
````js
mainApp.factory('greeting', function() {
  return function(name) {
alert("Hello, " + name);
  };
});
````
#### 注入器（$injector）
````js
var greeting = $injector.get('greeting');
greeting('Ford Prefect'); 

var myFunction = function(greeting) {
  greeting('Ford Prefect');
};
$injector.invoke(myFunction);  
````
#### constant(不能被改变，因此它不能被注入到config中)
````js
mainApp.constant("configParam", "constant value");
````
#### service
````js
mainApp.service('CalcService', function(MathService){
  this.square = function(a) {
     return MathService.multiply(a,a);
  }
});
````


### 过滤器
##### AngularJS 过滤器
过滤器 | 描述
---|---
lowercase	| 格式化字符串为小写
uppercase	| 格式化字符串为大写
date:"yyyy-MM-dd HH:mm:ss"|-
number:2|保留小数
currency:"RMB ￥ " | 结果：RMB ￥ 250.00
filter:{'name':'iphone'} | 查找name为iphone的行
limitTo :6|从前面开始截取6位
orderBy:'id':true	| 根id降序排。
##### 自定义过滤器
```js
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.msg = "Runoob";
});
app.filter('reverse', function() { //可以注入依赖
    return function(text) {
        return text.split("").reverse().join("");
    }
});
```

#### 指令
##### 自定义指令
````js
var app = angular.module("myApp", []);
app.directive("runoobDirective", function() {
    return {
        template : "我在指令构造器中创建!"
    };
});
````
