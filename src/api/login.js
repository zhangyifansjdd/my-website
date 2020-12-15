const router = require('koa-router')();
const mysql = require('../libs/mysql');

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
    ctx.body.returnCode = 200;
    ctx.session.userName = userName;
    ctx.body.message = '登录成功';
    if (ctx.session.callbackurl) {
      ctx.body.callbackurl = ctx.session.callbackurl
      ctx.session.callbackurl = '';
    }
  } catch (e) {
    ctx.body.returnCode = 400;
    ctx.body.message = '登录失败';
  }
});

//登录
router.get('/login', async (ctx, next) => {
  let params = ctx.request.query;
  let userName = params.userName;
  let password = params.password;
  
  ctx.body = {};
  const sql = `SELECT * FROM baozhang_user where userName='${userName}' and password='${password}'`;
  try {
    let result = await mysql.exeSql(sql);
    console.log('result',result);
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
    console.error(e);
    ctx.body.returnCode = 400;
    ctx.body.message = '登录失败';
    ctx.body.error=e
  }
});

//注销
router.get('/logout', async (ctx, next) => {
  if(ctx.session){
    ctx.session =null;//清空session
    ctx.response.body = {
      returnCode:200,
      message:'登出成功'
    }
    console.log('登出成功')
  }else{
    ctx.response.body = {
      returnCode:400,
      message:'session 已失效'
    }
    console.log("当前 session 已失效");
  }
});


router.get('/auth', async (ctx, next) => {
  if(ctx.session){
    ctx.response.body = {
      returnCode:200,
      message:'成功',
      session:ctx.session
    }
  }else{
    ctx.response.body = {
      returnCode:400,
      message:'session 已失效'
    }
  }
});
module.exports = router;