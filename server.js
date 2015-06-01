var server = require('./lib/api/gateway');

var routes ={};
 
 	routes['daisy'] = require('./modules/daisy/daisy');
 	routes['luigi'] = require('./modules/luigi/luigi');
console.log("Starting server");
 

/*var _  = require("underscore");
var def  = require("./config/default");
var router = require('./routes');
var daisy = require('./modules/daisy/app');*/

/*
server.('/', function(req, res, next){
	res.send(200);
});*/


server.get('/', function (req, res) {
    res.sendStatus(200);
});
module.exports = server;

