'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('../db/mongoose');
var AlunoModel = require('../models/AlunoModel')(mongoose);
var AlunoController = require('../controllers/AlunoController')(AlunoModel);

router.get('/', AlunoController.getAll.bind(AlunoController));
router.post('/', AlunoController.create.bind(AlunoController));
router.get('/:_id', AlunoController.getById.bind(AlunoController));
router.put('/:_id', AlunoController.update.bind(AlunoController));
router.delete('/:_id', AlunoController.remove.bind(AlunoController));

module.exports = router;