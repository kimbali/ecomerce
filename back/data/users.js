import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin user',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'Kim',
    email: 'kim@regular.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
  {
    name: 'Alex',
    email: 'alex@adregular.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
];

export default users;
