const { Book } = require('../models');

const getAllBooks = async (_req, res) => {
  try {
    const books = await Book.findAll(); // método findAll do Sequelize para retornar todos os livros.
    return res.status(200).json(books);

  } catch (error) {
    console.log(error.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id); // método findByPk do Sequelize para buscar o livro pelo id.
    return res.status(200).json(book);

  } catch (error) {
    console.log(error.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
} 

module.exports = {
  getAllBooks,
  getBookById,
}