//EXPRESS
var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })

//GET
router.get('/detalle', userController.indexDetalle)
router.get('/editar', userController.indexEditar)
router.get('/mi-perfil', userController.indexMiPerfil)
router.get('/login', userController.loginIndex)
router.get('/registracion', userController.indexRegistracion)

//POST
router.post('/registracion',upload.single('fotoperfil'), userController.register)
router.post('/login',userController.processLogin)
router.post('/logout',userController.logout)




//PRUEBA
router.get('/findAll', userController.findAll)
router.get('/details/:id', userController.detail)



//EXPORTAR
module.exports = router