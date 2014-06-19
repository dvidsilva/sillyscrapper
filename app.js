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
	res.json({url: req.query.url });
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
