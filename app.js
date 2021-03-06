var express = require('express');
var expressSession = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(logger('dev'));

// Use the public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// app.use(expressSession({
//   secret: 'SECRET',
//   cookie: { maxAge: 2628000000 },
//   resave: true,
//   saveUninitialized: true,
// //   store: new mongoStore({
// //     mongooseConnection: mongoose.connection
// //   })
// }));

app.use('/', index);
app.use('/users', users);

require('./server/routes/routes')(app);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;