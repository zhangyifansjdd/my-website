const koa = require('koa');
const app = new koa();
const koaMount = require('koa-mount');
const koaStatic = require('koa-static');
const historyFallback = require('koa2-history-api-fallback')
const compress = require('./compress')
const api = require('../api/index');

app.keys = ['zhangyfiansjdd'];
app.use(require('./session'))

app.use(async (ctx, next) => {
  console.log('session',ctx.request.path,ctx.session);
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
