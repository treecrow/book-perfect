function PageList(config) {
  this.config = config;
  this.initParams = config.initParams; // 获取初始请求参数
  this.$searchBtn = $(config.searchBtn); // 搜索按钮
  this.getFormParams = config.getFormParams; //获取表单请求参数
  this.ajaxConfig = config.ajaxConfig; // api 接口配置
  this.tableHandles = config.tableHandles; // 表格具柄
  // 初始化
  this.init();
}

// 列表初始化
PageList.prototype.init = function() {
  var _this = this;
  // 首次更新页面
  _this.updateList(_this.initParams);
  // _this.updateList(_this.getListParams());
  // 点击搜索按钮
  _this.$searchBtn.on("click", function() {
    _this.updateList(_this.getListParams());
  });
};

// 更新列表（需要传入参数）
PageList.prototype.updateList = function(params) {
  var _this = this;
  ajaxConfig = _this.ajaxConfig;
  $.ajax({
    url: ajaxConfig.listQueryUrl,
    type: ajaxConfig.method || "get",
    dataType: "json",
    data: params,
    success: function(data) {
      if (data.result !== 200 && data.code !== 200) {
        console.error(data);
        return;
      }
      // 处理数据
      var data = ajaxConfig.handleData(data);
      // 渲染表格(智能的选择模板引擎)
      var htmlStr = ""; // 表格 html
      var $vessel = $(_this.tableHandles.vessel); // 表格容器
      var listData = data.listData; // 表格数据
      if (window.Handlebars) {
        var render = Handlebars.compile($(_this.tableHandles.tpl).html());
        htmlStr = render(listData);
      } else {
        htmlStr = template(_this.tableHandles.tpl.substring(1), listData);
      }
      $vessel.html(htmlStr);
      // 更新分页
      _this.updatePagination(data.totalPage);
    }
  });
};

// 更新分页
PageList.prototype.updatePagination = function(totalPage) {
  var _this = this;
  totalPage = totalPage || 1;
  var $pagination = $(_this.tableHandles.pagination);
  $pagination.twbsPagination("destroy");
  $pagination
    .twbsPagination({
      startPage: $pagination.data("pagenum"),
      totalPages: totalPage,
      visiblePages: totalPage > 5 ? 5 : totalPage,
      first: "首页",
      last: "尾页",
      prev: "上一页",
      next: "下一页"
    })
    .unbind("page")
    .on("page", function(evt, pageNum) {
      $pagination.data("pagenum", pageNum);
      _this.updateList(
        _this.getListParams({
          pageNum: pageNum
        })
      );
    });
};

// 获取请求参数
PageList.prototype.getListParams = function(params) {
  var _this = this;

  // formParams
  var formParams = _this.getFormParams();
  // for (var key in formParams) {
  //   var val = formParams[key];
  //   val = val === null ? "" : val;
  //   if (!isNaN(Number(val)) && val !== "") {
  //     val = Number(val);
  //   }
  //   formParams[key] = val;
  // }

  // listParams
  var listParams = $.extend({}, params || {});
  if (!listParams.pageNum) {
    $(_this.tableHandles.pagination).data("pagenum", 1);
    listParams.pageNum = 1;
  }
  // paramsObj
  var paramsObj = $.extend({}, _this.initParams, formParams, listParams);
  console.log(_this.initParams);
  console.log(formParams);
  console.log(listParams);
  console.log(paramsObj);
  _this.updateUrl(paramsObj); // 更新当前页面 url
  return paramsObj;
};

// 根据对象直接量更新当前页面 url
PageList.prototype.updateUrl = function(paramsObj) {
  var searchStr = "";
  for (var key in paramsObj) {
    if (paramsObj[key] !== "") {
      searchStr += "&" + key + "=" + paramsObj[key];
    }
  }
  var newUrl =
    location.href.split("?")[0] + searchStr.replace(/^&/, "?") + location.hash;
  history.replaceState(null, null, newUrl);
};
