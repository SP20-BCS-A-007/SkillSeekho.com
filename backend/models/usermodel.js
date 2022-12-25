const mongoose = require("mongoose")
var bcrypt = require("bcryptjs")
const Joi = require("joi")
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "user"
    }
});

userSchema.methods.generateHashedPassword = async function(){
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
}

function validateUser(data) {
    const schema = Joi.object({
        name: Joi.string().min(4).max(10).required(),
        email: Joi.string().email().min(4).max(15).required(),
        password: Joi.string().min(4).max(15).required(),
    });

    return schema.validate(data, {abortEarly: False})
}


function validateUserLogin(data) {
    const schema = Joi.object({
        email: Joi.string().email().min(4).max(15).required(),
        password: Joi.string().min(4).max(15).required(),
    });

    return schema.validate(data, {abortEarly: False})
}

const User = mongoose.model("User", userSchema)
module.exports = {
    User, validateUser, validateUserLogin
}
