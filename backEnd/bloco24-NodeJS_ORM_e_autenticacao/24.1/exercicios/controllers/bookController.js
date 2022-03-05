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
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity }); // método create do Sequelize para salvar um usuário no banco
    return res.status(201).json(newBook);
    
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const [ updateBook ] = await Book.update( // método update do Sequelize para alterar um usuário no banco.
      { title, author, pageQuantity },
      { where: { id } },
    );

    return res.status(201).json(updateBook);
    
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
}