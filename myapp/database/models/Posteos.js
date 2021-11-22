module.exports = function(sequelize, dataTypes){

    let alias = "Posteos";

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
        foto:{
            type: dataTypes.STRING,
            allowNull: false
        },
        description:{
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.DATE,
        },
        update_at:{
            type: dataTypes.DATE
        }
    }
    
    let config = {
        timestamps:false,
        underscored:false,
        tableName: "posteos"
    }

    const Posteo = sequelize.define(alias, cols, config)

    
    Posteo.associate = function(models){
        Posteo.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "userId"
        });
        Posteo.hasMany(models.Comentarios, {
            as: "comentarios",
            foreignKey: "postId"
        })
    }
    

    return Posteo

}