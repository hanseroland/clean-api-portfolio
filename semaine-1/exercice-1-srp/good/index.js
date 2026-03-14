const UserRepository = require('./userRepository');
const PasswordService = require('./passwordService');
const EmailService = require('./emailService');
const UserService = require('./userService');

const userRepository = new UserRepository();
const passwordService = new PasswordService();
const emailService = new EmailService();

const userService = new UserService(
  userRepository,
  passwordService,
  emailService,
);

// Démonstration
userService
  .registerUser({
    name: 'Hanse Roland',
    email: 'hanse@example.com',
    password: 'secret123',
  })
  .then((user) => console.log('User registered:', user));
