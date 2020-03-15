const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  },
  devServer: {
    port: 9500
  },
  css: {
    extract: false
  },
  productionSourceMap: process.env.NODE_ENV !== 'production', // 设为false打包时不生成.map文件
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'table-componente',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
