// ❌ VIOLATION SRP — bad/userService.bad.js

class UserService {

    async verifyUser(userData) {

        // [Responsabilité 1 — DB] Vérification existence
        const userExists = await User.findOne({ email: userData.email });
        if (userExists) throw new Error('User already exists');

        // [Responsabilité 2 — Sécurité] Hashage mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        // [Responsabilité 3 — DB] Persistance
        const user = new User({ ...userData, password: hashedPassword });
        await user.save();

        // [Responsabilité 4 — Infrastructure] Email
        sendUserWelcomeEmail(userData.email);

        return user;

    }
}

module.exports = UserService;

