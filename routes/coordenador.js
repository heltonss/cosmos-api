'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('../db/mongoose');
var CoordenadorModel = require('../models/CoordenadorModel')(mongoose);
var CoordenadorController = require('../controllers/CoordenadorController')(CoordenadorModel);

router.get('/', CoordenadorController.getAll.bind(CoordenadorController));
router.post('/', CoordenadorController.create.bind(CoordenadorController));
router.get('/:_id', CoordenadorController.getById.bind(CoordenadorController));
router.put('/:_id', CoordenadorController.update.bind(CoordenadorController));
router.delete('/:_id', CoordenadorController.remove.bind(CoordenadorController));

module.exports = router;