// src/application/usecases/RegisterUser.js

class RegisterUser {
    constructor(userRepository, passwordService) {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
    }

    async execute(userData) {
        // Règle métier — email unique
        const existing = await this.userRepository.findByEmail(userData.email);
        if (existing) throw new Error('Email already exists');

        // Hashage du mot de passe
        const hashedPassword = await this.passwordService.hash(userData.password);

        // Création de l'entité
        const user = {
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
        };

        return this.userRepository.save(user);
    }
}

module.exports = RegisterUser;