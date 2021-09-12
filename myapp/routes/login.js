//EXPRESS
var express = require('express');
var router = express.Router();

//VARIABLES
let loginController = require('../controllers/loginController')

//RUTA
router.get('/', loginController.index);

//EXPORTAR
module.exports = router