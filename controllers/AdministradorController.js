'use strict'
var debug = require('debug')('cosmos:controller')
var Promise = require('bluebird');

function AdministradorController(AdministradorModel) {
    this.model = Promise.promisifyAll(AdministradorModel);
}

AdministradorController.prototype.getAll = function (req, res, next) {
    this.model.findAsync({})
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
}

AdministradorController.prototype.create = function (req, res, next) {
    var body = req.body
    this.model.createAsync(body)
        .then(function (err, data) {
            res.json(data);
        })
        .catch(next);
}

AdministradorController.prototype.getById = function (req, res, next) {
    var _id = req.params._id;
    this.model.findOneAsync(_id)
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
}

AdministradorController.prototype.update = function (req, res, next) {
    var _id = req.params._id;
    var body = req.body;
    this.model.updateAsync(_id, body)
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
}

AdministradorController.prototype.remove = function (req, res, next) {
    var _id = req.params._id;
    this.model.removeAsync(_id)
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
}

module.exports = function (AdministradorModel) {
    return new AdministradorController(AdministradorModel);
};