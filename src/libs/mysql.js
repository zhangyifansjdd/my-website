const mysql = require('mysql');
const {promisify} = require("util");

const pool = mysql.createPool({
  host: '82.156.87.86', // 填写你的mysql host
  user: 'root', // 填写你的mysql用户名
  password: 'mysqlpwd', // 填写你的mysql密码
  database: 'my_data'
})

module.exports = {
  async exeSql(sql, sqlParams) {
    let connection = '';
    let result = '';
    try {
      connection = await promisify(pool.getConnection).bind(pool)();
      result = await promisify(connection.query).bind(connection)(sql, sqlParams);
    } catch (e) {
      throw e;
    } finally {
      if (connection) {
        connection.release();
      }
    }
    return result;
  }
}