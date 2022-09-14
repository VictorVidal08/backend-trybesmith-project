import { Pool } from 'mysql2/promise';
import Login from '../interfaces/login';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(username: string): Promise<Login | null> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
    const values = [username];

    const [data] = await this.connection.execute(query, values);
    const [user] = data as Login[];

    return user || null;
  }
}