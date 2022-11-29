const Medico = require('./Medico');

(async () => {
    const database = require('./db');
    const Medico = require('./Medico');
    const Paciente = require("./Paciente");
    
 
    try {
        const resultado = await database.sequelize.sync();
    } catch (error) {
        console.log(error);
    }
})();


	







//Funções de crude entram aqui