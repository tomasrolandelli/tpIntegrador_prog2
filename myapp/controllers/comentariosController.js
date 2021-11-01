const db = require('../database/models');
const comentario = db.Comentarios

const comentarioController = {
    findAll : function(req, res){
        comentario.findAll()
        .then(data =>{
            return res.send(data)
        })
        .catch(error =>{
            return res.send(error)
        })
    },
    detail : function(req, res){
        comentario.findByPk(req.params.id)
        .then(comentario =>{
            return res.send(comentario)
        })
        .catch(error =>{
            return res.send(error)
        })
    }
}
module.exports = comentarioController