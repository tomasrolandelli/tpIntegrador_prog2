//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let editarPerfilController = require('../controllers/editarPerfilController')

//RUTA
router.get('/', editarPerfilController.index);

//EXPORTAR
module.exports = router