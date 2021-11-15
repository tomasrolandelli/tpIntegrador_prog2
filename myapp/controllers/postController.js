const db = require('../database/models');
const post = db.Posteos
const op = db.Sequelize.Op;

//FindAll de posteos
const postController = {
    findAll : function(req, res){
        post.findAll({
            include: [
            {association: "usuario"},
            {association: "comentarios"}
            ]
            })
        .then(data =>{
            return res.send(data)
        })
        .catch(error =>{
            return res.send(error)
        })
    },

//Agregar post
    indexAgregar: function(req, res, next) {
        return res.render('agregarPost', {  });
    },

//new 
    new: function(req, res, next) {
        let date_ob = new Date()
        post.create({
            userId: req.session.user.id, 
            foto: req.file.filename, 
            description: req.body.pie, 
            fecha: date_ob,
        }) 
        .then(post => {
            res.redirect('/usuario/mi-perfil')
            
        }) .catch(
            err=>{
                console.log(err);
                res.send(err)
        
        } )
    }, 

    //Borrar post 
    borrar: function(req, res) {
        let id = req.params.id
        post.destroy({
            where: {
                id: id
            }
        })
        .then(post => {
            res.redirect('/usuario/mi-perfil')
        })

    },

//Detalle del post
    indexDetalle: function(req, res, next) {
        post.findByPk(req.params.id, {
            include: [
            {
                all: true,
                nested: true
            }
            ]
            })
        .then(posteo =>{
            return res.render('detallePost', {posteo: posteo})
        })
        .catch(error =>{
            return res.send(error)
        })
    },

//Buscar post por descripcion
    search: function(req, res){
        let search = req.query.result
        post.findAll({
            where: [{'description': {[op.like]: `%${search}%`}}],
            order: [['fecha', 'DESC'],],
            limit: 10,
            include: [
        {association: "usuario"},
        {association: "comentarios"}
        ]
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