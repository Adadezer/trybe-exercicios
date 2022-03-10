require('dotenv').config();

const config = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  host: process.env.SQL_HOST,
  dialect: 'mysql',
}

module.exports = {
  development: {
    ...config,
    database: 'helloJwt'
  },
  test: {
    ...config,
    database: 'helloJwt'
  },
  production: {
    ...config,
    database: 'helloJwt'
  },
};
