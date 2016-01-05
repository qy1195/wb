var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(111);
  db.Item.findAll({where: {type:0 } }).then(function (items) {
    // console.log(hot);
    res.render('home', {home: items, title: 'title forsigner'});
  });

});

module.exports = router;
/*var express = require('express');
var router = express.Router();*/

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.render('comment', { title: 'Express' });
});

module.exports = router;*/
