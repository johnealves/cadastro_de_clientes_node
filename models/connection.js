const mysql = require('mysql2/promise');

// JawsDB
const connection = mysql.createPool({
  host: 'pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 't8qcym0iq84183fo',
  password: 'afyq48qur9m90diy',
  database: 't2rfjs2zua7z56ke'
})

module.exports = connection;
