
const Sequelize = require('sequelize'); 
const database = require('./db');

const Medico = database.sequelize.define('medico',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
    }
)


module.exports = Medico;