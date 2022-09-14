import connection from '../models/connection';
import LoginModel from '../models/login';
import Sign from '../interfaces/sign';
import createToken from '../helpers/token';
import Token from '../interfaces/token';
import User from '../interfaces/users';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(userCredentials: User): Promise<Token | Sign> {
    const data = await this.model.login(userCredentials.username);
    if (!data) return { message: 'Username or password invalid', status: 401 };
    const passwordVerify = userCredentials.password === data.password;
    if (passwordVerify === false) return { message: 'Username or password invalid', status: 401 };
    const payload = { id: data.id, username: userCredentials.username };
    const token = await createToken(payload);
    return { token, status: 200 };
  }
}