module.exports = {
  lintOnSave: false,
  publicPath:'/vue2-manage-system/', // 部署應用路徑
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin:true,
        pathRewrite:{'^/api':''}  
      }
    }
  }
}