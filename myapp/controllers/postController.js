const db = require('../database/models');
const post = db.Posteos

const postController = {
    findAll : function(req, res){
        post.findAll()
        .then(data =>{
            return res.send(data)
        })
        .catch(error =>{
            return res.send(error)
        })
    },
    detail : function(req, res){
        post.findByPk(req.params.id)
        .then(post =>{
            return res.send(post)
        })
        .catch(error =>{
            return res.send(error)
        })
    }
}
module.exports = postController