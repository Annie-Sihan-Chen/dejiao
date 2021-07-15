const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@common', resolve('src/common'))
            .set('@components', resolve('src/components'))
    },
    devServer:{
        proxy: {
            '/api': {    //将www.exaple.com印射为/api
                target: 'http://18.218.252.70:8001',  // 接口域名
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': '/'   //需要rewrite的,
                }
            }
      }
    }
}