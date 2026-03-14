const express = require('express');
const validateMiddleware = require('../middlewares/validateMiddleware');
const { registerSchema, loginSchema } = require('../validators/authValidator');


const createAuthRouter = (authController) => {
    const router = express.Router();

    router.post('/register',
        validateMiddleware(registerSchema),
        (req, res) => authController.register(req, res));

    router.post('/login',
        validateMiddleware(loginSchema),
        (req, res) => authController.login(req, res));

    return router;
};

module.exports = createAuthRouter;