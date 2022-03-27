import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../../interfaces/user.interface';

class UsersModel {
  private _connection: Pool;

  constructor(connection: Pool) {
    this._connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this._connection.execute('SELECT * FROM Users');
    const [ rows ] = result;
    return rows as User[];
  }

  public async getById(id: number): Promise<User> {
    const result = await this._connection.execute('SELECT * FROM Users WHERE id = ?', [id]);
    const [ rows ] = result;
    const [ user ] = rows as User[];
    return user;
  }

  public async create(user: User): Promise<User> {
    const { nome, senha, email } = user;

    const result = await this._connection.execute<ResultSetHeader>(
      'INSERT INTO Users (nome, senha, email) VALUES (?, ?, ?)', [nome, senha, email]
    );

    const [ dataInserted ] = result;
    const { insertId } = dataInserted;
    return {id: insertId, ...user}; 
  }
}

export default UsersModel