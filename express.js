var express 	  = require('express');
var path 		    = require("path");
var server 		  = express();
var fileToLoad 	= '/dist/index.html';
var publicPath 	= '/';
var port 		    = 8081;

server.get(publicPath, function(req, res) {
  res.sendFile(path.join(__dirname + fileToLoad));
});

server.listen(port, function() {
  console.log('Express running on port ', port);
});
