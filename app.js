var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');


var routes = require('./routes/index');
var user = require('./routes/user');
var hot = require('./routes/hot');
var comment = require('./routes/comment');
var pic = require('./routes/pic');
var answer = require('./routes/answer');
var logout = require('./routes/logout');
var home = require('./routes/home');

var users = require('./routes/users');
var answer = require('./routes/answer');
var createAnswer = require('./routes/create-answer');
var deleteAnswer = require('./routes/delete-answer');
var getQuestions = require('./routes/get-questions');
var getQuestion = require('./routes/get-question');
var getAnswers = require('./routes/get-answers');
var getAnswer = require('./routes/get-answer');

var db = require('./models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());

// 解决跨域问题
app.use(function(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type, App-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Expose-Headers': 'X-Pagination-Total-Count'
  });
  if (this.method == 'OPTIONS') {
    console.log(this.method);
    this.body = 'request is options';
  } else {
    next();
  }
});




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  var needLoginUrls = [
    '/pic',
    '/comment',
    '/home'
  ];

  if (needLoginUrls.indexOf(req.url) > -1) {
    if (!req.cookies.username) {
      res.redirect('/user/login');
      return;
    }
  }
  next()
});


app.use('/', routes);
app.use('/user', user);
app.use('/hot', hot);
app.use('/comment', comment);
app.use('/pic', pic);
app.use('/answer', answer);
app.use('/logout', logout);
app.use('/home', home);
app.use('/users', users);

app.get('/getUserById', function (req, res) {
    res.json([{ user: 'tobi' }])
});

app.post('/create-answer', createAnswer);
app.post('/delete-answer', deleteAnswer);

app.get('/answers', getQuestions);
app.get('/questions', getQuestions);
app.get('/questions/:questionId', getQuestion);
app.get('/questions/:questionId/answers', getAnswers);
app.get('/questions/:questionId/answers/:answerId', getAnswer);


// app.post('/user', function (req, res) {
//   console.log(req.body);
//   db.User
//   .create({ username: req.body.username, password: req.body.password })
//   .then(function() {
//       res.redirect('/');
//   })
// })


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
