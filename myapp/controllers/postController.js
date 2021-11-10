const db = require('../database/models');
const post = db.Posteos
const op = db.Sequelize.Op;

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
    indexAgregar: function(req, res, next) {
        return res.render('agregarPost', {  });
      },
    indexDetalle: function(req, res, next) {
        post.findByPk(req.params.id)
        .then(post =>{
            return res.send(post)
        })
        .catch(error =>{
            return res.send(error)
        })
    },
    search: function(req, res){
        let search = req.query.result
        post.findAll({
            where: [{'description': {[op.like]: `%${search}%`}}],
            order: [['fecha', 'DESC'],],
            limit: 10
        })
        .then(posteos => {
            return res.render('resultadoBusqueda', {posteos: posteos})
        })
        .catch(error =>{
            return res.send(error)
        })
    }
    
}
module.exports = postController