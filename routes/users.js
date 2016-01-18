var db = require('../models');

module.exports = function(req, res, next) {
  db.Item.all().then(function(users) {
    res.json(users);
  });

};
