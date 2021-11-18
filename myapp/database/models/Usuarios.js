module.exports = function(sequelize, dataTypes){

    let alias = "Usuario";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre_usuario:{
            type: dataTypes.STRING,
            allowNull: false
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false
        },
        contrasenia:{
            type: dataTypes.STRING,
            allowNull: false
        },
        foto:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.DATE,
        },
        numerico:{
            type: dataTypes.INTEGER,
        },
        fecha_de_nacimiento:{
            type: dataTypes.DATE,
        },
        update_at:{
            type: dataTypes.DATE
        }
    }
    
    let config = {
        timestamps:false,
        underscored:true,
        tableName: "usuarios"
    }


    const Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = function(models){
        Usuario.hasMany(models.Posteos, {
            as: "posteo",
            foreignKey: "userId"
        });
        Usuario.hasMany(models.Comentarios, {
            as: "comentariosU",
            foreignKey: "userId"
        })
    }
    
    return Usuario

    

}