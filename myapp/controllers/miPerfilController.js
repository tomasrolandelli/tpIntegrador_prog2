const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')

const miPerfilController = {
    index: function(req, res, next) {
        return res.render('miPerfil', {
          posts: dataPost.list,
          usuario: dataUser.list
          });
      }
}

module.exports = miPerfilController