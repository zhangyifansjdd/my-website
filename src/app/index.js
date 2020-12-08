const koa = require('koa');
const app = new koa();
const koaMount = require('koa-mount');
const koaStatic = require('koa-static');
const historyFallback = require('koa2-history-api-fallback')
const compress = require('./compress')
const api = require('../api/index');
require('./mysql');


const session = require('koa-session');
const session_signed_key = ["my-website"];  // 这个是配合signed属性的签名key
const session_config = {
  key: 'my-website:session',
  /**  cookie的key。 (默认是 koa:sess) */
  maxAge: 1000 * 60 * 60 * 24,
  /**  24小时 session 过期时间，以毫秒ms为单位计算 。*/
  autoCommit: true,
  /** 自动提交到响应头。(默认是 true) */
  overwrite: true,
  /** 是否允许重写 。(默认是 true) */
  httpOnly: true,
  /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
  signed: true,
  /** 是否签名。(默认是 true) */
  rolling: true,
  /** 是否每次响应时刷新Session的有效期。(默认是 false) */
  renew: false, /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
};
app.keys = session_signed_key;
app.use(session(session_config, app));

app.use(async (ctx, next) => {
  if (ctx.request.headers['accept'].includes('text/html')) {
    if (ctx.request.path == '/baozhang' && (!ctx.session || !ctx.session.userName)) {
      ctx.session.callbackurl = ctx.request.path;
      ctx.redirect('/bzLogin');
    }
  }
  await next();
});

app.use(api);//接口
app.use(compress);//页面压缩
app.use(historyFallback({
  index: '/index.html',
  verbose: false
}));
app.use(koaMount('/', koaStatic('./dist/')));//提供前端服务
app.use(koaMount('/static', koaStatic('./static/')))//静态文件


let port = process.env.PORT;
if (!port) {
  port = 3001;
}

console.log('env:' + process.env.NODE_ENV);

app.listen(port, () => console.log(`Server started on port ${port}`))
