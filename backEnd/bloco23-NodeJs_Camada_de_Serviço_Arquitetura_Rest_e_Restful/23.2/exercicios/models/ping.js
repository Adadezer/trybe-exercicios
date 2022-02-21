const connection = require('./connection');

const getCEP= async() => {
  const query = 'SELECT '
  const queryResult = await connection.execute(query);
};