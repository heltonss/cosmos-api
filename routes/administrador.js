'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('../db/mongoose');
var AdministradorModel = require('../models/AdministradorModel')(mongoose);
var AdministradorController = require('../controllers/AdministradorController')(AdministradorModel);

router.get('/', AdministradorController.getAll.bind(AdministradorController));
router.post('/', AdministradorController.create.bind(AdministradorController));
router.get('/:_id', AdministradorController.getById.bind(AdministradorController));
router.put('/:_id', AdministradorController.update.bind(AdministradorController));
router.delete('/:_id', AdministradorController.remove.bind(AdministradorController));

module.exports = router;