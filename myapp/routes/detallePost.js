//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let detallePostController = require('../controllers/detallePostController')

//RUTA
router.get('/', detallePostController.index);

//EXPORTAR
module.exports = router