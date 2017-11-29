var http = require('http');
var uuid = require('uuid/v4');
var url = require('url');
var qs = require('querystring');
var session = {};
http.createServer(function (req, res) {
	var user;
	var sid;
	// 恢复
	var parsedUrl = url.parse(req.url);
	var query = qs.parse(parsedUrl.query);
	if (query.sid) {
		user = session[query.sid];
	}
	// 生成
	if (!user) {
		// 登录,产生用户信息
		var user = {
			id: uuid(),
			username: "user-" + new Date().getTime(),
			password: 'passord'
		};
		// 生成SID
		var sid = uuid();
		// 保存用户信息
		session[sid] = user;
		redirectUrl = "?sid=" + sid;
	}
	response.writeHead(301,
		{Location: redirectUrl}
	  );
	  response.end();
}).listen(8080);
