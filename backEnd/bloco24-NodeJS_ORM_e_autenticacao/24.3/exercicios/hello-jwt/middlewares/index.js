const error = require('./error');
const { createUser } = require('./validationCreate');
const auth = require('./auth');
const admin = require('./admin');

module.exports = {
  error,
  createUser,
  auth,
  admin,
};
