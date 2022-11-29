const Sequelize = require('sequelize');

const sequelize =  new Sequelize('postgresql://admin:admin@localhost:5432/medapp',{dialect:'postgres'});


module.exports = {Sequelize,sequelize}

/*module.exports = {
HOST: "localhost",
USER: "admin",
PASSWORD: "admin",
DB: "medapp",
dialect: "postgres", 
};
*/



