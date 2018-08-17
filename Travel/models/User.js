const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
var user = new Schema({
    username:{type: String, unique: true, sparse: true},
    firstName:{type: String},
    middleName:{type: String},
    lastName:{type: String},
    email: {type: String, unique: true, sparse: true},
    phoneNumber: {type: String, index: true},
    
})


module.exports = mongoose.model('user',user);