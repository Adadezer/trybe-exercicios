import readline from 'readline-sync';
import connection from './models/connection';
import { ResultSetHeader } from "mysql2";

const main = async () => {
  const title = readline.question('Digite o nome do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const result = await connection.execute<ResultSetHeader>( // adicionado <ResultSetHeader> para executar insertId
    'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
    [title, price, author, isbn]
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted; // essa linha não acusa mais erro de compilação.
  console.log(insertId);
}

main();