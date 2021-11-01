//EXPRESS
var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

router.get('/', userController.index)
router.get('/findAll', userController.findAll)
router.get('/details/:id', userController.detail)


//EXPORTAR
module.exports = router