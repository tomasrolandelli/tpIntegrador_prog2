const db = require('../database/models');
const comentario = db.Comentarios

//FindAll de comentarios
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
//Crear comentario
crearComentario:function(req, res){
    if (req.session.user != undefined){
        let date_ob = new Date()
        comentario.create({
            userId: req.session.user.id,
            postId: req.params.id,
            comentario: req.body.comentario,
            fecha: date_ob
        })
        .then(comment =>{
            res.redirect('/post/detalle/' + req.params.id)
        })
    } else {
        res.redirect("/usuario/login")
    }
},

//FindByPk de comentarios
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