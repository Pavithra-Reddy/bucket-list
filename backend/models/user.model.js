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
    firstName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;