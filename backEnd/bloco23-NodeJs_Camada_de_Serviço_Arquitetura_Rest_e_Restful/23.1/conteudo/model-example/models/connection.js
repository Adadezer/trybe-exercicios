const msql = require('mysql2/promise');

const connection = msql.createPool({
  host: 'localhost',
  user: 'adadezer',
  password: 'minhaSenha@123',
  database: 'model_example'
});

module.exports = connection;