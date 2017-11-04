function loadScript(url, callback) {
  var script = document.createElement_x("script")
  script.type = "text/javascript";
  if (script.readyState) { //IE 
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { //Others: Firefox, Safari, Chrome, and Opera 
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.body.appendChild(script);
}


// function keeper(pageConfig) {
//   console.log(pageConfig);

//   for (var pageField in pageConfig) {
//     var newFuc = pageConfig[pageField].bind(pageConfig);
//     pageConfig[pageField] = '1';

//     Object.defineProperty(pageConfig, pageField, {
//       enumerable: true,
//       configurable: true,
//       get: function () {
//         return pageField
//       },
//       set: function (newPageField) {
//         if (pageField === newPageField) return;
//         pageField = newPageField;
//         newFuc();
//       }
//     });

//   }

//   console.log(pageConfig);
//   return pageConfig;
// }

// var pageConfig = keeper({
//   a: function () {
//     console.log('a改变了', this);
//   },
//   b: function () {
//     console.log('改变了', this.b);
//   }
// });

// pageConfig.a = 'aaaaa';
// pageConfig.b = 'bbbbb';

// console.log(pageConfig.a)
// console.log(pageConfig.b)
// console.log(pageConfig.c)