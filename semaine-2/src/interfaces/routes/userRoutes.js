const express = require('express');

const createUserRouter = (userController, authMiddleware) => {
    const router = express.Router();

    router.get('/me', authMiddleware, (req, res) => userController.me(req, res));

    return router;
};

module.exports = createUserRouter;