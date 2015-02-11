var checkAuth = require('../../middleware/checkAuth');

module.exports = function(app) {
    app.post('/api/create', checkAuth, require('./lib/create').post);
    app.post('/api/edit-book', checkAuth, require('./lib/edit-book').post);
};