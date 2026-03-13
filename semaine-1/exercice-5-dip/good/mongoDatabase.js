const DatabaseManager = require("./databaseManager");

class MongoDatabase extends DatabaseManager {
    save(data) {
        console.log("Data saved in MongoDB : ", data);
    }
}

module.exports = MongoDatabase;