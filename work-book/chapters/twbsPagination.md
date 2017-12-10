# [twbsPagination](https://esimakin.github.io/twbs-pagination/)

## 重置 pagination

```javascript
$('#pagination').twbsPagination('destroy');
$('#pagination').twbsPagination({
  first: '首页',
  last: '尾页',
  prev: '上一页',
  next: '下一页',
  startPage: whole.pageNum,
  visiblePages: visiblePages,
  totalPages: totalPages
}).off('page').on('page', function (evt, pageNum) {
  whole.pageNum = pageNum
  updateList(pageNum);
});
```