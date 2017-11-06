/**
 * Created by HYT on 11/4/2017.
 */
var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

//GET /signout
router.get('/', checkLogin, function(req, res, next) {
    req.session.user = null;
    req.flash('success', 'Singed Out.');
    return res.redirect('/posts');
});

module.exports = router;
