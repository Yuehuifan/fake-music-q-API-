
const BaseUrl = require("./config.js");

module.exports = {
    devServer: {
        // disableHostCheck: false,
        host: '0.0.0.0',
        // https: false,
        // hotOnly: false,
        proxy: {
            [BaseUrl.ROOT]: {
                target: BaseUrl.URL, //对应自己的接口
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    [`${BaseUrl.ROOT}`]: ''
                }
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/My_Profile/'
        : '/'
        
}