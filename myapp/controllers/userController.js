const db = require('../database/models');
const op = db.Sequelize.Op;
const usuario = db.Usuario
const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')
let bcrypt = require('bcryptjs')

const userController = {
    indexDetalle: function(req, res, next) {
        return res.render('detalleUsuario', {
          posts: dataPost.list,
          usuario: dataUser.list
          });
    },
    indexEditar: function(req, res, next) {
        return res.render('editarPerfil', {  });
      },
      indexMiPerfil: function(req, res, next) {
        return res.render('miPerfil', {
          posts: dataPost.list,
          usuario: dataUser.list
          });
      },
      login: function(req,res){
        if(req.session.user == undefined){
            res.render('login')
        } else {
            res.redirect("/")
        }
      },
      processLogin: function(req,res){

        let errors = {}

        if(req.body.email == ""){
            errors.message = "El campo de email no puede estar vacio";
            res.locals.error = errors;
            res.render("login");
        } else {

            db.Usuario.findOne({
                where : {
                    email: req.body.email
                }
            })
            .then(user => {
                if(user != undefined){
                    let passwordCorrecta = bcrypt.compareSync(req.body.password, user.password)
                    if(passwordCorrecta == true){
                        req.session.user = user.email
                        if(req.body.recordame){
                            res.cookie("usuarioId", user.id, {maxAge: 1000 * 60 * 30})
                        }
                        res.redirect("/")
                    }else {
                        res.send("Credenciales invalidas")
                    }
    
                }
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
        }

    },
      indexRegistracion: function(req, res, next) {
        return res.render('registracion', {  });
      },
    findAll : function(req, res){
        usuario.findAll()
        .then(data =>{
            return res.send(data)
        })
        .catch(error =>{
            return res.send(error)
        })
    },
    detail : function(req, res){
        usuario.findByPk(req.params.id)
        .then(usuario =>{
            return res.send(usuario)
        })
        .catch(error =>{
            return res.send(error)
        })
    },
    register: function(req, res){
      let passwordEncryptada = bcrypt.hashSync(req.body.password, 10)
      let date_ob = new Date()
      db.Usuario.create({
        nombre_usuario: req.body.name,
        email: req.body.email,
        contrasenia: passwordEncryptada,
        foto: req.file.filename,
        fecha: date_ob,
        numerico: 1,
      })
      .then(user =>{
        res.redirect('/')
      })
      .catch(err=>{
        console.log(err);
        res.send(err)
      })
      
    },
    search: function(req, res){
        let search = req.query.result
        usuario.findAll({
            where: [{'nombre_usuario': {[op.like]: `%${search}%`}}]
        })
        .then(usuario => {
            return res.send(usuario)
        })
        .catch(error =>{
            return res.send(error)
        })
    }
}
module.exports = userController