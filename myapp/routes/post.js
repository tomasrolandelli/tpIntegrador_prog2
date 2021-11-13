//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
const postController = require('../controllers/postController')

//RUTA
router.get('/agregar', postController.indexAgregar)
router.get('/detalle', postController.indexDetalle)
router.get('/resultadoBusqueda', postController.search)
router.get('/findAll', postController.findAll)



//EXPORTAR
module.exports = router