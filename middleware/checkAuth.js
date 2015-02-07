module.exports = function(req, res, next) {
    if(!req.user){
        return res.send({
            message: "Permission deny! You are not authorized!"
        })
    }

    next();
};

module.exports.notAuth = function(req, res, next){
    if(req.user){
        return res.send({
            message: "Permission deny! You are authorized!"
        })
    }

    next();
};

