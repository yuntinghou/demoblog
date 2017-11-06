/**
 * Created by HYT on 11/5/2017.
 */
var Post = require('../lib/mongo').Post;
module.exports = {
    create: function (post) {
        return Post.create(post).exec();
    }
};