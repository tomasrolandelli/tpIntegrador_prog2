//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let miPerfilController = require('../controllers/miPerfilController')

//RUTA
router.get('/', miPerfilController.index);

//EXPORTAR
module.exports = router