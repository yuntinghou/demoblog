/**
 * Created by HYT on 11/4/2017.
 */
var express = require('express');
var router = express.Router();
var checkNotLogin = require('../middlewares/check').checkNotLogin;
var sha1 = require('sha1');
var UserModel = require('../models/users');


// GET /signin page
router.get('/', checkNotLogin, function(req, res, next) {
    res.render('signin');
});

// POST /signin post
router.post('/', checkNotLogin, function(req, res, next) {
    var name = req.fields.name;
    var password = req.fields.password;
    UserModel.getUserName(name)
        .then(function(user) {
            if (!user) {
                req.flash('error', 'User not exist.');
                return res.redirect('back');
            }
            if (sha1(password) !== user.password) {
                req.flash('error', 'Username or password unmatched.');
                return res.redirect('back');
            }
            req.flash('success', 'Signed In.');
            delete user.password;
            req.session.user = user;
            res.redirect('/posts');
        })
        .catch(next);
});

module.exports = router;

module.exports = router;