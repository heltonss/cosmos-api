'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('../db/mongoose');
var SemestreModel = require('../models/SemestreModel')(mongoose);
var SemestreController = require('../controllers/SemestreController')(SemestreModel);

router.get('/', SemestreController.getAll.bind(SemestreController));
router.post('/', SemestreController.create.bind(SemestreController));
router.get('/:_id', SemestreController.getById.bind(SemestreController));
router.put('/:_id', SemestreController.update.bind(SemestreController));
router.delete('/:_id', SemestreController.remove.bind(SemestreController));

module.exports = router;