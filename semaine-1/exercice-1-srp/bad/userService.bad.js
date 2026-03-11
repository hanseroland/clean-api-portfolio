// ❌ VIOLATION SRP — bad/userService.bad.js
// 3 raisons de changer :
// [1] Si on change de base de données → on touche userService
// [2] Si on change la logique de hash du mot de passe → on touche userService
// [3] Si on change la logique de vérification de l'utilisateur → on touche userService

class UserService {
    async verifyUser(userData) {
        // on vérifie que l'utilisateur n'existe pas déjà dans la base de données
        const userExists = await User.findOne({ email: userData.email });
        if (userExists) {
            throw new Error('User already exists');
        }

        // on hash le mot de passe de l'utilisateur avant de le stocker dans la base de données
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(userData.password, salt);

        // on crée l'utilisateur dans la base de données
        const user = new User({
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
        });

        await user.save();

        return user;
    }
}

module.exports = UserService;

