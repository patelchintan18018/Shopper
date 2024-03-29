const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){

    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    try {
        
        //here in decode , will get data object that we are passing during creation of token
        const decode = jwt.verify(token, "secret-ecom");
        req.user = decode.user;

    } catch (error) {
        res.status(401).json({ success: false, message: "token is not valid" })
    }
}