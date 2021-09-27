//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let detalleUsuarioController = require('../controllers/detalleUsuarioController')

//RUTA
router.get('/:id?', detalleUsuarioController.index);

//EXPORTAR
module.exports = router