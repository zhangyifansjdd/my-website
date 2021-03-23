import path from "path";

const koa = require('koa');
const app = new koa();
const koaMount = require('koa-mount');
const koaStatic = require('koa-static');
// const historyFallback = require('koa2-history-api-fallback')
const historyFallback = require('./historyFallback');
const compress = require('./compress')
const api = require('../api/index');
import views from 'koa-views';

app.keys = ['zhangyfiansjdd'];
app.use(require('./session'))


let redis = require('../libs/redis')

redis.set('foo', 'bar');
redis.get('foo')
  .then((result) => {
    console.log(result);
  })

app.use(async (ctx, next) => {
  console.log('first:', ctx.url);
  if (ctx.request.headers['accept'] && ctx.request.headers['accept'].includes('text/html')) {
    if (ctx.request.path == '/baozhang' && (!ctx.session || !ctx.session.userName)) {
      ctx.session.callbackurl = ctx.request.path;
      console.log('redirect');
      ctx.redirect('/bzLogin');
    }
  }
  await next();
});

app.use(api);//接口
// app.use(compress);//页面压缩
// app.use(historyFallback({
//   index: '/index.html',
//   verbose: false
// }));
app.use(koaMount('/static', koaStatic('./static/')))//静态文件
app.use(views(path.join(__dirname, '../../')));
app.use(historyFallback);
app.use(koaMount('/v3', koaStatic('./dist-vue3/')));//提供前端服务
app.use(koaMount('/websiteNew', koaStatic('./dist/')));//提供前端服务


let port = process.env.PORT;
if (!port) {
  port = 3001;
}

console.log('env:' + process.env.NODE_ENV);

app.listen(port, () => console.log(`Server started on port ${port}`))
