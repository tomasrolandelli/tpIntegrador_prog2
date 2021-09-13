const resultadoBusquedaController = {
    index: function(req, res, next) {
      let result = req.query.result;
        res.render('resultadoBusqueda', {
          busqueda:result

         });
      }
}

module.exports = resultadoBusquedaController