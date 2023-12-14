// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

// Create server
http.createServer(function (req, res) {
  // Get request URL
  var pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + " received.");

  // Read file from request URL
  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err);
      // HTTP status code: 404 : NOT FOUND
      // Content Type: text/plain
      res.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      // Page found
      // HTTP status code: 200 : OK
      // Content Type: text/plain
      res.writeHead(200, {'Content-Type': 'text/html'});

      // Write content of read file to response body
      res.write(data.toString());
    }
    // Send response body
    res.end();
  });
}).listen(8081);

console.log('Server running at http://