//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
const postController = require('../controllers/postController')

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


//RUTA GET
router.get('/agregar',  postController.indexAgregar)
router.get('/detalle/:id', postController.indexDetalle)
router.get('/resultadoBusqueda', postController.search)
router.get('/findAll', postController.findAll)

//ruta POST
router.post('/new', upload.single('fotopost'), postController.new)
router.post('/borrar/:id', postController.borrar)







//EXPORTAR
module.exports = router