class AuthController {
    constructor(registerUser, loginUser) {
        this.registerUser = registerUser;
        this.loginUser = loginUser;
    }

    async register(req, res) {
        try {
            const user = await this.registerUser.execute(req.body);
            return res.status(201).json({ success: true, data: user });
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }

    async login(req, res) {
        try {
            const token = await this.loginUser.execute(req.body);
            return res.status(200).json({ success: true, token });
        } catch (error) {
            return res.status(401).json({ success: false, message: error.message });
        }
    }
}

module.exports = AuthController;