var express = require('express');
var app = express();

app.get('/hello/:name/:surname', function(req,res) {       //http://localhost:8080/hello/dipal/modi
	res.send('Welcome '+req.params.name+" "+req.params.surname);
});

//pattern-matching routes
app.get('/hello/:id([1-9][0-9]{4})', function(req,res) {     //http://localhost:8080/hello/12345
	res.send('5 digit No. is :'+req.params.id);
});

//Other routes here
//Defined after all other routes
app.get('*', function(req,res) {
	res.send('Error 404 Page Not Found');
});

app.listen(8080);