'use strict';

function AlunoModelDAO(model) {
    this.model = model;
};

AlunoModelDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);
        
}

module.exports = function(mongoose){
    var alunos = mongoose.model('aluno',{
        nome: String,
        curso: String
    });

    return new AlunoModelDAO(alunos);
}