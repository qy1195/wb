var db = require('../models');

module.exports = function(req, res, next) {
  db.Answer.all({
    where: {
      itemId: req.params.questionId
    }
  }).then(function(item) {
    res.json(item);
  });

};
// { where: { 'itemId': 1} }
