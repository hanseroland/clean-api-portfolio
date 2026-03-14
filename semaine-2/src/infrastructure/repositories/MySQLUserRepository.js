const IUserRepository = require('../../domain/repositories/IUserRepository');

class MySQLUserRepository extends IUserRepository {
    constructor(pool) {
        super();
        this.pool = pool;
    }

    async findByEmail(email) {
        const [rows] = await this.pool.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        return rows[0] || null;
    }

    async save(userData) {
        const [result] = await this.pool.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [userData.name, userData.email, userData.password]
        );
        return {
            id: result.insertId,
            name: userData.name,
            email: userData.email,
        };
    }

    async findById(id) {
        const [rows] = await this.pool.execute(
            'SELECT id, name, email, createdAt FROM users WHERE id = ?',
            [id]
        );
        return rows[0] || null;
    }
}

module.exports = MySQLUserRepository;