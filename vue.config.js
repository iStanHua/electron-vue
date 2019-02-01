const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
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
      chainWebpackMainProcess: config => {

      },
      chainWebpackRendererProcess: config => {
        config.plugin('define').tap(args => {
          args[0]['IS_ELECTRON'] = true
          return args
        })
      },
      nodeModulesPath: ['../../node_modules', './node_modules'],
      // mainProcessFile: 'server.js',
    }
  }
}
