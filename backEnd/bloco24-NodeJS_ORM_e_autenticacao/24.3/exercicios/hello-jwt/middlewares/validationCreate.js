const joivalid = require('../schemas/joiValidUser');

const createUser = (req, res, next) => {
  const { error } = joivalid.validate(req.body);
  // console.log('error inteiro ----------------', error);
  if (error) {
    const [code, message] = error.message.split('|');
    console.log(code, message);
    return res.status(code).json({ message });
  } 

  return next();
};

module.exports = {
  createUser,
};