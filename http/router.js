var http = require('http');
var url = require('url');
var user = {
	login: function(req, res) {
		res.write('user login\n' ); //write a response to the client
		res.end(); //end the response
	},
	register: function(req, res) {
		res.write('user register\n' ); //write a response to the client
		res.end(); //end the response
	}
}

//create a server object:
http.createServer(function (req, res) {
	var parsed = url.parse(req.url);
	console.log(parsed);
	if (parsed.pathname === '/user/login') {
	}
	if (['/user/signin', '/user/login'].indexOf(parsed.pathname) !== -1) {
		return user.login(req, res);
	}

	if (/\/regex\/(.*)/.test(parsed.pathname)) {
		console.log(RegExp.$1);
		return user.register(req, res);
	}
			res.write('Hello，你请求了地址：!' + req.url + '\n' ); //write a response to the client
			res.end(); //end the response

}).listen(8080); //the server object listens on port 8080
