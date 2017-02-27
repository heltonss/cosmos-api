'use strict';
var express = require('express');
var router  = express.Router();

var AlunoController = require('../controllers/AlunoController');

router.get('/', AlunoController.getAll);

module.exports = router;