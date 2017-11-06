var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;
var PostModel = require('../models/posts');

// GET /posts The articles from all the users
// eg: GET /posts?author=xxx
router.get('/', function(req, res, next) {
    res.render('posts');
});

// POST /posts Publish an article
router.post('/', checkLogin, function(req, res, next) {
    var author = req.session.user._id;
    var title = req.fields.title;
    var content = req.fields.content;

    try {
        if (!title.length) {
            throw new Error('Please fill the title.');
        }
        if (!content.length) {
            throw new Error('Please fill the content.');
        }
    } catch (e) {
        req.flash('error', e.message);
        return res.redirect('back');
    }
    var post = {
        author: author,
        title: title,
        content: content,
        pv: 0
    };
    PostModel.create(post)
        .then(function(result) {
            post = result.ops[0];
            req.flash('success', 'Posted.');
            res.redirect('/posts/' + post._id);
        })
        .catch(next);
});

// GET /posts/create The page of edit
router.get('/create', checkLogin, function(req, res, next) {
    res.render('create');
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