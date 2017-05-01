'use strict';

function SemestreModelDAO(model) {
    this.model = model;
};

SemestreModelDAO.prototype.create = function (data, callback) {
    var model = new this.model(data);
    model.save(function (err, result) {
        callback(err, result)
    });

}

SemestreModelDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);

}

SemestreModelDAO.prototype.findOne = function (_id, callback) {
    var query = { _id: _id }
    this.model.findOne(query).exec(callback);

}

SemestreModelDAO.prototype.update = function (_id, data, callback) {
    var query = { _id: _id }
    this.model.update(query, data).exec(
        function (err, result) {
            callback(err, result)
        })

}

SemestreModelDAO.prototype.remove = function (_id, callback) {
    var query = { _id: _id }
    this.model.remove(query).exec(
        function (err, result) {
            callback(err, result)
        });

}

module.exports = function (mongoose) {
    var Semestre = mongoose.model('semestres', {
        curso: String,
        semestres: Object,
    });

    return new SemestreModelDAO(Semestre);
}