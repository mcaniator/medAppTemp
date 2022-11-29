const express = require('express')
const sequelize  = require("./back")
const Medico = require('./Medico')
const app = express()
const port = 3000



async function findAllMedics(){
    return await Medico.findAll();
}

findAllMedics().then(console.log).catch(console.error)
/*
function findGigs(req, res) {
    gigDao.findAll(). 
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

        
*/

app.get('/medicos', (req, res) => {
  findAllMedics().then(res1 => {
    res.send(res1)
  })
  
})


app.listen(port, () => {
  console.log(`Rodando a bagaça`)
})
