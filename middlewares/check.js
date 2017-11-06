module.exports = {
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', 'Not logged in');
            return res.redirect('/signin');
        }
        next();
    },
    checkNotLogin: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', 'Logged in');
            return res.redirect('back');
        }
        next();
    }
};