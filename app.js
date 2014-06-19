var express = require('express');

var scrapper = require('./scrapper.js');


var app = express();






/* Error handling */
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Something broke!');
});


/* Routes */
app.get('/', function(req, res){
    res.json({text: 'Hello World'});
});

app.get('/visit', function(req, res){
	res.json({url: req.query.url });
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});