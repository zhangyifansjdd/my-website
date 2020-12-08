const mysql = require('mysql');

const pool = mysql.createPool({
  host: '47.96.154.251', // 填写你的mysql host
  user: 'root', // 填写你的mysql用户名
  password: 'Zyfjqq1230829', // 填写你的mysql密码
  database: 'my_data'
})

// connection.connect(err => {
//   if (err) throw err;
//   console.log('mysql connncted success!');
// })

async function getConnection() {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
}

function query(connection, sql, sqlParams) {
  return new Promise((resolve, reject) => {
    try {
      connection.query(sql, sqlParams, (err, result) => {
        console.log('exeSql', err, result);
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    } catch (e) {
      console.error(e);
      reject(e);
    }
  })
}

module.exports = {
  async exeSql(sql, sqlParams) {
    let connection = '';
    let result = '';
    try {
      connection = await getConnection();
      result = await query(connection, sql, sqlParams);
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