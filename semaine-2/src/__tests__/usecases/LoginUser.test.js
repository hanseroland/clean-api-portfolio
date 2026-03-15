const LoginUser = require('../../application/usecases/LoginUser');

describe('LoginUser', () => {
    let loginUser;
    let mockUserRepository;
    let mockPasswordService;
    let mockTokenService;

    beforeEach(() => {
        // Faux repository — simule la DB
        mockUserRepository = {
            findByEmail: jest.fn(),
        };

        // Faux service — simule bcrypt
        mockPasswordService = {
            compare: jest.fn(),
        };

        // Faux service — simule jsonwebtoken
        mockTokenService = {
            generate: jest.fn(),
        };

        loginUser = new LoginUser(mockUserRepository, mockPasswordService, mockTokenService);
    });

    it('should login successfully with correct credentials', async () => {
        // l'email existe déjà
        mockUserRepository.findByEmail.mockResolvedValue({
            id: 1,
            email: 'hanse@example.com',
            password: 'hashedPassword123',
        });
        mockPasswordService.compare.mockResolvedValue(true); // ← password correct
        mockTokenService.generate.mockReturnValue('fake-jwt-token');

        // Act
        const result = await loginUser.execute({
            email: 'hanse@example.com',
            password: 'secret123',
        });

        // Assert
        expect(result).toBe('fake-jwt-token'); // ← Login retourne un token
        expect(mockTokenService.generate).toHaveBeenCalledTimes(1);
    });

    it('should throw error if email does not exist', async () => {
        // Arrange — findByEmail retourne null
        mockUserRepository.findByEmail.mockResolvedValue(null);

        // Act & Assert
        await expect(
            loginUser.execute({
                email: 'inexistant@example.com',
                password: 'secret123',
            })
        ).rejects.toThrow('Invalid email or password');

        // compare ne doit jamais être appelé
        expect(mockPasswordService.compare).not.toHaveBeenCalled();
    });

    it('should throw error if password is incorrect', async () => {
        // Arrange
        mockUserRepository.findByEmail.mockResolvedValue({
            id: 1,
            email: 'hanse@example.com',
            password: 'hashedPassword123',
        });
        mockPasswordService.compare.mockResolvedValue(false); // ← mauvais password

        // Act & Assert
        await expect(
            loginUser.execute({
                email: 'hanse@example.com',
                password: 'wrongPassword',
            })
        ).rejects.toThrow('Invalid email or password');

        expect(mockTokenService.generate).not.toHaveBeenCalled();
    });



});