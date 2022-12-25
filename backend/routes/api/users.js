const express = require("express")
const {User} = require("../../models/usermodel")
var bcrypt = require("bcryptjs")
const _ = require("lodash")
const jwt = require("jsonwebtoken"); 
const Router = express.Router();

Router.post("/SignUp", async(req, res)=>{
    let user = await User.findOne({email: req.body.email})
    if(user){
        return(
            res.send("User with this email already exists. Please choose another email.")
        )
    }
    user = new User(req.body);
    await user.generateHashedPassword();
    await user.save();
    return res.send(_.pick(user, ["name", "email"]));
    
})

Router.post("/login", async(req, res)=>{
    let user = await User.findOne({email: req.body.email})
    if(!user){
        return(
            res.send("User with this email is not registered. Please SignUp first.")
        )
    }
    let isValid = await bcrypt.compare(req.body.password, user.password)
    if(!isValid){
        return(
            res.send("Password is Incorrect.")
        )
    }else{
        let token = jwt.sign({_id: user._id, name: user.name}, "myprivatekey")
        return(
            res.send(token)
        )
    }

})

module.exports = Router;