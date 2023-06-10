const { Sequelize } = require('sequelize');

const dbConfig = {
    database: 'Todo',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'mysql',
};

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
    }
);

async function testDBConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sequelize, testDBConnection };
