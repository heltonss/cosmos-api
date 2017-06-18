'use strict';

function DisciplinaAlertaModelDAO(model) {
    this.model = model;
};

DisciplinaAlertaModelDAO.prototype.create = function (data, callback) {
    var model = new this.model(data);
    model.save(function (err, result) {
        callback(err, result)
    });

}

DisciplinaAlertaModelDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);

}

DisciplinaAlertaModelDAO.prototype.findOne = function (_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

DisciplinaAlertaModelDAO.prototype.update = function (_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function (err, result) {
            callback(err, result)
        })
}

DisciplinaAlertaModelDAO.prototype.remove = function (_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function (err, result) {
            callback(err, result)
        });

}

module.exports = function (mongoose) {
    var DisciplinaAlerta = mongoose.model('disciplina-alerta', {
        ano: String,
        curso: String,
        semestre: String,
        disciplina: String,
        professor: String,
        qtdAulas: Number,
        qtdFaltas: Number,
        alunosMatriculados: Array
    });

    return new DisciplinaAlertaModelDAO(DisciplinaAlerta);
}