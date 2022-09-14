import { Request, Response } from 'express';
import LoginService from '../services/login';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const userCredentials = req.body;
    // const { username, password } = userCredentials;
    const result = await this.loginService.login(userCredentials);
    console.log(result);
    const { status } = result;
    return res.status(status).json(result);
  };
}
