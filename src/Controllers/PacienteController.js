const PacienteDao = require('../DAO/Paciente_DAO');
var PacienteController = {
    addPaciente: addPaciente,
    findPacientes: findPacientes,
    findPacienteById: findPacienteById,
    updatePaciente: updatePaciente,
    deleteById: deleteById
}

function addPaciente(req, res) {
    let Paciente = req.body;
    PacienteDao.create(Paciente).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPacienteById(req, res) {
    PacienteDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    PacienteDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Paciente deleted successfully",
                Paciente: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePaciente(req, res) {
    PacienteDao.updatePaciente(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Paciente updated successfully",
                Paciente: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPacientes(req, res) {
    PacienteDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = PacienteController;