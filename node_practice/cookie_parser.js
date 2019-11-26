var express = require('express');
var app = express();
var url = require('url');

cookie_parser = require("cookie-parser");

app.use(cookie_parser());

app.get('/login', function(req,res) {
	var querystring = url.parse(req.url,true).query;
	res.cookie('username',querystring.username, { expire : 360000 + Date.Now()}).send('cookie set'); //360000 in ms
	//OR re.cookie('username',querystring.username, {maxAge : 360000});
	//res.clearCookie('username'); to delete a cookie
	res.send('hello '+querystring.username);
});

app.get('*', function(req,res) {
	res.send("404 Page not found!!");
});
app.listen(8080);