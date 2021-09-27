const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')

const indexController = {
    index: function(req, res, next) {
        return res.render('index', {
          posts: dataPost.list,
          usuario: dataUser.list
        });
    },
}

module.exports = indexController