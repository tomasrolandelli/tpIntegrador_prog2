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
        return res.send(posteos)
      })
    }
}

module.exports = indexController