var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'COSMOS' });
});

router.use('/aluno', require('./aluno'));
router.use('/administrador', require('./administrador'))
router.use('/professor', require('./professor'))
router.use('/coordenador', require('./coordenador'))
router.use('/diretor', require('./diretor'))
router.use('/curso', require('./curso'))
router.use('/semestre', require('./semestre'))

module.exports = router;
