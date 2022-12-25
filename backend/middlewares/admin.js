let admin = (req, res, next)=>{
    if(req.user.role != "admin"){
        return(
            res.send("You are a not autherized person")
        )
    }
  next();
}

module.exports = admin;