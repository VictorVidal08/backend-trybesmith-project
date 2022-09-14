import jwt from 'jsonwebtoken';
import User from '../interfaces/users';
import Payload from '../interfaces/payload';

const JWT_SECRET = 'senhasecreta';

const createToken = (payload: User | Payload) => {
  const token = jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export default createToken;