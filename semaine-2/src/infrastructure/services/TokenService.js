const jwt = require('jsonwebtoken');

class TokenService {
    constructor() {
        this.secret = process.env.JWT_SECRET;
    }

    generate(payload) {
        return jwt.sign(payload, this.secret, { expiresIn: '1h' });
    }

    verify(token) {
        return jwt.verify(token, this.secret);
    }
}

module.exports = TokenService;