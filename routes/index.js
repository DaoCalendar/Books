module.exports = function(app) {
    var user = require('./user')(app);
    var render = require('./render')(app);
};