//EXPRESS
var express = require('express');
var router = express.Router();

const postController = require('../controllers/postController')

router.get('/findAll', postController.findAll)
router.get('/details/:id', postController.detail)


//EXPORTAR
module.exports = router