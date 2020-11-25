const compress = require('koa-compress');
const compose= require('koa-compose');

module.exports = compose([
  compress({
    filter: function (content_type) {
      return /text/i.test(content_type);
    },
    threshold: 2048, // 阀值，当数据超过2kb的时候，可以压缩
    flush: require('zlib').Z_SYNC_FLUSH // zlib是node的压缩模块
  }),
  async function (ctx, next) {
    //ctx 代表响应 ctx.compress = true 代表允许压缩
    ctx.compress = true;
    await next();
  }
]);

