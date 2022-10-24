const { defineConfig } = require('@vue/cli-service')
let externals = {}
let cdn = {
  css: [],
  js: []
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
      // 如果是生产环境 就排除打包 否则不排除
      externals = {
        vue: 'Vue',
        vuex: 'Vuex'
        // 'vue-router': 'VueRouter'
      // 'vue-lazyload': 'VueLazyload'
      }
      cdn = {
        css: [], // 放置css文件目录
        js: [
          // vue
          'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js',
          // VueX
          'https://cdn.bootcss.com/vuex/3.6.2/vuex.min.js'
        ] // 放置js文件目录
      }
      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })
    }
  },
  configureWebpack: {
    externals: externals
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://apipc-xiaotuxian-front.itheima.net/',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})
