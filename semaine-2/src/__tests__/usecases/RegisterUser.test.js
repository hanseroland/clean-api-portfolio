const RegisterUser = require('../../application/usecases/RegisterUser');

describe('RegisterUser', () => {
    let registerUser;
    let mockUserRepository;
    let mockPasswordService;

    beforeEach(() => {
        // Faux repository — simule la DB
        mockUserRepository = {
            findByEmail: jest.fn(),
            save: jest.fn(),
        };

        // Faux service — simule bcrypt
        mockPasswordService = {
            hash: jest.fn(),
        };

        registerUser = new RegisterUser(mockUserRepository, mockPasswordService);
    });

    it('should register a new user successfully', async () => {
        // Arrange — prépare les données
        mockUserRepository.findByEmail.mockResolvedValue(null);
        mockPasswordService.hash.mockResolvedValue('hashedPassword123');
        mockUserRepository.save.mockResolvedValue({
            id: 1,
            name: 'Hanse Roland',
            email: 'hanse@example.com',
        });

        // Act — exécute le usecase
        const result = await registerUser.execute({
            name: 'Hanse Roland',
            email: 'hanse@example.com',
            password: 'secret123',
        });

        // Assert — vérifie le résultat
        expect(result).toHaveProperty('id', 1);
        expect(result).toHaveProperty('email', 'hanse@example.com');
        expect(mockUserRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should throw error if email already exists', async () => {
        // Arrange — l'email existe déjà
        mockUserRepository.findByEmail.mockResolvedValue({
            id: 1,
            email: 'hanse@example.com',
        });

        // Act & Assert
        await expect(
            registerUser.execute({
                name: 'Hanse Roland',
                email: 'hanse@example.com',
                password: 'secret123',
            })
        ).rejects.toThrow('Email already exists');

        // Save ne doit jamais être appelé
        expect(mockUserRepository.save).not.toHaveBeenCalled();
    });
});