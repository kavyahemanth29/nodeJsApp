var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dbConfig = require('./config/DbConnection');
var UserController = require('./controller/UserController');
mongoose.connect(dbConfig.getDbStrings());
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view-engine', 'ejs');

app.listen(port);
UserController(app);

