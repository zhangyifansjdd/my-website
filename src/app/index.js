const koa = require('koa');
const app = new koa();
const koaStatic = require('koa-static');

app.use(koaStatic('./dist/'));//提供前端服务

let port = process.env.PORT;
if (!port) {
  port = 3001;
}

console.log('env:' + process.env.NODE_ENV);

app.listen(port, () => console.log(`Server started on port ${port}`))
