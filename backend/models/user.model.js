const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        minlength:3
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:3
    },
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;