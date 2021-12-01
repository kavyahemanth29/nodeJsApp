var mongoose = require('mongoose');
var dbConfig = require('../config/DbConnection');
mongoose.connect(dbConfig.getDbStrings());
var Schema = mongoose.Schema;
var addressSchema = new Schema({
    street: String,
    area: String,
    district: String,
    state: String,
    pin: Number
});

module.exports = addressSchema;