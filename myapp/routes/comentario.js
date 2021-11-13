//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
const comentariosController = require('../controllers/comentariosController')

//RUTA
router.get('/findAll', comentariosController.findAll)
router.get('/details/:id', comentariosController.detail)
//RUTA POST
router.post('/new-comment/:id', comentariosController.crearComentario)



//EXPORTAR
module.exports = router