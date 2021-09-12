//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let agregarPostController = require('../controllers/agregarPostController')

//RUTA
router.get('/', agregarPostController.index);

//EXPORTAR
module.exports = router