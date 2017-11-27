var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
  var parsed = url.parse(req.url);
  console.log(parsed);
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello，你请求了地址：!' + req.url + '\n' ); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
