const Sequelize = require('sequelize');
const db = require('../Configurations/database.js');

const Paciente = db.define('paciente',{
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
    idade:{
        type: Sequelize.INTEGER,
        allowNull :false,
    },
    pesoKg:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    alturaMetros:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    sexo:{
        type: Sequelize.CHAR,
        allowNull :false,
    },
    data:{
        type: Sequelize.DATE,
        allowNull :false,
    },
    pacO2mmHG:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    hcO3n:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    paO2mmHG:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    saO2perCent:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    peCO2:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    fiO2perCent:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    hbgdl:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    rfIrpm:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    relacaoInsExp:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    volumeCorrenteml:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    peepCmH2O:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    pressaoPlato:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    autoPeep:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    fluxoResp:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },
    pressaoBarometrica:{
        type: Sequelize.FLOAT,
        allowNull :false,
    },

    }
)

module.exports = Paciente;