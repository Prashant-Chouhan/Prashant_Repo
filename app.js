var express = require('express');
var app = express();
var _  = require("underscore");
var def  = require("./config/default");
var router = require('./routes');

app.set('views', __dirname + './views');
app.set('view engine', 'ejs');

app.get('/daisy', router.invokeMe, router.daisy);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
