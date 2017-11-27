var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.end("request method is " + req.method + "\n");
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
