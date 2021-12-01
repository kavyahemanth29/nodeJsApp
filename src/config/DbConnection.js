var configValues = require('./config.json');
var mongoose = require('mongoose');

module.exports = {
    getDbStrings : function()
    {
        return 'mongodb+srv://'+configValues.uname+':'+configValues.pwd+'@cluster0.poopg.mongodb.net/nodetodosample?retryWrites=true&w=majority';
    }
}