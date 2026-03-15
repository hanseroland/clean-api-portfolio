require('dotenv').config();
const express = require('express');
const app = express();


// Infrastructure
const pool = require('./infrastructure/database/mysqlConnection');
const MySQLUserRepository = require('./infrastructure/repositories/MySQLUserRepository');
const PasswordService = require('./infrastructure/services/PasswordService');
const TokenService = require('./infrastructure/services/TokenService');

// Application
const RegisterUser = require('./application/usecases/RegisterUser');
const LoginUser = require('./application/usecases/LoginUser');
const GetUser = require('./application/usecases/GetUser')

// Interfaces
const authmiddleWare = require('./interfaces/middlewares/authMiddleware')
const AuthController = require('./interfaces/controllers/AuthController');
const UserController = require('./interfaces/controllers/UserController')
const createAuthRouter = require('./interfaces/routes/authRoutes');
const createUserRouter = require('./interfaces/routes/userRoutes')
const errorMiddleware = require('./interfaces/middlewares/errorMiddleware');


app.use(express.json());

// Assemblage des dépendances
const userRepository = new MySQLUserRepository(pool);
const passwordService = new PasswordService();
const tokenService = new TokenService();

const registerUser = new RegisterUser(userRepository, passwordService);
const loginUser = new LoginUser(userRepository, passwordService, tokenService);
const getUser = new GetUser(userRepository)

const authController = new AuthController(registerUser, loginUser);
const userController = new UserController(getUser)

// Branchement des routes
const api = process.env.API_URL || '/api';
app.use(`${api}/auth`, createAuthRouter(authController));
app.use(`${api}/users`, createUserRouter(userController, authmiddleWare));

// Middleware global de gestion des erreurs
app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;