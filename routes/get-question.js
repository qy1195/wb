var db = require('../models');

module.exports = function(req, res, next) {
  db.Item.findOne({
    where: {
      id: req.params.questionId
    }
  }).then(function(item) {
    res.json(item);
    console.log(111);
    console.log(req.params.questionId);
  });

};
// { where: { 'itemId': 1} }
