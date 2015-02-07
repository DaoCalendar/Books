var User = require('../../../models/user').User;

exports.post = function(req, res, next) {
    var mail = req.body.mail;
    var password = req.body.password;

    User.authorize(mail,password,function (err, user) {
        var message = {
            "action":"sign-in"
        };

        if(err){
            message.message = err.message;
            return res.send(message);
        }

        message['message'] = "ok";
        message['user'] = user;
        req.session.user = user._id;

        return res.send(message);
    });
}