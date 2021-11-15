module.exports = function(sequelize, dataTypes){

    let alias = "Comentarios";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        userId:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        postId:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        comentario:{
            type: dataTypes.STRING,
            allowNull: false
        },
        fecha:{
            type: dataTypes.DATE,
        },
    }
    
    let config = {
        timestamps:false,
        underscored:false,
        tableName: "comentarios"
    }

    const Comentario = sequelize.define(alias, cols, config)

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Posteos, {
            as: "posteos",
            foreignKey: "postId"
        });
        Comentario.belongsTo(models.Usuario, {
            as: "usuarioU",
            foreignKey: "userId"
        })
    }

    return Comentario

}