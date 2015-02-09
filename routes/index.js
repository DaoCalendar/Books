module.exports = function(app) {
    var user = require('./user')(app);
    var book = require('./book')(app);
    var render = require('./render')(app);
};