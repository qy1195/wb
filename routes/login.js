var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
  // router.post('/users', function (req, res) {
    var username=db.User.username;
    console.log(users);
  //   db.User
  //   .findOne({ where: { username: username, password: password } })
  //   .then(function(err,doc) {
  //     if(err){
  //       res.send(500);
  //       console.log(err);
  //     }
  //     else if (!doc) {
  //       res.session.error= '用户名不存在';
  //       res.send(404);
  //     }
  //     else {
  //       if(req.body.username !=doc.password){
  //         req.session.error= "密码错误";
  //         res.send(404);
  //       }
  //       else {
  //         req.session.user=doc;
  //         res.send(200);
  //       }
  //     }
  //       res.redirect('/');
  //   })
  // })
});

module.exports = router;

// Project.findOne({ where: {title: 'aProject'} }).then(function(project) {
//   // project will be the first entry of the Projects table with the title 'aProject' || null
// })


//
// router.post('/login', function(req, res, next) {
//   db.User.findAll({where: {username:req.body.username,password:req.body.password} })
//     .then(function(user){
//       if (_.isEmpty(user)) {
//         console.log(user);
//         req.session.user = user;
//         res.send(200);
//       } else {
//         req.session.error = "用户名或密码不正确";
//         res.send( 404 )
//       }
//
//     }, function(err) {
//       throw new Error(err)
//     })
//
//
// });
