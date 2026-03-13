class UserService {
    constructor(databaseManager) {
        this.databaseManager = databaseManager
    }

    saveUser(user) {
        console.log("utilisateur enregistré")

        this.databaseManager.save(user)
    }

}

module.exports = UserService