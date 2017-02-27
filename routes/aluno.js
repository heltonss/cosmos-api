'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('../db/mongoose');
var AlunoModel = require('../models/AlunoModel')(mongoose);
var AlunoController = require('../controllers/AlunoController')(AlunoModel);

router.get('/', AlunoController.getAll.bind(AlunoController));

module.exports = router;