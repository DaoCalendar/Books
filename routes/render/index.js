module.exports = function(app) {
    app.get('/', require('./lib/frontpage').get);
}