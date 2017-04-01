var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/aluno', require('./aluno'));
router.use('/administrador', require('./administrador'))
router.use('/professor', require('./professor'))
router.use('/coordenador', require('./coordenador'))
router.use('/diretor', require('./diretor'))

module.exports = router;
