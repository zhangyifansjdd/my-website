const koa = require('koa');
const app = new koa();
const koaMount = require('koa-mount');
const koaStatic = require('koa-static');
const historyFallback = require('koa2-history-api-fallback')
const compress = require('./compress')

app.use(compress);//页面压缩
app.use(historyFallback({
  index:'/website/index.html',
  verbose: false
}));
app.use(koaMount('/website',koaStatic('./dist/')));//提供前端服务
app.use(koaMount('/website/static',koaStatic('./static/')))//静态文件

let port = process.env.PORT;
if (!port) {
  port = 3001;
}

console.log('env:' + process.env.NODE_ENV);

app.listen(port, () => console.log(`Server started on port ${port}`))
