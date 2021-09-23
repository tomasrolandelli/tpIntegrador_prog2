//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let indexController = require('../controllers/indexController')
let detallePostController = require('../controllers/detallePostController')
let detalleUsuarioController = require('../controllers/detalleUsuarioController')


//RUTA
router.get('/', indexController.index);
router.get('/detalle-post', detallePostController.index);
router.get('/detalle-usuario', detalleUsuarioController.index);


//EXPORTAR
module.exports = router;