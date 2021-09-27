const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')

const detalleUsuarioController = {
    index: function(req, res, next) {
        return res.render('detalleUsuario', {
          posts: dataPost.list,
          usuario: dataUser.list
          });
      }
}

module.exports = detalleUsuarioController