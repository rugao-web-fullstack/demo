var http = require('http');
http.createServer(function (req, res) {
	console.log(req.headers);
  var cookie = req.headers['cookie'];
  console.log(cookie);
  res.writeHead(200, {
    'Set-Cookie': 'mycookie=test;',
    'Set-Cookie': 'ook=sososos;',
    'Content-Type': 'text/plain'
  });
  res.write('Hello World!');
  res.end();
}).listen(8080);
