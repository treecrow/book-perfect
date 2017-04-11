# loopback 项目初始化步骤


动作|命令
-----|-----
lb|创建一个项目
lb datasource|链接项目到数据库
lb model|创建项目的models
lb relation|定义模块之间的关系
lb acl|定义访问控制

##  其它
#### 为model创建远程钩子
```
module.exports = function(Review) {
  Review.beforeRemote('create', function(context, user, next) {
    context.args.data.date = Date.now();
    context.args.data.publisherId = context.req.accessToken.userId;
    next();
  });
};
```
#### 为model添加远程方法
```
module.exports = function(CoffeeShop) {
  CoffeeShop.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log('Current hour is %d', currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };
  CoffeeShop.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );
};
```
#### 添加静态页面
*使／路径指向client目录下的index.html，还可以在server/boot下创建js文件设置非/的路由：*
```
//server/middleware.json:
"files": {
  "loopback#static": {
    "params": "$!../client" 
  }
},
```
#### 生成 lb-services.js文件
```
$ npm install -g loopback-sdk-angular-cli
$ mkdir -p client/js/services
$ lb-ng server/server.js client/js/services/lb-services.js
```


