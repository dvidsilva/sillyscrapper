var answer = 42; // What is the question?
var scrapper = {};

var phantom = require('phantom');

scrapper.visit = function (url, cb) {

    phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.open(url, function(status){
            	console.log("opened " + url);
                page.evaluate(
                    function () { 
                        return {
                            cover: document.querySelector('.img-hero').src,
                            title: document.querySelector('meta[property="og:title"]').content,
                            description: document.querySelector('meta[property="og:description"]').content,
                            source: window.location.href.split( '/' )[0] + "//" + window.location.href.split( '/' )[2]
                        } ; 
                    }, 
                    function (result) {
                    	console.log('Page title is ' + result);
                    	cb({title: result});
                    	ph.exit();
                	}
                );
            });
        });
    }, {
        dnodeOpts: {
            weak: false
        }
    });
    
};


exports.visit = function (url, cb, err) {
    scrapper.visit(url, function (result) {
        cb(result);
    });
};