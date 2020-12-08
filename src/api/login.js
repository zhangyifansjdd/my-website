const router = require('koa-router')();
const mysql = require('../app/mysql');

//注册
router.get('/logon', async (ctx, next) => {
  let params = ctx.request.query;
  let userName = params.userName;
  let password = params.password;
  
  ctx.body = {};
  let sql = 'INSERT INTO baozhang_user(userName,password) VALUES(?,?)';
  let sqlParams = [userName, password];
  try {
    let result = await mysql.exeSql(sql, sqlParams);
    console.log('logon');
    ctx.body.returnCode = 200;
    ctx.session.userName = userName;
    ctx.body.message = '登录成功';
    if (ctx.session.callbackurl) {
      ctx.body.callbackurl = ctx.session.callbackurl
      ctx.session.callbackurl = '';
    }
  } catch (e) {
    console.log('logon',e);
    ctx.body.returnCode = 400;
    ctx.body.message = '登录失败';
  }
});

//登录
router.get('/login', async (ctx, next) => {
  let params = ctx.request.query;
  let userName = params.userName;
  let password = params.password;
  
  console.log(ctx.request.query);
  console.log('login', userName, password);
  ctx.body = {};
  const sql = `SELECT * FROM baozhang_user where userName='${userName}' and password='${password}'`;
  try {
    let result = await mysql.exeSql(sql);
    if (result.length > 0) {
      ctx.body.returnCode = 200;
      ctx.session.userName = userName;
      ctx.body.message = '登录成功';
      if (ctx.session.callbackurl) {
        ctx.body.callbackurl = ctx.session.callbackurl
        ctx.session.callbackurl = '';
      }
    } else {
      ctx.body.returnCode = 400;
      ctx.body.message = '登录失败';
    }
  } catch (e) {
    ctx.body.returnCode = 400;
    ctx.body.message = '登录失败';
  }
});


router.get('/auth', async (ctx, next) => {
  console.log('auth', ctx.session.userName);
  let userName = '张一凡';
  let password = '1234567';
  const sql = `SELECT * FROM baozhang_user where userName='${userName}' and password='${password}'`;
  try {
    
    let result = await mysql.exeSql(sql);
    console.log(result);
    for (let item of result) {
      console.log(item);
    }
  } catch (e) {
    console.log(e);
  } finally {
  }
});

module.exports = router;