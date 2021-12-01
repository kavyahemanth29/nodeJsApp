var mongoose = require('mongoose');
var dbConfig = require('../config/DbConnection');
var Address = require('./Address');
mongoose.connect(dbConfig.getDbStrings());
var Schema = mongoose.Schema;
var userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
    address: Address
});
var User = mongoose.model("Users", userSchema);
module.exports = User;