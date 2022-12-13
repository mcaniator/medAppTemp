const MedicoDao = require('../DAO/Medico_DAO');
var MedicoController = {
    addMedico: addMedico,
    findMedicos: findMedicos,
    findMedicoById: findMedicoById,
    updateMedico: updateMedico,
    deleteById: deleteById
}

function addMedico(req, res) {
    let Medico = req.body;
    MedicoDao.create(Medico).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMedicoById(req, res) {
    MedicoDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    MedicoDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Medico deleted successfully",
                Medico: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateMedico(req, res) {
    MedicoDao.updateMedico(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Medico updated successfully",
                Medico: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMedicos(req, res) {
    MedicoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = MedicoController;