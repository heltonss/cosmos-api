var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'COSMOS' });
});

router.use('/alunos', require('./aluno'));
router.use('/administrador', require('./administrador'))
router.use('/professores', require('./professor'))
router.use('/coordenadores', require('./coordenador'))
router.use('/diretores', require('./diretor'))
router.use('/cursos', require('./curso'))
router.use('/semestres', require('./semestre'))

module.exports = router;
