//  转 为 html 的函数
import Vue from 'vue'
import marked from "marked";
//代码高亮
import hljs from "highlight.js";
// marked 配置
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

Vue.prototype.$compiledMarkdown = (string) => (marked(string))



