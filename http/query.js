var http = require('http');
var url = require('url');
var qs = require('querystring');
var server = http.createServer((req, res) => {
  let params = qs.parse(url.parse(req.url).query);
  console.log(params);
  for(var k in params) {
	  res.write(" k = " + k + ", v = " + params[k] + "\n");
  }
  res.end("params is parsed\n");
});

server.listen(8080);
