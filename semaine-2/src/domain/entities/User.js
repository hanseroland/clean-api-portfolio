// src/domain/entities/User.js

class User {
    constructor({ id = null, name, email, password, createdAt }) {
        if (!name) throw new Error("User must have a name");
        if (!email || !email.includes("@")) throw new Error("User must have a valid email");
        if (!password || password.length < 8) throw new Error("User must have a valid password");
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt || new Date();

        Object.freeze(this);
    }

}