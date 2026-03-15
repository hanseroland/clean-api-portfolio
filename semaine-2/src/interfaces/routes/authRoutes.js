const express = require('express');
const validateMiddleware = require('../middlewares/validateMiddleware');
const { registerSchema, loginSchema } = require('../validators/authValidator');


const createAuthRouter = (authController) => {
    const router = express.Router();

    router.post('/register',
        validateMiddleware(registerSchema),
        (req, res, next) => authController.register(req, res, next));

    router.post('/login',
        validateMiddleware(loginSchema),
        (req, res, next) => authController.login(req, res, next));

    return router;
};

module.exports = createAuthRouter;