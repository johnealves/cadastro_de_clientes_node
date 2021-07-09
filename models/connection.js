const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'john',
//   password: 'Password1@',
//   database: 'MagIt'
// })


const connection = mysql.createPool({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b03807ef3ee748',
  password: '74db8888',
  database: 'heroku_d6b99feac8402e6'
})

module.exports = connection;
// mysql://b03807ef3ee748:74db8888@us-cdbr-east-04.cleardb.com/heroku_d6b99feac8402e6?reconnect=true