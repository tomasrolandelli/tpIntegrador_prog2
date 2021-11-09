//EXPRESS
var express = require('express');
var router = express.Router();

const postController = require('../controllers/postController')

// PRUEBAS
router.get('/findAll', postController.findAll)
router.get('/details', postController.detail)

//PARA VER VISTAS
router.get('/agregar', postController.indexAgregar)
router.get('/detalle', postController.indexDetalle)
router.get('/resultadoBusqueda', postController.search)




//EXPORTAR
module.exports = router