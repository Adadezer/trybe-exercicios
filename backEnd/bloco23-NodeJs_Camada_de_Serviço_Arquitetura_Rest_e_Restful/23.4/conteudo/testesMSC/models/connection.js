const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'adadezer',
  password: 'minhaSenha@123',
  database: 'model_example'});

module.exports = connection;