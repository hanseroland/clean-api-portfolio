class AuthController {
    constructor(registerUser, loginUser) {
        this.registerUser = registerUser;
        this.loginUser = loginUser;
    }

    async register(req, res, next) {
        try {
            const user = await this.registerUser.execute(req.body);
            return res.status(201).json({ success: true, data: user });
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const token = await this.loginUser.execute(req.body);
            return res.status(200).json({ success: true, token });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthController;