var express = require('express');
var router = express.Router();
var db = require('../models');
var _ = require('lodash');

// /user
router.get('/', function(req, res, next) {
  console.log(111);
  db.User.all().then(function(User) {
    console.log(User);
    res.render('users', {
      users: User,
      title: 'title forsigner'
    });
  });

});


// /user/register
router.get('/register', function(req, res, next) {
  res.render('register', {
    err: '',
    title: 'Express'
  });

});

// /user/register post
router.post('/register', function(req, res, next) {
  db.User.findAll({
      where: {
        username: req.body.username
      }
    })
    .then(function(user) {
      console.log(user);
      if (_.isEmpty(user)) {
        db.User
          .create({
            username: req.body.username,
            password: req.body.password
          })
          .then(function() {
            res.redirect('/user/login');
          })
      } else {
        res.render('register', {
          err: '用户名' + req.body.username + '已注册',
          title: 'rrerw'
        });
      }

    })
    .catch(function(err) {
      throw new Error(err)
    });

});

// /user/login GET
router.get('/login', function(req, res, next) {
  res.render('login', {
    err: '',
    title: 'Express'
  });
});

// /user/login
router.post('/login', function(req, res, next) {
  db.User.findAll({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
    .then(function(user) {
      if (_.isEmpty(user)) {
        res.render('login', {
          err: '您输入的帐号或密码有误',
          title: 'rrerw'
        });
        console.log(err);
      } else {
        res.cookie('username', req.body.username);
        res.cookie('userId', 232);
        console.log(112111);
        res.redirect('/home');
      }

    }),
    function(err) {
      throw new Error(err)
    };

});


// /user/my get
router.get('/my', function(req, res, next) {
  db.User.findAll().then(function(users) {
    res.render('my', {
      my: users,
      title: 'Express'
    });
  });
});

//  /user/my Post
router.post('/my', function(req, res, next) {
  db.User.update({
    username: req.body.username,
    password: req.body.password,
    information: req.body.information
  }, {
    'where': {
      'id': 4
    }
  }).then(function(user) {
    console.log(req.body.username);
    console.log(user);
    console.log(111);
    res.redirect('/home');
  });

});
//   增加数据
// var user = db.User.create({
//   'id':4,
//   'username':'hhhh',
//   'password':'12sd'
// })
//   删除数据
// var affectedRows =db.User.destroy({
//     'where': {'id': [2, 3, 4]}
// });
// var affectedRows =db.User.destroy({
//     'where': {'username': ['hhhh']}
// });
//   更新数据
// var affectedRows = db.User.update(
//     {username: 'hhhh',password:'1443'},
//     {
//         'where': {
//             'id': [5,6,7]
//         }
//     }
// );


// db.User.bulkCreate([{
//   subject: 'programming',
//   status: 'executing'
// }, {
//   subject: 'reading',
//   status: 'executing'
// }, {
//   subject: 'programming',
//   status: 'finished'
// }]).then(function() {
//   return db.user.destroy({
//     where: {
//       subject: 'programming'
//     },
//     truncate: true /* this will ignore where and truncate the table instead */
//   });
// }).then(function(affectedRows) {
//   // affectedRows will be 2
//   return db.user.findAll();
// }).then(function(users) {
//   console.log(users) // no programming, just reading :(
// })



module.exports = router;
/*router.get('/', function(req, res, next) {
  console.log(111);
  db.User.all().then(function (myUser) {
    // console.log(users);
    res.render('users', { user: myUser, title: 'title forsigner'});
  });

});

module.exports = router;*/
