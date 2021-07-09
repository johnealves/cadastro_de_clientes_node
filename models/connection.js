const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'john',
  password: 'Password1@',
  database: 'MagIt'
})

module.exports = connection;
