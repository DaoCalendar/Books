var Book = require('../../../models/book').Book;

exports.post = function(req, res, next) {
    var author = req.body.author;
    var name = req.body.name;
    var path = req.body.path;
    var img = req.body.img;
    var info = req.body.info;

    Book.create(name,author,function (err, book) {
        var message = {
            "action":"book creating"
        };

        if(err){
            message.message = err.message;
            return res.send(message);
        };

        message['message'] = "ok";
        message['book'] = book;

        return res.send(message);
    });
}