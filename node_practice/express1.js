var express = require('express');
var app = express();

var router = require('./routes.js');
var body_parser = require('./body_parser.js');

app.get('/hello.html', function(req,res) //http://localhost:8080/hello.html : app.get(route,callback_function)
{
	res.send("Hello World!");
});

app.use('/routes',router);

app.listen(8080);