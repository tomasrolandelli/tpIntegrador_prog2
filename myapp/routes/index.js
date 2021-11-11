//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let indexController = require('../controllers/indexController')

//RUTA
router.get('/', indexController.index);



//EXPORTAR
module.exports = router;