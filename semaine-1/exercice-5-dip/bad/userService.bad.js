// ❌ VIOLATION DIP — bad/userService.bad.js
// [1] UserService instancie MySQLDatabase directement → couplage fort
// [2] Changer de DB → modifier UserService → risque de régression
// [3] Impossible de tester UserService sans une vraie base MySQL

class MySQLDatabase {
    save(data) {
        console.log(`Saving ${data} to MySQL...`);
    }
}

class UserService {
    constructor() {
        this.database = new MySQLDatabase(); // problème : dépendance directe à MySQLDatabase
    }

    saveUser(user) {
        this.database.save(user);
    }
}

module.exports = UserService;