const compose = require('koa-compose');
const cors = require('koa2-cors'); //跨域处理
const router = require('koa-router')();
const bodyParser = require('koa-body');
router.use(bodyParser({
  multipart:true, // 支持文件上传
  formidable: {
    maxFieldsSize: 200 * 1024 * 1024, // 文件上传大小
  }
}));

const login = require('./login');
const file = require('./file');
router.use('/api', login.routes());
router.use('/api', file.routes());


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