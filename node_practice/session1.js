var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({
	secret: "Shh, its a secret!",
	resave : true,
	saveUninitialized: true
	}));

app.get('/', function(req, res){
   if(req.session.username){
      req.session.username++;
      res.send("You visited this page " + req.session.username + " times");
   } else {
      req.session.username = 1;
      console.log('Session ID :'+req.sessionID);
      res.send("Welcome to this page for the first time!");
      //req.session.username = 'dipal';
   }
});

app.get('/add',function(req,res){
	//console.log(req.session.username);
let a = req.session.username;
console.log('Session ID :'+req.sessionID);
console.log(a);
res.send("tot pg views "+a);
});

app.listen(8080, () => {
	//console.log('Session ID :'+req.sessionID);
});