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
    var User = require('./user').User;
    var async = require('../node_modules/async');

    var book = new Book({
        name: name,
        author: author,
        path: path,
        img: img,
        info: info
    });

    async.waterfall([
        function(callback){
            book.save(function(err) {
                if (err) callback(err);
                callback(null,book);
            });
        },
        function(book,callback){
            User.findOne({ mail: author},function (err,user){
                if (err) callback(err);
                callback(null, book, user);
            });
        },
        function(book,user,callback){
            var newUserBooks = user.books.push(book.id);
            user.save(function(err){
                    if (err) callback(err);
                    callback(null, book);
            });
        }
    ], callback);
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