const Sequelize = require('sequelize');
const db = require('../Configurations/database.js');



const Medico = db.define('medico',{
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
    crm:{
        type: Sequelize.STRING,
        allowNull: false
    }
    }
)

module.exports = Medico;

