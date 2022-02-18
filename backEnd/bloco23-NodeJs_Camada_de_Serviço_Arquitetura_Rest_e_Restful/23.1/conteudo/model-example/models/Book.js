const connection = require('./connection');
const Author = require('./Author');

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id = ?;'
  const [books] = await connection.execute(query, [authorId]);
  
  return books.map(({id, title, author_id }) => ({ // abreviação para el.id === id, el.title === title
    id,
    title,
    authorId: author_id,
  }));
};

const getByBookId = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?;'
  const [ book ] = await connection.execute(query, [id]);

  if (book.length === 0) return null;

  return book.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }))[0];  
};

const isValid = async (title, authorId) => {
  if(!title || title.length < 3 || typeof title !== 'string') return false;
  if(!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;
  return true;
};

const createBook = async (title, authorId) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';
  const [createBook] = await connection.execute(query, [title, authorId]);
  return createBook;
};

// Busca todos os livros do banco.
const getAll = async () => {
  const [ books ] = await connection.execute(
    'SELECT * FROM model_example.books',
  );

  return books;
};

module.exports = { getAll, getByAuthorId, getByBookId, isValid, createBook };