var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

// GET /posts The articles from all the users
// eg: GET /posts?author=xxx
router.get('/', function(req, res, next) {
    res.send(req.flash());
});

// POST /posts Publish an article
router.post('/', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// GET /posts/create The page of edit
router.get('/create', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// GET /posts/:postId Single page of article
router.get('/:postId', function(req, res, next) {
    res.send(req.flash());
});

// GET /posts/:postId/edit Update an article
router.get('/:postId/edit', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// POST /posts/:postId/edit Upload an article
router.post('/:postId/edit', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// GET /posts/:postId/remove Remove an article
router.get('/:postId/remove', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// GET /posts/:postId/comment Create a comment
router.get('/:postId/comment', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// POST /posts/:postId/comment Post a comment
router.post('/:postId/comment', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

// GET /posts/:postId/comment/:commentId/remove remove a comment
router.get('/:postId/comment/:commentId/remove', checkLogin, function(req, res, next){
    res.send(req.flash());
});

module.exports = router;