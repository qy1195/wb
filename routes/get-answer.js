var db = require('../models');

module.exports = function(req, res, next) {
  db.Answer.findOne({
    where: {
      id: req.params.answerId
    }
  }).then(function(item) {
    res.json(item);
  });

};
// { where: { 'itemId': 1} }
