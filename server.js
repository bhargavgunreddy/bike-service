"use strict";

/* global __dirname */
/* 
    Following code runs on node environment
    We use require to load necesary modules into out current file 
    We Use exports to make required module or variable available to other modules
*/

// load express module and Router
var express = require('express');
var fs = require('fs');
// load utilities
const path = require('path');
const webpack = require('webpack');
var mongoose = require('mongoose');

// logger library 
var winston = require('winston');

// remove default settings and update it to custom settings
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
  level: 'info',
  prettyPrint: true,
  colorize: true,
  silent: false,
  timestamp: false
});

// Configure webpack as middleware
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
bikeapp.locals.TIMEOUT = 5000;
bikeapp.locals.PORT = 3000;

/*jslint nomen: true*/
bikeapp.use(middleware);
bikeapp.use(express.static(__dirname));
/*jslint nomen: false*/

var connection = mongoose.connect('mongodb://localhost/test', function(err, data){
  if(err)
    winston.log('error', 'Connection Error! Please try again');
  else{
    winston.log('info', 'connected:');
  }
});

var serviceSchema = mongoose.Schema({ id: Number, regnum: Number, 
                                    underwarranty: Boolean, jobtype: String, part: String, desc: String });
var serviceJob = mongoose.model('Servicejob', serviceSchema );
bikeapp.use(webpackHotMiddleware(compiler));

var userRouter = express.Router();

userRouter.get('/', function (req, res) {
  winston.log('info', 'default express route', req.baseUrl);
  if(req.query.type !== "REST_CALL"){
    winston.log('info', 'express route /');
      res.redirect('/app');
  }
  else
      res.redirect('/rest');
});

userRouter.get('/app', function(req, res) {
  winston.log('info', 'express route:  home page : /', req.baseUrl);
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
    res.end();
});

userRouter.post('/rest', function(req, res){
  winston.log('info', 'express route:  rest api : /rest');
  serviceJob.count().exec(function(err, count) {
    winston.log('info', 'mongo db count: ', count);
    res.send('count: '+ count);
  });
  
});

bikeapp.use(['/', '/app'], userRouter);
//bikeapp.use('/', router);
// db connection to check

// Check to insert a record into db
 var ObjectID = require('mongodb').ObjectID;
 var serviceRecord = new serviceJob({ _id: new ObjectID(1), regnum: 8325, 
                                    underwarranty: true, jobtype: "service", part: "na", desc: "General Servicing" });
 serviceRecord.save(function (err, data) {
   if (err)
      winston.log('error', 'error saving record: ', err);
   else
      winston.log('info', 'Record saved: ');
 });


// create a server on port 3000
bikeapp.listen(bikeapp.locals.PORT, function () {
    winston.log('info', 'express server is up on PORT:', bikeapp.locals.PORT);
});
/*jslint unparam: false*/



