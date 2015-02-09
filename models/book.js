var mongoose = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    info: {
        type: String
    },
    img: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    path: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
});

schema.statics.create = function(name, author, path, img, info, callback) {
    var Book = this;

    var book = new Book({
        name: name,
        author: author,
        path: path,
        img: img,
        info: info
    });

    book.save(function(err) {
        if (err) return callback(err);
        callback(null, book);
    });
};

schema.statics.edit =  function(req, callback) {
    if(!req.user) return callback(new AuthError("User is not Authorized"));
    if(req.user != req.body.author) return callback(new AuthError("Only author can edit"));

    var editBook = req.body;
    var book = Book.findById(req.body.id, function(err, doc){
        for (var k in editBook)
            doc[k] = editBook[k];
        doc.save(function(err) {
            if (err) return callback(err);
                callback(null, user);
        });
    });
};

exports.Book = mongoose.model('Book', schema);