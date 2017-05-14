'use strict';

function AlunoModelDAO(model) {
    this.model = model;
};

AlunoModelDAO.prototype.create = function (data, callback) {
    var model = new this.model(data);
    model.save(function (err, result) {
        callback(err, result)
    });

}

AlunoModelDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);

}

AlunoModelDAO.prototype.findOne = function (_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

AlunoModelDAO.prototype.update = function (_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function (err, result) {
            callback(err, result)
        })

}

AlunoModelDAO.prototype.remove = function (_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function (err, result) {
            callback(err, result)
        });

}

module.exports = function (mongoose) {
    var aluno = mongoose.model('alunos', {
        nome: String,
        sobrenome: String,
        dataNascimento: Date,
        naturalidade: String,
        sexo: String,
        foto: String,
        disciplinas: Array,
        matricula: Object,
        endereco: Object,
        contato: Object
    });

    return new AlunoModelDAO(aluno);
}