var bodyParser = require('body-parser');
var User = require('../models/User');

module.exports = function(app)
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.get('/Users/search', function(req, res){
        
        User.find({firstname: { $regex: '.*' + req.query.name + '.*' }},function(err, results){
            if(err) throw err;
            res.send(results);
        });
    });

    app.get('/Users/:id', function(req, res){
        User.find({_id: req.param.id}, function(err, results){
            if(err) throw err;
            res.send(results);
        });
    });

    app.post('/user', function(req, res){
        var user = User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.Address
        });
        user.save(function(err, results){
            if(err) throw err;
            res.send('Success......');
        });
    });

    app.put('/user/:id', function(req, res){

        User.findByIdAndUpdate({_id: req.param.id}, {lastname: req.body.lastname, email: req.body.email, phone: req.body.phone}, function(err, result){
            if(err) throw err;
            res.send('Success......');
        });
    });

    app.post('/user', function(req, res){
        var user = User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.Address
        });
        user.save(function(err, result){
            if(err) throw err;
            res.send('Success......');
        });
    });
};