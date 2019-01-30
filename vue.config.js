const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  baseUrl: './',
  outputDir: process.env.outputDir || 'dist',
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = [];
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )

      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(true)

    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none'
      return args
    })
  },
  css: {
    modules: false,
    extract: IS_PROD,
    // 为css后缀添加hash
    extract: {
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[hash:8].css'
    },
    sourceMap: false,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss";`
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'server.js'
    }
  }
}
