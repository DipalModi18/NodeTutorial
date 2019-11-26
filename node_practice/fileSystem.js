var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.appendFile('temp.txt', 'hello', function (err) {
  if (err) throw err;
  console.log('Updated!');
  res.end();
});
}).listen(8080);
