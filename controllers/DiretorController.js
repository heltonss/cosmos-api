'use strict'
var debug = require('debug')('cosmos:controller')
var Promise = require('bluebird');

function DiretorController(DiretorModel) {
    this.model = Promise.promisifyAll(DiretorModel);
}

DiretorController.prototype.getAll = function (req, res, next) {
    this.model.findAsync({})
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
}

DiretorController.prototype.create = function (req, res, next) {
    var body = req.body
    this.model.createAsync(body)
        .then(function (err, data) {
            res.json(data);
        })
        .catch(next);
}

DiretorController.prototype.getById = function (req, res, next) {
    var _id = req.params._id;
    this.model.findOneAsync(_id)
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
}

DiretorController.prototype.update = function (req, res, next) {
    var _id = req.params._id;
    var body = req.body;
    this.model.updateAsync(_id, body)
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
}

DiretorController.prototype.remove = function (req, res, next) {
    var _id = req.params._id;
    this.model.removeAsync(_id)
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
}

module.exports = function (DiretorModel) {
    return new DiretorController(DiretorModel);
};