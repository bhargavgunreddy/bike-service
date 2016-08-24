/* 
	Following code runs on node environment
	We use require to load necesary modules into out current file 
	We Use exports to make required module or variable available to other modules

*/

// load express module
var express = require('express');

// bikeapp contains all the methods of express module
bikeapp = express();

// create a server on port 3000
bikeapp.listen(3000);

//bikeapp.use(__dirname)

