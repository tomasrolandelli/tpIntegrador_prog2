const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')

const detallePostController = {
    index: function(req, res, next) {
        return res.render('detallePost', {
          posts: dataPost.list,
          usuario: dataUser.list
         });
      }
}

module.exports = detallePostController