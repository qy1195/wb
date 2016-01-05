var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { hot: '32423424' });
});

module.exports = router;*/
var db = require('../models');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   // db.Question.findAll({ include: [ db.Answer ] }).then(function(q) {
//   //   console.log(JSON.stringify(q))
//   //   res.json(q);
//   // })
//
//   db.Question.findAll().then(function (questions) {
//     console.log(questions);
//     res.render('index', { questions: questions});
//   });
//
// });
router.get('/', function(req, res, next) {
  // db.Question.findAll({ include: [ db.Answer ] }).then(function(q) {
  //   console.log(JSON.stringify(q))
  //   res.json(q);
  // })

  db.Item.findAll().then(function (items) {
    console.log(items);
    res.render('index', { items: items});
  });
})
module.exports = router;
