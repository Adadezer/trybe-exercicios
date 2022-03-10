const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'ximira'

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
    return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

    const user = await User.findOne({ where: { username } });

    if (!user || user.password !== password)
    return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
      admin: false,
      username,
    }

    if (username === 'admin' && password === 's3nh4S3gur4???') jwtConfig.admin = true

    console.log("jwtConfig", jwtConfig)

    const token = jwt.sign(jwtConfig, secret);
    // console.log('token', token);

    // const decoded = jwt.verify(token, secret);
    // console.log('decodado', decoded);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error)
  }
}