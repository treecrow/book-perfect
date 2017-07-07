# supertest

## 方法列表

方法                          | more
--------------------------- | -----------------------------------------------------------------------------------------------------------------
supertest(app)              | -
supertest.agent(app)        | -
.expect(status[, fn])       | Assert response status code.
.expect(status, body[, fn]) | Assert response status code and body.
.expect(body[, fn])         | Assert response body text with a string, regular expression, or parsed body object.
.expect(field, value[, fn]) | Assert header field value with a string or regular expression.
.expect(function(res) {})   | Pass a custom assertion function. It'll be given the response object to check. If the check fails, throw an error
.end(fn)                    | Perform the request and invoke fn(err, res)
