import connection from '../models/connection';
import UsersModel from '../models/user.model';
import User from '../../interfaces/user.interface';

class UsersService {
  public _model: UsersModel;

  constructor() {
    this._model = new UsersModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this._model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this._model.getById(id);
    return user;
  }
}

export default UsersService;