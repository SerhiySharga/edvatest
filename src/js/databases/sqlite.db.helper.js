const Sequelize = require("sequelize");
const path = require("path");
const {existsSync, unlinkSync} = require("fs");

(async () => {
    if (existsSync(path.join(__dirname, '/test.db'))) {
        await unlinkSync(path.join(__dirname, '/test.db'));
    }

    const connString = `sqlite:${path.join(__dirname, '/test.db')}`;
    const sequelize = new Sequelize(connString, {
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    });

    const queryString = 'CREATE TABLE users (name TEXT)';
    await sequelize.query(queryString);

    const queryString1 = 'SELECT * FROM users';
    await sequelize.query(queryString1);
})()
