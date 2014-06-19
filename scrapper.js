var answer = 42; // What is the question?
var scrapper = {};

var phantom = require('phantom');

phantom.create(function (ph) {
    ph.createPage(function (page) {
        page.open("http://www.google.com", function (status) {
            console.log("opened google? ", status);
            page.evaluate(function () { return document.title; }, function (result) {
                console.log('Page title is ' + result);
                ph.exit();
            });
        });
    });
});

scrapper.visit = function(url, cb, err){
	return cb(url);
}

exports.scrapper;