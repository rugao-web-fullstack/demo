var http = require('http');
var qs = require('querystring');
var fs = require('fs');
var path = require('path');
//create a server object:
http.createServer(function (req, res) {
  var splitor;
  function extract(subHeaders, name, body) {
    req.files = {};
    req.body = {};
    var filenames = subHeaders[1].split("; ");
    for(var j = 0; j < filenames.length; j++) {
      if (filenames[j].indexOf(name) !== -1) {
        var filename = filenames[j].split("=");
        if (name === 'filename') {
          req.files[filename[1]] = body;          
        } else {
          req.body[filename[1]] = body;
        }
        break;
      }
    }
  }
  if (req.method === "POST") {
    var data = []; var length = 0;
    req.on('data', function (chunk) {
      // 接收数据
      length += chunk.length;
      data.push(chunk);
    });
    req.on('end', function () {
      // 拼接数据
      data = Buffer.concat(data, length);
      // 分析数据
      var contentType = req.headers['content-type'];
      console.log(req.headers);
      if (contentType.indexOf('multipart/form-data;') !== -1) {
        // 有上传文件内容
        res.write("You've post files\n");
        var splitors = contentType.split("; ");
        console.log(splitors);
        for (var i = 0; i < splitors.length; i++) {
          console.log("inside for");
          var temp = splitors[i];
          console.log(temp);
          if (!temp) {
            continue;
          }
          if (temp.indexOf("boundary=") !== -1) {
            splitor = temp.split("=")[1];
            break;
          }
        }
        console.log("splitor = " + splitor);
      }

      // req.body = String(data);
      // var parts = String(data).split(splitor);
      var parts = String(data).split("--" + splitor);
      console.log(parts);
      // 内容头与内容本身切分
      for (var i = 0; i < parts.length; i++) {
        // 注意是二个
        // var contents = parts[i].split("\r\n\r\n");
        let position = parts[i].indexOf("\r\n\r\n");
        let header = parts[i].substr(0, position + 1)
        let body = parts[i].substr(position + 4);
        body = body.replace(/\r\n$/, '');
        body = body.replace(/^\r\n/, '');
        console.log("---header---");
        console.log(header);
        console.log("---content---");
        console.log(body);
        var headers = header.split("\r\n");
        for (var j = 0; j < headers.length; j++) {
          var subHead = headers[j];
          var subHeaders = subHead.split(": ");
          if (subHeaders[0] === 'Content-Disposition') {
            if (subHeaders[1].indexOf('filename') !== -1) {
              console.log("save to file");
              extract(subHeaders, 'filename', body);
              console.log(req.files);
              // save to file
            } else {
              console.log("process form");
              extract(subHeaders, 'name', body);
              console.log(req.body);
              
              // process form
            }
          }
        }
      }
      res.write(String(data));
      res.end();
    });
  }
}).listen(8080); //the server object listens on port 8080
