"use strict";

/* global __dirname */
/* 
    Following code runs on node environment
    We use require to load necesary modules into out current file 
    We Use exports to make required module or variable available to other modules
*/

// load express module
var express = require('express');
const path = require('path');
const webpack = require('webpack');
//var mongoose = require('mongoose');

const config = require('./webpack.config.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
// bikeapp contains all the methods of express module
var bikeapp = express();
/*jslint nomen: true*/
bikeapp.use(middleware);
bikeapp.use(webpackHotMiddleware(compiler));

bikeapp.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });

bikeapp.use(express.static(__dirname));
/*jslint nomen: false*/
bikeapp.locals.TIMEOUT = 5000;
bikeapp.locals.PORT = 3000;


bikeapp.use(webpackHotMiddleware(compiler));
// db connection to check
//mongoose.connect('mongodb://localhost/test');

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
  // if (err) // ...
  // console.log('meow');
// });


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
    res.sendFile(__dirname + '/build/index.html'); // path must be absolute
    /*jslint nomen: false*/
});

// create a server on port 3000
bikeapp.listen(bikeapp.locals.PORT, function () {
    console.log("app server is up and running on port", bikeapp.locals.PORT);
});
/*jslint unparam: false*/



