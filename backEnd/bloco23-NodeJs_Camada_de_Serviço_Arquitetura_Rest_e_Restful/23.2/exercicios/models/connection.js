const mysql = require('mysql/promisse');

const connection = mysql.createPoll({
  user: 'adadezer',
  password: 'minhaSenha@123',
  host: 'localhost',
  database: 'cep_lookup'
});

module.exports = connection;