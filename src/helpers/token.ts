import jwt from 'jsonwebtoken';
import User from '../interfaces/users';

const JWT_SECRET = 'senhasecreta';

const createToken = (payload: User) => {
  const token = jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export default createToken;