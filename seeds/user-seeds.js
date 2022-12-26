const {
  User
} = require('../models');

const userData = [
  {
      username: 'sarina',
      email: 'sarina@gmail.com',
      password: 'password123'
  },
  {
      username: 'jaya',
      email: 'jaya@gmail.com',
      password: 'password123'
  },
  {
      username: 'munroe',
      email: 'munroe@gmail.com',
      password: 'password123'
  },
  {
      username: 'ocean',
      email: 'ocean@gmail.com',
      password: 'password123'
  },
  {
      username: 'max',
      email: 'max@gmail.com',
      password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;