import asyncHandler from 'express-async-handler';
import tokenCreation from '../utils/CreatingToken.js';
import User from '../models/usersModel.js';

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password, rememberMe } = req.body;
  const user = await User.findOne({ email });

  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      rememberMe: user.rememberMe,
      token: tokenCreation(user._id, rememberMe),
    });
  } else {
    res.status(401);
    throw new Error('Invalid username and password');
  }
});

// @desc Register user & get token
// @route POST /api/users/
// @access Public

export const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password, rememberMe } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
    rememberMe,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      rememberMe: user.rememberMe,
      token: tokenCreation(user._id, rememberMe),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
