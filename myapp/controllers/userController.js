const db = require('../database/models');
const usuario = db.Usuario
const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')

const userController = {
    indexDetalle: function(req, res, next) {
        return res.render('detalleUsuario', {
          posts: dataPost.list,
          usuario: dataUser.list
          });
    },
    indexEditar: function(req, res, next) {
        return res.render('editarPerfil', {  });
      },
      indexMiPerfil: function(req, res, next) {
        return res.render('miPerfil', {
          posts: dataPost.list,
          usuario: dataUser.list
          });
      },
      indexLogin: function(req, res, next) {
        return res.render('login', {  });
      },
      indexRegistracion: function(req, res, next) {
        return res.render('registracion', {  });
      },
    findAll : function(req, res){
        usuario.findAll()
        .then(data =>{
            return res.send(data)
        })
        .catch(error =>{
            return res.send(error)
        })
    },
    detail : function(req, res){
        usuario.findByPk(req.params.id)
        .then(usuario =>{
            return res.send(usuario)
        })
        .catch(error =>{
            return res.send(error)
        })
    }
}
module.exports = userController