
module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // 项目里要使用的 SCSS 文件
    '@/assets/styles/main.css',
    // 调整代码高亮 和其他 样式
    '@/assets/styles/code.css',
    // 阿里图标库
    '@/assets/iconfont/iconfont.css',
    //highlight.js的样式
    'highlight.js/styles/monokai-sublime.css'
  ],

  router: {
    // 每次路由跳转会调用该中间件
    middleware: ['redirectRoute']

  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // element-ui按需引用
    '@/plugins/element-ui',
    // 混入转换 marked 函数
    '@/plugins/compiledMarkdown.js'
  ],
  axios: {
    baseURL: 'http://192.168.1.107:3000'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */

  modules: [
    '@nuxtjs/axios',
  ],
  build: {
    transpile: [/^element-ui/],
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
