const { Book } = require('../models');

const getByAuthor = async (req, res) => {
  try {
    const { author } = req.params;
    console.log(author);
    const getAuthor = await Book.findAll({where: {author}}); 

    return res.status(200).json(getAuthor);

  } catch (error) {
    console.error(error.message);

    res.status(500).json({ message: 'Algo deu errado' });

  }
};

module.exports = {
  getByAuthor,
};