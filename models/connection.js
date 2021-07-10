const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'john',
//   password: 'Password1@',
//   database: 'MagIt'
// })

// const connection = mysql.createPool({
//   host: 'us-cdbr-east-04.cleardb.com',
//   user: 'b03807ef3ee748',
//   password: '74db8888',
//   database: 'heroku_d6b99feac8402e6'
// })

// JawsDB
const connection = mysql.createPool({
  host: 'pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 't8qcym0iq84183fo',
  password: 'afyq48qur9m90diy',
  database: 't2rfjs2zua7z56ke'
})

// PostGrees
// const connection = mysql.createPool({
//   host: 'ec2-52-5-1-20.compute-1.amazonaws.com',
//   user: 'yiwzepftyciisb',
//   password: '3ad36b7edce514b36cd1ddbc996933de60865fa05d5f2cae87593e5c988730de',
//   database: 'd1bfmmf56pnuin'
// })

module.exports = connection;
// mysql://b03807ef3ee748:74db8888@us-cdbr-east-04.cleardb.com/heroku_d6b99feac8402e6?reconnect=true