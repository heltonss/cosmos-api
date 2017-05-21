'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('../db/mongoose');
var CursoModel = require('../models/CursoModel')(mongoose);
var CursoController = require('../controllers/CursoController')(CursoModel);

router.get('/', CursoController.getAll.bind(CursoController));
router.post('/', CursoController.create.bind(CursoController));
router.get('/:_id', CursoController.getById.bind(CursoController));
router.put('/:_id', CursoController.update.bind(CursoController));
router.delete('/:_id', CursoController.remove.bind(CursoController));

module.exports = router;