var express = require('express'),
    gateway     = express(),
    path    = require('path');
	
	/*View Engine*/
	gateway.set('views', __dirname + './views');
	gateway.set('view engine', 'ejs');
	
	/*To define all css and js content location*/ 
	gateway.use(express.static(path.resolve('public')));
 	
	var server = gateway.listen(3000, function () {
		  var host = server.address().address;
		  var port = server.address().port;
		  console.log('Example app listening at http://%s:%s', host, port);
	});

module.exports = gateway;