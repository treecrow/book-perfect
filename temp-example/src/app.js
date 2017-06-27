const marked = require('marked');
const hljs = require('highlight.js');

// 设置渲染器
let renderer = new marked.Renderer();

marked.setOptions({
  renderer: renderer, // 声明使用的渲染器
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  // highlight选项没有效果？
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});


document.getElementById('content').innerHTML = marked(`
  # Marked in browser

  # heading+

  Rendered by **marked**.

--------
  aaa|bbb
  ---|---
  111|222

  \`\`\`
  var aa = 333;
  console.log(aa);
  \`\`\`
`);
