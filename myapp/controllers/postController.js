const db = require('../database/models/index.js');
const post = db.Posteos
const op = db.Sequelize.Op;

//FindAll de posteos
const postController = {
    findAll : function(req, res){
        post.findAll({
            include: [
            {association: "usuario"},
            {association: "comentarios"}]
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
//EDITAR POST
    indexEditar: function(req, res, next) {
        if(req.session.user != undefined){
            post.findByPk(req.params.id,)
            .then(posteo =>{
                return res.render('editarPost', {posteo: posteo});
            })  
        } else {
            res.redirect("/usuario/login")
        }
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

    //Editar post

    editar: function(req, res) {
        post.update({
            description: req.body.pie,
            foto: req.file.filename,

        }, 
        {where: {
                id: req.params.id
            }
        })
        .then(post => {
            res.redirect('/usuario/mi-perfil')
        })
        .catch(error =>{
            console.log(error);
            return res.send(error)
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
            ],
            order: [['comentarios','fecha','desc']]
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
          {
            all: true,
            nested: true
        }
        ],
        })
        .then(posteos => {
            return res.render('resultadoBusqueda', {
                posteos: posteos,
                resultado: search
            })
        })
        .catch(error =>{
            return res.send(error)
        })
    }
}
module.exports = postController