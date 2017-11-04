module.exports = {
    port: 7890,
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 259200000
    },
    mongodb: 'mongodb://localhost:27017/myblog'
};