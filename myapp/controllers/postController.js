const db = require('../database/models');
const post = db.Posteos
const op = db.Sequelize.Op;

const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')

const postController = {
    findAll : function(req, res){
        post.findAll()
        .then(data =>{
            return res.send(data)
        })
        .catch(error =>{
            return res.send(error)
        })
    },
    detail : function(req, res){
        post.findByPk(req.params.id)
        .then(post =>{
            return res.send(post)
        })
        .catch(error =>{
            return res.send(error)
        })
    },
    indexAgregar: function(req, res, next) {
        return res.render('agregarPost', {  });
      },
    indexDetalle: function(req, res, next) {
        return res.render('detallePost', {
          posts: dataPost.list,
          usuario: dataUser.list
         });
    },
    search: function(req, res){
        let search = req.query.result
        post.findAll({
            where: [{'description': {[op.like]: `%${search}%`}}],
            order: [['fecha', 'DESC'],],
            limit: 10
        })
        .then(post => {
            return res.send(post)
        })
        .catch(error =>{
            return res.send(error)
        })
    }
    
}
module.exports = postController