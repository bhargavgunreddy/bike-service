/* 
	Following code runs on node environment
	We use require to load necesary modules into out current file 
	We Use exports to make required module or variable available to other modules

*/

// load express module
var express = require('express');

// bikeapp contains all the methods of express module
bikeapp = express();
bikeapp.use(express.static(__dirname));

bikeapp.get('/', function(req, res, next) {
	console.log("redirect to landing page -->");
        //next();
		res.send(' Use /home to redirect to landing page'); // path must be absolute
    });


// bikeapp.get('/home', function(req, res) {
	// console.log("home page -->");
        // res.sendFile(__dirname + '/index.html'); // path must be absolute
    // });

// create a server on port 3000
bikeapp.listen(3000);


