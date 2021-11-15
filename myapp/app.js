var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var resultadoBusquedaRouter = require('./routes/resultadoBusqueda');
var usuariosRouter = require('./routes/usuarios');
var postRouter = require('./routes/post');
var comentarioRouter = require('./routes/comentario');

const session = require('express-session')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( { secret: "Si lees esto tenes que darnos un 10",
				resave: false,
				saveUninitialized: true }));


app.use(function(req,res,next){
  res.locals.user=null

  if(req.session.user != undefined){
    res.locals.user = req.session.user
  }else{

  }
  return next();
})

app.use('/', indexRouter);
app.use('/resultado-busqueda', resultadoBusquedaRouter);
app.use('/usuario', usuariosRouter);
app.use('/post', postRouter);
app.use('/comentario', comentarioRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
