const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        minlength:3
    },
    FirstName:{
        type:String,
        trim:true
    },
    LastName:{
        type:String,
        trim:true
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;