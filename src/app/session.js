const session = require('koa-generic-session')
const Redis = require('koa-redis')


module.exports = session({
  key: 'my-website:session-key',
  /**  cookie的key。  */
  prefix:"my-website-session:", // 给session对象在redis存储的地址名前面添加的前缀内容
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
  rolling: false,
  /** 是否每次响应时刷新Session的有效期。(默认是 false) */
  renew: true, /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
  
  store:new Redis({
    port:6379,
    host:'82.156.87.86',
    password:'redispwd'
  }) // 在Redis中放入一个session对象
})