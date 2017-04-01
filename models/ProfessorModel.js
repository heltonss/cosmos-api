'use strict';

function ProfessorModelDAO(model) {
    this.model = model;
};

ProfessorModelDAO.prototype.create = function (data, callback) {
    var model = new this.model(data);
    model.save(function (err, result) {
        callback(err, result)
    });

}

ProfessorModelDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);

}

ProfessorModelDAO.prototype.findOne = function (_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

ProfessorModelDAO.prototype.update = function (_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function (err, result) {
            callback(err, result)
        })

}

ProfessorModelDAO.prototype.remove = function (_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function (err, result) {
            callback(err, result)
        });

}

module.exports = function (mongoose) {
    var Professor = mongoose.model('professores', {
        nome: String,
        cpf: String,
        login: String,
        password: String
    });

    return new ProfessorModelDAO(Professor);
}