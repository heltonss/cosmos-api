'use strict'
function AlunoController(AlunoModel) {
    this.model = AlunoModel;
}

AlunoController.prototype.getAll = function (req, res, next) {
    this.model.find({}, function (err, data) {
        if(err) {
            return next(err);
        }
        res.json(data);
    })
}

module.exports = function(AlunoModel){
    return new AlunoController(AlunoModel);
};