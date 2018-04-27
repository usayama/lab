var http = require('http');
var settings = require('./settings');
var fs = require('fs');
var file;

var server = http.createServer(
  function (request, response) {
    switch (request.url) {
      case '/':
        file = 'index.html';
        break;
      case '/about':
        file = 'about/index.html'
        break;
      default:
        file = '404/index.html'
        break;
    }
    fs.readFile(file, function(err, content) {
      if(err) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write(content);
        response.end();
      }
    });
  }
);

server.listen(settings.port); // port listen

console.log("3000番ポートでサーバをリスティニングしているよ");
