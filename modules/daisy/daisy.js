var path = require('path');
var gateway = require(path.resolve('./lib/api/gateway'));
    


gateway.get('/daisy', function(req, res, next){
	res.send(403);
}); 

	