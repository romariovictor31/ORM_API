const Sequelize = require('sequelize');

const database = new Sequelize('testes', '***', '****', {
    dialect: 'mysql',
    host: 'localhost',
    port: 1111
});

database.sync();

module.exports = database;