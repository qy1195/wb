var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
    res.render('logout', {title: 'title forsigner'});
    res.clearCookie('username',{path:'req.body.username'});
    res.redirect("/");

});


module.exports = router;
