// src/domain/repositories/IUserRepository.js
// Contrat pur — aucune implémentation, aucune dépendance

class IUserRepository {
    async findByEmail(email) {
        throw new Error('findByEmail() must be implemented');
    }

    async findById(id) {
        throw new Error('findById() must be implemented');
    }

    async save(user) {
        throw new Error('save() must be implemented');
    }
}

module.exports = IUserRepository;