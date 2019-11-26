const sequelize = require('sequelize');

const connection = new sequelize('logindatabase','root','root', {
    host : 'localhost',
    dialect : 'mysql',
    operatorsAliases : false,
    pool : {
        max : 5,
        min : 0
    }
});