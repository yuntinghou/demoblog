/**
 * Created by HYT on 11/4/2017.
 */
var express = require('express');
var router = express.Router();
var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin page
router.get('/', checkNotLogin, function(req, res, next) {
    res.send(req.flash());
});

// POST /signin post
router.post('/', checkNotLogin, function(req, res, next) {
    res.send(req.flash());
});

module.exports = router;