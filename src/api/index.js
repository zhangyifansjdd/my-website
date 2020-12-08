const compose = require('koa-compose');
const cors = require('koa2-cors'); //跨域处理
const router = require('koa-router')();
const bodyParser = require('koa-body');
router.use(bodyParser());//解析参数到body

const login = require('./login');
router.use('/api', login.routes());


module.exports = compose([
  cors({
    origin: function (ctx) { //设置允许来自指定域名请求
      return '*'; // 允许来自所有域名请求
    },
    methods: ['GET', 'HEAD', 'POST']
  }),
  router.routes(),
  router.allowedMethods()
])