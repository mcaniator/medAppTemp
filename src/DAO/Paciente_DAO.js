const Paciente = require('../Models/Paciente');
var PacienteDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePaciente: updatePaciente
}

function findAll() {
    return Paciente.findAll();
}

function findById(id) {
    return Paciente.findByPk(id);
}

function deleteById(id) {
    return Paciente.destroy({ where: { id: id } });
}

function create(Paciente) {
    var newPaciente = new Paciente(Paciente);
    return newPaciente.save();
}

function updatePaciente(Paciente, id) {
    var updatePaciente = {
        nome: Paciente.nome,
        idade: Paciente.idade,
        peso: Paciente.peso,
        altura: Paciente.altura,
        sexo: Paciente.sexo,
        data: Paciente.data,
        //falta continuar

        
    };
    return Paciente.update(updatePaciente, { where: { id: id } });
}
module.exports = Paciente_DAO;