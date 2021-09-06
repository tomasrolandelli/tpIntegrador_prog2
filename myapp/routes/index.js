var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get home page en todos lados
router.get('/index.ejs', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get detalleUsuario
router.get('/detalleUsuario.ejs', function(req, res, next) {
  res.render('detalleUsuario', { title: 'Express' });
});

//Get detallePost
router.get('/detallePost.ejs', function(req, res, next) {
  res.render('detallePost', { title: 'Express' });
});

//Get login
router.get('/login.ejs', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

//Get registracion
router.get('/registracion.ejs', function(req, res, next) {
  res.render('registracion', { title: 'Express' });
});

//Get agregarPost
router.get('/agregarPost.ejs', function(req, res, next) {
  res.render('agregarPost', { title: 'Express' });
});

//Get Resultado Busqueda NO ENCUENTRO HTML DE RESULTADOBUSQUEDA
router.get('/resultadoBusqueda.ejs', function(req, res, next) {
  res.render('resultadoBusqueda', { title: 'Express' });
});

//Get partials
router.get('/partials/footer.ejs', function(req, res, next) {
  res.render('footer', { title: 'Express' });
});

module.exports = router;
