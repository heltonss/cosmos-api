'use strict';

function CoordenadorModelDAO(model) {
    this.model = model;
};

CoordenadorModelDAO.prototype.create = function (data, callback) {
    var model = new this.model(data);
    model.save(function (err, result) {
        callback(err, result)
    });

}

CoordenadorModelDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);

}

CoordenadorModelDAO.prototype.findOne = function (_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

CoordenadorModelDAO.prototype.update = function (_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function (err, result) {
            callback(err, result)
        })

}

CoordenadorModelDAO.prototype.remove = function (_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function (err, result) {
            callback(err, result)
        });

}

module.exports = function (mongoose) {
    var coordenador = mongoose.model('coordenadores', {
        nome: String,
        cpf: String,
        login: String,
        password: String
    });

    return new CoordenadorModelDAO(coordenador);
}