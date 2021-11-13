const db = require('../database/models');
const op = db.Sequelize.Op;
const usuario = db.Usuario;
const post = db.Posteos;
const dataPost = require ('../data/posts')
const dataUser = require ('../data/usuario')
let bcrypt = require('bcryptjs')

//Detalle de usuario
const userController = {
    indexDetalle: function(req, res, next) {
        usuario.findByPk(req.params.id,{
            include: [
            {association: "posteo"},
            ]
            })
        .then(usuario =>{
            return res.render('detalleUsuario', {usuario: usuario} )
        })
        .catch(error =>{
            return res.send(error)
        })
    },

//Editar perfil
    indexEditar: function(req, res, next) {
        return res.render('editarPerfil', {  });
      },

//Mi perfil
      indexMiPerfil: function(req, res, next) {
        return res.render('miPerfil', {
          posts: dataPost.list,
          usuario: dataUser.list
          });
      },

//Login
      loginIndex: function(req,res){
        if(req.session.user == undefined){
            res.render('login')
        } else {
            res.redirect("/")
        }
      },

//Login
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
                    let passwordCorrecta = bcrypt.compareSync(req.body.password, user.contrasenia)
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

//Registracion
      indexRegistracion: function(req, res, next) {
        return res.render('registracion', {  });
      },

//FindAll de posteos
    findAll : function(req, res){
        usuario.findAll({
            include: [
            {association: "posteo"}
            ]
            })
        .then(data =>{
            return res.send(data)
        })
        .catch(error =>{
            return res.send(error)
        })
    },

//FindByPk de posteos
    detail : function(req, res){
        usuario.findByPk(req.params.id)
        .then(usuario =>{
            return res.send(usuario)
        })
        .catch(error =>{
            return res.send(error)
        })
    },

//Logout
    logout: function(req, res){

        req.session.destroy()
        res.clearCookie("usuarioId");

        res.redirect("/usuario/login")
    },

//Registracion
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
      
    }
}
module.exports = userController