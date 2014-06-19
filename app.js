// https://devcenter.heroku.com/articles/getting-started-with-nodejs#visit-your-application
var express = require('express');
var logfmt = require("logfmt");


var scrapper = require('./scrapper.js');


var app = express();




/* Error handling */
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Something broke!');
});

app.use(logfmt.requestLogger());

/* Routes */
app.get('/', function(req, res){
    res.json({text: 'Hello World'});
});

app.get('/visit', function(req, res){
    var url = req.query.url;
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    if(regexp.test(url) === false ){
        res.json({error: url + " is not a valid url"  });
    	return false;
    }
    
    scrapper.visit(url, function(result) {
    	res.json(result);
    });
    
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});

    
    
    
    
    function isUrl(s) {
        return 
    }