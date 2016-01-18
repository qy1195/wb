module.exports = function(req, res) {
  var db = require('../models');
  db.Answer.destroy({
    where: {
      id:req.body.id
    }
  });
  console.log(2222);
  console.log(req.body);
  console.log(1111);
  res.json({
    answer: req.body.id
  });
};


// db.Answer.destroy({
//   where: {
//     article: req.body.article,
//     title: req.body.title,
//   }
// });
