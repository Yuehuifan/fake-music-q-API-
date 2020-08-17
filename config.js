let URL = "https://api.qq.jsososo.com"
let ROOT;
if (process.env.NODE_ENV === "development") {
    //开发环境下的代理地址，解决本地跨域跨域，配置在vue.config.js里
    ROOT = "/apis";
  } else {
    //生产环境下的地址
    ROOT = URL;
  }
// export default { ROOT, URL };
exports.URL = URL; //代理指向地址
exports.ROOT = ROOT;