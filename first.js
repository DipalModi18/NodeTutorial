var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {                   //http://localhost:8080/?year=2018&month=jan
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write(" Url is : "+req.url);
    var querystring = url.parse(req.url,true).query;
    res.write(" Year is : "+querystring.year);
    res.end();
}).listen(8080);