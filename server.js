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
var ObjectID = require('mongodb').ObjectID;

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

var connection = mongoose.connect('mongodb://localhost/test', function(err, data){
  // console.log("connected: ", err, data);
  if(err)
    console.log(err);
  else{
    console.log("connected: ", data);
  }
});

var serviceSchema = mongoose.Schema({ id: Number, regnum: Number, 
                                    underwarranty: Boolean, jobtype: String, part: String, desc: String });
var serviceJob = mongoose.model('Servicejob', serviceSchema );

bikeapp.use(webpackHotMiddleware(compiler));

bikeapp.get('/*', function response(req, res) {
  console.log("redirec to home from /");
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
//    res.end();
  });


bikeapp.get('/rest', function response(req, res){
  console.log("<-- rest call -->");
  serviceJob.find().exec(function(err, data) {
    console.log("-->",data);
    res.send(data);
  });
  
});
// db connection to check


 
 var serviceRecord = new serviceJob({ _id: new ObjectID(1), regnum: 8325, 
                                    underwarranty: true, jobtype: "service", part: "na", desc: "General Servicing" });
 serviceRecord.save(function (err, data) {
   if (err)
      console.log('error', err);
   else
      console.log('data', data);
 });


// create a server on port 3000
bikeapp.listen(bikeapp.locals.PORT, function () {
    console.log("app server is up and running on port", bikeapp.locals.PORT);
});
/*jslint unparam: false*/



