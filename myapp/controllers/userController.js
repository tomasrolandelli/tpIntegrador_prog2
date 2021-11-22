const db = require('../database/models');
const op = db.Sequelize.Op;
const usuario = db.Usuario;
const post = db.Posteos;
let bcrypt = require('bcryptjs')

//Detalle de usuario
const userController = {
    indexDetalle: function(req, res, next) {
        usuario.findByPk(req.params.id, {
            include: [{all: true}],
            order: [['posteo', 'fecha', 'desc']]
          })    
        .then(usuario =>{
            return res.render('detalleUsuario', {usuario: usuario} )
        })
        .catch(error =>{ 
            console.log(error)
            return res.send(error)
        })
    },

//visualizar editar perfil ejs
indexEditar: function(req, res, next) {
    if(req.session.user != undefined){
        usuario.findByPk(req.params.id,)
        .then(usuario =>{
            return res.render('editarPerfil', {usuario: usuario});
        })  
    } else {
        res.redirect("/usuario/login")
    }
    },
//editar perfil
editar:function(req,res){
    let passwordEncryptada = bcrypt.hashSync(req.body.password, 10)
    let date_ob = new Date()
    usuario.update({
        nombre_usuario: req.body.nombre,
        email: req.body.email,
        contrasenia: passwordEncryptada,
        foto: req.file.filename,
        update_at: date_ob,
    }, 
    {where: {
            id: req.params.id
        }
    }).then(res.redirect('/usuario/mi-perfil'))
    .catch(error =>{
        console.log(
            error
        );
        res.send(error)
    })
},

//Mi perfil
      indexMiPerfil: function(req, res, next) {
        usuario.findByPk(req.session.user.id, {
            include: [{all: true}],
            order: [['posteo', 'fecha', 'desc']]
          })   
        .then(usuario =>{
            return res.render('miPerfil', {usuario: usuario} )
        })
        .catch(error =>{
            return res.send(error)
        })
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
        let errorscontrasenia = {}
        let errorNuevo = {}

        if(req.body.email == ""){
            errors.message = "El campo de email no puede estar vacio";
            res.locals.error = errors;
            res.render("login");
        }else if(req.body.password.length < 2) {
            errorscontrasenia.message = "La contraseña debe tener al menos 3 caracteres";
            res.locals.error = errorscontrasenia; 
            return res.render('login');
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
                        req.session.user = user
                        if(req.body.recordame){
                            res.cookie("usuarioId", user.id, {maxAge: 1000 * 60 * 30})
                        }
                        res.redirect("/")
                    }else {
                        errorNuevo.message = "Credenciales Invalidas"
                        res.locals.error = errorNuevo;
                        return res.render('login')
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

//buscador
    buscador:function(req, res){
        let search = req.query.usuario
        usuario.findAll({
            where: [{'nombre_usuario': {[op.like]: `%${search}%`}}],
            order: [['nombre_usuario', 'DESC'],],
            limit: 10,
            include: [
          {
            all: true,
            nested: true
        }
        ],
        })
        .then(usuarios => {
            //return res.send(usuarios)
            return res.render('resultadoUsuario', {
                usuarios: usuarios,
                resultado: search
            })
        })
        .catch(err =>{
            console.log(err);
        })
    },

//Registracion
    register: function(req, res){


        let errors = {};
        let errorscontrasenia = {}
        if(req.body.email == "") {
          errors.message = "El email no puede estar vacío.";
          res.locals.error = errors;
          return res.render('registracion'); 
        } else if(req.body.password.length < 2) {
            errorscontrasenia.message = "La contraseña debe tener al menos 3 caracteres";
            res.locals.error = errorscontrasenia; 
            return res.render('registracion');

        } else if(req.file == undefined){
        errors.message = "La foto de perfil no puede estar vacia";
          res.locals.error = errors;
          return res.render('registracion'); 
        }else{
            
      let passwordEncryptada = bcrypt.hashSync(req.body.password, 10)
      let date_ob = new Date()
      db.Usuario.create({
        nombre_usuario: req.body.name,
        email: req.body.email,
        contrasenia: passwordEncryptada,
        foto: req.file.filename,
        fecha: date_ob,
        numerico: 1,
        fecha_de_nacimiento: req.body.date,
        update_at: null
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
}
module.exports = userController