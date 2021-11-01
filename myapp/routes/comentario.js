//EXPRESS
var express = require('express');
var router = express.Router();

const comentariosController = require('../controllers/comentariosController')

router.get('/findAll', comentariosController.findAll)
router.get('/details/:id', comentariosController.detail)


//EXPORTAR
module.exports = router