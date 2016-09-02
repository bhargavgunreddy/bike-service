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
var mongoose = require('mongoose');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

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
//bikeapp.use(webpackHotMiddleware(compiler));


bikeapp.use(express.static(__dirname));
/*jslint nomen: false*/
bikeapp.locals.TIMEOUT = 5000;
bikeapp.locals.PORT = 3000;


bikeapp.use(webpackHotMiddleware(compiler));

bikeapp.get('*', function response(req, res) {
	console.log("redirec to home page");
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
    res.end();
  });

// db connection to check
mongoose.connect('mongodb://localhost/test', function(err, data){
	// console.log("connected: ", err, data);
	if(err)
		console.log(err);
	else{
		console.log("connected: ", data);
	}
});

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
  // if (err) // ...
  // console.log('meow');
// });


// create a server on port 3000
bikeapp.listen(bikeapp.locals.PORT, function () {
    console.log("app server is up and running on port", bikeapp.locals.PORT);
});
/*jslint unparam: false*/



