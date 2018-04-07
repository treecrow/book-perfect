function List(config) {
  this.config = config;
  this.ajaxConfig = config.ajaxConfig;
  this.listQueryUrl = config.listQueryUrl;
  this.$listVessel = $(config.listVessel);
  this.listTpl = config.listTpl;
  this.$pagination = $(config.pagination);
  this.bindEvent = config.bindEvent;
  // 初始化
  this.init();
}

// 获取请求参数
List.prototype.getListParams = function(params) {
  var _this = this;
  var params = params || {};
  !params.pageNum && _this.$pagination.data("pagenum", 1);
  return $.extend(_this.ajaxConfig.initParams, params);
};

// 更新分页
List.prototype.updatePagination = function(totalPages) {
  var _this = this;
  totalPages = totalPages || 1;
  _this.$pagination.twbsPagination("destroy");
  _this.$pagination
    .twbsPagination({
      startPage: _this.$pagination.data("pagenum"),
      totalPages: totalPages,
      visiblePages: totalPages > 5 ? 5 : totalPages,
      first: "首页",
      last: "尾页",
      prev: "上一页",
      next: "下一页"
    })
    .unbind("page")
    .on("page", function(evt, pageNum) {
      _this.$pagination.data("pagenum", pageNum);
      _this.updateList(
        _this.getListParams({
          pageNum: pageNum
        })
      );
    });
};

// 更新列表
List.prototype.updateList = function(params) {
  var _this = this;
  $.ajax({
    url: _this.listQueryUrl,
    type: _this.ajaxConfig.method || "get",
    dataType: "json",
    data: params,
    success: function(data) {
      if (data.result !== 200) {
        console.error(data);
        return;
      }
      var data = data.data;
      var html = template(_this.listTpl, data.content);
      // console.log(html);
      _this.$listVessel.html(html);
      _this.updatePagination(data.totalPages);
    }
  });
};

// 列表初始化
List.prototype.init = function() {
  this.updateList(this.getListParams());
  this.bindEvent();
};
