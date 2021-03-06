var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

//Mongoose connectivity goes here
// import mongoose package to app.js
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/foodtruck', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Mongoose connection string
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db connected.');
});


// Require for every page created
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var trucklistRouter = require('./routes/trucklist');
var mapRouter = require('./routes/googlemap');
var registertruck = require('./routes/registertruck');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// USE the path for var created with require
app.use('/', indexRouter);
app.use('/users', usersRouter);
//to use the trucklist.js file when requested.
app.use('/trucklist', trucklistRouter);
app.use('/location', mapRouter);
app.use('/registertruck', registertruck);





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
