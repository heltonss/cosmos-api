'use strict';

function AdministradorModelDAO(model) {
    this.model = model;
};

AdministradorModelDAO.prototype.create = function (data, callback) {
    var model = new this.model(data);
    model.save(function (err, result) {
        callback(err, result)
    });

}

AdministradorModelDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);

}

AdministradorModelDAO.prototype.findOne = function (_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

AdministradorModelDAO.prototype.update = function (_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function (err, result) {
            callback(err, result)
        })

}

AdministradorModelDAO.prototype.remove = function (_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function (err, result) {
            callback(err, result)
        });

}

module.exports = function (mongoose) {
    var administrador = mongoose.model('administradores', {
        nome: String,
        sobrenome: String,
        email: String,
        cargo: String,
        login: String
    });

    return new AdministradorModelDAO(administrador);
}