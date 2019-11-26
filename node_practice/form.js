var express = require('express');
var app = express();
var fs = require('fs');
var url = require('url');
var body_parser = require('body-parser');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended : true}));

app.post('/login', function(req,res) {
	var str = req.body.name + " " + req.body.username + " " + req.body.password;
	fs.appendFile('users.txt', str, function(err)
	{
		if (err) throw err;
		console.log('Details saved');
	});
	//popup.alert(content:{'Data Saved Successfully!!'});
	res.sendFile(__dirname+'/index.html');
});

app.get('/login', function(req,res) {
	fs.readFile('users.txt', function(err,data) {
		console.log(data);
	});
	
	res.sendFile(__dirname+'/index.html');
});

app.get('/signup', function(req,res) {
	res.sendFile(__dirname+'/signup.html');
});

app.get('/profile', function(req,res) {
	res.sendFile(__dirname+'/profile.html');
});

app.listen(8080);
