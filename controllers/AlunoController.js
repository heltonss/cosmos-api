'use strict'
function AlunoController() {}

AlunoController.prototype.getAll = function (req, res, next) {
    res.send('todos os alunos');
}

module.exports = new AlunoController();