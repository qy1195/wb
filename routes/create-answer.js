module.exports = function(req, res) {
  var db = require('../models');
  db.Answer.create({
      article: req.body.article,
      title: req.body.title,
      itemId: req.body.itemId,
    })
  console.log(2222);
  console.log(req.body);
  console.log(1111);
  res.json({
    answer: req.body.article
  });
};
