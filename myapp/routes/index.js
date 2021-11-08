//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let indexController = require('../controllers/indexController')

//RUTA
router.get('/', indexController.index);
router.get('/prueba', indexController.showEjemplo);



//EXPORTAR
module.exports = router;