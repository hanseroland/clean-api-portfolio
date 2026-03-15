class LoginUser {
    constructor(userRepository, passwordService, tokenService) {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
        this.tokenService = tokenService;
    }

    async execute(userData) {

        const existing = await this.userRepository.findByEmail(userData.email);
        if (!existing) throw new Error('Invalid email or password');

        const validPassword = await this.passwordService.compare(userData.password, existing.password);
        if (!validPassword) throw new Error('Invalid email or password');


        return this.tokenService.generate({ userId: existing.id });

    }

}

module.exports = LoginUser;