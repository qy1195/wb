var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Item.all().then(function(item) {
    res.json(item);
  });
});
router.get('/:itemId', function(req, res, next) {
  db.Item.all({where:{itemId:1}}).then(function(item) {
    res.json(item);
  });
});

module.exports = router;
