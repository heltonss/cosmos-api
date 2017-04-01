'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('../db/mongoose');
var ProfessorModel = require('../models/ProfessorModel')(mongoose);
var ProfessorController = require('../controllers/ProfessorController')(ProfessorModel);

router.get('/', ProfessorController.getAll.bind(ProfessorController));
router.post('/', ProfessorController.create.bind(ProfessorController));
router.get('/:_id', ProfessorController.getById.bind(ProfessorController));
router.put('/:_id', ProfessorController.update.bind(ProfessorController));
router.delete('/:_id', ProfessorController.remove.bind(ProfessorController));

module.exports = router;