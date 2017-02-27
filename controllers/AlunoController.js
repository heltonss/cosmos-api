'use strict'
var debug = require('debug')('cosmos:controller')
var Promise = require('bluebird');

function AlunoController(AlunoModel) {
    this.model = Promise.promisifyAll(AlunoModel);
}

AlunoController.prototype.getAll = function(req, res, next) {
    this.model.findAsync({})
        .then(function(data){
            res.json(data);
        })
        .catch(next);
}

module.exports = function(AlunoModel){
    return new AlunoController(AlunoModel);
};