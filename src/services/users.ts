import connection from '../models/connection';
import UserModel from '../models/users';
import User from '../interfaces/users';
import createToken from '../helpers/token';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User) {
    const token = await createToken(user);
    await this.model.create(user);
    return token;
  }
}