const jwt  = require('jsonwebtoken');

const { User } = require('../models');

const secret = 'ximira';

module.exports = async (req, res, next) => {
  const token  = req.headers['authorization'];

  // if(!token) return res.status(401).json({message: 'Token not found'});

  if(!token) {
    const error = new Error('Token not found');
    error.statusCode = 401

    return next(error);
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log('decoded: ', decoded);
    //Caso esteja tudo certo, nós então buscamos o usuário na base para obter seus dados atualizados
    const user = await User.findOne({where: {username: decoded.username}});

    if(!user) res.status(401).json({ message: 'Erro ao procurar usuário do token.' });

    req.user = {user, admin: decoded.admin}

    return res.status(200).json(req.user);

  } catch (error) {
    return res.status(401).json({message: error.message});
  }
};