var createError = require('http-errors');
var express = require('express');
var path = require('path');
const {create} = require('express-handlebars')
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
var userSignUpRouter=require('./routes/signup')
var db=require('./config/connection')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const hbs = create({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: `hbs`,
  defaultLayout: 'layout',
  partialsDir: `${__dirname}/views/partials`
}); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.connect((err)=>{
  if (err) console.log("error occurd "+err);
  else console.log("database connected");
})

app.use('/admin', adminRouter);
app.use('/', usersRouter);
// app.use('/user-signup',userSignUpRouter);
app.use('/signUp', userSignUpRouter)

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
