var checkAuth = require('../../middleware/checkAuth');

module.exports = function(app) {
    app.post('/api/sign-up', checkAuth.notAuth,require('./lib/sign-up').post);
    app.post('/api/sign-in', checkAuth.notAuth, require('./lib/sign-in').post);

    app.get('/api/logout', checkAuth, require('./lib/logout').get);
    app.get('/api/status', require('./lib/status').get);
}