const { User } = require('../models');

module.exports = async (req, res, next) => {
      try {
        const { username, password } = req.body;

        const user = await User.create({ username, password });
        
        console.log(user)

        return res.status(200).json({ message: 'feito!' });
      } catch (error) {
        console.log(error);
        return res.status(500).end();
      }
  };
