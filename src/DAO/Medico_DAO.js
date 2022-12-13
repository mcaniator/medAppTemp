const Medico = require('../Models/Medico');
var medicoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateMedico: updateMedico
}

function findAll() {
    return Medico.findAll();
}

function findById(id) {
    return Medico.findByPk(id);
}

function deleteById(id) {
    return Medico.destroy({ where: { id: id } });
}

function create(medico) {
    var newMedico = new Medico(medico);
    return newMedico.save();
}

function updateMedico(medico, id) {
    var updateMedico = {
        nome: medico.nome,
        crm:medico.crm
    };
    return Medico.update(updateMedico, { where: { id: id } });
}
module.exports = Medico_DAO;