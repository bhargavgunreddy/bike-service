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
var Promise = require('mpromise');
var bodyParser = require('body-parser');

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

// Define schema and models
var serviceSchema = mongoose.Schema({ id: Number, regnum: Number, 
                                    underwarranty: Boolean, jobtype: String, part: String, desc: String });
var serviceJob = mongoose.model('Servicejob', serviceSchema );

var userSchema = mongoose.Schema({ id: Number, name: String, password: String, role: String });
var userRecord = mongoose.model('user', userSchema );

bikeapp.use(webpackHotMiddleware(compiler));

var userRouter = express.Router();

// Define routes to be used by app
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
  winston.log('info', 'request obj: ', req);
  winston.log('info', 'req params ', req.body.uname);


  
  var query = userRecord.find({ name: req.body.uname});
  var promise = query.exec();
  promise.onFulfill(function( fulfillResp){
    res.send(fulfillResp ? fulfillResp : null);
    res.end();
    console.log("on fulfill->", fulfillResp);
  });
  
  promise.onReject(function(rejectResp){
    console.log("on onReject->", rejectResp);
  });   
  
  promise.onResolve(function ( reason) {
      console.log("resolve ", reason);
  });
});
  //var promise = query.exec();
  /*promise.then(function(result){
    winston.log('info', 'promise result: ', result);
  });
});*/

// *** Bodyparser will parse the request contents and add it to body parameter
bikeapp.use(bodyParser.json()); // for parsing application/json
bikeapp.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


bikeapp.use(['/', '/app'], userRouter);
//bikeapp.use('/', router);
// db connection to check

// Check to insert a record into db
 var ObjectID = require('mongodb').ObjectID;
 var userRecordRef = new userRecord({ _id: new ObjectID(1), name: "Bhargav", role: "admin", password: "password"});
 
// create a server on port 3000
bikeapp.listen(bikeapp.locals.PORT, function () {
    winston.log('info', 'express server is up on PORT:', bikeapp.locals.PORT);
});
/*jslint unparam: false*/

//==================
//  UTILITY CODE
//==================

/*serviceJob.count().exec(function(err, count) {
    winston.log('info', 'mongo db count: ', count);
    res.send('count: '+ count);
  });*/
/*var promise = new Promise;
promise.fulfill(userRecordRef.save());*/
  var query = userRecordRef.save(function(err, product, numAffected){
    if(err)
      console.log("error ", err);
    else{
      console.log("saved ", product, " ", numAffected);
    }
  });
  