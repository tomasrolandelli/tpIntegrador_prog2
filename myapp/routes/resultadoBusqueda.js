//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let resultadoBusquedaController = require('../controllers/resultadoBusquedaController')

//RUTA
router.get('/', resultadoBusquedaController.index);

//EXPORTAR
module.exports = router