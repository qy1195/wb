var db = require('../models');

module.exports = function(req, res, next) {
  db.User.all().then(function(users) {
    res.json(users);
  });

};
