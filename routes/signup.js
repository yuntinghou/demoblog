/**
 * Created by HYT on 11/4/2017.
 */
var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET SignUp page
router.get('/', checkNotLogin, function(req, res, next) {
    return res.send(req.flash());
});

// POST Singup request
router.post('/', checkNotLogin, function(req, res, next) {
    return res.send(req.flash());
});

module.exports = router;
