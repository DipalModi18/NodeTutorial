/*var express = require('express');
var cookie_parser = require('cookie-parser');
var session = require('express-session');
var app = express();

app.use(cookie_parser());
app.use(session({secret: "Shh, its a secret!",
	resave: true,
    saveUninitialized: true}));

app.get('/', function(req,res) {
	if(!req.session.page_views)
	{
		res.session.page_views = 1;
		res.send("Welcome to this page for the first time!");
		
	}
	else
	{
		req.session.page_views++;
		res.send("You visited this page "+req.session.page_views+" times");
	}
});

app.listen(8080);*/

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.get('/add',function(req,res){
let a = req.session.page_views;
console.log(a);
res.send("tot pg views "+a);
});
app.listen(8080);
