const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')
const db = require('../database/models')

const indexController = {
    index: function(req, res, next) {
        return res.render('index', {
          posts: dataPost.list,
          usuario: dataUser.list
        });
    },
    showEjemplo: function(req,res,next){
      db.Posteos.findAll()
      .then(posteos => {
        return res.render('index2', {posteos: posteos})
      })
      .catch(error => {
        return res.send(error)
      })
    },
    showEjemplo2: function(req,res,next){
      db.Usuarios.findAll()
      .then(usuarios => {
        return res.render('index2', {usuarios: usuarios})
      })
      .catch(error => {
        return res.send(error)
      })
    }
}

module.exports = indexController