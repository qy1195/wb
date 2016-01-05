var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.render('hot', { title: 'Express' });
});

module.exports = router;*/
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(111);
//   var
// userName = req.query.UserName,
// userPwd = req.query.UserPwd,
// userName2 = req.param('UserName'),
// userPwd2 = req.param('UserPwd');
// console.log('req.query用户名:'+userName);
// console.log('req.query密码:'+userPwd);
// console.log('req.param用户名:'+userName2);
// console.log('req.param密码:'+userPwd2);
  db.Item.findAll({where: {type:2} }).then(function (items) {
    // console.log(items);
    res.render('hot', { hot: items, title: 'title forsigner'});
  });

});

module.exports = router;
