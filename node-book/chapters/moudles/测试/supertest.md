# supertest

> supertest 上有 superagent 所有的功能

## 方法列表

方法                              | more
------------------------------- | -------------------------------------------------
request(app/app.listen())       | koa需要调用listen()
request.agent(app/app.listen()) | 获取服务端代理（不需要每次都调用request(app)）
.expect(function(res) {})       | 自定义断言，断言失败抛出错误 ／ 在断言之前修改 response body or headers
.expect(field, value[, fn])     | 断言头部某个字段的值
.expect(status[, fn])           | 断言 response 状态码
.expect(body[, fn])             | 断言 response body
.expect(status, body[, fn])     | 断言 response 状态码 和 body
.end(fn(err, res))              | 不使用这个方法错误会被抛出，使用后错误会作为第一个参数传给回调函数
.then(fn(res),fn(err))          | promise形式的end()

### .expect() && done

> 可以将done传给任何.expect()语句

```javascript
describe('GET /user', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
```
