"use strict";

/* global __dirname */
/* 
    Following code runs on node environment
    We use require to load necesary modules into out current file 
    We Use exports to make required module or variable available to other modules
*/

// load express module
var express = require('express');

// bikeapp contains all the methods of express module
var bikeapp = express();
/*jslint nomen: true*/
bikeapp.use("/", express.static(__dirname));
/*jslint nomen: false*/
bikeapp.locals.TIMEOUT = 5000;
bikeapp.locals.PORT = 3000;

/*jslint unparam: true*/
bikeapp.get('/', function (req, res, next) {
    console.log("redirect to landing page -->");
    //res.send("Use /home to redirect to landing page or wait 5 sec to redirect");
    setTimeout(function () {
        next();
    }, bikeapp.locals.TIMEOUT);
});



bikeapp.get('/*', function (req, res) {
    /*jslint nomen: true*/
    console.log("home page -->", __dirname);
    res.sendFile(__dirname + '/landing.html'); // path must be absolute
    /*jslint nomen: false*/
});

// create a server on port 3000
bikeapp.listen(bikeapp.locals.PORT, function () {
    console.log("app server is up and running on port", bikeapp.locals.PORT);
});
/*jslint unparam: false*/



/* test.js */

console.log("Just to check concatenation");