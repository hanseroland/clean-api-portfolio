const bcrypt = require('bcrypt');

class PasswordService {
  async hashPassword(password) {
    //bcrypt avec salt de 10 rounds — bon équilibre sécurité/performance
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
}
module.exports = PasswordService;
