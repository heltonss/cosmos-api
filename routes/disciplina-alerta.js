'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('../db/mongoose');
var DisciplinaAlertaModel = require('../models/DisciplinaAlertaModel')(mongoose);
var DisciplinaAlertaController = require('../controllers/SemestreController')(DisciplinaAlertaModel);

router.get('/', DisciplinaAlertaController.getAll.bind(DisciplinaAlertaController));
router.post('/', DisciplinaAlertaController.create.bind(DisciplinaAlertaController));
router.get('/:_id', DisciplinaAlertaController.getById.bind(DisciplinaAlertaController));
router.put('/:_id', DisciplinaAlertaController.update.bind(DisciplinaAlertaController));
router.delete('/:_id', DisciplinaAlertaController.remove.bind(DisciplinaAlertaController));

module.exports = router;