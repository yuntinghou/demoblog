/**
 * Created by HYT on 11/5/2017.
 */
var User = require('../lib/mongo').User;
module.exports = {
    create: function create(user) {
        return User.create(user).exec();
    },
    getUserName: function(name) {
        return User
            .findOne({name: name})
            .addCreatedAt()
            .exec();
    }
};