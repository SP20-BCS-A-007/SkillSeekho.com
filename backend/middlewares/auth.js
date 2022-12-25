const jwt = require("jsonwebtoken");
const { User } = require("../models/usermodel");
async function auth(req, res, next){
  let token = req.header("x-auth-token");
  if(!token){
    return(
        res.send("Token Not Provided")
    )
  }

  try{
    let user = jwt.verify(token, "myprivatekey")
    req.user = await User.findById(user._id);
    if(!req.user){
        return(
            res.send("Inavlid Token: User donot exit")
        )
    }
  }catch(err){
    return(
        res.send("Invalid Token")
    )
  }
  next();
}
module.exports = auth;