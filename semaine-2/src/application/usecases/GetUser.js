class GetUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId) {

        const existing = await this.userRepository.findById(userId);
        if (!existing) throw new Error('User not found');


        return {
            id: existing.id,
            name: existing.name,
            email: existing.email,
            createdAt: existing.createdAt
        };

    }

}

module.exports = GetUser;