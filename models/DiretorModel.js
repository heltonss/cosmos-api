'use strict';

function DiretorModelDAO(model) {
    this.model = model;
};

DiretorModelDAO.prototype.create = function (data, callback) {
    var model = new this.model(data);
    model.save(function (err, result) {
        callback(err, result)
    });

}

DiretorModelDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);

}

DiretorModelDAO.prototype.findOne = function (_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

DiretorModelDAO.prototype.update = function (_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function (err, result) {
            callback(err, result)
        })
}

DiretorModelDAO.prototype.remove = function (_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function (err, result) {
            callback(err, result)
        });

}

module.exports = function (mongoose) {
    var diretor = mongoose.model('diretores', {
        nome: String,
        cpf: String,
        login: String,
        password: String
    });

    return new DiretorModelDAO(diretor);
}