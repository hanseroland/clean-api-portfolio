const DatabaseManager = require("./databaseManager");

class MySQLDatabase extends DatabaseManager {
    save(data) {
        console.log("Data saved in MySQL : ", data);
    }
}

module.exports = MySQLDatabase;