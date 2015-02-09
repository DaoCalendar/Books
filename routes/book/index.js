var checkAuth = require('../../middleware/checkAuth');

module.exports = function(app) {
    app.post('/api/create', checkAuth.notAuth,require('./lib/create').post);
    app.post('/api/edit-book', checkAuth.notAuth,require('./lib/edit-book').post);
};