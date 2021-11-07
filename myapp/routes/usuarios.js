//EXPRESS
var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

//GET
router.get('/detalle', userController.indexDetalle)
router.get('/editar', userController.indexEditar)
router.get('/mi-perfil', userController.indexMiPerfil)
router.get('/login', userController.indexLogin)
router.get('/registracion', userController.indexRegistracion)

//POST
router.post('/registracion', userController.register)







//PRUEBA
router.get('/findAll', userController.findAll)
router.get('/details/:id', userController.detail)




//EXPORTAR
module.exports = router