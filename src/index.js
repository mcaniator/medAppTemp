const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

//Database Connection

const db = require('./Configurations/database.js');
const Medico = require('./Models/Medico');
const Paciente = require('./Models/Paciente')

db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})


const app = express();


(async () => {
    try {
        const resultado = await db.sync();
    } catch (error) {
        console.log(error);
    }
})();

const PORT = 3000;
app.listen(PORT)






