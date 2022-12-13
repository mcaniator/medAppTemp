const Sequelize = require('sequelize');

//const db =  new Sequelize('postgresql://admin:admin@localhost:5432/medapp',{dialect:'postgres'});


const db = new Sequelize('medapp', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    port:5432,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});



module.exports = db;






