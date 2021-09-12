//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let registracionController = require('../controllers/registracionController')

//RUTA
router.get('/', registracionController.index);

//EXPORTAR
module.exports = router