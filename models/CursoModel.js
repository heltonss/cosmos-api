'use strict';

function CursoModelDAO(model) {
    this.model = model;
};

CursoModelDAO.prototype.create = function (data, callback) {
    var model = new this.model(data);
    model.save(function (err, result) {
        callback(err, result)
    });

}

CursoModelDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);

}

CursoModelDAO.prototype.findOne = function (_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

CursoModelDAO.prototype.update = function (_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function (err, result) {
            callback(err, result)
        })

}

CursoModelDAO.prototype.remove = function (_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function (err, result) {
            callback(err, result)
        });

}

module.exports = function (mongoose) {
    var Curso = mongoose.model('cursos', {
        nome: String,
        semestres: Array
    });

    return new CursoModelDAO(Curso);
}