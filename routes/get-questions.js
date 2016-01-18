var db = require('../models');

module.exports = function(req, res, next) {
  db.Item.all().then(function(item) {
    res.json(item);
  });

};
// { where: { 'itemId': 1} }
