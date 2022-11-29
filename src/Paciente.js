const Sequelize = require('sequelize'); 
const database = require('./db');

const Paciente = database.sequelize.define('paciente',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    vivo:{
        type: Sequelize.BOOLEAN,
        allowNull :false,
    }
    }
)

module.exports = Paciente;