const db = require('./db');

module.exports = class User {

    static async findAll(user) {
        const result = await db.query('SELECT * FROM "user"', [user]);

    }

}