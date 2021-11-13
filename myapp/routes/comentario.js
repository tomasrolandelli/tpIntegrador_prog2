//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
const comentariosController = require('../controllers/comentariosController')

//RUTA
router.get('/findAll', comentariosController.findAll)
router.get('/details/:id', comentariosController.detail)



//EXPORTAR
module.exports = router