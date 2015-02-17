var Book = require('../../../models/book').Book;

exports.post = function(req, res, next) {
    Book.edit(req,function (err, book) {
        var message = {
            "action":"book edit"
        };

        if(err){
            message.message = err.message;
            return res.send(message);
        }

        message['message'] = "ok";
        message['book'] = book;

        return res.send(message);
    });
};