'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('../db/mongoose');
var DiretorModel = require('../models/DiretorModel')(mongoose);
var DiretorController = require('../controllers/DiretorController')(DiretorModel);

router.get('/', DiretorController.getAll.bind(DiretorController));
router.post('/', DiretorController.create.bind(DiretorController));
router.get('/:_id', DiretorController.getById.bind(DiretorController));
router.put('/:_id', DiretorController.update.bind(DiretorController));
router.delete('/:_id', DiretorController.remove.bind(DiretorController));

module.exports = router;