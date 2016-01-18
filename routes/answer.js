var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { hot: '32423424' });
});

module.exports = router;*/
var db = require('../models');

/* GET users listing. */
// router.get('/:questionId', function(req, res, next) {
//   console.log( req.params.questionId);
//   db.Answer.findAll({where: {questionId: req.params.questionId}}).then(function (answers) {
//     res.render('answer', { answers: answers});
//     // res.json(answers);
//   });
//
// });
router.get('/:itemId', function(req, res, next) {
  console.log(req.params.itemId);
  db.Answer.findAll({
    where: {
      itemId: req.params.itemId
    }
  }).then(function(answers) {
    res.render('answer', {
      answers: answers
    });
    // res.json(answers);
  });

});

// router/answer/Post
router.post('/answer/1', function(req, res, next) {
  db.Answer.create({
    'id':4,
    'article': req.body.article
  }).then(function() {
    res.json({
      msg: 'success'
    });
  });
  console.log(req.body.article);
  console.log(111);
});

module.exports = router;
