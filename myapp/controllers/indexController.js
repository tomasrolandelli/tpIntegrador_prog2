const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')
const db = require('../database/models')

const indexController = {
    index: function(req,res){
      db.Posteos.findAll({
        include: [
        {association: "usuario"},
        {association: "comentarios"}
        ]
        })
      .then(posteos => {
        return res.render('index', {posteos: posteos})
      })
      .catch(error => {
        return res.send(error)
      })
  },
  
}

module.exports = indexController