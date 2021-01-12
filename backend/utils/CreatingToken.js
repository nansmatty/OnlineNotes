import jwt from 'jsonwebtoken';

const tokenCreation = (id, rememberMe = false) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: rememberMe ? '30d' : '1h',
  });
};

export default tokenCreation;
