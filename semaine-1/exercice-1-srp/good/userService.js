class UserService {
  constructor(userRepository, passwordService, emailService) {
    this.userRepository = userRepository;
    this.passwordService = passwordService;
    this.emailService = emailService;
  }

  async registerUser(userData) {
    const userExists = await this.userRepository.userExists(userData.email);
    if (userExists) throw new Error('User already exists');

    const hashedPassword = await this.passwordService.hashPassword(
      userData.password,
    );

    const user = await this.userRepository.saveUser({
      ...userData,
      password: hashedPassword,
    });

    this.emailService.sendEmail(userData.email);

    return user;
  }
}
module.exports = UserService;
