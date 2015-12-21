var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(111);
  db.User.findAll().then(function (users) {
    // console.log(users);
    res.render('users', { users: users, title: 'title forsigner'});
  });
});

module.exports = router;
