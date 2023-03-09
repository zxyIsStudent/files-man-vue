const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    vendor: [ 'vue-router', 'element-plus']
  },
  output: {
    // 配置输出文件存放在本地的目录
    path: path.join(__dirname, 'dllFiles'),
    filename: '[name].js',
    library: '[name]_[hash]'
  },
  mode:"production",
  optimization:{
    usedExports:true,
    sideEffects: true
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      context: __dirname
    })
  ]
}

