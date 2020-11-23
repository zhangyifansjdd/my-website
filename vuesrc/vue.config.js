const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: './',
  outputDir: '../dist/',
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set("@src", resolve("src"))
  },
}
