const db = require('../database/models')


//FindAll de toda la info
const indexController = {
    index: function(req,res){
      db.Posteos.findAll({
        include: [
          {
            all: true,
            nested: true
        }
        ],
        order: [['fecha', 'DESC'],]
        })
      .then(posteos => {
        return res.render('index', {posteos: posteos})
      })
      .catch(error => {
        return res.send(error)
      })
  },
}
module.exports = indexController