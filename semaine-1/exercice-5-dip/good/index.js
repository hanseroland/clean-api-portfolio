const MongoDatabase = require("./mongoDatabase");
const MySQLDatabase = require("./mySQLDatabase");
const UserService = require("./userService");

const user = {
    name: "John Doe",
    email: "john.doe@example.com"
};

const mysqlDB = new MySQLDatabase();
const userServiceMySQL = new UserService(mysqlDB);
userServiceMySQL.saveUser(user);


const mongoDB = new MongoDatabase();
const userServiceMongo = new UserService(mongoDB);
userServiceMongo.saveUser(user);
