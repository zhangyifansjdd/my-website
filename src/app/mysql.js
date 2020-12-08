const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '47.96.154.251', // 填写你的mysql host
  user: 'root', // 填写你的mysql用户名
  password: 'Zyfjqq1230829', // 填写你的mysql密码
  database: 'my_data'
})

connection.connect(err => {
  if (err) throw err;
  console.log('mysql connncted success!');
})

module.exports = {
  exeSql(sql, sqlParams) {
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
}