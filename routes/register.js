var express = require('express');
var router = express.Router();
var db = require('../models');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });

})
// if(err){
//   res.send(500);
//   req.session.error =  '网络异常错误！';
//   console.log(err);
// }else if(doc){
//   req.session.error = '用户名已存在！';
//   res.send(500);
// }else{
//   User.create({                             // 创建一组user对象置入model
//     name: uname,
//     password: upwd
//   },function(err,doc){
//     if (err) {
//       res.send(500);
//       console.log(err);
//     } else {
//       req.session.error = '用户名创建成功！';
//       res.send(200);
//     }
//   });
// }
// router.post('/users', function (req, res) {
//   db.User.findOne({username:req.body.username})
//     .then(function(user){
//       if (_.isEmpty(user)) {
//
//       } else {
//         db.User
//         .create({ username: req.body.username, password: req.body.password })
//         .then(function() {
//             res.redirect('/');
//         })
//       }
//
//     }, function(err) {
//       throw new Error(err)
//     })
// })

module.exports = router;
