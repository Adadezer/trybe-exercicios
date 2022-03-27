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
}

export default UsersService;